const puppeteer = require('puppeteer')
const fetch = require('node-fetch')
const iconv = require('iconv-lite')
const cheerio = require('cheerio')

const NodeCacheSqlite = require('./NodeCacheSqlite.js')

let browser
let browserCloseTimer

let maxThreads = 10
let currentThreads = 0
// let maxExcutionMS = 60000

let sleep = function (ms = 500) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let reduceCurrentThreads = function () {
  currentThreads--
  if (currentThreads < 0) {
    currentThreads = 0
  }
}

const CONFIG = require('./../../config.js')

let startTimer = false
let maxExcutionMS = CONFIG.maxExcutionMinutes * 60 * 1000

async function GetHTML (url, options = {}) {
  if (!startTimer) {
    startTimer = (new Date()).getTime()
  }

  if ((new Date()).getTime() - startTimer > maxExcutionMS) {
    // throw Error ('GetHTML timeout: ' + url)
    console.error('GetHTML timeout: ' + url)
    return undefined
  }


  if ((url.endsWith('.txt') || url.endsWith('.csv')) && !options.crawler) {
    options.crawler = 'fetch'
  }

  let {
    cacheDay = 0.5, 
    encoding = null,
    crawler = 'puppeteer', // fetch or puppeteer or xml
    puppeteerArgs = ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=800,600'],
    puppeteerAgent,
    puppeteerWaitUntil = `networkidle2`,
    puppeteerWaitForSelector,
    puppeteerWaitForSelectorTimeout = 30000,
    retry = 0,
    timeout = 3 * 60 * 1000
  } = options

  if (retry > 10) {
    throw Error ('GetHTML failed: ' + url)
  }

  // if (crawler === 'puppeteer') {
  //   console.trace('GetHTML: ' + url)
  // }

  if (crawler === 'xml') {
    let fetchOptions = {...options}
    fetchOptions.crawler = 'fetch'
    let output = await GetHTML(url, fetchOptions);

    let $xml = cheerio.load(output, {
      xmlMode: true
    })

    return $xml
  }

  try {
    return await NodeCacheSqlite.get('GetHTML', url + '|' + JSON.stringify(options), async function () {
      let isTimeouted = false
      // setTimeout(() => {
      //   isTimeouted = true
      //   throw Error(['GetHTML timeout', url, crawler, (new Date().toISOString())].join(' '))
      // }, timeout)

      while (currentThreads > maxThreads) {
        console.log('GetHTML wait', url, crawler, (new Date().toISOString()))
        await sleep(30000)
      }
      currentThreads++

      console.log('GetHTML', url, crawler, (new Date().toISOString()))

      if (crawler === 'fetch') {
        const response = await fetch(url);
        if (isTimeouted) {
          return undefined
        }

        if (!encoding) {
          reduceCurrentThreads()
          return await response.text()
        }
        else {
          const buffer = await response.arrayBuffer()
          reduceCurrentThreads()
          return iconv.decode(Buffer.from(buffer), encoding)
        }
      }
      else {
        try {
          if (!browser) {
            browser = await puppeteer.launch({
              //headless: false,
              args: puppeteerArgs,
              ignoreHTTPSErrors: true,
              headless: "new"
            });
          }
            
          setTimeout(async () => {
            console.error(['GetHTML timeout, force close browser', url, crawler, (new Date().toISOString())].join(' '))
            isTimeouted = true
            if (browser && typeof(browser.close) === 'function') {
              await browser.close();
            }
            browser = false
          }, timeout)

          const page = await browser.newPage();
          
          if (puppeteerAgent) {
            await page.setUserAgent(puppeteerAgent);
          }
            
          await page.goto(url, {waitUntil: puppeteerWaitUntil});

          if (puppeteerWaitForSelector) {
            await page.waitForSelector(puppeteerWaitForSelector, {
              timeout: puppeteerWaitForSelectorTimeout
            })
          }

          let output = await page.content()
        
          clearTimeout(browserCloseTimer)
          browserCloseTimer = setTimeout(async () => {
            console.error(['GetHTML timeout 2, force close browser', url, crawler, (new Date().toISOString())].join(' '))
            isTimeouted = true
            if (browser && typeof(browser.close) === 'function') {
              await browser.close();
            }
            browser = null
          }, 100 * 1000)
          

          await sleep(1000)
          reduceCurrentThreads()

          if (isTimeouted) {
            return undefined
          }
          return output
        }
        catch (e) {
          console.error(e)

          await browser.close();
          browser = null
          await sleep(3000)

          retry++
          options.retry = retry
          console.log('Retry', options.retry, url)
          reduceCurrentThreads()

          if (isTimeouted) {
            return undefined
          }
          return await GetHTML(url, options)
        } 
      }
    }, parseInt(cacheDay * 1000 * 60 * 60 * 24, 10))
  }
  catch (e) {
    console.error(e)
    return undefined
  }
}

module.exports = GetHTML