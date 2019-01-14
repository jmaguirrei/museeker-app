parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"uD8j":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.log=e;var o=55,t=40;function e(e,c){var n="-".repeat(o-e.length);if(!c)return console.log("[SW] ".concat(n,"> ").concat(e));if("string"!=typeof c)return console.log("[SW] ".concat(n,"> ").concat(e," "),c);if(c.length<t)return console.log("[SW] ".concat(n,"> ").concat(e," "),c);var r=c.substr(c.length-t,1e3);return console.log("[SW] ".concat(n,"> ").concat(e," "),r)}
},{}],"9fg8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cacheFiles=void 0;var p={before:["./app.js","./index.html","../icons/favicon.ico","https://fonts.googleapis.com/css?family=Source+Sans+Pro"],after:["../icons/android-chrome-192x192.png","../icons/android-chrome-256x256.png","../icons/android-chrome-512x512.png","../icons/apple-touch-icon-57x57.png","../icons/apple-touch-icon-60x60.png","../icons/apple-touch-icon-72x72.png","../icons/apple-touch-icon-76x76.png","../icons/apple-touch-icon-114x114.png","../icons/apple-touch-icon-120x120.png","../icons/apple-touch-icon-144x144.png","../icons/apple-touch-icon-152x152.png","../icons/apple-touch-icon-180x180.png","../icons/favicon-32x32.png","../icons/favicon-16x16.png","../splash/iphone5_splash.png","../splash/iphone6_splash.png","../splash/iphoneplus_splash.png","../splash/iphonex_splash.png","../splash/iphonexr_splash.png","../splash/iphonexsmax_splash.png","../splash/ipad_splash.png","../splash/ipadpro1_splash.png","../splash/ipadpro3_splash.png","../splash/ipadpro2_splash.png"]};exports.cacheFiles=p;
},{}],"iLZu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onInstall=t;var e=require("./log"),l=require("./cacheFiles");function t(t){t.waitUntil(self.caches.open(self.cacheName).then(function(t){return(0,e.log)("Installed",t),t.addAll(l.cacheFiles.after),t.addAll(l.cacheFiles.before)}).then(function(){return self.skipWaiting()}).catch(function(l){(0,e.log)("Install: Error",l)}))}
},{"./log":"uD8j","./cacheFiles":"9fg8"}],"+NfH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onActivate=t;var e=require("./log");function t(t){t.waitUntil(self.caches.keys().then(function(t){return(0,e.log)("Activated"),Promise.all(t.filter(function(e){return e!==self.cacheName}).map(function(t){(0,e.log)("Removing cached files from ",t),self.caches.delete(t)}))}).then(function(){return(0,e.log)("Claiming clients"),self.clients.claim()}))}
},{"./log":"uD8j"}],"yIJx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRequestType=t;var e=["https://museeker.io","http://localhost"];function t(t){return t.startsWith(e[0])||t.startsWith(e[1])?t.indexOf("/api/")>=0?"api":t.indexOf("/base-")>=0?"base":t.indexOf("/icons/")>=0||t.indexOf("/splash/")>=0?"image":"page":"external"}
},{}],"D5es":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onFetch=n;var e,t=require("./log"),r=require("./getRequestType");function n(n){var u=n.request.url,s=(0,r.getRequestType)(u),c=["page","api"].includes(s);if((0,t.log)("RequestType",s),c)return self.fetch(n.request);(0,t.log)("Fetching",u),n.respondWith(self.caches.open(self.cacheName).then(function(t){return(e=t).match(n.request)}).then(function(e){return e?((0,t.log)("Serving from cache",e),e):self.fetch(n.request)}).then(function(t){return n.waitUntil(e.put(n.request,t.clone())),t}))}
},{"./log":"uD8j","./getRequestType":"yIJx"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./onInstall"),t=require("./onActivate"),n=require("./onFetch");self.cacheName="v1",self.addEventListener("install",e.onInstall),self.addEventListener("activate",t.onActivate),self.addEventListener("fetch",n.onFetch);
},{"./onInstall":"iLZu","./onActivate":"+NfH","./onFetch":"D5es"}]},{},["Focm"], null)
//# sourceMappingURL=/sw.map