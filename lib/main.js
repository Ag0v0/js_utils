arrayTrans=(e,t)=>{const n=[];return t.forEach((r,o)=>{const i=Math.floor(o/e);n[i]||(n[i]=[]),n[i].push(r)}),n};var F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ge={exports:{}};(function(e,t){(function(n,r){r()})(F,function(){function n(a,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function r(a,u,m){var p=new XMLHttpRequest;p.open("GET",a),p.responseType="blob",p.onload=function(){h(p.response,u,m)},p.onerror=function(){},p.send()}function o(a){var u=new XMLHttpRequest;u.open("HEAD",a,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function i(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(u)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof F=="object"&&F.global===F?F:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(a,u,m){var p=s.URL||s.webkitURL,f=document.createElement("a");u=u||a.name||"download",f.download=u,f.rel="noopener",typeof a=="string"?(f.href=a,f.origin===location.origin?i(f):o(f.href)?r(a,u,m):i(f,f.target="_blank")):(f.href=p.createObjectURL(a),setTimeout(function(){p.revokeObjectURL(f.href)},4e4),setTimeout(function(){i(f)},0))}:"msSaveOrOpenBlob"in navigator?function(a,u,m){if(u=u||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(n(a,m),u);else if(o(a))r(a,u,m);else{var p=document.createElement("a");p.href=a,p.target="_blank",setTimeout(function(){i(p)})}}:function(a,u,m,p){if(p=p||open("","_blank"),p&&(p.document.title=p.document.body.innerText="downloading..."),typeof a=="string")return r(a,u,m);var f=a.type==="application/octet-stream",d=/constructor/i.test(s.HTMLElement)||s.safari,E=/CriOS\/[\d]+/.test(navigator.userAgent);if((E||f&&d||l)&&typeof FileReader<"u"){var O=new FileReader;O.onloadend=function(){var A=O.result;A=E?A:A.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=A:location=A,p=null},O.readAsDataURL(a)}else{var y=s.URL||s.webkitURL,S=y.createObjectURL(a);p?p.location=S:location.href=S,p=null,setTimeout(function(){y.revokeObjectURL(S)},4e4)}});s.saveAs=h.saveAs=h,e.exports=h})})(ge);function le(e,t){return function(){return e.apply(t,arguments)}}const{toString:fe}=Object.prototype,{getPrototypeOf:$}=Object,K=(e=>t=>{const n=fe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>K(t)===e),M=e=>t=>typeof t===e,{isArray:_}=Array,z=M("undefined");function Fe(e){return e!==null&&!z(e)&&e.constructor!==null&&!z(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const de=x("ArrayBuffer");function De(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&de(e.buffer),t}const Le=M("string"),C=M("function"),he=M("number"),pe=e=>e!==null&&typeof e=="object",Be=e=>e===!0||e===!1,j=e=>{if(K(e)!=="object")return!1;const t=$(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_e=x("Date"),Ue=x("File"),je=x("Blob"),ke=x("FileList"),Me=e=>pe(e)&&C(e.pipe),He=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||fe.call(e)===t||C(e.toString)&&e.toString()===t)},ve=x("URLSearchParams"),Ie=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function J(){const e={},t=(n,r)=>{j(e[r])&&j(n)?e[r]=J(e[r],n):j(n)?e[r]=J({},n):_(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&H(arguments[n],t);return e}const qe=(e,t,n,{allOwnKeys:r}={})=>(H(t,(o,i)=>{n&&C(o)?e[i]=le(o,n):e[i]=o},{allOwnKeys:r}),e),ze=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Je=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ve=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&$(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},We=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},$e=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!he(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ke=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&$(Uint8Array)),Xe=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Ge=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Qe=x("HTMLFormElement"),Ye=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Y=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ze=x("RegExp"),me=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},et=e=>{me(e,(t,n)=>{const r=e[n];if(!!C(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},tt=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return _(e)?r(e):r(String(e).split(t)),n},nt=()=>{},rt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),c={isArray:_,isArrayBuffer:de,isBuffer:Fe,isFormData:He,isArrayBufferView:De,isString:Le,isNumber:he,isBoolean:Be,isObject:pe,isPlainObject:j,isUndefined:z,isDate:_e,isFile:Ue,isBlob:je,isRegExp:Ze,isFunction:C,isStream:Me,isURLSearchParams:ve,isTypedArray:Ke,isFileList:ke,forEach:H,merge:J,extend:qe,trim:Ie,stripBOM:ze,inherits:Je,toFlatObject:Ve,kindOf:K,kindOfTest:x,endsWith:We,toArray:$e,forEachEntry:Xe,matchAll:Ge,isHTMLForm:Qe,hasOwnProperty:Y,hasOwnProp:Y,reduceDescriptors:me,freezeMethods:et,toObjectSet:tt,toCamelCase:Ye,noop:nt,toFiniteNumber:rt};function w(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}c.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const we=w.prototype,Ee={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ee[e]={value:e}});Object.defineProperties(w,Ee);Object.defineProperty(we,"isAxiosError",{value:!0});w.from=(e,t,n,r,o,i)=>{const s=Object.create(we);return c.toFlatObject(e,s,function(h){return h!==Error.prototype},l=>l!=="isAxiosError"),w.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var st=typeof self=="object"?self.FormData:window.FormData;function V(e){return c.isPlainObject(e)||c.isArray(e)}function ye(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function Z(e,t,n){return e?e.concat(t).map(function(o,i){return o=ye(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function ot(e){return c.isArray(e)&&!e.some(V)}const it=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function at(e){return e&&c.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function v(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new(st||FormData),n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,O){return!c.isUndefined(O[E])});const r=n.metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&at(t);if(!c.isFunction(o))throw new TypeError("visitor must be a function");function a(d){if(d===null)return"";if(c.isDate(d))return d.toISOString();if(!h&&c.isBlob(d))throw new w("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(d)||c.isTypedArray(d)?h&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,E,O){let y=d;if(d&&!O&&typeof d=="object"){if(c.endsWith(E,"{}"))E=r?E:E.slice(0,-2),d=JSON.stringify(d);else if(c.isArray(d)&&ot(d)||c.isFileList(d)||c.endsWith(E,"[]")&&(y=c.toArray(d)))return E=ye(E),y.forEach(function(A,Ce){!(c.isUndefined(A)||A===null)&&t.append(s===!0?Z([E],Ce,i):s===null?E:E+"[]",a(A))}),!1}return V(d)?!0:(t.append(Z(O,E,i),a(d)),!1)}const m=[],p=Object.assign(it,{defaultVisitor:u,convertValue:a,isVisitable:V});function f(d,E){if(!c.isUndefined(d)){if(m.indexOf(d)!==-1)throw Error("Circular reference detected in "+E.join("."));m.push(d),c.forEach(d,function(y,S){(!(c.isUndefined(y)||y===null)&&o.call(t,y,c.isString(S)?S.trim():S,E,p))===!0&&f(y,E?E.concat(S):[S])}),m.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return f(e),t}function ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function X(e,t){this._pairs=[],e&&v(e,this,t)}const be=X.prototype;be.append=function(t,n){this._pairs.push([t,n])};be.toString=function(t){const n=t?function(r){return t.call(this,r,ee)}:ee;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function ct(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Re(e,t,n){if(!t)return e;const r=n&&n.encode||ct,o=n&&n.serialize;let i;if(o?i=o(t,n):i=c.isURLSearchParams(t)?t.toString():new X(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class te{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ut=typeof URLSearchParams<"u"?URLSearchParams:X,lt=FormData,ft=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),T={isBrowser:!0,classes:{URLSearchParams:ut,FormData:lt,Blob},isStandardBrowserEnv:ft,protocols:["http","https","file","blob","url","data"]};function dt(e,t){return v(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return T.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function ht(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pt(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Se(e){function t(n,r,o,i){let s=n[i++];const l=Number.isFinite(+s),h=i>=n.length;return s=!s&&c.isArray(o)?o.length:s,h?(c.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!c.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&c.isArray(o[s])&&(o[s]=pt(o[s])),!l)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,o)=>{t(ht(r),o,n,0)}),n}return null}function mt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new w("Request failed with status code "+n.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const wt=T.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,s,l){const h=[];h.push(n+"="+encodeURIComponent(r)),c.isNumber(o)&&h.push("expires="+new Date(o).toGMTString()),c.isString(i)&&h.push("path="+i),c.isString(s)&&h.push("domain="+s),l===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Et(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function yt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ae(e,t){return e&&!Et(t)?yt(e,t):t}const bt=T.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=c.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function U(e,t,n){w.call(this,e==null?"canceled":e,w.ERR_CANCELED,t,n),this.name="CanceledError"}c.inherits(U,w,{__CANCEL__:!0});function Rt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const Ot=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),St=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&Ot[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ne=Symbol("internals"),Te=Symbol("defaults");function L(e){return e&&String(e).trim().toLowerCase()}function k(e){return e===!1||e==null?e:c.isArray(e)?e.map(k):String(e)}function At(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function re(e,t,n,r){if(c.isFunction(r))return r.call(this,t,n);if(!!c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function Tt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function xt(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}function D(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}function R(e,t){e&&this.set(e),this[Te]=t||null}Object.assign(R.prototype,{set:function(e,t,n){const r=this;function o(i,s,l){const h=L(s);if(!h)throw new Error("header name must be a non-empty string");const a=D(r,h);a&&l!==!0&&(r[a]===!1||l===!1)||(r[a||s]=k(i))}return c.isPlainObject(e)?c.forEach(e,(i,s)=>{o(i,s,t)}):o(t,e,n),this},get:function(e,t){if(e=L(e),!e)return;const n=D(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return At(r);if(c.isFunction(t))return t.call(this,r,n);if(c.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=L(e),e){const n=D(this,e);return!!(n&&(!t||re(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function o(i){if(i=L(i),i){const s=D(n,i);s&&(!t||re(n,n[s],s,t))&&(delete n[s],r=!0)}}return c.isArray(e)?e.forEach(o):o(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return c.forEach(this,(r,o)=>{const i=D(n,o);if(i){t[i]=k(r),delete t[o];return}const s=e?Tt(o):String(o).trim();s!==o&&delete t[o],t[s]=k(r),n[s]=!0}),this},toJSON:function(e){const t=Object.create(null);return c.forEach(Object.assign({},this[Te]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&c.isArray(n)?n.join(", "):n)}),t}});Object.assign(R,{from:function(e){return c.isString(e)?new this(St(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[ne]=this[ne]={accessors:{}}).accessors,r=this.prototype;function o(i){const s=L(i);n[s]||(xt(r,i),n[s]=!0)}return c.isArray(e)?e.forEach(o):o(e),this}});R.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);c.freezeMethods(R.prototype);c.freezeMethods(R);function Nt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(h){const a=Date.now(),u=r[i];s||(s=a),n[o]=h,r[o]=a;let m=i,p=0;for(;m!==o;)p+=n[m++],m=m%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),a-s<t)return;const f=u&&a-u;return f?Math.round(p*1e3/f):void 0}}function se(e,t){let n=0;const r=Nt(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,l=i-n,h=r(l),a=i<=s;n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:l,rate:h||void 0,estimated:h&&s&&a?(s-i)/h:void 0};u[t?"download":"upload"]=!0,e(u)}}function oe(e){return new Promise(function(n,r){let o=e.data;const i=R.from(e.headers).normalize(),s=e.responseType;let l;function h(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}c.isFormData(o)&&T.isStandardBrowserEnv&&i.setContentType(!1);let a=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(f+":"+d))}const u=Ae(e.baseURL,e.url);a.open(e.method.toUpperCase(),Re(u,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function m(){if(!a)return;const f=R.from("getAllResponseHeaders"in a&&a.getAllResponseHeaders()),E={data:!s||s==="text"||s==="json"?a.responseText:a.response,status:a.status,statusText:a.statusText,headers:f,config:e,request:a};mt(function(y){n(y),h()},function(y){r(y),h()},E),a=null}if("onloadend"in a?a.onloadend=m:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(m)},a.onabort=function(){!a||(r(new w("Request aborted",w.ECONNABORTED,e,a)),a=null)},a.onerror=function(){r(new w("Network Error",w.ERR_NETWORK,e,a)),a=null},a.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Oe;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new w(d,E.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,a)),a=null},T.isStandardBrowserEnv){const f=(e.withCredentials||bt(u))&&e.xsrfCookieName&&wt.read(e.xsrfCookieName);f&&i.set(e.xsrfHeaderName,f)}o===void 0&&i.setContentType(null),"setRequestHeader"in a&&c.forEach(i.toJSON(),function(d,E){a.setRequestHeader(E,d)}),c.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),s&&s!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",se(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=f=>{!a||(r(!f||f.type?new U(null,e,a):f),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const p=Rt(u);if(p&&T.protocols.indexOf(p)===-1){r(new w("Unsupported protocol "+p+":",w.ERR_BAD_REQUEST,e));return}a.send(o||null)})}const ie={http:oe,xhr:oe},ae={getAdapter:e=>{if(c.isString(e)){const t=ie[e];if(!e)throw Error(c.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!c.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:ie},Pt={"Content-Type":"application/x-www-form-urlencoded"};function Ct(){let e;return typeof XMLHttpRequest<"u"?e=ae.getAdapter("xhr"):typeof process<"u"&&c.kindOf(process)==="process"&&(e=ae.getAdapter("http")),e}function gt(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const g={transitional:Oe,adapter:Ct(),transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=c.isObject(t);if(i&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return o&&o?JSON.stringify(Se(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return dt(t,this.formSerializer).toString();if((l=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return v(l?{"files[]":t}:t,h&&new h,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),gt(t)):t}],transformResponse:[function(t){const n=this.transitional||g.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&c.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?w.from(l,w.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(t){g.headers[t]={}});c.forEach(["post","put","patch"],function(t){g.headers[t]=c.merge(Pt)});function I(e,t){const n=this||g,r=t||n,o=R.from(r.headers);let i=r.data;return c.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function xe(e){return!!(e&&e.__CANCEL__)}function q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U}function ce(e){return q(e),e.headers=R.from(e.headers),e.data=I.call(e,e.transformRequest),(e.adapter||g.adapter)(e).then(function(r){return q(e),r.data=I.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return xe(r)||(q(e),r&&r.response&&(r.response.data=I.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}function B(e,t){t=t||{};const n={};function r(a,u){return c.isPlainObject(a)&&c.isPlainObject(u)?c.merge(a,u):c.isPlainObject(u)?c.merge({},u):c.isArray(u)?u.slice():u}function o(a){if(c.isUndefined(t[a])){if(!c.isUndefined(e[a]))return r(void 0,e[a])}else return r(e[a],t[a])}function i(a){if(!c.isUndefined(t[a]))return r(void 0,t[a])}function s(a){if(c.isUndefined(t[a])){if(!c.isUndefined(e[a]))return r(void 0,e[a])}else return r(void 0,t[a])}function l(a){if(a in t)return r(e[a],t[a]);if(a in e)return r(void 0,e[a])}const h={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l};return c.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const m=h[u]||o,p=m(u);c.isUndefined(p)&&m!==l||(n[u]=p)}),n}const Ne="1.1.3",G={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{G[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ue={};G.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Ne+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new w(o(s," has been removed"+(n?" in "+n:"")),w.ERR_DEPRECATED);return n&&!ue[s]&&(ue[s]=!0),t?t(i,s,l):!0}};function Ft(e,t,n){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],h=l===void 0||s(l,i,e);if(h!==!0)throw new w("option "+i+" must be "+h,w.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new w("Unknown option "+i,w.ERR_BAD_OPTION)}}const W={assertOptions:Ft,validators:G},N=W.validators;class P{constructor(t){this.defaults=t,this.interceptors={request:new te,response:new te}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:o}=n;r!==void 0&&W.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),o!==void 0&&W.assertOptions(o,{encode:N.function,serialize:N.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const i=n.headers&&c.merge(n.headers.common,n.headers[n.method]);i&&c.forEach(["delete","get","head","post","put","patch","common"],function(d){delete n.headers[d]}),n.headers=new R(n.headers,i);const s=[];let l=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(l=l&&d.synchronous,s.unshift(d.fulfilled,d.rejected))});const h=[];this.interceptors.response.forEach(function(d){h.push(d.fulfilled,d.rejected)});let a,u=0,m;if(!l){const f=[ce.bind(this),void 0];for(f.unshift.apply(f,s),f.push.apply(f,h),m=f.length,a=Promise.resolve(n);u<m;)a=a.then(f[u++],f[u++]);return a}m=s.length;let p=n;for(u=0;u<m;){const f=s[u++],d=s[u++];try{p=f(p)}catch(E){d.call(this,E);break}}try{a=ce.call(this,p)}catch(f){return Promise.reject(f)}for(u=0,m=h.length;u<m;)a=a.then(h[u++],h[u++]);return a}getUri(t){t=B(this.defaults,t);const n=Ae(t.baseURL,t.url);return Re(n,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){P.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(B(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}P.prototype[t]=n(),P.prototype[t+"Form"]=n(!0)});class Q{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new U(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Q(function(o){t=o}),cancel:t}}}function Dt(e){return function(n){return e.apply(null,n)}}function Lt(e){return c.isObject(e)&&e.isAxiosError===!0}function Pe(e){const t=new P(e),n=le(P.prototype.request,t);return c.extend(n,P.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Pe(B(e,o))},n}const b=Pe(g);b.Axios=P;b.CanceledError=U;b.CancelToken=Q;b.isCancel=xe;b.VERSION=Ne;b.toFormData=v;b.AxiosError=w;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Dt;b.isAxiosError=Lt;b.formToJSON=e=>Se(c.isHTMLForm(e)?new FormData(e):e);