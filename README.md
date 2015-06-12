# chrome-stub

Chrome API mocking library.

```bash
npm install chrome-stub
```

[![Build Status](https://travis-ci.org/gcochard/chrome-stub.svg?branch=master)](https://travis-ci.org/gcochard/chrome-stub)
[![Coverage Status](https://img.shields.io/coveralls/gcochard/chrome-stub.svg)](https://coveralls.io/r/gcochard/chrome-stub?branch=master)

# usage

In most cases you will want to set this as a global at the top of your test file, because chrome is a global in your extension code.

```js
chrome = require('chrome-stub')
```

# i18n

To use the I18n library, chrome-stub loads a default messages.json file that has only one string in it, 'test'
If you pass a string that does not exist, you will receive a blank string back.  

If you want to load a different messages.json file, for example the one you use in your chrome extension then use 
the method below in your test file.

```js
chrome.setMessagesPath(path)
```

# All other APIs

All chrome APIs have been stubbed with sinon stub. You can define your own application-specific behavior of the stubs by following the [sinon stub api](http://sinonjs.org/docs/#stubs). This allows you to define your behavior within your tests. For example:

```js
// inside test
chrome.tabs.query.yields([{
  id:0,index:0,windowId:0,highlighted:true,
  active:true,pinned:false,url:'https://example.com',title:'example.com - Home',
  favIconUrl:'https://example.com/favicon.ico',status:'complete',width:800,height:600
}]);

// do something that causes your code to call chrome.tabs.query, e.g.:
getFirstTab(function(tab){
  // ...
  // your code's callback is called with the value provided to yields()
});
```

-------------------

Originally forked from [sethmcl/chrome-mock](https://github.com/sethmcl/chrome-mock)
