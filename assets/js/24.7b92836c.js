(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{603:function(n,e,t){"use strict";t.r(e);var i=t(0),o=t(331),a=t.n(o);t(332);i.a.use(a.a);var c={name:"m-icon",data:function(){return{show:!1,code:"\n<template>\n  <div class=\"demo-icon\">\n    <div class=\"demo-icon-container\">\n      <ul>\n        <li v-for=\"icon in icons\" :key=\"icon\">\n          <icon :name=\"icon\"></icon>\n          <span>{{ icon }}</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</template>\n\nconst route = {\n  tags: '基础组件',\n  label: 'icon',\n  path: 'icon'\n}\nconst icons = [\n  'menu',\n  'starton',\n  'fail',\n  'clock',\n  'add',\n  'friends',\n  'halfstar',\n  'plus',\n  'position',\n  'loading',\n  'scan',\n  'setting',\n  'start',\n  'fenxiang',\n  'aret-left',\n  'bell',\n  'down',\n  'determine',\n  'close',\n  'edit',\n  'hot',\n  'back',\n  'licke',\n  'phone',\n  'records',\n  'cart',\n  'circle',\n  'selected',\n  'warn',\n  'rank',\n  'service',\n  'sort-down',\n  'sort-up',\n  'up-load',\n  'sort',\n  'location',\n  'licke-active',\n  'calendar',\n  'jinggao',\n  'chat',\n  'shoping',\n  'arrow-right',\n  'delete',\n  'success',\n  'question',\n  'select',\n  'message',\n  'minus',\n  'chatline',\n  'home',\n  'checked',\n  'load',\n  'switch',\n  'qr-code',\n  'moreread',\n  'operation',\n  'search',\n  'promotion',\n  'checkedhalf'\n]\nexport default {\n  data() {\n    return {\n      icons\n    }\n  }\n}   \n"}}},s=t(50),l=Object(s.a)(c,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("layout-card",[t("div",[t("layout-column",{attrs:{title:"扫码体验",tips:"查看源代码",url:"icon"},on:{handle:function(e){n.show=!0}}})],1)]),n._v(" "),t("div",{staticClass:"file-blank"}),n._v(" "),t("layout-card",[t("div",{staticClass:"site-introduce"},[t("div",{staticClass:"site-introduce-title"},[n._v("介绍")]),n._v(" "),t("div",{staticClass:"site-introduce-text"},[t("p",[n._v("您可以直接引入Icon，name属性见右侧示例")]),n._v(" "),t("p",[n._v("您也可以借用类名的方式")])])])]),n._v(" "),t("layout-code",{attrs:{title:"icon"},model:{value:n.show,callback:function(e){n.show=e},expression:"show"}},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"vue"},[n._v(n._s(n.code))])])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);