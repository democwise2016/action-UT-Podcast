// const EventEmitter = require('events');

const CONFIG = require('./../../config.js')
const fs = require('fs')

function getUpdateTime () {
  if (fs.existsSync(`/app/tmp/GetHTML.txt`)) {
    return fs.readFileSync(`/app/tmp/GetHTML.txt`, `utf8`)
  }
  return 0
}

const DOWNLOAD_LOCK_PATH = '/tmp/download.lock'

module.exports = function () {
  let start = (new Date()).getTime()
  let lastUpdateTime
  let sameTimeCounter = 0
  let maxSameTime = 4
  setInterval(() => {
    if (fs.existsSync(DOWNLOAD_LOCK_PATH)) {
      let interval = Math.floor(((new Date()).getTime() - start) / 60 / 1000)
      console.log([`[WAKE] DOWNLOADING`, `${interval}/${CONFIG.maxExcutionMinutes}`, sameTimeCounter, (new Date().toISOString())].join('\t'))
      return false
    }
    else if (lastUpdateTime !== getUpdateTime()) {
      lastUpdateTime = getUpdateTime()
      sameTimeCounter = 0
    }
    else {
      sameTimeCounter++

      if (sameTimeCounter >= maxSameTime) {
        console.log(`Process has been terminated because update is stopped. ${(new Date().toISOString())}`);
        process.exit(0); // You can provide an exit code (non-zero) if needed.
      }
    }

    let interval = Math.floor(((new Date()).getTime() - start) / 60 / 1000)
    console.log([`[WAKE] `, `${interval}/${CONFIG.maxExcutionMinutes}`, sameTimeCounter, (new Date().toISOString())].join('\t'))
  }, 30 * 1000)
}