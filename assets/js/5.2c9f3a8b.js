(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{11:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},12:function(t,n,e){var r=e(26),o=e(31);t.exports=e(15)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},13:function(t,n,e){var r=e(14);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},14:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},15:function(t,n,e){t.exports=!e(16)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},16:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},17:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},18:function(t,n){var e=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},19:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},20:function(t,n,e){var r=e(22)("wks"),o=e(23),i=e(11).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},21:function(t,n,e){var r=e(11),o=e(12),i=e(27),c=e(23)("src"),u=e(42),a=(""+u).split("toString");e(18).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(s&&(i(e,c)||o(e,c,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||u.call(this)}))},22:function(t,n,e){var r=e(18),o=e(11),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(33)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},23:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},24:function(t,n,e){"use strict";var r,o,i=e(40),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,s=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(s||l)&&(a=function(t){var n,e,r,o,a=this;return l&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),s&&(n=a.lastIndex),r=c.call(a,t),s&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),l&&r&&r.length>1&&u.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},25:function(t,n,e){var r=e(11),o=e(18),i=e(12),c=e(21),u=e(32),a=function(t,n,e){var s,l,f,v,p=t&a.F,d=t&a.G,h=t&a.S,g=t&a.P,x=t&a.B,y=d?r:h?r[n]||(r[n]={}):(r[n]||{}).prototype,m=d?o:o[n]||(o[n]={}),b=m.prototype||(m.prototype={});for(s in d&&(e=n),e)f=((l=!p&&y&&void 0!==y[s])?y:e)[s],v=x&&l?u(f,r):g&&"function"==typeof f?u(Function.call,f):f,y&&c(y,s,f,t&a.U),m[s]!=f&&i(m,s,v),g&&b[s]!=f&&(b[s]=f)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},26:function(t,n,e){var r=e(13),o=e(34),i=e(36),c=Object.defineProperty;n.f=e(15)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},27:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},28:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},29:function(t,n,e){var r=e(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},30:function(t,n,e){var r=e(17);t.exports=function(t){return Object(r(t))}},31:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},32:function(t,n,e){var r=e(43);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},33:function(t,n){t.exports=!1},34:function(t,n,e){t.exports=!e(15)&&!e(16)((function(){return 7!=Object.defineProperty(e(35)("div"),"a",{get:function(){return 7}}).a}))},35:function(t,n,e){var r=e(14),o=e(11).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},36:function(t,n,e){var r=e(14);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},37:function(t,n,e){"use strict";var r=e(44)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},38:function(t,n,e){"use strict";var r=e(45),o=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},39:function(t,n,e){"use strict";e(46);var r=e(21),o=e(12),i=e(16),c=e(17),u=e(20),a=e(24),s=u("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var v=u(t),p=!i((function(){var n={};return n[v]=function(){return 7},7!=""[t](n)})),d=p?!i((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[s]=function(){return e}),e[v](""),!n})):void 0;if(!p||!d||"replace"===t&&!l||"split"===t&&!f){var h=/./[v],g=e(c,v,""[t],(function(t,n,e,r,o){return n.exec===a?p&&!o?{done:!0,value:h.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),x=g[0],y=g[1];r(String.prototype,t,x),o(RegExp.prototype,v,2==n?function(t,n){return y.call(t,this,n)}:function(t){return y.call(t,this)})}}},40:function(t,n,e){"use strict";var r=e(13);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},41:function(t,n,e){"use strict";var r=e(13),o=e(30),i=e(29),c=e(19),u=e(37),a=e(38),s=Math.max,l=Math.min,f=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;e(39)("replace",2,(function(t,n,e,d){return[function(r,o){var i=t(this),c=null==r?void 0:r[n];return void 0!==c?c.call(r,i,o):e.call(String(i),r,o)},function(t,n){var o=d(e,t,this,n);if(o.done)return o.value;var f=r(t),v=String(this),p="function"==typeof n;p||(n=String(n));var g=f.global;if(g){var x=f.unicode;f.lastIndex=0}for(var y=[];;){var m=a(f,v);if(null===m)break;if(y.push(m),!g)break;""===String(m[0])&&(f.lastIndex=u(v,i(f.lastIndex),x))}for(var b,w="",_=0,S=0;S<y.length;S++){m=y[S];for(var j=String(m[0]),E=s(l(c(m.index),v.length),0),k=[],M=1;M<m.length;M++)k.push(void 0===(b=m[M])?b:String(b));var R=m.groups;if(p){var O=[j].concat(k,E,v);void 0!==R&&O.push(R);var $=String(n.apply(void 0,O))}else $=h(j,v,E,k,R,n);E>=_&&(w+=v.slice(_,E)+$,_=E+j.length)}return w+v.slice(_)}];function h(t,n,r,i,c,u){var a=r+t.length,s=i.length,l=p;return void 0!==c&&(c=o(c),l=v),e.call(u,l,(function(e,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(a);case"<":u=c[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>s){var v=f(l/10);return 0===v?e:v<=s?void 0===i[v-1]?o.charAt(1):i[v-1]+o.charAt(1):e}u=i[l-1]}return void 0===u?"":u}))}}))},42:function(t,n,e){t.exports=e(22)("native-function-to-string",Function.toString)},43:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},437:function(t,n,e){"use strict";e.r(n);e(41);var r=e(0),o=e(47),i=e.n(o);e(48);r.a.use(i.a);var c={data:function(){return{codeshow:!1,show:!1,type:"",message:"",code:',\n<template>\n  <div>\n    <div class="demo-title">表单验证</div>\n    <div class="demo-container">\n      <sv-form :resolve="resolve" ref="svform">\n        <sv-write\n          label="姓名"\n          :required="true"\n          type="text"\n          placeholder="请输入姓名"\n          errmessage="姓名为必填项"\n          v-model="value1"\n          right-icon="edit"\n          left-icon="records"\n        ></sv-write>\n        <sv-write\n          label="手机号码"\n          :required="true"\n          type="text"\n          placeholder="请输入您的手机号码"\n          errmessage="请输入正确的手机号"\n          :regexp="telReg"\n          v-model="value2"\n          right-icon="phone"\n        ></sv-write>\n        <sv-write\n          label="可选项"\n          type="text"\n          placeholder="很高兴看到你"\n          v-model="value3"\n          right-icon="calendar"\n        ></sv-write>\n      </sv-form>\n    </div>\n\n    <div class="demo-btn-container">\n      <sv-button @click.native="cli">提交</sv-button>\n      <sv-button @click.native="ouput">other</sv-button>\n    </div>\n  </div>\n</template>\n\n\nimport { mapMutations } from \'vuex\'\nexport default {\n  data() {\n    return {\n      value1: \'\',\n      value2: \'1760128620\',\n      value3: \'\',\n      telReg: /^[1][3,4,5,7,8][0-9]{9}$/,\n      resolve: {}\n    }\n  },\n  methods: {\n    ...mapMutations({\n      commitRoute: \'changeRoute\'\n    }),\n    cli(val) {\n      this.resolve.then().then(res => {\n        const results = res.every(result => result.state)\n        if (results) {\n          alert(\'提交成功\')\n        } else {\n          for (let i = 0; i < res.length; i++) {\n            if (res[i].state === false) {\n              alert(res[i].message)\n              return\n            }\n          }\n        }\n      })\n    },\n    ouput() {\n      const arr = this.$refs.svform.getStates()\n      console.log(arr)\n    }\n  }\n}\n\n'.replace(/^ {8}/gm,"").trim()}}},u=e(1),a=Object(u.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("layout-card",[e("div",[e("layout-column",{attrs:{title:"代码演示",url:"form",tips:"查看源代码"},on:{handle:function(n){t.show=!0}}})],1)]),t._v(" "),e("div",{staticClass:"file-blank"}),t._v(" "),e("layout-card",[e("div",{staticClass:"site-introduce"},[e("div",{staticClass:"site-introduce-title"},[t._v("介绍")]),t._v(" "),e("div",{staticClass:"site-introduce-text"},[e("p",[t._v("为了保持组件的灵活性，我们并没有在form组件内部去内置按钮，并以按钮去获取内部子组件验证状态(state)")]),t._v(" "),e("p",[t._v("您可以给Form组件设置ref属性，并以getStates方法获得子组件所有属性")]),t._v(" "),e("p",[t._v("但其实以ref获得并非我本意，因此我们提供了一个prop参数，以回调的形式返回验证结果（看右侧示例)")]),t._v(" "),e("p",[t._v("您也可以自己封装组件来配合我们的form组件")])])])]),t._v(" "),e("layout-code",{attrs:{title:"搜索"},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",{staticClass:"vue"},[t._v(t._s(t.code))])])])],1)}),[],!1,null,null,null);n.default=a.exports},44:function(t,n,e){var r=e(19),o=e(17);t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}}},45:function(t,n,e){var r=e(28),o=e(20)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},46:function(t,n,e){"use strict";var r=e(24);e(25)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})}}]);