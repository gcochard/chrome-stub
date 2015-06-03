var sinon = require('sinon');

module.exports = Event;

function Event() {
  this.listeners   = [];
  this.addListener = sinon.spy(this.addListener.bind(this));
}

/**
 * @property {array}
 */
Event.prototype.listeners = null;

/**
 * Add an event handler function
 * @param {function} fn
 */
Event.prototype.addListener = function (fn) {
  this.listeners.push(fn);
};

/**
 * Get whether this event has listeners
 * @returns {boolean}
 */
Event.prototype.hasListeners = function () {
  return this.listeners.length > 0;
};

/**
 * Removes the specified listener from the event
 * @param {function} fn
 */
Event.prototype.removeListener = function (fn) {
  for(var i = 0, ii = this.listeners.length; i < ii; i++){
    if(this.listeners[i] === fn){
      this.listeners.splice(i, 1);
      break;
    }
  }
};

/**
 * Trigger event
 * @param {...object} arg
 */
Event.prototype.trigger = function () {
  var args = arguments;

  this.listeners.forEach(function (fn) {
    fn.apply(null, args);
  });
};
