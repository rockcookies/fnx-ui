!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["src","width","position","height","alt","round","className","style","children"];function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,c,u=[],l=!0,a=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(a)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-1bd67aeb.js","./config-component-props-legacy-b5279410.js","./use-update-effect-legacy-2c2f4b9d.js","./index-legacy-c68971b2.js","./format-legacy-4dfc8f09.js","./misc-legacy-f59b2e17.js","./use-merged-prop-ref-legacy-7929f994.js","./detect-legacy-199d634d.js"],(function(e,n){"use strict";var o,u,l,a,s,f,d,y,m,b,p;return{setters:[function(e){o=e.r,u=e.j,l=e.c,a=e.a},function(e){s=e.c},function(e){f=e.u},function(e){d=e.I},function(e){y=e.a},function(e){m=e.n},function(e){b=e.u},function(e){p=e.I}],execute:function(){function n(e){var t=c(o.useState((function(){return!p||!window.IntersectionObserver||function(e){if(e){var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,r=e.getBoundingClientRect();if(r){var o=r.top,i=r.bottom,c=r.left,u=r.right;return i>0&&o<=n&&c<=t&&u>0}return!1}}(null==e?void 0:e.current)})),2),n=t[0],r=t[1];return o.useEffect((function(){var t=null==e?void 0:e.current;if(t&&p&&window.IntersectionObserver){var n=new IntersectionObserver((function(e){e.some((function(e){return e.intersectionRatio>0&&(r(!0),n.disconnect(),!0)}))}),{threshold:[1e-4]});return n.observe(t),function(){n.disconnect()}}}),[e]),n}var g=function(e){var t=n(e.nodeRef),r=b(m,e.onActive);return o.useEffect((function(){t&&r.current()}),[t,r]),u.jsx(u.Fragment,{})};g.displayName="LazyDetector";var v=g,h=a("fnx-image"),j=s({fit:"fill",radius:0,slots:{},onLoad:m,onError:m,lazy:!1}),O=u.jsx(d,{name:"photo"}),w=u.jsx(d,{name:"photo-fail"}),S=o.forwardRef((function(e,n){var a=c(j(e),2),s=a[0],d=s.fit,m=s.radius,b=s.slots,p=s.onLoad,g=s.onError,S=s.lazy,x=a[1],P=x.src,E=x.width,I=x.position,N=x.height,A=x.alt,R=x.round,D=x.className,H=x.style,L=x.children,z=i(x,t),W=o.useRef(null),k=c(o.useState(!1),2),C=k[0],F=k[1],M=c(o.useState(!1),2),T=M[0],B=M[1],U=c(o.useState(!S),2),$=U[0],q=U[1],G=$?P:void 0;o.useImperativeHandle(n,(function(){return W.current})),f((function(){F(!1),B(!1)}),[G]);var J=o.useMemo((function(){var e={};return null!=E&&(e.width=y(E)),null!=N&&(e.height=y(N)),m&&(e.overflow="hidden",e.borderRadius=y(m)),e}),[E,N,m]);return u.jsxs("span",r(r({className:l([h({round:R})],D),style:r(r({},J),H)},z),{},{ref:W,children:[S&&!$&&u.jsx(v,{nodeRef:W,onActive:function(){return q(!0)}}),!T&&G&&u.jsx("img",{className:h("img"),src:G,alt:A,style:{objectFit:d,objectPosition:I},onLoad:function(e){F(!0),p(e)},onError:function(e){B(!0),g(e)}}),T||C||!1===b.loading?T&&!1!==b.error?u.jsx("span",{className:h("error"),children:b.error||w}):void 0:u.jsx("span",{className:h("loading"),children:b.loading||O}),L]}))}));S.displayName="Image";e("I",S)}}}))}();