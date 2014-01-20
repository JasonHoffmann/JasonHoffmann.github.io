/* **********************************************
     Begin modernizr.js
********************************************** *//* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-flexboxlegacy-canvas-canvastext-history-inlinesvg-svg-svgclippaths-shiv-mq-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */window.Modernizr=function(e,t,n){function k(e){a.cssText=e}function L(e,t){return k(c.join(e+";")+(t||""))}function A(e,t){return typeof e===t}function O(e,t){return!!~(""+e).indexOf(t)}function M(e,t){for(var r in e){var i=e[r];if(!O(i,"-")&&a[i]!==n)return t=="pfx"?i:!0}return!1}function _(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:A(s,"function")?s.bind(r||t):s}return!1}function D(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+p.join(r+" ")+r).split(" ");if(A(t,"string")||A(t,"undefined"))return M(i,t);i=(e+" "+d.join(r+" ")+r).split(" ");return _(i,t,n)}var r="2.7.1",i={},s=t.documentElement,o="modernizr",u=t.createElement(o),a=u.style,f,l={}.toString,c=" -webkit- -moz- -o- -ms- ".split(" "),h="Webkit Moz O ms",p=h.split(" "),d=h.toLowerCase().split(" "),v={svg:"http://www.w3.org/2000/svg"},m={},g={},y={},b=[],w=b.slice,E,S=function(e,n,r,i){var u,a,f,l,c=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10))while(r--){f=t.createElement("div");f.id=i?i[r]:o+(r+1);c.appendChild(f)}u=["&#173;",'<style id="s',o,'">',e,"</style>"].join("");c.id=o;(h?c:p).innerHTML+=u;p.appendChild(c);if(!h){p.style.background="";p.style.overflow="hidden";l=s.style.overflow;s.style.overflow="hidden";s.appendChild(p)}a=n(c,e);if(!h){p.parentNode.removeChild(p);s.style.overflow=l}else c.parentNode.removeChild(c);return!!a},x=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;S("@media "+t+" { #"+o+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"});return r},T=function(){function r(r,i){i=i||t.createElement(e[r]||"div");r="on"+r;var s=r in i;if(!s){i.setAttribute||(i=t.createElement("div"));if(i.setAttribute&&i.removeAttribute){i.setAttribute(r,"");s=A(i[r],"function");A(i[r],"undefined")||(i[r]=n);i.removeAttribute(r)}}i=null;return s}var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return r}(),N={}.hasOwnProperty,C;!A(N,"undefined")&&!A(N.call,"undefined")?C=function(e,t){return N.call(e,t)}:C=function(e,t){return t in e&&A(e.constructor.prototype[t],"undefined")};Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError;var r=w.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,o=n.apply(s,r.concat(w.call(arguments)));return Object(o)===o?o:s}return n.apply(t,r.concat(w.call(arguments)))};return i});m.flexboxlegacy=function(){return D("boxDirection")};m.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")};m.canvastext=function(){return!!i.canvas&&!!A(t.createElement("canvas").getContext("2d").fillText,"function")};m.history=function(){return!!e.history&&!!history.pushState};m.svg=function(){return!!t.createElementNS&&!!t.createElementNS(v.svg,"svg").createSVGRect};m.inlinesvg=function(){var e=t.createElement("div");e.innerHTML="<svg/>";return(e.firstChild&&e.firstChild.namespaceURI)==v.svg};m.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(l.call(t.createElementNS(v.svg,"clipPath")))};for(var P in m)if(C(m,P)){E=P.toLowerCase();i[E]=m[P]();b.push((i[E]?"":"no-")+E)}i.addTest=function(e,t){if(typeof e=="object")for(var r in e)C(e,r)&&i.addTest(r,e[r]);else{e=e.toLowerCase();if(i[e]!==n)return i;t=typeof t=="function"?t():t;typeof enableClasses!="undefined"&&enableClasses&&(s.className+=" "+(t?"":"no-")+e);i[e]=t}return i};k("");u=f=null;(function(e,t){function c(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;n.innerHTML="x<style>"+t+"</style>";return r.insertBefore(n.lastChild,r.firstChild)}function h(){var e=y.elements;return typeof e=="string"?e.split(" "):e}function p(e){var t=f[e[u]];if(!t){t={};a++;e[u]=a;f[a]=t}return t}function d(e,n,r){n||(n=t);if(l)return n.createElement(e);r||(r=p(n));var o;r.cache[e]?o=r.cache[e].cloneNode():s.test(e)?o=(r.cache[e]=r.createElem(e)).cloneNode():o=r.createElem(e);return o.canHaveChildren&&!i.test(e)&&!o.tagUrn?r.frag.appendChild(o):o}function v(e,n){e||(e=t);if(l)return e.createDocumentFragment();n=n||p(e);var r=n.frag.cloneNode(),i=0,s=h(),o=s.length;for(;i<o;i++)r.createElement(s[i]);return r}function m(e,t){if(!t.cache){t.cache={};t.createElem=e.createElement;t.createFrag=e.createDocumentFragment;t.frag=t.createFrag()}e.createElement=function(n){return y.shivMethods?d(n,e,t):t.createElem(n)};e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/[\w\-]+/g,function(e){t.createElem(e);t.frag.createElement(e);return'c("'+e+'")'})+");return n}")(y,t.frag)}function g(e){e||(e=t);var n=p(e);y.shivCSS&&!o&&!n.hasCSS&&(n.hasCSS=!!c(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"));l||m(e,n);return e}var n="3.7.0",r=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,s=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o,u="_html5shiv",a=0,f={},l;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>";o="hidden"in e;l=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){o=!0;l=!0}})();var y={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:n,shivCSS:r.shivCSS!==!1,supportsUnknownElements:l,shivMethods:r.shivMethods!==!1,type:"default",shivDocument:g,createElement:d,createDocumentFragment:v};e.html5=y;g(t)})(this,t);i._version=r;i._prefixes=c;i._domPrefixes=d;i._cssomPrefixes=p;i.mq=x;i.hasEvent=T;i.testProp=function(e){return M([e])};i.testAllProps=D;i.testStyles=S;i.prefixed=function(e,t,n){return t?D(e,t,n):D(e,"pfx")};return i}(this,this.document);(function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};(function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function s(e,t){var s=n(e,t)?i:r;s(e,t)}var n,r,i;if("classList"in document.documentElement){n=function(e,t){return e.classList.contains(t)};r=function(e,t){e.classList.add(t)};i=function(e,t){e.classList.remove(t)}}else{n=function(e,n){return t(n).test(e.className)};r=function(e,t){n(e,t)||(e.className=e.className+" "+t)};i=function(e,n){e.className=e.className.replace(t(n)," ")}}var o={hasClass:n,addClass:r,removeClass:i,toggleClass:s,has:n,add:r,remove:i,toggle:s};typeof define=="function"&&define.amd?define(o):e.classie=o})(window);$(function(){var e=!1,t=$(window).width(),n=$("#main-content"),r=$("#lightbox"),i=$(".js-close"),s=$(".js-tidy"),o=$(".js-lcbc"),u=$(".hover");u.on("click",function(){var s=$(this).attr("href");r.width(t).removeClass("closed").addClass("open");setTimeout(function(){r.load(s+" #guts",function(){n.fadeIn(200,function(){})});i.removeClass("is-vishidden")},1e3);var o=$(this).attr("href");history.pushState(null,null,o);e=!0;return!1});s.on("click",function(){r.addClass("make-tidy")});o.on("click",function(){r.addClass("make-incarceration")});i.on("click",function(){window.history.back()});$(window).bind("popstate",function(){if(e){r.empty();r.removeAttr("style");r.removeClass("open").addClass("closed");i.addClass("is-vishidden");setTimeout(function(){r.removeClass("make-tidy");r.removeClass("make-incarceration")},1e3)}e=!0})});(function(){"use strict";function e(e){this.el=e;this.current_frame=0;this.total_frames=60;this.path=[];this.length=[];this.handle=0;this.init()}function t(){var t=Array.prototype.slice.call(document.querySelectorAll("#first svg"));t.forEach(function(t){var n=new e(t);setTimeout(function(){n.render()},Math.floor(Math.random()*4001+5e3))});var n=Array.prototype.slice.call(document.querySelectorAll("#internet-iphone")),r=Array.prototype.slice.call(document.querySelectorAll("#internet-ipad")),i=Array.prototype.slice.call(document.querySelectorAll("#internet-laptop")),s=Array.prototype.slice.call(document.querySelectorAll("#internet-computer")),o=Array.prototype.slice.call(document.querySelectorAll("#internet-tv")),u=Array.prototype.slice.call(document.querySelectorAll("#internet-robot"));n.forEach(function(t){var n=new e(t);setTimeout(function(){n.render()},7500)});r.forEach(function(t){var n=new e(t);setTimeout(function(){n.render()},8250)});i.forEach(function(t){var n=new e(t);setTimeout(function(){n.render()},9e3)});s.forEach(function(t){var n=new e(t);setTimeout(function(){n.render()},9500)});o.forEach(function(t){var n=new e(t);setTimeout(function(){n.render()},1e4)});u.forEach(function(t){var n=new e(t);setTimeout(function(){n.render()},10500)})}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();window.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(e){window.clearTimeout(e)}}();e.prototype.init=function(){var e=this;[].slice.call(this.el.querySelectorAll("path")).forEach(function(t,n){e.path[n]=t;var r=e.path[n].getTotalLength();e.length[n]=r;e.path[n].style.strokeDasharray=r+" "+r;e.path[n].style.strokeDashoffset=r})};e.prototype.render=function(e){if(this.rendered)return;e&&(this.domEl=e);this.rendered=!0;this.draw()};e.prototype.draw=function(){var e=this,t=this.current_frame/this.total_frames;if(t>1){window.cancelAnimFrame(this.handle);this.showDomEl()}else{this.current_frame++;for(var n=0,r=this.path.length;n<r;n++)this.path[n].style.strokeDashoffset=Math.floor(this.length[n]*(1-t));this.handle=window.requestAnimFrame(function(){e.draw()})}};e.prototype.showDomEl=function(){if(this.domEl){classie.remove(this.domEl,"hide");classie.add(this.domEl,"show")}};t()})();