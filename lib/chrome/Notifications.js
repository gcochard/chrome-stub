var Event = require('../Event');
var sinon = require('sinon');
module.exports = Notifications;
/**
 * Use the <code>chrome.notifications</code> API to create rich notifications using
 * templates and show these notifications to users in the system tray.
 * @constructor
 * @param {object} chrome
 */
function Notifications(chrome) {
  this.chrome = chrome;
  
  
  /**
   * Creates and displays a notification.
   * 
   * @param {string} notificationId 
   * @param {[object Object]} options 
   * @param {function} callback 
   */
  this.create = sinon.stub();
  
  /**
   * Updates an existing notification.
   * 
   * @param {string} notificationId 
   * @param {[object Object]} options 
   * @param {function} callback 
   */
  this.update = sinon.stub();
  
  /**
   * Clears the specified notification.
   * 
   * @param {string} notificationId 
   * @param {function} callback 
   */
  this.clear = sinon.stub();
  
  /**
   * Retrieves all the notifications.
   * 
   * @param {function} callback 
   */
  this.getAll = sinon.stub();
  
  /**
   * Retrieves whether the user has enabled notifications from this app or extension.
   * 
   * @param {function} callback 
   */
  this.getPermissionLevel = sinon.stub();
  
  
  /**
   */
  this.onClosed = new Event();
  
  /**
   */
  this.onClicked = new Event();
  
  /**
   */
  this.onButonClicked = new Event();
  
  /**
   */
  this.onPermissionLevelChanged = new Event();
  
  /**
   */
  this.onShowSettings = new Event();
  
}

