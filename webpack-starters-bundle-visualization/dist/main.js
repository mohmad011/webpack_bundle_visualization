(()=>{var t={208:(t,e,r)=>{var n,o="__lodash_hash_undefined__",i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/,u=/^\./,c=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,f=/^\[object .+?Constructor\]$/,l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,p="object"==typeof self&&self&&self.Object===Object&&self,y=l||p||Function("return this")(),h=Array.prototype,d=Function.prototype,_=Object.prototype,v=y["__core-js_shared__"],g=(n=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",b=d.toString,j=_.hasOwnProperty,O=_.toString,m=RegExp("^"+b.call(j).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),w=y.Symbol,S=h.splice,P=V(y,"Map"),x=V(Object,"create"),E=w?w.prototype:void 0,$=E?E.toString:void 0;function C(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function R(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function T(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function D(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function F(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function V(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!U(t)||(e=t,g&&g in e))&&(function(t){var e=U(t)?O.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?m:f).test(function(t){if(null!=t){try{return b.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}(r)?r:void 0}C.prototype.clear=function(){this.__data__=x?x(null):{}},C.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},C.prototype.get=function(t){var e=this.__data__;if(x){var r=e[t];return r===o?void 0:r}return j.call(e,t)?e[t]:void 0},C.prototype.has=function(t){var e=this.__data__;return x?void 0!==e[t]:j.call(e,t)},C.prototype.set=function(t,e){return this.__data__[t]=x&&void 0===e?o:e,this},R.prototype.clear=function(){this.__data__=[]},R.prototype.delete=function(t){var e=this.__data__,r=D(e,t);return!(r<0||(r==e.length-1?e.pop():S.call(e,r,1),0))},R.prototype.get=function(t){var e=this.__data__,r=D(e,t);return r<0?void 0:e[r][1]},R.prototype.has=function(t){return D(this.__data__,t)>-1},R.prototype.set=function(t,e){var r=this.__data__,n=D(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},T.prototype.clear=function(){this.__data__={hash:new C,map:new(P||R),string:new C}},T.prototype.delete=function(t){return F(this,t).delete(t)},T.prototype.get=function(t){return F(this,t).get(t)},T.prototype.has=function(t){return F(this,t).has(t)},T.prototype.set=function(t,e){return F(this,t).set(t,e),this};var A=k((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(G(t))return $?$.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var r=[];return u.test(t)&&r.push(""),t.replace(c,(function(t,e,n,o){r.push(n?o.replace(s,"$1"):e||t)})),r}));function M(t){if("string"==typeof t||G(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function k(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a),a};return r.cache=new(k.Cache||T),r}k.Cache=T;var I=Array.isArray;function U(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function G(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==O.call(t)}t.exports=function(t,e,r){var n=null==t?void 0:function(t,e){for(var r,n=0,o=(e=function(t,e){if(I(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!G(t))||a.test(t)||!i.test(t)||null!=e&&t in Object(e)}(e,t)?[e]:I(r=e)?r:A(r)).length;null!=t&&n<o;)t=t[M(e[n++])];return n&&n==o?t:void 0}(t,e);return void 0===n?r:n}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t,e=new Uint8Array(16);function n(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}const o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=function(t){return"string"==typeof t&&o.test(t)};for(var a=[],u=0;u<256;++u)a.push((u+256).toString(16).substr(1));var c,s,f="Ravalynn"+((s=(c=c||{}).random||(c.rng||n)())[6]=15&s[6]|64,s[8]=63&s[8]|128,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]).toLowerCase();if(!i(r))throw TypeError("Stringified UUID is invalid");return r}(s)),l=r(208),p=r.n(l)()({one:{two:{three:"woof"}}},"one.two.three");function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}console.log("getWoof ->",p),console.log("get classes was called"),console.log(f),console.log("Hjulmar");var _=h(h({},{leatherStrips:2,ironIngot:1,refinedMoonstone:4}),{},{leather:1,refinedMoonstone:1});console.log("ES7 Object spread example: ",_),console.log("ES8 Object.values example",Object.values(_));for(var v=function(t){setTimeout((function(){console.log(t)}),1)},g=0;g<10;g++)v(g)})()})();
//# sourceMappingURL=main.js.map