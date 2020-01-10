(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{431:function(n,t,e){"use strict";e.r(t);var s=e(0),i=e(47),o=e.n(i);e(48);s.a.use(o.a);var v={name:"m-icon",data:function(){return{show:!1,code:'\n<template>\n  <div class="demo-popup">\n    <div class="demo-title">基本用法</div>\n    <div class="demo-container">\n      <div class="demo-example-margin">\n        <sv-button @click.native="test" type="info">弹出窗口</sv-button>\n      </div>\n    </div>\n    <div class="demo-title">不同方向</div>\n    <div class="demo-container">\n      <div class="demo-example-margin">\n        <sv-button @click.native="test1" type="info">下方弹出</sv-button>\n      </div>\n      <div class="demo-example-margin">\n        <sv-button @click.native="test2" type="info">上方弹出</sv-button>\n      </div>\n      <div class="demo-example-margin">\n        <sv-button @click.native="test3" type="info">左方弹出</sv-button>\n      </div>\n      <div class="demo-example-margin">\n        <sv-button @click.native="test4" type="info">右方弹出</sv-button>\n      </div>\n    </div>\n    <div class="demo-title">去除遮罩</div>\n    <div class="demo-container">\n      <div class="demo-example-margin">\n        <sv-button @click.native="test5">下方弹出</sv-button>\n      </div>\n    </div>\n    <sv-popup v-model="value" position="center">\n      <div class="demo-p-box">你好，很高兴看到你</div>\n    </sv-popup>\n    <sv-popup v-model="value1" position="bottom">\n      <div class="demo-p-box"></div>\n    </sv-popup>\n    <sv-popup v-model="value2" position="top">\n      <div class="demo-p-box"></div>\n    </sv-popup>\n    <sv-popup v-model="value3" position="left">\n      <div class="demo-p-box"></div>\n    </sv-popup>\n    <sv-popup v-model="value4" position="right">\n      <div class="demo-p-box"></div>\n    </sv-popup>\n    <sv-popup v-model="value5" position="bottom" :overlay="false">\n      <div class="demo-p-box"></div>\n    </sv-popup>\n  </div>\n</template>\n\n\nexport default {\n  data() {\n    return {\n      value: false,\n      value1: false,\n      value2: false,\n      value3: false,\n      value4: false,\n      value5: false\n    }\n  },\n  methods: {\n    test() {\n      this.value = true\n    },\n    test1() {\n      this.value1 = true\n    },\n    test2() {\n      this.value2 = true\n    },\n    test3() {\n      this.value3 = true\n    },\n    test4() {\n      this.value4 = true\n    },\n    test5() {\n      this.value5 = true\n      setTimeout(() => {\n        this.value5 = false\n      }, 1000)\n    }\n  }\n}\n'}}},a=e(1),l=Object(a.a)(v,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("layout-card",[e("div",[e("layout-column",{attrs:{title:"扫码体验",tips:"查看源代码",url:"popup"},on:{handle:function(t){n.show=!0}}})],1)]),n._v(" "),e("div",{staticClass:"file-blank"}),n._v(" "),e("layout-card",[e("div",{staticClass:"site-introduce"},[e("div",{staticClass:"site-introduce-title"},[n._v("介绍")]),n._v(" "),e("div",{staticClass:"site-introduce-text"},[e("p",[n._v("您可以直接引入Icon，name属性见右侧示例")]),n._v(" "),e("p",[n._v("您也可以借用类名的方式")])])])]),n._v(" "),e("layout-code",{attrs:{title:"icon"},model:{value:n.show,callback:function(t){n.show=t},expression:"show"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",{staticClass:"vue"},[n._v(n._s(n.code))])])])],1)}),[],!1,null,null,null);t.default=l.exports}}]);