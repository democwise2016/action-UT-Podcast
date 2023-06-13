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


async function GetHTML (url, options = {}) {

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

  return await NodeCacheSqlite.get('GetHTML', url + '|' + JSON.stringify(options), async function () {
    while (currentThreads > maxThreads) {
      console.log('GetHTML wait', url, crawler, (new Date().toISOString()))
      await sleep(30000)
    }
    currentThreads++

    console.log('GetHTML', url, crawler, (new Date().toISOString()))

    if (crawler === 'fetch') {
      const response = await fetch(url);

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
          if (browser) {
            await browser.close();
          }
          browser = null
        }, 100 * 1000)
        

        await sleep(1000)
        reduceCurrentThreads()
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
        return await GetHTML(url, options)
      } 
    }
  }, parseInt(cacheDay * 1000 * 60 * 60 * 24, 10))
}

module.exports = GetHTML