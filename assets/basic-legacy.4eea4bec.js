!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=document.createElement("style");n.innerHTML=".demo-skeleton__switch{margin-bottom:var(--fnx-padding-md);margin-left:var(--fnx-padding-md)}.demo-skeleton__preview{display:flex;padding:0 var(--fnx-padding-md)}.demo-skeleton__preview img{flex-shrink:0;width:32px;height:32px;margin-right:var(--fnx-padding-md)}.demo-skeleton__content{padding-top:6px}.demo-skeleton__content h3{margin:0;color:var(--fnx-gray-900);font-size:18px;line-height:20px}.demo-skeleton__content p{margin:13px 0 0;font-size:14px;line-height:20px}\n",document.head.appendChild(n),System.register(["./vendor-legacy.1b768d64.js","./index-legacy.3b71b887.js","./use-demo-translate-legacy.83525397.js","./index-legacy.371033d6.js","./index-legacy.a6b53cdb.js","./demo-doge-legacy.442ae2cf.js","./use-theme-legacy.396131ed.js","./scroll-legacy.4ae2cb46.js","./history-utils-legacy.e4f47671.js"],(function(t){"use strict";var n,r,a,i,o,l,c,d,s,u;return{setters:[function(e){n=e.r},function(e){r=e.D},function(e){a=e.u},function(e){i=e.n,o=e.o},function(e){l=e.j,c=e.F,d=e.a,s=e.b},function(e){u=e.d},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(a(f,"en-US"),1)[0],s=e(n.exports.useState(!1),2),g=s[0],m=s[1];return l(c,{children:[d(r,{title:t.basicUsage,children:d(i,{title:!0})}),d(r,{title:t.showAvatar,children:d(i,{title:!0,avatar:!0,row:3,rowWidth:["100%","40%","80%"]})}),l(r,{title:t.showChildren,children:[d(o,{className:h("switch"),checked:g,onChange:function(){return m(!g)}}),d(i,{title:!0,avatar:!0,loading:!g,row:3,children:l("div",{className:h("preview"),children:[d("img",{src:u}),l("div",{className:h("content"),children:[d("h3",{children:t.title}),d("p",{children:t.paragraph})]})]})})]})]})}));var h=s("demo-skeleton"),f={"zh-CN":{basicUsage:"基础用法",showAvatar:"显示头像",showChildren:"显示子组件",title:"为了部落",paragraph:"一去二三里烟村四五家亭台六七座八九十支花"},"en-US":{basicUsage:"Basic Usage",showAvatar:"Show Avatar",showChildren:"Show Children",title:"For the horde",paragraph:"The quick brown fox jumps over the lazy dog"}}}}}))}();