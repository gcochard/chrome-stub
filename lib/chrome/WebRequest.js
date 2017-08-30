var Event = require('../Event');
var sinon = require('sinon');
module.exports = WebRequest;
/**
 * @constructor
 * @param {object} chrome
 */
function WebRequest(chrome) {
  this.chrome = chrome;
  
  
  /**
   * Needs to be called when the behavior of the webRequest handlers has changed to prevent
   * incorrect handling due to caching. This function call is expensive. Don't call it
   * often.
   * 
   * @param {function} callback 
   */
  this.handlerBehaviorChanged = sinon.stub();
  
  
  /**
   * Fired when a request is about to occur.
   */
  this.onBeforeRequest = new Event();
  
  /**
   * Fired before sending an HTTP request, once the request headers are available. This
   * may occur after a TCP connection is made to the server, but before any HTTP data
   * is sent. 
   */
  this.onBeforeSendHeaders = new Event();
  
  /**
   * Fired just before a request is going to be sent to the server (modifications of previous
   * onBeforeSendHeaders callbacks are visible by the time onSendHeaders is fired).
   */
  this.onSendHeaders = new Event();
  
  /**
   * Fired when HTTP response headers of a request have been received.
   */
  this.onHeadersReceived = new Event();
  
  /**
   * Fired when an authentication failure is received. The listener has three options:
   * it can provide authentication credentials, it can cancel the request and display
   * the error page, or it can take no action on the challenge. If bad user credentials
   * are provided, this may be called multiple times for the same request.
   */
  this.onAuthRequired = new Event();
  
  /**
   * Fired when the first byte of the response body is received. For HTTP requests, this
   * means that the status line and response headers are available.
   */
  this.onResponseStarted = new Event();
  
  /**
   * Fired when a server-initiated redirect is about to occur.
   */
  this.onBeforeRedirect = new Event();
  
  /**
   * Fired when a request is completed.
   */
  this.onCompleted = new Event();
  
  /**
   * Fired when an error occurs.
   */
  this.onErrorOccurred = new Event();
  
}

