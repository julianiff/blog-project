/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class i{constructor(t,i){if(i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s=new Map,o=t=>{let o=s.get(t);return void 0===o&&s.set(t,o=new i(t,e)),o},n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(t instanceof i)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return o(s)},l=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>o("string"==typeof t?t:t+""))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r,a,f,c;const d={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static Πp(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style");i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}Πj(t,e,i=u){var s,o;const n=this.constructor.Πp(t,i);if(void 0!==n&&!0===i.reflect){const l=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:d.toAttribute)(e,i.type);this.Πh=t,null==l?this.removeAttribute(n):this.setAttribute(n,l),this.Πh=null}}K(t,e){var i,s,o;const n=this.constructor,l=n.Πm.get(t);if(void 0!==l&&this.Πh!==l){const t=n.getPropertyOptions(l),r=t.converter,a=null!==(o=null!==(s=null===(i=r)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof r?r:null)&&void 0!==o?o:d.fromAttribute;this.Πh=l,this[l]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v,m,b,g;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null===(a=(r=globalThis).reactiveElementPlatformSupport)||void 0===a||a.call(r,{ReactiveElement:p}),(null!==(f=(c=globalThis).reactiveElementVersions)&&void 0!==f?f:c.reactiveElementVersions=[]).push("1.0.0-rc.2");const x=globalThis.trustedTypes,y=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,w="?"+_,T=`<${w}>`,k=document,N=(t="")=>k.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,C=/>/g,I=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,L=/'/g,M=/"/g,A=/^(?:script|style|textarea)$/i,z=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),J=new WeakMap,E=k.createTreeWalker(k,129,null,!1);class P{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,r=this.parts,[a,f]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",l=j;for(let e=0;e<i;e++){const i=t[e];let r,a,f=-1,c=0;for(;c<i.length&&(l.lastIndex=c,a=l.exec(i),null!==a);)c=l.lastIndex,l===j?"!--"===a[1]?l=O:void 0!==a[1]?l=C:void 0!==a[2]?(A.test(a[2])&&(o=RegExp("</"+a[2],"g")),l=I):void 0!==a[3]&&(l=I):l===I?">"===a[0]?(l=null!=o?o:j,f=-1):void 0===a[1]?f=-2:(f=l.lastIndex-a[2].length,r=a[1],l=void 0===a[3]?I:'"'===a[3]?M:L):l===M||l===L?l=I:l===O||l===C?l=j:(l=I,o=void 0);const d=l===I&&t[e+1].startsWith("/>")?" ":"";n+=l===j?i+T:f>=0?(s.push(r),i.slice(0,f)+"$lit$"+i.slice(f)+_+d):i+_+(-2===f?(s.push(void 0),e):d)}const r=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==y?y.createHTML(r):r,s]})(t,e);if(this.el=P.createElement(a,i),E.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=E.nextNode())&&r.length<l;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=f[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);r.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?H:"?"===e[1]?Z:"@"===e[1]?G:D})}else r.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(A.test(s.tagName)){const t=s.textContent.split(_),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],N()),E.nextNode(),r.push({type:2,index:++o});s.append(t[e],N())}}}else if(8===s.nodeType)if(s.data===w)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(_,t+1));)r.push({type:7,index:o}),t+=_.length-1}o++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function R(t,e,i=t,s){var o,n,l,r;if(e===z)return e;let a=void 0!==s?null===(o=i.Σi)||void 0===o?void 0:o[s]:i.Σo;const f=$(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==f&&(null===(n=null==a?void 0:a.O)||void 0===n||n.call(a,!1),void 0===f?a=void 0:(a=new f(t),a.T(t,i,s)),void 0!==s?(null!==(l=(r=i).Σi)&&void 0!==l?l:r.Σi=[])[s]=a:i.Σo=a),void 0!==a&&(e=R(t,a.S(t,e.values),a,s)),e}class U{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);E.currentNode=o;let n=E.nextNode(),l=0,r=0,a=s[0];for(;void 0!==a;){if(l===a.index){let e;2===a.type?e=new B(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new K(n,this,t)),this.l.push(e),a=s[++r]}l!==(null==a?void 0:a.index)&&(n=E.nextNode(),l++)}return o}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class B{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=R(this,t,e),$(t)?t===W||null==t||""===t?(this.H!==W&&this.R(),this.H=W):t!==this.H&&t!==z&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(k.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=P.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===o)this.H.v(i);else{const t=new U(o,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new P(t)),e}g(t){S(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const o of t)s===e.length?e.push(i=new B(this.k(N()),this.k(N()),this,this.options)):i=e[s],i.I(o),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class D{constructor(t,e,i,s,o){this.type=1,this.H=W,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(W),this.strings=i):this.H=W}get tagName(){return this.element.tagName}I(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=R(this,t,e,0),n=!$(t)||t!==this.H&&t!==z,n&&(this.H=t);else{const s=t;let l,r;for(t=o[0],l=0;l<o.length-1;l++)r=R(this,s[i+l],e,l),r===z&&(r=this.H[l]),n||(n=!$(r)||r!==this.H[l]),r===W?t=W:t!==W&&(t+=(null!=r?r:"")+o[l+1]),this.H[l]=r}n&&!s&&this.W(t)}W(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends D{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===W?void 0:t}}class Z extends D{constructor(){super(...arguments),this.type=4}W(t){t&&t!==W?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class G extends D{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=R(this,t,e,0))&&void 0!==i?i:W)===z)return;const s=this.H,o=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==W&&(s===W||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){R(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,V,q,Q;null===(m=(v=globalThis).litHtmlPlatformSupport)||void 0===m||m.call(v,P,B),(null!==(b=(g=globalThis).litHtmlVersions)&&void 0!==b?b:g.litHtmlVersions=[]).push("2.0.0-rc.3");const X=globalThis.trustedTypes,Y=X?X.createPolicy("lit-html",{createHTML:t=>t}):void 0,tt=`lit$${(Math.random()+"").slice(9)}$`,et="?"+tt,it=`<${et}>`,st=document,ot=(t="")=>st.createComment(t),nt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lt=Array.isArray,rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,ft=/>/g,ct=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,dt=/'/g,ht=/"/g,ut=/^(?:script|style|textarea)$/i,pt=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),vt=pt(1),mt=pt(2),bt=Symbol.for("lit-noChange"),gt=Symbol.for("lit-nothing"),xt=new WeakMap,yt=st.createTreeWalker(st,129,null,!1);class _t{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,r=this.parts,[a,f]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",l=rt;for(let e=0;e<i;e++){const i=t[e];let r,a,f=-1,c=0;for(;c<i.length&&(l.lastIndex=c,a=l.exec(i),null!==a);)c=l.lastIndex,l===rt?"!--"===a[1]?l=at:void 0!==a[1]?l=ft:void 0!==a[2]?(ut.test(a[2])&&(o=RegExp("</"+a[2],"g")),l=ct):void 0!==a[3]&&(l=ct):l===ct?">"===a[0]?(l=null!=o?o:rt,f=-1):void 0===a[1]?f=-2:(f=l.lastIndex-a[2].length,r=a[1],l=void 0===a[3]?ct:'"'===a[3]?ht:dt):l===ht||l===dt?l=ct:l===at||l===ft?l=rt:(l=ct,o=void 0);const d=l===ct&&t[e+1].startsWith("/>")?" ":"";n+=l===rt?i+it:f>=0?(s.push(r),i.slice(0,f)+"$lit$"+i.slice(f)+tt+d):i+tt+(-2===f?(s.push(void 0),e):d)}const r=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==Y?Y.createHTML(r):r,s]})(t,e);if(this.el=_t.createElement(a,i),yt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=yt.nextNode())&&r.length<l;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(tt)){const i=f[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(tt),e=/([.?@])?(.*)/.exec(i);r.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?$t:"?"===e[1]?St:"@"===e[1]?jt:Nt})}else r.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(ut.test(s.tagName)){const t=s.textContent.split(tt),e=t.length-1;if(e>0){s.textContent=X?X.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ot()),yt.nextNode(),r.push({type:2,index:++o});s.append(t[e],ot())}}}else if(8===s.nodeType)if(s.data===et)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(tt,t+1));)r.push({type:7,index:o}),t+=tt.length-1}o++}}static createElement(t,e){const i=st.createElement("template");return i.innerHTML=t,i}}function wt(t,e,i=t,s){var o,n,l,r;if(e===bt)return e;let a=void 0!==s?null===(o=i.Σi)||void 0===o?void 0:o[s]:i.Σo;const f=nt(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==f&&(null===(n=null==a?void 0:a.O)||void 0===n||n.call(a,!1),void 0===f?a=void 0:(a=new f(t),a.T(t,i,s)),void 0!==s?(null!==(l=(r=i).Σi)&&void 0!==l?l:r.Σi=[])[s]=a:i.Σo=a),void 0!==a&&(e=wt(t,a.S(t,e.values),a,s)),e}class Tt{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:st).importNode(i,!0);yt.currentNode=o;let n=yt.nextNode(),l=0,r=0,a=s[0];for(;void 0!==a;){if(l===a.index){let e;2===a.type?e=new kt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new Ot(n,this,t)),this.l.push(e),a=s[++r]}l!==(null==a?void 0:a.index)&&(n=yt.nextNode(),l++)}return o}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class kt{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=wt(this,t,e),nt(t)?t===gt||null==t||""===t?(this.H!==gt&&this.R(),this.H=gt):t!==this.H&&t!==bt&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return lt(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(st.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=_t.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===o)this.H.v(i);else{const t=new Tt(o,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=xt.get(t.strings);return void 0===e&&xt.set(t.strings,e=new _t(t)),e}g(t){lt(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const o of t)s===e.length?e.push(i=new kt(this.k(ot()),this.k(ot()),this,this.options)):i=e[s],i.I(o),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class Nt{constructor(t,e,i,s,o){this.type=1,this.H=gt,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(gt),this.strings=i):this.H=gt}get tagName(){return this.element.tagName}I(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=wt(this,t,e,0),n=!nt(t)||t!==this.H&&t!==bt,n&&(this.H=t);else{const s=t;let l,r;for(t=o[0],l=0;l<o.length-1;l++)r=wt(this,s[i+l],e,l),r===bt&&(r=this.H[l]),n||(n=!nt(r)||r!==this.H[l]),r===gt?t=gt:t!==gt&&(t+=(null!=r?r:"")+o[l+1]),this.H[l]=r}n&&!s&&this.W(t)}W(t){t===gt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class $t extends Nt{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===gt?void 0:t}}class St extends Nt{constructor(){super(...arguments),this.type=4}W(t){t&&t!==gt?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class jt extends Nt{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=wt(this,t,e,0))&&void 0!==i?i:gt)===bt)return;const s=this.H,o=t===gt&&s!==gt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==gt&&(s===gt||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class Ot{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){wt(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ct,It,Lt,Mt,At,zt;null===(V=(F=globalThis).litHtmlPlatformSupport)||void 0===V||V.call(F,_t,kt),(null!==(q=(Q=globalThis).litHtmlVersions)&&void 0!==q?q:Q.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(Ct=(zt=globalThis).litElementVersions)&&void 0!==Ct?Ct:zt.litElementVersions=[]).push("3.0.0-rc.2");class Wt extends p{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new kt(e.insertBefore(ot(),t),t,void 0,i)}return l.I(t),l})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return bt}}Wt.finalized=!0,Wt._$litElement$=!0,null===(Lt=(It=globalThis).litElementHydrateSupport)||void 0===Lt||Lt.call(It,{LitElement:Wt}),null===(At=(Mt=globalThis).litElementPlatformSupport)||void 0===At||At.call(Mt,{LitElement:Wt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Et=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Pt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Et(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Rt(t){return Pt({...t,state:!0,attribute:!1})}var Ut=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let Bt=class extends Wt{constructor(){super(...arguments),this.level=3}render(){const t=`h${this.level}`,e=document.createElement(t);return e.innerHTML="<slot></slot>",vt`${e}`}};Bt.styles=n`
    h1,
    h2,
    h3,
    h4 {
      margin-block-start: 0;
      margin-block-end: 0;
    }
    h1 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 100;
      font-size: var(--iff__dimension--50);
    }
    h2 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 400;
      font-size: var(--iff__dimension--40);
    }
    h3 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 700;
      font-size: var(--iff__dimension--30);
    }
    h4 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 400;
      font-size: var(--iff__dimension--20);
    }
  `,Ut([Pt({type:Number})],Bt.prototype,"level",void 0),Bt=Ut([Jt("iff-title")],Bt);var Dt=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let Ht=class extends Wt{constructor(){super(...arguments),this.styling="paragraph",this.tag="p"}render(){const t=document.createElement(this.tag);return t.classList.add(this.styling),t.innerHTML="<slot></slot>",vt`${t}`}};Ht.styles=n`
    :host([styling='paragraph']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 400;
      font-size: var(--iff__dimension--15);
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
    :host([styling='paragraph-slim']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 100;
      font-size: var(--iff__dimension--15);
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
    :host([styling='paragraph-bold']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 700;
      font-size: var(--iff__dimension--15);
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
    :host([styling='label']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 400;
      font-size: var(--iff__dimension--12);
      line-height: 0.5rem;
    }
  `,Dt([Pt({reflect:!0})],Ht.prototype,"styling",void 0),Dt([Pt()],Ht.prototype,"tag",void 0),Ht=Dt([Jt("iff-text")],Ht);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zt=t=>null!=t?t:W;class Gt extends Event{constructor(t){super(Gt.eventName,{bubbles:!0,composed:!0}),this.view=t}}Gt.eventName="connected-store-event";var Kt=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let Ft=class extends Wt{render(){return vt`
      <a
        href=${Zt(this.href)}
        hreflang=${Zt(this.hreflang)}
        target=${Zt(this.target)}
        aria-label=${Zt(this.label)}
        rel=${Zt(this.rel)}
        referrerpolicy=${Zt(this.referrerpolicy)}
        @click=${()=>{if(this.event){const t=new Gt(this.event);this.dispatchEvent(t)}}}
      >
        <slot></slot>
      </a>
    `}};Ft.styles=n`
    a {
      cursor: pointer;
      text-decoration: none;
      position: relative;
      display: block;
    }
  `,Kt([Pt({reflect:!0})],Ft.prototype,"event",void 0),Kt([Pt({reflect:!0})],Ft.prototype,"href",void 0),Kt([Pt({reflect:!0})],Ft.prototype,"hreflang",void 0),Kt([Pt({reflect:!0})],Ft.prototype,"label",void 0),Kt([Pt({reflect:!0})],Ft.prototype,"referrerpolicy",void 0),Kt([Pt({reflect:!0})],Ft.prototype,"rel",void 0),Kt([Pt({reflect:!0})],Ft.prototype,"target",void 0),Ft=Kt([Jt("iff-link")],Ft);var Vt=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let qt=class extends Wt{constructor(){super(...arguments),this.eventPayload="payload",this.disabled=!1}render(){return vt`
      <button
        @click=${()=>{if(this.event){const t=new Gt(this.event);this.dispatchEvent(t)}}}
      >
        <slot></slot>
      </button>
    `}};qt.styles=n`
    :host([disabled]) {
      --iff-button__background-color: var(--iff-alias__body--background-color);
    }

    button {
      border: none;
      background-color: var(
        --iff-button__background-color,
        var(--iff-alias__background-color--primary)
      );
      --iff-state__font--color: var(--iff-alias__background-color--secondary);
      box-shadow: inset 0 0 0 2px var(--iff-alias__background-color--secondary);
      border-radius: 3px;
      cursor: pointer;
      padding: var(--iff-card__padding--top-bottom, 0.5rem)
        var(--var-card__padding--left-right, 2rem);
      border-radius: 5px;
      transition: all 150ms ease-in;
    }

    :slotted(*) {
      --iff-state__font--color: var(--iff-alias__background-color--secondary);
    }

    button:hover {
      box-shadow: inset 0 0 0 4px var(--iff-alias__background-color--secondary);
      transition: all 150ms ease-in;
    }
  `,Vt([Pt({reflect:!0})],qt.prototype,"event",void 0),Vt([Pt({reflect:!0})],qt.prototype,"eventPayload",void 0),Vt([Pt({reflect:!0,type:Boolean})],qt.prototype,"disabled",void 0),qt=Vt([Jt("iff-button")],qt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qt=1,Xt=t=>(...e)=>({_$litDirective$:t,values:e});class Yt{constructor(t){}T(t,e,i){this.Σdt=t,this.M=e,this.Σct=i}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=Xt(class extends Yt{constructor(t){var e;if(super(t),t.type!==Qt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.St){this.St=new Set;for(const t in e)this.St.add(t);return this.render(e)}this.St.forEach((t=>{null==e[t]&&(this.St.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.St.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return z}});var ee=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let ie=class extends Wt{constructor(){super(...arguments),this.url="url.to.link.to",this.backgroundColor="--iff-alias__color--complement",this.imageSrc="dev/Download.jpeg",this.eventPayload="payload"}render(){const t={"background-color":`var(${this.backgroundColor})`};return vt`
      <div
        class="card"
        style=${te(t)}
        @click=${()=>{if(this.event){const t=new Gt(this.event);this.dispatchEvent(t)}}}
      >
        <img src="${this.imageSrc}" alt="Alt tag" />
        <div class="body">
          <slot name="body">
            <slot name="label"></slot>
            <slot name="title"></slot>
            <slot name="lead"></slot>
          </slot>
        </div>
        <slot name="footer"></slot>
      </div>
    `}};ie.styles=n`
    :host {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: var(--iff-card__background-color);
      --iff-state__font--color: white;
    }

    .card {
      transition: all 500ms ease-in;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      border-radius: 5px;
      overflow: hidden;
    }

    .card:hover {
      box-shadow: 0px 0px 50px 1px var(--iff-alias__color--complement);
      transition: all 250ms ease-in;
    }

    img {
      border-radius: 5px;
      height: 10rem;
    }

    .body {
      padding: var(--iff__dimension--20);
      text-overflow: ellipsis;
    }

    @media screen and (min-width: 1024px) {
      .card {
        flex-direction: row;
        height: 25vh;
      }
      img {
        height: 100%;
        width: 200px;
      }
    }
  `,ee([Pt()],ie.prototype,"url",void 0),ee([Pt()],ie.prototype,"backgroundColor",void 0),ee([Pt({type:String})],ie.prototype,"imageSrc",void 0),ee([Pt({reflect:!0})],ie.prototype,"event",void 0),ee([Pt({reflect:!0})],ie.prototype,"eventPayload",void 0),ie=ee([Jt("iff-card")],ie);var se=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let oe=class extends Wt{render(){return vt`
      <div class="title-modal">
        <slot name="title"></slot>
        <div class="lead">
          <slot name="lead-text"></slot>
        </div>
      </div>
    `}};oe.styles=n`
    .title-lead {
      height: 100%;
    }

    .lead {
      --iff-state__font--color: var(--iff-alias__background-color--primary);
    }

    [name='lead-text']::slotted(*) {
      --iff-state__font--color: var(--iff-alias__background-color--primary);
    }
  `,oe=se([Jt("iff-title-lead")],oe);var ne=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let le=class extends Wt{render(){return vt`<slot></slot> `}};le.styles=n`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
    :host(:empty)::before {
      content: 'SMTH';
      color: black;
    }
    ::slotted(*) {
      --iff-card__padding--top-bottom: 0.15rem;
      --iff-card__padding--left-right: 0.15rem;
      margin: 0.3rem;
    }
  `,le=ne([Jt("iff-button-list")],le);var re=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let ae=class extends Wt{render(){return vt`${fe}<iff-link event="Intro"
        ><slot name="text"></slot
      ></iff-link>`}};ae.styles=n`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    svg {
      fill: var(--iff-alias__color--primary);
      height: 1rem;
      width: 1rem;
      transform: rotate(180deg);
      margin-right: 0.5rem;
    }
  `,ae=re([Jt("iff-icon-text")],ae);const fe=mt`<svg
  slot="icon"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 5H8.2L5.1 1.9L6.5 0.5L12 6L6.5 11.5L5.1 10.1L8.2 7H0V5Z" />
</svg>`;var ce=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let de=class extends Wt{constructor(){super(...arguments),this.styling="paragraph"}render(){return vt`
      <div class="header">
        <slot>
          <slot name="start"></slot>
          <slot name="end"></slot>
        </slot>
      </div>
    `}};de.styles=n`
    .header {
      padding-left: 0;
      height: 100%;
    }
    @media screen and (min-width: 1024px) {
      .header {
        padding-left: 3.2rem;
      }
    }
  `,ce([Pt()],de.prototype,"styling",void 0),de=ce([Jt("iff-header")],de);var he=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let ue=class extends Wt{render(){return vt`

      <iff-header><slot name="header"></slot></iff-header>
      <div class="body-layout">
        <slot name="body"></slot>
      </div>
      <div class="footer-layout">
        <slot name="footer">
        </slot>
        </div>
      </div>
    `}};ue.styles=n`
    :host {
      position: relative;
      display: flex;
      flex-direction: column;
      transition: all 250ms ease-in;
    }

    @media screen and (min-width: 1024px) {
      :host {
        display: initial;
      }
    }

    [name='body']::slotted(*) {
      min-height: calc(
        100vh - var(--iff-alias__header--height) -
          var(--iff-alias__header--height) - 1.6rem
      );
    }
    .footer-layout {
      display: flex;
      justify-content: center;
      padding-top: 1rem;
    }
    .body-layout {
      display: flex;
      justify-content: center;
    }
  `,ue=he([Jt("iff-page-layout")],ue);var pe=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let ve=class extends Wt{constructor(){super()}render(){return vt`
      <div class="start">
        <slot name="start-text"></slot>
      </div>

      <div class="end">
        <slot name="end-text"></slot>
      </div>
    `}};ve.styles=n`
    :host {
      position: relative;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
    }

    [name='start-text']::slotted(*) {
      padding: 25px;
    }

    [name='end-text']::slotted(*) {
      padding: 25px;
    }

    .start {
      transition: all 250ms ease-in;
    }

    /* .start:hover {
      background-color: var(--iff-alias__color--complement);
      --iff__font--color: var(--iff-alias__background-color--primary);
      transition: all 250ms ease-in;
      border-radius: 5px;
    } */

    .end {
      background-color: var(--iff-alias__background-color--complement);
      transition: all 250ms ease-in;
      border-radius: 5px;
    }

    .end:hover {
      background-color: var(--iff-alias__color--primary);
      --iff__font--color: var(--iff-alias__background-color--primary);
      transition: all 250ms ease-in;
    }

    @media screen and (min-width: 724px) {
      :host {
        position: relative;
        display: flex;
        height: 100%;
        align-items: stretch;
        flex-direction: row;
      }

      .start {
        width: 50%;
        height: auto;
      }

      .end {
        background-color: var(--iff-alias__background-color--primary);
        width: 50%;
        height: auto;
      }

      [name='start-text']::slotted(*) {
        display: block;
        padding: 25px;
      }

      [name='end-text']::slotted(*) {
        display: block;
        padding: 25px;
      }
    }
  `,ve=pe([Jt("iff-split")],ve);var me=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let be=class extends Wt{render(){return vt`<slot></slot> `}};be.styles=n`
    :host {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
    }

    ::slotted(*) {
      max-width: 90%;
      margin: 2.5%;
    }

    @media screen and (min-width: 724px) {
      ::slotted(*) {
        max-width: 80%;
        margin: 2.5%;
      }
    }
    @media screen and (min-width: 1024px) {
      ::slotted(*) {
        max-width: 1200px;
        margin: 1%;
      }
    }
  `,be=me([Jt("iff-row-layout")],be);var ge=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let xe=class extends Wt{render(){return vt`<slot></slot> `}};xe.styles=n`
    :host {
      display: flex;
      align-content: space-between;
      justify-content: center;
      align-items: flex-start;
      flex-flow: row wrap;
      height: 100%;
    }

    ::slotted(*) {
      max-width: 100%;
      padding-bottom: 2.5rem;
    }

    @media screen and (min-width: 1024px) {
      ::slotted(*) {
        max-width: 100%;
        padding-bottom: 0;
      }
    }
  `,xe=ge([Jt("iff-column-layout")],xe);var ye=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let _e=class extends Wt{constructor(){super()}render(){return vt`
      <div class="start">
        <slot name="start"></slot>
      </div>
      <div class="end">
        <slot name="end"></slot>
      </div>
    `}};_e.styles=n`
    :host {
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-around;
    }

    @media screen and (min-width: 1024px) {
      .start {
        width: 60vw;
        height: 100%;
      }
      .end {
        width: 30vw;
        height: 100%;
      }
    }
  `,_e=ye([Jt("iff-third-one-layout")],_e);var we=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let Te=class extends Wt{render(){return vt` <slot></slot> `}};Te.styles=n`
    :host {
      width: 800px;
    }
  `,Te=we([Jt("iff-slim-layout")],Te);const ke=(t,e)=>{const i=document.createElement(t);return e.forEach((t=>i.setAttribute(Object.keys(t)[0],t[Object.keys(t)[0]]))),i},Ne=(t,e)=>(e.forEach((e=>{const i=ke(e.component,e.props);i.setAttribute("slot",e.slotName),i.innerHTML=e.innerText?e.innerText:"",e.slots.length>0&&Ne(i,e.slots),t.appendChild(i)})),t),$e={Intro:[{component:"iff-page-layout",props:[],innerText:"",slots:[{slotName:"header",component:"iff-title",props:[{level:"1"}],innerText:"Julian Iff",slots:[]},{slotName:"body",component:"iff-row-layout",props:[],slots:[{slotName:"",component:"iff-split",props:[],slots:[{slotName:"start-text",component:"iff-link",props:[],slots:[{slotName:"",component:"iff-title-lead",props:[],innerText:"What I like",slots:[{slotName:"title",component:"iff-title",props:[{level:2}],innerText:"What I like",slots:[]},{slotName:"lead-text",component:"iff-button-list",props:[],innerText:"",slots:[{slotName:"",component:"iff-button",props:[{event:"JsonToLit"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Typescript",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"React",slots:[]}]},{slotName:"",component:"iff-button",props:[{event:"JsonToLit"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Web Components",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Vue.js",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"styled-components",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Redux",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"PHP / Laravel",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Kotlin",slots:[]}]},{slotName:"",component:"iff-button",props:[{event:"Flyby"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Go",slots:[]}]},{slotName:"",component:"iff-button",props:[{event:"JsonToLit"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Node",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Spring-Boot",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"K8s",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Azure Pipelines",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Scalable components",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Design System",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Micro Services",slots:[]}]},{slotName:"",component:"iff-button",props:[{disabled:"true"}],innerText:"",slots:[{slotName:"",component:"iff-text",props:[{styling:"label"}],innerText:"Cluster",slots:[]}]}]}]}]},{slotName:"end-text",component:"iff-link",props:[{href:"dev/projects"}],slots:[{slotName:"",component:"iff-title-lead",props:[],slots:[{slotName:"title",component:"iff-title",props:[{level:2}],innerText:"Whoami",slots:[]},{slotName:"lead-text",component:"iff-title",props:[{level:4}],innerText:"My passion is to create new digital features and products that transform how users achieve their goals.",slots:[]}]}]}]}]}]}],JsonToLit:[{component:"iff-page-layout",props:[],innerText:"",slots:[{slotName:"header",component:"iff-title",props:[{level:"1"}],innerText:"Julian Iff",slots:[]},{slotName:"header",component:"iff-icon-text",props:[{event:"Intro"}],innerText:"",slots:[{slotName:"text",component:"iff-text",props:[{styling:"paragraph"}],innerText:"back",slots:[]}]},{slotName:"body",component:"iff-slim-layout",props:[],innerText:"",slots:[{slotName:"",component:"iff-title",props:[{level:"3"}],innerText:"Json to Lit (Webcomponents)",slots:[]},{slotName:"",component:"iff-text",props:[],innerText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",slots:[]}]}]}],Flyby:[{component:"iff-page-layout",props:[],innerText:"",slots:[{slotName:"header",component:"iff-title",props:[{level:"1"}],innerText:"Julian Iff",slots:[]},{slotName:"header",component:"iff-icon-text",props:[{event:"Intro"}],innerText:"",slots:[{slotName:"text",component:"iff-text",props:[{styling:"paragraph"}],innerText:"back",slots:[]}]},{slotName:"body",component:"iff-slim-layout",props:[],innerText:"",slots:[{slotName:"",component:"iff-title",props:[{level:"3"}],innerText:"Json to Lit (Webcomponents)",slots:[]},{slotName:"",component:"iff-text",props:[],innerText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",slots:[]}]}]}],Code:[{component:"iff-page-layout",props:[{theme:"dark"}],innerText:"",slots:[{slotName:"header",component:"iff-title",props:[{level:"1"}],innerText:"Julian Iff",slots:[]},{slotName:"header",component:"iff-title",props:[{level:"4"}],innerText:"Code Projects",slots:[]},{slotName:"header",component:"iff-icon-text",props:[{event:"Intro"}],innerText:"",slots:[{slotName:"text",component:"iff-text",props:[{styling:"paragraph"}],innerText:"back",slots:[]}]},{slotName:"body",component:"iff-slim-layout",props:[],slots:[{slotName:"",component:"iff-card",props:[{imageSrc:"images/blocks.jpeg"},{backgroundColor:"--iff-alias__color--accent-one"},{event:"JsonToLit"}],slots:[{slotName:"title",component:"iff-title",props:[{level:"4"}],innerText:"JSON to Lit (Webcomponents)",slots:[]},{slotName:"lead",component:"iff-text",props:[{styling:"paragraph-slim"}],innerText:"Input JSON to generate Lit Webcomponents. Can be useful for headless CMS Systems or Design Systems.",slots:[]}]},{slotName:"",component:"iff-card",props:[{imageSrc:"images/line_down.jpeg"},{backgroundColor:"--iff-alias__color--accent-two"}],slots:[{slotName:"title",component:"iff-title",props:[{level:"4"}],innerText:"&lt; iff-* Design System",slots:[]},{slotName:"lead",component:"iff-text",props:[{styling:"paragraph-slim"}],innerText:"A small design system built with Lit Webcomponents with CSS and Slot Stacking",slots:[]}]},{slotName:"",component:"iff-card",props:[{imageSrc:"images/round_block.jpeg"},{backgroundColor:"--iff-alias__color--accent-three"}],slots:[{slotName:"title",component:"iff-title",props:[{level:"4"}],innerText:"Flyby-Test Suite",slots:[]},{slotName:"lead",component:"iff-text",props:[{styling:"paragraph-slim"}],innerText:"Integration API Test Suite to automate Regression tests.",slots:[]}]}]}]}],Slideshow:[{component:"iff-page-layout",props:[{theme:"lightdarkdark"}],innerText:"",slots:[{slotName:"header",component:"iff-title",props:[{level:"1"}],innerText:"Julian Iff",slots:[]}]}]};class Se{constructor(t,e){this.host=t,t.addController(this),e&&(this.renderViews=Xt(je)($e[e]))}_updateRender(t){this.renderViews=Xt(je)($e[t]),this.host.requestUpdate()}hostConnected(){window.addEventListener(Gt.eventName,(t=>this._updateRender(t.view)),!1)}hostDisconnected(){window.removeEventListener(Gt.eventName,(t=>this._updateRender(t.view)),!1)}}class je extends Yt{render(t){return t.map((t=>{const e=ke(t.component,t.props);return Ne(e,t.slots)}))}}class Oe{constructor(t){t.addController(this)}hostConnected(){var t;const e=window.sessionStorage.getItem("theme");e&&(null===(t=document.querySelector("body"))||void 0===t||t.setAttribute("theme",e))}}var Ce=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let Ie=class extends Wt{constructor(){super(),this.content=new Se(this,this.view),this.theme="blue-gradiant",new Oe(this)}render(){return vt`
      <div class="base-layout">
        ${this.content.renderViews?this.content.renderViews:gt}
      </div>
    `}};Ie.styles=[n`
      .base-layout {
        padding: 5px;
      }

      @media screen and (min-width: 724px) {
        .button-list {
          flex-direction: row;
        }
        .base-layout {
          padding: 0px;
        }
      }
    `],Ce([Pt({reflect:!0})],Ie.prototype,"view",void 0),Ce([Rt()],Ie.prototype,"content",void 0),Ce([Pt({reflect:!0})],Ie.prototype,"theme",void 0),Ie=Ce([Jt("iff-base-page")],Ie);var Le=function(t,e,i,s){for(var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let Me=class extends Wt{constructor(){super(),this.setThemeColor=t=>{var e;null===(e=document.querySelector("body"))||void 0===e||e.setAttribute("theme",t),window.sessionStorage.setItem("theme",t)},new Oe(this)}render(){return vt`
      <div class="button-list">
        <iff-button @click=${()=>this.setThemeColor("light")}>
          <iff-text styling="label">Light</iff-text>
        </iff-button>
        <iff-button @click=${()=>this.setThemeColor("black")}>
          <iff-text styling="label">Black</iff-text>
        </iff-button>
        <iff-button @click=${()=>this.setThemeColor("blue-gradiant")}>
          <iff-text styling="label">Blue</iff-text>
        </iff-button>
        <iff-button @click=${()=>this.setThemeColor("redGreen")}>
          <iff-text styling="label">Red Green</iff-text>
        </iff-button>
        <iff-button @click=${()=>this.setThemeColor("triColor")}>
          <iff-text styling="label">TriColor</iff-text>
        </iff-button>
        <iff-button @click=${()=>this.setThemeColor("wood")}>
          <iff-text styling="label">Wood</iff-text>
        </iff-button>
        <iff-button @click=${()=>this.setThemeColor("blueGreen")}>
          <iff-text styling="label">Blue Green</iff-text>
        </iff-button>
      </div>
    `}};Me.styles=n`
    .button-list {
      display: flex;
      flex-direction: row;
      padding-top: 5px;
      padding-left: 25px;
      flex-wrap: wrap;
    }
    .button-list :not(:last-child) {
      padding-right: 5px;
    }
  `,Le([Rt()],Me.prototype,"setThemeColor",void 0),Me=Le([Jt("iff-footer")],Me);
