// const EventEmitter = require('events');

module.exports = function () {
  setInterval(() => {
    console.log([`[WAKE] `, (new Date().toISOString())].join('\t'))
  }, 30 * 1000)
}