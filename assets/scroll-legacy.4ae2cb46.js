System.register(["./use-theme-legacy.396131ed.js"],(function(o){"use strict";var e;return{setters:[function(o){e=o.k}],execute:function(){function t(o,e){"scrollTop"in o?o.scrollTop=e:o.scrollTo(o.scrollX,e)}o({a:function(o,e){for(var t=o,c=e||window;t&&t!==c&&r(t);){var l=window.getComputedStyle(t).overflowY;if(n.test(l))return t;t=t.parentNode}return c},g:function(o){var e="scrollTop"in o?o.scrollTop:o.pageYOffset;return Math.max(e,0)},r:function(){var o;c&&(o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t(window,o),t(document.body,o))},s:t});var n=/scroll|auto/i;function r(o){return"HTML"!==o.tagName&&"BODY"!==o.tagName&&1===o.nodeType}var c=e()}}}));