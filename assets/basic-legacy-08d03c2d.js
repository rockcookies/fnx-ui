!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,l,a,c,i=[],o=!0,s=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;o=!1}else for(;!(o=(r=a.call(t)).done)&&(i.push(r.value),i.length!==n);o=!0);}catch(e){s=!0,l=e}finally{try{if(!o&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(s)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-1bd67aeb.js","./index-legacy-21a5cae2.js","./use-demo-translate-legacy-461270f2.js","./index-legacy-d2f65a62.js","./index-legacy-d4cc4c41.js","./index-legacy-b8e40b71.js","./use-theme-legacy-83b2baae.js","./config-component-props-legacy-b5279410.js","./index-legacy-c68971b2.js","./format-legacy-4dfc8f09.js","./detect-legacy-199d634d.js","./constants-legacy-732fdcb2.js","./event-legacy-359ec6a3.js","./misc-legacy-f59b2e17.js","./use-merged-prop-legacy-58e913d1.js","./react-legacy-8aa83272.js"],(function(n,t){"use strict";var r,l,a,c,i,o,s;return{setters:[function(e){r=e.r,l=e.j,a=e.a},function(e){c=e.D},function(e){i=e.u},function(e){o=e.B},function(e){s=e.O},null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".demo-overlay__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.demo-overlay__block{width:120px;height:120px;background-color:var(--fnx-primary-color);border-radius:4px}\n",document.head.appendChild(t),n("default",(function(){var n=e(i(d,"en-US"),1)[0],t=e(r.useState(!1),2),a=t[0],y=t[1],f=e(r.useState(!1),2),m=f[0],g=f[1];return l.jsxs(l.Fragment,{children:[l.jsx(c,{cardMode:!0,title:n.basicUsage,children:l.jsx(o,{type:"primary",onClick:function(){return y(!0)},children:n.showOverlay})}),l.jsx(c,{cardMode:!0,title:n.embeddedContent,children:l.jsx(o,{type:"primary",onClick:function(){return g(!0)},children:n.embeddedContent})}),l.jsx(s,{visible:a,onClick:function(){return y(!1)}}),l.jsx(s,{visible:m,onClick:function(){return g(!1)},children:l.jsx("div",{className:u("wrapper"),children:l.jsx("div",{className:u("block")})})})]})}));var u=a("demo-overlay"),d={"zh-CN":{basicUsage:"基础用法",showOverlay:"显示遮罩层",embeddedContent:"嵌入内容"},"en-US":{basicUsage:"Basic Usage",showOverlay:"Show Overlay",embeddedContent:"Embedded Content"}}}}}))}();