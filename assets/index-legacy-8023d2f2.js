!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}var r=["showZero","max","position"];function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(r){o(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function o(r,e,n){return(e=function(r){var e=function(r,e){if("object"!==t(r)||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,e||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"===t(e)?e:String(e)}(e))in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function i(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function c(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,c,u=[],a=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;a=!1}else for(;!(a=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=e.return&&(c=e.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy-1bd67aeb.js","./config-component-props-legacy-b5279410.js"],(function(t,e){"use strict";var o,u,a,l;return{setters:[function(t){o=t.j,u=t.a,a=t.c},function(t){l=t.c}],execute:function(){var e=u("fnx-badge"),f=l({showZero:!0,max:99,position:"top-right"}),s=function(t){var u=c(f(t),2),l=u[0],s=l.showZero,p=l.max,y=l.position,b=i(l,r),m=u[1],g=m.color,v=m.dot,O=m.count,j=m.offset,d=m.className,h=m.children,w=m.style,x=function(){if(!v&&null!=O&&(s||0!==O&&"0"!==O))return null!=p&&"number"==typeof O&&O>p?"".concat(p,"+"):O},S=function(){return o.jsx("span",n(n({className:a(e([y,{dot:v,fixed:h}]),d),style:function(){var t={background:g};if(j){var r=c(j,2),e=r[0],o=r[1];h?(t.top="".concat(-o,"px"),t.right="number"==typeof e?"".concat(-e,"px"):e.startsWith("-")?"".concat(e.replace("-",""),"px"):"-".concat(e,"px")):(t.marginTop="".concat(o,"px"),t.marginLeft="".concat(e,"px"))}return n(n({},t),w)}()},b),{},{children:x()}))};return h?o.jsxs("div",{className:e("wrapper"),children:[h,S()]}):S()};s.displayName="Badge";t("B",s)}}}))}();