module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=21)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("@storybook/components")},function(t,e){t.exports=require("@storybook/addons")},function(t,e,r){t.exports=r(17)},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=require("@storybook/core-events")},function(t,e){t.exports=require("@storybook/api")},function(t,e,r){var n=r(14),o=r(15),i=r(16);t.exports=function(t){return n(t)||o(t)||i()}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){var n=r(18),o=r(4);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},function(t,e,r){var n=r(19);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},,function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=u;return function(o,i){if(n===y)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=y;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?f:p,s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=f,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u="suspendedStart",p="suspendedYield",y="executing",f="completed",h={};function d(){}function m(){}function v(){}var b={};b[i]=function(){return this};var g=Object.getPrototypeOf,x=g&&g(g(L([])));x&&x!==r&&n.call(x,i)&&(b=x);var w=v.prototype=d.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t){var e;this._invoke=function(r,o){function i(){return new Promise((function(e,i){!function e(r,o,i,a){var c=l(t[r],t,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}(r,o,e,i)}))}return e=e?e.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function L(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return m.prototype=w.constructor=v,v.constructor=m,v[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,r,n,o){var i=new S(s(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?t.exports=n=function(t){return r(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)},n(e)}t.exports=n},function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}));var n="aemStyleSystem",o="storybookjs/".concat(n),i="".concat(o,"/panel");"".concat(o,"/reset"),"".concat(o,"/set"),"".concat(o,"/change"),"".concat(o,"/set-options"),"".concat(o,"/click")},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(2),a=r.n(i),c=r(6),s=r(1),l=r(7),u=r.n(l),p=r(3),y=r.n(p),f=r(8),h=r.n(f),d=r(9),m=r.n(d),v=r(10),b=r.n(v),g=r(11),x=r.n(g),w=r(4),E=r.n(w),S=r(12),j=r.n(S),P=r(5),O=function(t){var e=Object.keys(t),r=[],n={};return e&&e.forEach((function(e){if("jcr:primaryType"!==e){var o=t[e],i=o["cq:styleGroups"],a={tabName:o["jcr:title"],tabDescription:o["jcr:description"],styleGroups:[]};if(i){var c=Object.keys(i);c.length&&c.map((function(t){if("jcr:primaryType"!==t){var e=i[t],r=Object.keys(e["cq:styles"]),o=[];r.forEach((function(t){var r=e["cq:styles"][t];"jcr:primaryType"!==t&&(o.push({group:e["cq:styleGroupLabel"],classes:r["cq:styleClasses"],label:r["cq:styleLabel"],id:r["cq:styleId"]}),n[r["cq:styleId"]]=r["cq:styleClasses"])})),r.length&&a.styleGroups.push({styleGroupLabel:e["cq:styleGroupLabel"],styleGroupMultiple:e["cq:styleGroupMultiple"]||!1,styles:o})}})),r.push(a)}}})),{policy:r,styleIdKeyValues:n}},k=function(t){function e(t){var r;return h()(this,e),(r=b()(this,x()(e).call(this))).api=t.api,r.channel=r.api.getChannel(),r.channel.on(P.STORY_CHANGED,r.storyChangedHandler.bind(E()(r))),r.state={policyPath:t.parameters.policy||null,policy:null,policyJSON:[],styleIdKeyValues:{},styleIds:t.parameters.styleIds||[],loading:!0},r}return j()(e,t),m()(e,[{key:"storyChangedHandler",value:function(t){this.props.parameters&&this.props.parameters.policy&&this.props.parameters.policy!==this.state.policyPath&&(this.setState({policyPath:this.props.parameters.policy}),this.fetchComponentPolicy()),this.props.parameters&&this.props.parameters.styleIds&&this.props.parameters.styleIds!==this.state.styleIds&&(this.setState({styleIds:this.props.parameters.styleIds}),this.renderStory(this.props.parameters.styleIds))}},{key:"componentDidMount",value:function(){this.fetchComponentPolicy()}},{key:"fetchComponentPolicy",value:function(){var t,e,r;return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.state.policyPath){n.next=10;break}return this.setState({loading:!0}),n.next=4,y.a.awrap(fetch(this.state.policyPath));case 4:return t=n.sent,n.next=7,y.a.awrap(t.json());case 7:e=n.sent,r=O(e),this.setState({loading:!1,policyJSON:e,policy:r.policy,styleIdKeyValues:r.styleIdKeyValues});case 10:case"end":return n.stop()}}),null,this)}},{key:"getClassesFromStyleIds",value:function(t){var e=this;return(t||this.state.styleIds).map((function(t){return e.state.styleIdKeyValues[t]}))}},{key:"setStyleIds",value:function(t){var e=u()(this.state.styleIds),r=e.indexOf(t);-1===r?e.push(t):e.splice(r,1),this.setState({styleIds:e}),this.renderStory(e)}},{key:"renderStory",value:function(t){var e=t||this.state.styleIds;this.channel.emit("aemStyleSystem:update",{classes:this.getClassesFromStyleIds(e).join(" ")}),this.channel.emit(P.FORCE_RE_RENDER)}},{key:"renderStyleGroup",value:function(t){var e=this;return t.styleGroups.map((function(t,r){return o.a.createElement("div",{key:r,style:{borderRight:"1px solid #aaa",flexBasis:0,flexGrow:1}},o.a.createElement(s.FlexBar,{border:!0},o.a.createElement("p",null,o.a.createElement("b",null,t.styleGroupLabel))),o.a.createElement(s.Form,null,t.styles.map((function(t,r){return o.a.createElement(s.Form.Field,{key:r,label:t.label,style:{justifyContent:"space-between"}},o.a.createElement("input",{type:"checkbox",value:t.id,checked:e.state.styleIds.includes(t.id),onChange:function(r){return e.setStyleIds(t.id)}}))}))))}))}},{key:"renderPolicy",value:function(t,e){return e=e||t.tabName,o.a.createElement("div",{key:e,className:"render-policy"},o.a.createElement(s.FlexBar,{border:!0},o.a.createElement(n.Fragment,{key:"left"},o.a.createElement("p",null,o.a.createElement("b",null,t.tabName)),o.a.createElement(s.Separator,null),o.a.createElement("p",null,o.a.createElement("i",null,t.tabDescription)))),o.a.createElement("div",{style:{position:"relative",display:"flex",alignItems:"stretch"}},this.renderStyleGroup(t)))}},{key:"render",value:function(){var t=this;return null===this.state.policy?o.a.createElement(s.Placeholder,null,"No Style System Policy Path configured"):this.state.loading?o.a.createElement(s.Placeholder,null,"Fetching Style System Policy"):0===this.state.policy.length?o.a.createElement(s.Placeholder,null,"No Styles found in Style System Policy"):1===this.state.policy.length?this.renderPolicy(this.state.policy[0]):o.a.createElement("div",null,this.state.policy.map((function(e,r){return t.renderPolicy(e,r)})))}}]),e}(n.Component),L=r(20);a.a.register(L.a,(function(t){a.a.addPanel(L.b,{title:"Style System",paramKey:L.c,render:function(e){var r=e.active,n=e.key,i=Object(c.useParameter)(L.c,null);return i?o.a.createElement(s.AddonPanel,{active:r,key:n},o.a.createElement(k,{api:t,parameters:i})):o.a.createElement(s.AddonPanel,{active:r,key:n},o.a.createElement(s.Placeholder,null,"No Style System settings found"))}})}))}]);