(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"2XQ8":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return s}));var a="undefined"!==typeof window;function r(){return!!a&&!(!window.document||!window.document.createElement)}function c(){return!!a&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}function i(e){return"function"===typeof e}function u(e){return null!==e&&"object"===typeof e}function o(e){return u(e)&&i(e.then)&&i(e.catch)}function l(e){return"number"===typeof e||/^\d+(\.\d+)?$/.test(e)}function s(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())}},"5p7d":function(e,t,n){},"6lNa":function(e,t,n){},"9A+y":function(e,t,n){"use strict";var a=n("ERkP"),r=n("GRM5");function c(e,t){var n=Object(a["useContext"])(r["a"]),c=n.locale,i=Object(a["useMemo"])((function(){return e[c]||e[t]}),[c,e,t]);return[i]}t["a"]=c},BoRD:function(e,t,n){"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,"a",(function(){return a}))},CuKT:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n("jem/"),r=n("ERkP"),c=n.n(r),i=n("Ot/d"),u=n("EEr5"),o=n("9A+y"),l=n("bNXv"),s=(n("6lNa"),{"zh-CN":{basicUsage:"\u57fa\u7840\u7528\u6cd5",columnSpacing:"\u5728\u5217\u5143\u7d20\u4e4b\u95f4\u589e\u52a0\u95f4\u8ddd",justifyContent:"\u5bf9\u9f50\u65b9\u5f0f"},"en-US":{basicUsage:"Basic Usage",columnSpacing:"Column Spacing",justifyContent:"Justify Content"}});function f(){var e=Object(o["a"])(s,"en-US"),t=Object(a["a"])(e,1),n=t[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement(u["a"],{cardMode:!0,title:n.basicUsage},c.a.createElement(l["a"],null,c.a.createElement(i["a"],{span:8},"span: 8"),c.a.createElement(i["a"],{span:8},"span: 8"),c.a.createElement(i["a"],{span:8},"span: 8")),c.a.createElement(l["a"],null,c.a.createElement(i["a"],{span:4},"span: 4"),c.a.createElement(i["a"],{span:10,offset:4},"offset: 4, span: 10")),c.a.createElement(l["a"],null,c.a.createElement(i["a"],{offset:12,span:12},"offset: 12, span: 12"))),c.a.createElement(u["a"],{cardMode:!0,title:n.columnSpacing},c.a.createElement(l["a"],{gutter:20},c.a.createElement(i["a"],{span:8},"span: 8"),c.a.createElement(i["a"],{span:8},"span: 8"),c.a.createElement(i["a"],{span:8},"span: 8"))),c.a.createElement(u["a"],{cardMode:!0,title:n.justifyContent},c.a.createElement(l["a"],{justify:"center"},c.a.createElement(i["a"],{span:6},"span: 6"),c.a.createElement(i["a"],{span:6},"span: 6"),c.a.createElement(i["a"],{span:6},"span: 6")),c.a.createElement(l["a"],{justify:"end"},c.a.createElement(i["a"],{span:6},"span: 6"),c.a.createElement(i["a"],{span:6},"span: 6"),c.a.createElement(i["a"],{span:6},"span: 6")),c.a.createElement(l["a"],{justify:"space-between"},c.a.createElement(i["a"],{span:6},"span: 6"),c.a.createElement(i["a"],{span:6},"span: 6"),c.a.createElement(i["a"],{span:6},"span: 6")),c.a.createElement(l["a"],{justify:"space-around"},c.a.createElement(i["a"],{span:6},"span: 6"),c.a.createElement(i["a"],{span:6},"span: 6"),c.a.createElement(i["a"],{span:6},"span: 6"))))}},EEr5:function(e,t,n){"use strict";var a=n("BoRD"),r=n("Uwx9"),c=n("ERkP"),i=n.n(c),u=n("9cXV"),o=n("liXC"),l=(n("5p7d"),Object(u["b"])("demo-block")),s=Object(o["a"])("DemoBlock",(function(e){var t=e.className,n=e.title,c=e.children,o=e.cardMode,s=Object(r["a"])(e,["className","title","children","cardMode"]);return i.a.createElement(i.a.StrictMode,null,i.a.createElement("div",Object(a["a"])({className:Object(u["a"])(l({"card-mode":o}),t)},s),n&&i.a.createElement("div",{className:l("title")},n),i.a.createElement("div",{className:l("content")},c)))}));t["a"]=s},LYyr:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return b}));var a,r=n("2XQ8");function c(e,t,n){return Math.min(Math.max(e,t),n)}function i(e){if(null!=e)return Object(r["f"])(e)?"".concat(e,"px"):String(e)}function u(e){if(null!=e){var t=i(e);return{width:t,height:t}}}function o(){if(!a){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;a=parseFloat(t)}return a}function l(e){return e=e.replace(/rem/g,""),+e*o()}function s(e){return e=e.replace(/vw/g,""),+e*window.innerWidth/100}function f(e){return e=e.replace(/vh/g,""),+e*window.innerHeight/100}function p(e){if("number"===typeof e)return e;if(r["a"]){if(-1!==e.indexOf("rem"))return l(e);if(-1!==e.indexOf("vw"))return s(e);if(-1!==e.indexOf("vh"))return f(e)}return parseFloat(e)}function d(e,t,n){var a=e.indexOf(t);return-1===a?e:"-"===t&&0!==a?e.slice(0,a):e.slice(0,a+1)+e.slice(a).replace(n,"")}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null==t.allowDot||t.allowDot,a=null==t.allowMinus||t.allowMinus;e=n?d(e,".",/\./g):e.split(".")[0],e=a?d(e,"-",/-/g):e.replace(/-/,"");var r=n?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(r,"")}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e+"";while(n.length<t)n="0"+n;return n}},"Ot/d":function(e,t,n){"use strict";var a=n("BoRD"),r=n("BcGY"),c=n("mQk0"),i=n("Uwx9"),u=n("ERkP"),o=n.n(u),l=n("nM+H"),s=n("LYyr"),f=n("9cXV"),p=n("liXC"),d="fnx-col",m=Object(f["b"])(d),b=Object(p["b"])("Col",(function(e,t){var n,p=e.className,d=e.style,b=e.children,E=e.span,j=e.offset,g=Object(i["a"])(e,["className","style","children","span","offset"]),O=Object(u["useContext"])(l["a"]),v=O.gutter,w={};return null!=v&&v>0&&(w.paddingRight=w.paddingLeft=Object(s["a"])(v/2)),o.a.createElement("div",Object(a["a"])({className:Object(f["a"])(m((n={},Object(c["a"])(n,"".concat(E),E),Object(c["a"])(n,"offset-".concat(j),j),n)),p),style:Object(r["a"])(Object(r["a"])({},w),d)},g,{ref:t}),b)}));t["a"]=b},bNXv:function(e,t,n){"use strict";var a=n("BoRD"),r=n("BcGY"),c=n("mQk0"),i=n("Uwx9"),u=n("ERkP"),o=n.n(u),l=n("LYyr"),s=n("9cXV"),f=n("liXC"),p=n("nM+H"),d="fnx-row",m=Object(s["b"])(d),b=Object(f["b"])("Row",(function(e,t){var n,u=e.justify,f=e.align,d=e.className,b=e.style,E=e.children,j=e.gutter,g=void 0===j?0:j,O=Object(i["a"])(e,["justify","align","className","style","children","gutter"]),v={};return g>0&&(v.marginRight=v.marginLeft=Object(l["a"])(g/-2)),o.a.createElement(p["a"].Provider,{value:{gutter:g}},o.a.createElement("div",Object(a["a"])({className:Object(s["a"])(m((n={},Object(c["a"])(n,"align-".concat(f),f),Object(c["a"])(n,"justify-".concat(u),u),n)),d),style:Object(r["a"])(Object(r["a"])({},v),b)},O,{ref:t}),E))}));t["a"]=b},"nM+H":function(e,t,n){"use strict";var a=n("ERkP"),r=Object(a["createContext"])({});t["a"]=r}}]);