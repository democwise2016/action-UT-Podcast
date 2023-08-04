const EventEmitter = require('events');
const emitter = new EventEmitter();


module.exports = function () {
  // Set a higher limit for this specific EventEmitter instance (e.g., 20 listeners)
  emitter.setMaxListeners(50);
}