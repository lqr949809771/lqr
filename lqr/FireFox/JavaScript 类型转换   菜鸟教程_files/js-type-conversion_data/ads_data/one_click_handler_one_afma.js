(function(){function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ca(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var q=this||self; 
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null"; 
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function r(a){return"array"==da(a)}function t(a){return"function"==da(a)}var ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0,u=Date.now||function(){return+new Date};function v(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ha=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};function ia(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};function ka(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function w(a,b){this.b=a===la&&b||"";this.c=ma}w.prototype.f=!0;w.prototype.a=function(){return this.b.toString()};var na=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function oa(a){if(a instanceof w)return a;a="object"==typeof a&&a.f?a.a():String(a);na.test(a)||(a="about:invalid#zClosurez");return new w(la,a)}var ma={},la={};function pa(a){pa[" "](a);return a}pa[" "]=function(){};function x(a,b){this.b=a;this.f=b;this.a={};this.c=!0;if(0<this.b.length){for(a=0;a<this.b.length;a++){b=this.b[a];var c=b[0];this.a[c.toString()]=new ra(c,b[1])}this.c=!0}}x.prototype.h=function(){if(this.c){if(this.f){var a=this.a,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].a;c&&c.h()}}}else{this.b.length=0;a=y(this);a.sort();for(b=0;b<a.length;b++){var d=this.a[a[b]];(c=d.a)&&c.h();this.b.push([d.key,d.value])}this.c=!0}return this.b};function A(a){this.a=0;this.b=a} 
A.prototype.next=function(){return this.a<this.b.length?{done:!1,value:this.b[this.a++]}:{done:!0,value:void 0}};"undefined"!=typeof Symbol&&(A.prototype[Symbol.iterator]=function(){return this});x.prototype.entries=function(){var a=[],b=y(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,B(this,d)])}return new A(a)};x.prototype.keys=function(){var a=[],b=y(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.a[b[c]].key);return new A(a)}; 
x.prototype.values=function(){var a=[],b=y(this);b.sort();for(var c=0;c<b.length;c++)a.push(B(this,this.a[b[c]]));return new A(a)};function sa(a,b){var c=y(a);c.sort();for(var d=0;d<c.length;d++){var e=a.a[c[d]];b.call(void 0,B(a,e),e.key,a)}}x.prototype.set=function(a,b){var c=new ra(a);this.f?(c.a=b,c.value=b.h()):c.value=b;this.a[a.toString()]=c;this.c=!1;return this};function B(a,b){return a.f?(b.a||(b.a=new a.f(b.value)),b.a):b.value} 
x.prototype.get=function(a){if(a=this.a[a.toString()])return B(this,a)};x.prototype.has=function(a){return a.toString()in this.a};function y(a){a=a.a;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function ra(a,b){this.key=a;this.value=b;this.a=void 0};function C(){}var ta="function"==typeof Uint8Array;function D(a,b,c){a.a=null;b||(b=[]);a.l=void 0;a.f=-1;a.b=b;a:{if(b=a.b.length){--b;var d=a.b[b];if(!(null===d||"object"!=typeof d||r(d)||ta&&d instanceof Uint8Array)){a.g=b-a.f;a.c=d;break a}}a.g=Number.MAX_VALUE}a.i={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.g?(d+=a.f,a.b[d]=a.b[d]||E):(ua(a),a.c[d]=a.c[d]||E)}var E=[];function ua(a){var b=a.g+a.f;a.b[b]||(a.c=a.b[b]={})} 
function F(a,b){if(b<a.g){b+=a.f;var c=a.b[b];return c===E?a.b[b]=[]:c}if(a.c)return c=a.c[b],c===E?a.c[b]=[]:c}function G(a,b,c){a=F(a,b);return null==a?c:a}function H(a,b){a=F(a,b);a=null==a?a:!!a;return null==a?!1:a}function I(a,b,c){a.a||(a.a={});if(b in a.a)return a.a[b];var d=F(a,b);d||(d=[],J(a,b,d));return a.a[b]=new x(d,c)}function J(a,b,c){b<a.g?a.b[b+a.f]=c:(ua(a),a.c[b]=c)}function va(a,b,c){a.a||(a.a={});if(!a.a[c]){var d=F(a,c);d&&(a.a[c]=new b(d))}return a.a[c]} 
function wa(a){if(a.a)for(var b in a.a){var c=a.a[b];if(r(c))for(var d=0;d<c.length;d++)c[d]&&c[d].h();else c&&c.h()}}C.prototype.h=function(){wa(this);return this.b};C.prototype.toString=function(){wa(this);return this.b.toString()};function K(a){if(r(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?K(d):d)}return b}if(ta&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?K(d):d);return b};function xa(a){D(this,a,null)}v(xa,C);function L(a){D(this,a,ya)}v(L,C);function za(a){D(this,a,null)}v(za,C);function Aa(a){D(this,a,null)}v(Aa,C);var ya=[6];function Ba(a){D(this,a,Ca)}v(Ba,C);var Ca=[7];var M=document,N=window;function Da(a,b,c){if(r(b))for(var d=0;d<b.length;d++)Da(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};function O(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{pa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Ea(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var Fa={capture:!0},Ga={passive:!0},Ha=ka(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});q.addEventListener("test",null,b)}catch(c){}return a});function Ia(a){return a?a.passive&&Ha()?a:a.capture||!1:!1}function P(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Ia(d))}function Ja(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,Ia(void 0))};function Ka(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(f){c&&c(f);Ja(d,"load",e);Ja(d,"error",e)};P(d,"load",e);P(d,"error",e)}d.src=b;a.google_image_requests.push(d)}function La(a){var b;if(b=N.navigator)b=N.navigator.userAgent,b=/Chrome/.test(b)&&!/Edge/.test(b)?!0:!1;b&&N.navigator.sendBeacon?N.navigator.sendBeacon(a):Ka(N,a,null)};var Ma=/^((market|itms|intent|itms-appss):\/\/)/i;function Q(a,b,c){b=b instanceof w||!Ma.test(b)?b:new w(la,b);"about:invalid#zClosurez"===(b instanceof w?b:oa(b)).a()&&c(String(b));c=b instanceof w?b:oa(b);c instanceof w&&c.constructor===w&&c.c===ma?c=c.b:(da(c),c="type_error:SafeUrl");a.href=c} 
function S(a){var b=(Na()?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/gen_204";return function(c){c={id:"unsafeurl",ctx:a,url:c};var d=[];for(e in c)Da(e,c[e],d);var e=d.join("&");if(e){c=b.indexOf("#");0>c&&(c=b.length);d=b.indexOf("?");if(0>d||d>c){d=c;var f=""}else f=b.substring(d+1,c);c=[b.substr(0,d),f,b.substr(c)];d=c[1];c[1]=e?d?d+"&"+e:e:d;e=c[0]+(c[1]?"?"+c[1]:"")+c[2]}else e=b;navigator.sendBeacon&&navigator.sendBeacon(e,"")}};function Na(){var a=void 0===a?N:a;return"http:"===a.location.protocol}var Oa=!!window.google_async_iframe_id,T=Oa&&window.parent||window;function Pa(a){try{return M.querySelectorAll("*["+a+"]")}catch(b){return[]}};function Qa(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var Ra=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function Sa(a,b){this.a=a;this.b=b}function Ta(a,b){this.url=a;this.s=!!b;this.depth=null};function Ua(){this.c="&";this.f=!1;this.b={};this.g=0;this.a=[]}function Va(a,b){var c={};c[a]=b;return[c]}function Wa(a,b,c,d,e){var f=[];Ea(a,function(h,g){(h=Xa(h,b,c,d,e))&&f.push(g+"="+h)});return f.join(b)} 
function Xa(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],h=0;h<a.length;h++)f.push(Xa(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Wa(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function U(a,b,c,d){a.a.push(b);a.b[b]=Va(c,d)} 
function Ya(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=Za(a)-c.length;if(0>d)return"";a.a.sort(function(n,k){return n-k});c=null;for(var e="",f=0;f<a.a.length;f++)for(var h=a.a[f],g=a.b[h],l=0;l<g.length;l++){if(!d){c=null==c?h:c;break}var m=Wa(g[l],a.c,",$");if(m){m=e+m;if(d>=m.length){d-=m.length;b+=m;e=a.c;break}a.f&&(e=d,m[e-1]==a.c&&--e,b+=m.substr(0,e),e=a.c,d=0);c=null==c?h:c}}a="";null!=c&&(a=e+"trn="+c);return b+a} 
function Za(a){var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return 3997-b-a.c.length-1};function $a(){this.b=Na()?"http:":"https:";this.a=Math.random()}function ab(){var a=V,b=W.google_srt;0<=b&&1>=b&&(a.a=b)}function bb(a,b,c,d,e,f){if((d?a.a:Math.random())<(e||.01))try{if(c instanceof Ua)var h=c;else h=new Ua,Ea(c,function(l,m){var n=h,k=n.g++;l=Va(m,l);n.a.push(k);n.b[k]=l});var g=Ya(h,a.b,"/pagead/gen_204?id="+b+"&");g&&("undefined"===typeof f?Ka(q,g,null):Ka(q,g,void 0===f?null:f))}catch(l){}};var cb=null;function db(){var a=q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):u()}function eb(){var a=void 0===a?q:a;return(a=a.performance)&&a.now?a.now():null};function fb(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var X=q.performance,gb=!!(X&&X.mark&&X.measure&&X.clearMarks),Y=ka(function(){var a;if(a=gb){var b;if(null===cb){cb="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(cb=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=cb;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function ib(){var a=W;this.b=[];this.c=a||q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.b=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.a=Y()||(null!=b?b:1>Math.random())}function jb(a){a&&X&&Y()&&(X.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),X.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))} 
ib.prototype.start=function(a,b){if(!this.a)return null;var c=eb()||db();a=new fb(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";X&&Y()&&X.mark(b);return a};function kb(){var a=lb;this.c=V;this.b=null;this.i=this.g;this.a=void 0===a?null:a;this.f=!1}kb.prototype.pinger=function(){return this.c}; 
function nb(a,b,c){try{if(a.a&&a.a.a){var d=a.a.start(b.toString(),3);var e=c();var f=a.a;c=d;if(f.a&&"number"===typeof c.value){var h=eb()||db();c.duration=h-c.value;var g="goog_"+c.label+"_"+c.uniqueId+"_end";X&&Y()&&X.mark(g);!f.a||2048<f.b.length||f.b.push(c)}}else e=c()}catch(l){f=!0;try{jb(d),f=a.i(b,new Qa(l,{message:ob(l)}),void 0,void 0)}catch(m){a.g(217,m)}if(!f)throw l;}return e} 
function pb(a,b){var c=Z;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return nb(c,a,function(){return b.apply(void 0,e)})}} 
kb.prototype.g=function(a,b,c,d,e){e=e||"jserror";try{var f=new Ua;f.f=!0;U(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Qa(b,{message:ob(b)}));b.msg&&U(f,2,"msg",b.msg.substring(0,512));var h=b.meta||{};if(this.b)try{this.b(h)}catch(ba){}if(d)try{d(h)}catch(ba){}b=[h];f.a.push(3);f.b[3]=b;d=q;b=[];h=null;do{var g=d;if(O(g)){var l=g.location.href;h=g.document&&g.document.referrer||null}else l=h,h=null;b.push(new Ta(l||""));try{d=g.parent}catch(ba){d=null}}while(d&&g!=d);l=0;for(var m=b.length-1;l<= 
m;++l)b[l].depth=m-l;g=q;if(g.location&&g.location.ancestorOrigins&&g.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var n=b[m];n.url||(n.url=g.location.ancestorOrigins[m-1]||"",n.s=!0)}var k=new Ta(q.location.href,!1);g=null;var qa=b.length-1;for(n=qa;0<=n;--n){var z=b[n];!g&&Ra.test(z.url)&&(g=z);if(z.url&&!z.s){k=z;break}}z=null;var Cb=b.length&&b[qa].url;0!=k.depth&&Cb&&(z=b[qa]);var R=new Sa(k,z);R.b&&U(f,4,"top",R.b.url||"");U(f,5,"url",R.a.url||"");bb(this.c,e,f,this.f, 
c)}catch(ba){try{bb(this.c,e,{context:"ecmserr",rctx:a,msg:ob(ba),url:R&&R.a.url},this.f,c)}catch(Jb){}}return!0};function ob(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var V,Z,qb;if(Oa&&!O(T)){var rb="."+M.domain;try{for(;2<rb.split(".").length&&!O(T);)M.domain=rb=rb.substr(rb.indexOf(".")+1),T=window.parent}catch(a){}O(T)||(T=window)}var W=T,lb=new ib;function sb(){if(!W.google_measure_js_timing){var a=lb;a.a=!1;a.b!=a.c.google_js_reporting_queue&&(Y()&&ha(a.b,jb),a.b.length=0)}} 
(function(){V=new $a;"number"!==typeof W.google_srt&&(W.google_srt=Math.random());ab();Z=new kb;Z.b=function(b){var c=N.jerExpIds;if(r(c)&&0!==c.length){var d=b.eid;if(d){c=ca(d.split(",")).concat(ca(c));d={};for(var e=0,f=0;f<c.length;){var h=c[f++];var g=h;var l=typeof g;g="object"==l&&null!=g||"function"==l?"o"+(g[ea]||(g[ea]=++fa)):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(d,g)||(d[g]=!0,c[e++]=h)}c.length=e;b.eid=c.join(",")}else b.eid=c.join(",")}qb&&(b.jc=qb);(c=N.jerUserAgent)&& 
(b.useragent=c)};Z.f=!0;"complete"==W.document.readyState?sb():lb.a&&P(W,"load",function(){sb()});var a=M.currentScript;qb=a?a.dataset.jc:""})();function tb(a,b){return pb(a,b)}function ub(a){bb(V,"gdn-asoch",a,!0,void 0,void 0)};function vb(a){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var b=/[?&]adurl=([^&]+)/.exec(a);if(!b)return null;var c=b.index;try{return{m:a.slice(0,c)+"&act=1"+a.slice(c),finalUrl:decodeURIComponent(b[1])}}catch(e){return null}}if(0<a.indexOf("&ae=2")){b=a;c="";var d=a.indexOf("&adurl=");0<d&&(b=a.slice(0,d),c=a.slice(d));return{m:b+"&act=1"+c,finalUrl:b+"&dct=1"+c}}return null};function wb(a){var b=xb(a.href);Q(a,b.j,S(599))}function xb(a){var b=vb(a);return b?navigator.sendBeacon?navigator.sendBeacon(yb(b.m,"&ri=1"),"")?{j:b.finalUrl,o:!0}:{j:yb(a,"&ri=2"),o:!1}:{j:yb(a,"&ri=16"),o:!1}:{j:a,o:!1}}function yb(a,b){var c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)};function zb(a,b){b=G(a,2,"")||b;if(!b)return"";var c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;var d=[b.slice(0,c.index+1)];sa(I(a,4,null),function(e,f){d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")} 
function Ab(a){var b=Pa("data-asoch-targets");a=I(a,1,L);for(var c=[],d=0;d<b.length;++d){for(var e=b[d].getAttribute("data-asoch-targets"),f=e.split(","),h=!0,g=p(f),l=g.next();!l.done;l=g.next())if(!a.has(l.value)){h=!1;break}if(h){h=a.get(f[0]);for(e=1;e<f.length;++e){g=a.get(f[e]);h=(new h.constructor(K(h.h()))).h();g=g.h();l=Math.max(h.length,g.length);for(var m=0;m<l;++m)null==h[m]&&(h[m]=g[m]);h=new L(h)}f=I(h,4,null);null!=F(h,5)&&f.set("nb",G(h,5,0).toString());c.push({element:b[d],data:h})}else ub({type:1, 
data:e})}return c}function Bb(a){a=p(a);for(var b=a.next();!b.done;b=a.next()){var c=b.value;b=c.data;if("A"==c.element.tagName&&!H(b,1)){c=c.element;var d=zb(b,c.href);0<d.length&&(Q(c,d,S(609)),c.target||(c.target=null!=F(b,11)?G(b,11,""):"_top"))}}};function Db(){var a=this,b=Pa("data-asoch-meta");if(1!==b.length)ub({type:2,data:b.length});else{this.a=new Ba(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.b=Ab(this.a);this.f=-Infinity;this.c=G(this.a,5,"")||"";this.l=[];b=p(F(this.a,7));for(var c=b.next();!c.done;c=b.next()){c=M.querySelectorAll(c.value);for(var d=0;d<c.length;d++)this.l.push(c[d])}this.i=this.g=null;H(this.a,3)||(Bb(this.b),J(this.a,3,!0));Eb(this.b);P(M,"click",tb(557,function(e){a:if(!e.defaultPrevented||a.g=== 
e){for(var f,h,g=e.target,l=0<a.l.length?!1:!0,m=p(a.l),n=m.next();!n.done;n=m.next())if(n.value.contains(g)){l=!0;break}if(l){for(;(!f||!h)&&g;)h||"A"!=g.tagName||(h=g),f||"A"!=g.tagName&&!g.hasAttribute("data-asoch-targets")||!(l=Fb(a.b,g))||(f=l.data),g=g.parentElement;if(g=f&&!H(f,1)){if(e.defaultPrevented){g=f;if(a.g===e&&a.i){l=new xa(a.i);f=G(g,9,"");m="";switch(G(l,4,1)){case 2:if(G(l,2,0))m="blocked_fast_click";else if(G(l,1,"")||G(l,7,""))m="blocked_border_click";break;case 3:var k=void 0=== 
k?M:k;k=k.getElementById?k.getElementById("common_15click_anchor"):null;t(window.copfcChm)&&k&&(g=new g.constructor(K(g.h())),J(g,5,12),I(g,4,null).set("nb",(12).toString()),(l=Fb(a.b,k))?l.data=g:a.b.push({element:k,data:g}),h&&(Gb(a,e,h,g),J(g,2,h.href)),window.copfcChm(e,zb(g,k.href)));m="onepointfiveclick_first_click"}f&&m&&La(f+"&label="+m)}break a}k=F(f,6);k=p(k);for(l=k.next();!l.done;l=k.next())La(l.value)}if(h&&g)b:{k=h;h=g?f:null;(f=Fb(a.b,k))?f=f.data:(f=new L,J(f,2,k.href),J(f,11,k.target|| 
"_top"),a.b.push({element:k,data:f}));f=zb(h||f,G(f,2,""));0<f.length&&(Q(k,f,S(557)),k.target||(k.target=h&&null!=F(h,11)?G(h,11,""):"_top"));Gb(a,e,k,h);if(h&&q.googdlu&&q.googdlu.tryHandleStoreOrDeepLink&&(f=null!=F(h,7)?va(h,za,7).h():null,g=null!=F(h,8)?va(h,Aa,8).h():null,q.googdlu.tryHandleStoreOrDeepLink(e,k.href,f,g)))break b;H(a.a,9)&&(f=k.href,g=/[?&]adurl=([^&]+)/.exec(f),Q(k,g&&g.index+g[0].length!==f.length?f.slice(0,g.index+1)+f.slice(g.index+g[0].length+1)+"&"+g[0].slice(1):f,S(557))); 
f=(g=H(a.a,2))&&300<u()-a.f;window.oneAfmaInstance?(e.preventDefault?e.preventDefault():e.returnValue=!1,e=window.oneAfmaInstance,k=e.appendClickSignals(k.href),k=e.logScionEventAndAddParam(k),h&&null!=F(h,8)&&Hb(k,h,e)||(g&&(g=k,k=e.click,(h=vb(g))?(f&&(g=h.m,l=g.search(/&adurl=/),k(0>l?g+"&ri=1":g.slice(0,l)+"&ri=1"+g.slice(l))),k=h.finalUrl):k=g),e.openSystemBrowser(k,{useFirstPackage:!0,useRunningProcess:!0}))):f&&(e=H(a.a,8),h=a.f,e?300>Date.now()-(void 0===h?-1:h)||((e=k.getAttribute("data-orig-async-clicktrack-url"))? 
(e=xb(e),Q(k,e.j,S(599))):(k.setAttribute("data-orig-async-clicktrack-url",k.href),wb(k))):wb(k));f&&(a.f=u())}}}}),Fa);this.c&&t(window.ss)&&P(M.body,"mouseover",tb(626,function(){window.ss(a.c,0)}),Ga);window.googqscp&&t(window.googqscp.registerCallback)&&window.googqscp.registerCallback(function(e,f){a.g=e;a.i=f})}} 
function Gb(a,b,c,d){for(var e;!c.id;)if(e="asoch-id-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^u()).toString(36)),!M.getElementById(e)){c.id=e;break}e=c.id;t(window.xy)&&window.xy(b,c,M.body);t(window.mb)&&window.mb(c);t(window.bgz)&&window.bgz(e);t(window.ja)&&window.ja(e,d?G(d,5,0):0);a.c&&t(window.ss)&&window.ss(a.c,1)} 
function Ib(){var a=tb(556,function(){new Db});"complete"===M.readyState||"interactive"===M.readyState?a():P(M,"DOMContentLoaded",a)} 
function Hb(a,b,c){var d=va(b,Aa,8),e=G(d,2,"");sa(I(b,10,null),function(f,h){var g=e;h=encodeURIComponent(h);var l=encodeURIComponent(f);f=new RegExp("[?&]"+h+"=([^&]+)");var m=f.exec(g);console.log(m);h=h+"="+l;e=m?g.replace(f,m[0].charAt(0)+h):g.replace("?","?"+h+"&")});return c.redirectForStoreU2({clickUrl:a,trackingUrl:G(d,3,""),finalUrl:e,pingFunc:c.click,openFunc:c.openIntentOrNativeApp})}function Fb(a,b){return ia(a,function(c){return c.element===b})} 
function Eb(a){a=p(a);for(var b=a.next();!b.done;b=a.next()){var c=b.value;"A"==c.element.tagName&&(b=c.element,c=c.data,null==F(c,2)&&J(c,2,b.href))}};nb(Z,555,function(){return Ib()});}).call(this);
