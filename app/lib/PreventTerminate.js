// const EventEmitter = require('events');

const CONFIG = require('./../../config.js')

module.exports = function () {
  let start = (new Date()).getTime()
  setInterval(() => {
    let interval = Math.floor(((new Date()).getTime() - start) / 60 / 1000)
    console.log([`[WAKE] `, `${interval}/${CONFIG.maxExcutionMinutes}`, (new Date().toISOString())].join('\t'))
  }, 30 * 1000)
}