parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"zU3Q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){return function(e){var t=e.page,r=e.action;return{steps:[function(){return{domain:"_Store_",method:"set",args:{currentPage:t},sideEffect:function(){"replace"===r&&window.history.replaceState(null,null,t),"push"===r&&window.history.pushState(null,null,t),"back"===r&&window.history.back()}}}]}}};exports.default=e;
},{}],"olzG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"changeRoute",{enumerable:!0,get:function(){return e.default}});var e=t(require("./changeRoute"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./changeRoute":"zU3Q"}],"rMii":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./actions"));function r(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(r,t,o):r[t]=e[t]}return r.default=e,r}var t={actions:e,observables:{user_id:"",language:"en","menu.position":-1,"menu.level":0,currentPage:"app","dash.submenu":""}};exports.default=t;
},{"./actions":"olzG"}],"Jdcy":[function(require,module,exports) {
"use strict";function n(){var t=e(["\n        <input\n          type=","\n          placeholder=","\n          value=","\n          style=","\n          @input=","\n          @keydown=","\n        />\n      "]);return n=function(){return t},t}function e(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Input=void 0;var t=function(e){return e.hoc({styles:{input:"\n        font-size: 18px;\n        border: none;\n        outline: none;\n        padding: 20px;\n        background: hsl(0, 0%, 98%);\n        border-radius: 5px;\n        margin-bottom: 30px;\n      "},actions:function(n){return{onKeyDown:function(e){9===e.keyCode&&(e.preventDefault(),n.onClickRight())}}},render:function(t){var r=t.props,o=t.styles,u=t.actions,i=r.type,p=r.placeholder,c=r.value,s=r.onInput;return e.html(n(),i,p,c,o.input,s,u.onKeyDown)}})};exports.Input=t;
},{}],"NtGr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Input",{enumerable:!0,get:function(){return e.Input}});var e=require("./Input");
},{"./Input":"Jdcy"}],"L/DT":[function(require,module,exports) {
"use strict";function n(){var t=e(["\n        <div class="," @click=",">\n          <div style=","></div>\n          <div class="," style=","></div>\n          <div class="," style=","></div>\n        </div>\n      "]);return n=function(){return t},t}function e(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Menu=void 0;var t=function(e){return e.hoc({state:function(n,e){return{position:e.get("menu.position"),level:e.get("menu.level")}},actions:function(n,e){return{onClick:function(){var n=e.get("menu.level"),t=e.get("menu.position");0===n?e.set({"menu.position":-t,currentPage:1===t?"app":"dash"}):e.set({"menu.level":n-1,"dash.submenu":""})}}},classes:{wrapper:"\n        position: relative;\n        width: ".concat(28,"px;\n        height: ").concat(28,"px;\n        display: flex;\n        flex-flow: column;\n        justify-content: center;\n      "),line:"\n        position: absolute;\n        width: 100%;\n        height: 20%;\n        transform: scale(1, 1);\n        background: hsla(0, 0%, 50%, 1);\n        border-radius: ".concat(28,"px;\n        transition: all .6s ease;\n        transform-origin: 10% 50%;\n      ")},styles:{handle:function(n,e){return"\n        position: absolute;\n        width: 58%;\n        height: 58%;\n        background: hsl(0, 0%, 98%);\n        border-radius: 50%;\n        z-index: 10;\n        transform:\n          scale(".concat(e>0?0:1.1,")\n          translate3d(").concat(-1===n?-20:80,"%, 0, 0);\n        transition: all .35s ease;\n        box-shadow: inset 0px 0px 6px hsla(0, 0%, 0%, 0.6);\n      ")},topLine:function(n){return"\n        transform:\n          rotateZ(".concat(n>0?-44:0,"deg)\n          scale(").concat(n>0?.7:1,", 1);\n      ")},bottomLine:function(n){return"\n        transform:\n          rotateZ(".concat(n>0?44:0,"deg)\n          scale(").concat(n>0?.7:1,", 1);\n      ")}},render:function(t){var o=t.actions,i=t.state,s=t.classes,r=t.styles,a=i.position,c=i.level;return e.html(n(),s.wrapper,o.onClick,r.handle(a,c),s.line,r.topLine(c),s.line,r.bottomLine(c))}})};exports.Menu=t;
},{}],"rZq3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Menu",{enumerable:!0,get:function(){return e.Menu}});var e=require("./Menu");
},{"./Menu":"L/DT"}],"kfqB":[function(require,module,exports) {
"use strict";function e(){var t=n(["\n        <div id='app' style=",">\n          I am the App!\n        </div>\n      "]);return e=function(){return t},t}function n(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(n){return n.hoc({state:function(e,n){return{currentPage:n.get("currentPage")}},styles:{app:function(e){return"\n        display: flex;\n        position: absolute;\n        justify-content: center;\n        align-items: center;\n        min-width: 100%;\n        height: 100%;\n        transition: all .6s ease-out;\n        overflow: hidden;\n        background: hsl(240, 39%, 92%);\n        opacity: ".concat(e?1:0,";\n        pointer-events: ").concat(e?"auto":"none",";\n      ")}},render:function(t){var r=t.styles,i=t.state.currentPage;return n.html(e(),r.app("app"===i))}})};exports.default=t;
},{}],"kln7":[function(require,module,exports) {
"use strict";function e(){var r=t(["\n        <div id='dash-settings'>\n          Settings\n        </div>\n      "]);return e=function(){return r},r}function t(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(t){return t.hoc({render:function(){return t.html(e())}})};exports.default=r;
},{}],"Tprz":[function(require,module,exports) {
"use strict";function e(){var t=r(["\n        <div id='dash-help'>\n          Help\n        </div>\n      "]);return e=function(){return t},t}function r(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(r){return r.hoc({render:function(){return r.html(e())}})};exports.default=t;
},{}],"HYJ0":[function(require,module,exports) {
"use strict";function e(){var t=r(["\n        <div id='dash-legal'>\n          Legal\n        </div>\n      "]);return e=function(){return t},t}function r(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(r){return r.hoc({render:function(){return r.html(e())}})};exports.default=t;
},{}],"1wBg":[function(require,module,exports) {
"use strict";function e(){var t=r(["\n        <div id='dash-profile'>\n          Profile\n        </div>\n      "]);return e=function(){return t},t}function r(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(r){return r.hoc({render:function(){return r.html(e())}})};exports.default=t;
},{}],"bkTk":[function(require,module,exports) {
"use strict";function n(){var e=r(["\n              <div class="," @click=",">\n                ","\n              </div>\n            "]);return n=function(){return e},e}function e(){var n=r(["\n              <div style=",">\n                ","\n              </div>\n            "]);return e=function(){return n},n}function t(){var n=r(["\n        <div id='dash' style=",">\n          ","\n          <div class=",">\n            ","\n            <div class=",">\n              <a href='/signin'>Logout</a>\n            </div>\n          </div>\n        </div>\n      "]);return t=function(){return n},n}function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(r){return r.hoc({state:function(n,e){return{currentPage:e.get("currentPage"),submenu:e.get("dash.submenu"),level:e.get("menu.level")}},actions:function(n,e){return{onClick:function(n){var t=e.get("menu.level");e.set({"dash.submenu":n.toLowerCase(),"menu.level":t+1})}}},sections:{Settings:require("./<Settings>/Settings.js").default,Help:require("./<Help>/Help.js").default,Legal:require("./<Legal>/Legal.js").default,Profile:require("./<Profile>/Profile.js").default},classes:{submenus:"\n        display: flex;\n        flex-flow: column;\n        padding: 20px;\n      ",submenu:"\n        padding: 10px;\n        cursor: pointer;\n      "},styles:{dash:function(n){return"\n        display: flex;\n        position: absolute;\n        justify-content: center;\n        align-items: center;\n        min-width: 100%;\n        height: 100%;\n        transition: all .6s ease-out;\n        overflow: hidden;\n        opacity: ".concat(n?1:0,";\n        pointer-events: ").concat(n?"auto":"none",";\n      ")},screen:function(n){return"\n        position: absolute;\n        display: flex;\n        flex-flow: column;\n        justify-content: center;\n        align-items: center;\n        min-width: 100%;\n        height: 100%;\n        transition: all .5s ease-out;\n        background: white;\n        transform: translate3d(".concat(n?0:100,"%, 0, 0);\n        pointer-events: ").concat(n?"auto":"none",";\n      ")}},render:function(s){var i=s.styles,u=s.state,o=s.classes,a=s.actions,l=s.sections,c=u.currentPage,f=u.submenu,d=u.level;return r.html(t(),i.dash("dash"===c),Object.keys(l).map(function(n){var t=1===d&&f===n.toLowerCase();return r.html(e(),i.screen(t),l[n]())}),o.submenus,Object.keys(l).map(function(e){return r.html(n(),o.submenu,function(){return a.onClick(e)},e)}),o.submenu)}})};exports.default=s;
},{"./<Settings>/Settings.js":"kln7","./<Help>/Help.js":"Tprz","./<Legal>/Legal.js":"HYJ0","./<Profile>/Profile.js":"1wBg"}],"0hxn":[function(require,module,exports) {
"use strict";function e(){var r=n(["\n        <div id='pages-wrapper' class=",">\n          <header id='menu' class=",">\n            ","\n          </header>\n          <main id='pages' class=",">\n            ","\n            ","\n          </main>\n        </div>\n      "]);return e=function(){return r},r}function n(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(n){var r=n.ui.fragments.Menu;return n.hoc({classes:{wrapper:"\n        position: relative;\n        height: 100vh;\n        width: 100%;\n      ",menu:"\n        position: absolute;\n        top: 12px;\n        left: 12px;\n        cursor: pointer;\n        z-index: 10;\n        user-select: none;\n      ",pages:"\n        position: absolute;\n        top: 0; left: 0; right: 0; bottom: 0;\n        overflow: hidden;\n      "},sections:{App:require("./pages/<App>/App.js").default,Dashboard:require("./pages/<Dashboard>/Dashboard.js").default},render:function(t){var s=t.classes,a=t.sections;return n.html(e(),s.wrapper,s.menu,r(),s.pages,a.App(),a.Dashboard())}})};exports.default=r;
},{"./pages/<App>/App.js":"kfqB","./pages/<Dashboard>/Dashboard.js":"bkTk"}],"IxXz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("./client/store")),t=n(require("./client/ui/components")),r=n(require("./client/ui/fragments")),o=s(require("./client/ui/Root"));function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}function s(e){return e&&e.__esModule?e:{default:e}}var i={client:{store:e.default,rootComponent:o.default,components:t,fragments:r},env:{development:{httpPort:4201,socketPort:4202,baseUrl:"localhost",baseFolder:"",useServiceWorker:!1,useManifest:!0},production:{httpPort:4201,socketPort:4202,baseUrl:"museeker.io",baseFolder:"base-app",useServiceWorker:!0,useManifest:!0}}};exports.default=i;
},{"./client/store":"rMii","./client/ui/components":"NtGr","./client/ui/fragments":"rZq3","./client/ui/Root":"0hxn"}],"A2T1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../config.js"));function t(e){return e&&e.__esModule?e:{default:e}}var r=window.jmaguirrei_client.init(e.default.client);exports.default=r;
},{"../config.js":"IxXz"}]},{},["A2T1"], null)
//# sourceMappingURL=/app.map