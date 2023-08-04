// const EventEmitter = require('events');

const CONFIG = require('./../../config.js')
const fs = require('fs')

function getUpdateTime () {
  return fs.readFileSync(`/tmp/GetHTML.txt`, `utf8`)
}

module.exports = function () {
  let start = (new Date()).getTime()
  let lastUpdateTime
  let sameTimeCounter = 0
  let maxSameTime = 4
  setInterval(() => {
    if (lastUpdateTime !== getUpdateTime()) {
      lastUpdateTime = getUpdateTime()
    }
    else {
      sameTimeCounter++

      if (sameTimeCounter >= maxSameTime) {
        console.log(`Process has been terminated because update is stop. ${(new Date().toISOString())}`);
        process.exit(0); // You can provide an exit code (non-zero) if needed.
      }
    }

    let interval = Math.floor(((new Date()).getTime() - start) / 60 / 1000)
    console.log([`[WAKE] `, `${interval}/${CONFIG.maxExcutionMinutes}`, (new Date().toISOString())].join('\t'))
  }, 30 * 1000)
}