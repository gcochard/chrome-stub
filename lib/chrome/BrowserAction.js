var Event = require('../Event');
var sinon = require('sinon');
module.exports = BrowserAction;
/**
 * Use browser actions to put icons in the main Google Chrome toolbar, to the right
 * of the address bar. In addition to its <a href='browserAction#icon'>icon</a>, a browser
 * action can also have a <a href='browserAction#tooltip'>tooltip</a>, a <a href='browserAction#badge'>badge</a>,
 * and a <a href='browserAction#popups'>popup</a>.
 * @constructor
 * @param {object} chrome
 */
function BrowserAction(chrome) {
  this.chrome = chrome;
  
  
  /**
   * Sets the title of the browser action. This shows up in the tooltip.
   * 
   * @param {object} details 
   */
  this.setTitle = sinon.stub();
  
  /**
   * Gets the title of the browser action.
   * 
   * @param {object} details 
   * @param {function} callback 
   */
  this.getTitle = sinon.stub();
  
  /**
   * Sets the icon for the browser action. The icon can be specified either as the path
   * to an image file or as the pixel data from a canvas element, or as dictionary of
   * either one of those. Either the <b>path</b> or the <b>imageData</b> property must
   * be specified.
   * 
   * @param {object} details 
   * @param {function} callback 
   */
  this.setIcon = sinon.stub();
  
  /**
   * Sets the html document to be opened as a popup when the user clicks on the browser
   * action's icon.
   * 
   * @param {object} details 
   */
  this.setPopup = sinon.stub();
  
  /**
   * Gets the html document set as the popup for this browser action.
   * 
   * @param {object} details 
   * @param {function} callback 
   */
  this.getPopup = sinon.stub();
  
  /**
   * Sets the badge text for the browser action. The badge is displayed on top of the
   * icon.
   * 
   * @param {object} details 
   */
  this.setBadgeText = sinon.stub();
  
  /**
   * Gets the badge text of the browser action. If no tab is specified, the non-tab-specific
   * badge text is returned.
   * 
   * @param {object} details 
   * @param {function} callback 
   */
  this.getBadgeText = sinon.stub();
  
  /**
   * Sets the background color for the badge.
   * 
   * @param {object} details 
   */
  this.setBadgeBackgroundColor = sinon.stub();
  
  /**
   * Gets the background color of the browser action.
   * 
   * @param {object} details 
   * @param {function} callback 
   */
  this.getBadgeBackgroundColor = sinon.stub();
  
  /**
   * Enables the browser action for a tab. By default, browser actions are enabled.
   * 
   * @param {integer} tabId The id of the tab for which you want to modify the browser action.
   */
  this.enable = sinon.stub();
  
  /**
   * Disables the browser action for a tab.
   * 
   * @param {integer} tabId The id of the tab for which you want to modify the browser action.
   */
  this.disable = sinon.stub();
  
  /**
   * Opens the extension popup window in the active window but does not grant tab pe
   * rmissions.
   * 
   * @param {function} callback 
   */
  this.openPopup = sinon.stub();
  
  
  /**
   * Fired when a browser action icon is clicked.  This event will not fire if the browser
   * action has a popup.
   */
  this.onClicked = new Event();
  
}

