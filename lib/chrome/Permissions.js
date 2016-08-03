var Event = require('../Event');
var sinon = require('sinon');
module.exports = Permissions;
/**
 * Use the <code>chrome.permissions</code> API to request <a href="#manifest">declared
 * optional permissions</a> at run time rather than install time, so users understand
 * why the permissions are needed and grant only those that are necessary.
 * @constructor
 * @param {object} chrome
 */
function Permissions(chrome) {
  this.chrome = chrome;
  
  
  /**
   * Gets the extension's current set of permissions.
   * 
   * @param {function} callback 
   */
  this.getAll = sinon.stub();
  
  /**
   * Checks if the extension has the specified permissions.
   * 
   * @param {undefined} permissions 
   * @param {function} callback 
   */
  this.contains = sinon.stub();
  
  /**
   * Requests access to the specified permissions. These permissions must be defined in
   * the optional_permissions field of the manifest. If there are any problems requesting
   * the permissions, $ref:runtime.lastError will be set.
   * 
   * @param {undefined} permissions 
   * @param {function} callback 
   */
  this.request = sinon.stub();
  
  /**
   * Removes access to the specified permissions. If there are any problems removing the
   * permissions, $ref:runtime.lastError will be set.
   * 
   * @param {undefined} permissions 
   * @param {function} callback 
   */
  this.remove = sinon.stub();
  
  
  /**
   * Fired when the extension acquires new permissions.
   */
  this.onAdded = new Event();
  
  /**
   * Fired when access to permissions has been removed from the extension.
   */
  this.onRemoved = new Event();
  
}
