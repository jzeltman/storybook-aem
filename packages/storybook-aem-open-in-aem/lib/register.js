module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("@storybook/addons")},function(t,e){t.exports=require("@storybook/components")},,,function(t,e){t.exports=require("@storybook/api")},function(t,e,n){"use strict";n.r(e),n.d(e,"OpenInAEM",(function(){return i}));var r=n(0),o=n.n(r),c=n(1),a=(n(5),n(2)),u="storybookjs/".concat("openInAEM"),i=("".concat(u,"/panel"),"".concat(u,"/reset"),"".concat(u,"/set"),"".concat(u,"/change"),"".concat(u,"/set-options"),"".concat(u,"/click"),function(t){var e=t.api;if(!e.getCurrentStoryData()||!e.getCurrentStoryData().parameters.openInAEM||!e.getCurrentStoryData().parameters.openInAEM.contentPath)return null;var n=e.getCurrentStoryData(),c=n.parameters.openInAEM,i=c&&c.aemUrl?c.aemUrl:"localhost:4502",l=c.contentPath;if(!l.includes("jcr:content"))return console.error("aemUrl.contentPath must contain '".concat("jcr:content","' for the ").concat(n.name," story. It was: ").concat(l)),null;var s=c.contentPath.split("/jcr:content")[0],p="".concat(i,"/").concat("editor.html").concat(s,".html");return console.debug("aemUrl, contentPath, fullUrl",i,l,p),o.a.createElement(r.Fragment,null,o.a.createElement(a.IconButton,{key:u,active:!1,title:"Open this Story Content in AEM",onClick:function(){return window.top.open(p)}},o.a.createElement(a.Icons,{icon:"redirect"})))});c.addons.register(u,(function(t){c.addons.add(u,{title:"openInAEM",type:c.types.TOOL,match:function(t){return"story"===t.viewMode},render:function(){return o.a.createElement(i,{api:t})}})}))}]);