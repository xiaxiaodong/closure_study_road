for(var h="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m=["String","prototype","repeat"],n=0;n<m.length-1;n++){var p=m[n];p in l||(l[p]={});l=l[p]}
var q=m[m.length-1],r=l[q],t=r?r:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};t!=r&&null!=t&&h(l,q,{configurable:!0,writable:!0,value:t});var u=this;
function v(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function w(a){var b=v(a);return"array"==b||"object"==b&&"number"==typeof a.length}function x(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};var y=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function z(a){if(!A.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(B,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(C,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(D,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(E,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(aa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ba,"&#0;"));return a}var B=/&/g,C=/</g,D=/>/g,E=/"/g,aa=/'/g,ba=/\x00/g,A=/[\x00&<>"']/;
function F(a,b){return a<b?-1:a>b?1:0};var ca=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var f=a.length,g="string"==typeof a?a.split(""):a,d=0;d<f;d++)d in g&&b.call(c,g[d],d,a)};function da(a){var b=a.length;if(0<b){for(var c=Array(b),f=0;f<b;f++)c[f]=a[f];return c}return[]};function ea(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fa(a,b){for(var c,f,g=1;g<arguments.length;g++){f=arguments[g];for(c in f)a[c]=f[c];for(var d=0;d<G.length;d++)c=G[d],Object.prototype.hasOwnProperty.call(f,c)&&(a[c]=f[c])}};var H;a:{var I=u.navigator;if(I){var J=I.userAgent;if(J){H=J;break a}}H=""};function ga(a,b){var c=ha;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var ia=-1!=H.indexOf("Opera"),K=-1!=H.indexOf("Trident")||-1!=H.indexOf("MSIE"),ja=-1!=H.indexOf("Edge"),L=-1!=H.indexOf("Gecko")&&!(-1!=H.toLowerCase().indexOf("webkit")&&-1==H.indexOf("Edge"))&&!(-1!=H.indexOf("Trident")||-1!=H.indexOf("MSIE"))&&-1==H.indexOf("Edge"),ka=-1!=H.toLowerCase().indexOf("webkit")&&-1==H.indexOf("Edge");function M(){var a=u.document;return a?a.documentMode:void 0}var N;
a:{var O="",P=function(){var a=H;if(L)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ja)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ka)return/WebKit\/(\S+)/.exec(a);if(ia)return/(?:Version)[ \/]?(\S+)/.exec(a)}();P&&(O=P?P[1]:"");if(K){var Q=M();if(null!=Q&&Q>parseFloat(O)){N=String(Q);break a}}N=O}var ha={};
function R(a){ga(a,function(){for(var b=0,c=y(String(N)).split("."),f=y(String(a)).split("."),g=Math.max(c.length,f.length),d=0;0==b&&d<g;d++){var e=c[d]||"",k=f[d]||"";do{e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==e[0].length&&0==k[0].length)break;b=F(0==e[1].length?0:parseInt(e[1],10),0==k[1].length?0:parseInt(k[1],10))||F(0==e[2].length,0==k[2].length)||F(e[2],k[2]);e=e[3];k=k[3]}while(0==b)}return 0<=b})}var S;var T=u.document;
S=T&&K?M()||("CSS1Compat"==T.compatMode?parseInt(N,10):5):void 0;var la=!K||9<=Number(S);!L&&!K||K&&9<=Number(S)||L&&R("1.9.1");K&&R("9");function ma(a,b){ea(b,function(c,b){"style"==b?a.style.cssText=c:"class"==b?a.className=c:"for"==b?a.htmlFor=c:U.hasOwnProperty(b)?a.setAttribute(U[b],c):0==b.lastIndexOf("aria-",0)||0==b.lastIndexOf("data-",0)?a.setAttribute(b,c):a[b]=c})}var U={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function na(a,b,c){var f=arguments,g=document,d=String(f[0]),e=f[1];if(!la&&e&&(e.name||e.type)){d=["<",d];e.name&&d.push(' name="',z(e.name),'"');if(e.type){d.push(' type="',z(e.type),'"');var k={};fa(k,e);delete k.type;e=k}d.push(">");d=d.join("")}d=g.createElement(d);e&&("string"==typeof e?d.className=e:"array"==v(e)?d.className=e.join(" "):ma(d,e));2<f.length&&oa(g,d,f);return d}
function oa(a,b,c){function f(c){c&&b.appendChild("string"==typeof c?a.createTextNode(c):c)}for(var g=2;g<c.length;g++){var d=c[g];if(!w(d)||x(d)&&0<d.nodeType)f(d);else{var e;a:{if(d&&"number"==typeof d.length){if(x(d)){e="function"==typeof d.item||"string"==typeof d.item;break a}if("function"==v(d)){e="function"==typeof d.item;break a}}e=!1}ca(e?da(d):d,f)}}};function V(){var a=na("h1",{style:"background-color:#EEE"},"Hello world!");document.body.appendChild(a)}var W=["myproject","start"],X=u;W[0]in X||!X.execScript||X.execScript("var "+W[0]);for(var Y;W.length&&(Y=W.shift());){var Z;if(Z=!W.length)Z=void 0!==V;Z?X[Y]=V:X=X[Y]?X[Y]:X[Y]={}};
