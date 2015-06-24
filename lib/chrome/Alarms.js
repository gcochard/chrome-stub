var Event = require('../Event');
var sinon = require('sinon');

module.exports = Alarms;

/**
 * Use the <code>chrome.Alarms</code> API to schedule code to run periodically
 * or at a specified time in the future.
 * @constructor
 * @param {object} chrome
 */
function Alarms(chrome) {
  this.chrome = chrome;

  /**
   * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm
   * event is fired. If there is another alarm with the same name (or no name
   * if none is specified), it will be cancelled and replaced by this alarm.
   *
   * In order to reduce the load on the user's machine, Chrome limits alarms
   * to at most once every 1 minute but may delay them an arbitrary amount
   * more. That is, setting delayInMinutes or periodInMinutes to less than 1
   * will not be honored and will cause a warning. when can be set to less
   * than 1 minute after "now" without warning but won't actually cause the
   * alarm to fire for at least 1 minute.
   *
   * To help you debug your app or extension, when you've loaded it unpacked,
   * there's no limit to how often the alarm can fire.
   *
   * @param {string} name Optional name to identify this alarm. Defaults to the empty string.
   * @param {object} alarmInfo Describes when the alarm should fire. The initial time must be specified by e...
   */
  this.create = sinon.stub();

  /**
   * Retrieves details about the specified alarm.
   *
   * @param {string?} name The name of the alarm to get. Defaults to the empty string.
   * @param {function} callback Called with Alarm object.
   */
  this.get = sinon.stub();

  /**
   * Gets an array of all the alarms.
   *
   * @param {function} callback Called with an array of Alarm objects.
   */
  this.getAll = sinon.stub();

  /**
   * Clears the alarm with the given name.
   *
   * @param {string?} name The name of the alarm to clear. Defaults to the empty string.
   * @param {function} callback Called when removal is complete with boolean result.
   */
  this.clear = sinon.stub();

  /**
   * Clears all alarms.
   *
   * @param {function} callback Called when removal is complete with boolean result.
   */
  this.clearAll = sinon.stub();


  /**
   * onAlarm Event
   */
  this.onAlarm = new Event();

}
