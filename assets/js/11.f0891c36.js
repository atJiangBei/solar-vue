(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{327:function(n,t){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},328:function(n,t,e){"use strict";var i=e(4),s=e(329).trim;i({target:"String",proto:!0,forced:e(330)("trim")},{trim:function(){return s(this)}})},329:function(n,t,e){var i=e(2),s=e(28),a=e(22),v=e(327),o=i("".replace),d="["+v+"]",l=RegExp("^"+d+d+"*"),r=RegExp(d+d+"*$"),c=function(n){return function(t){var e=a(s(t));return 1&n&&(e=o(e,l,"")),2&n&&(e=o(e,r,"")),e}};n.exports={start:c(1),end:c(2),trim:c(3)}},330:function(n,t,e){var i=e(81).PROPER,s=e(3),a=e(327);n.exports=function(n){return s((function(){return!!a[n]()||"​᠎"!=="​᠎"[n]()||i&&a[n].name!==n}))}},612:function(n,t,e){"use strict";e.r(t);e(328),e(27),e(80);var i=e(0),s=e(331),a=e.n(s);e(332);i.a.use(a.a);var v={name:"m-toast",data:function(){return{codeshow:!1,show:!1,type:"",message:"",code:',\n<template>\n  <div>\n    <div class="demo-title">基本用法</div>\n    <div class="demo-container">\n      <sv-tab v-model="value1">\n        <sv-tab-item v-for="(mess, index) in list1" :key="index">{{\n          mess\n        }}</sv-tab-item>\n      </sv-tab>\n    </div>\n    <div class="demo-title">自定义颜色</div>\n    <div class="demo-container">\n      <sv-tab v-model="value2" activeColor="#ff976a">\n        <sv-tab-item v-for="(mess, index) in list1" :key="index">{{\n          mess\n        }}</sv-tab-item>\n      </sv-tab>\n    </div>\n    <div class="demo-title">禁用部分菜单</div>\n    <div class="demo-container">\n      <sv-tab v-model="value3">\n        <sv-tab-item>首页</sv-tab-item>\n        <sv-tab-item>消息</sv-tab-item>\n        <sv-tab-item disabled>其它</sv-tab-item>\n        <sv-tab-item>空间</sv-tab-item>\n      </sv-tab>\n    </div>\n    <div class="demo-title">自定义底部导航</div>\n    <div class="demo-container">\n      <sv-tab\n        v-model="value4"\n        :customBarWidth="customBarWidth"\n        barActiveColor="rgb(114, 50, 221)"\n      >\n        <sv-tab-item v-for="(mess, index) in list1" :key="index">{{\n          mess\n        }}</sv-tab-item>\n      </sv-tab>\n    </div>\n    <div class="demo-title">动态添加tab</div>\n    <div class="demo-container">\n      <div class="demo-btn-container">\n        <sv-button\n          type="info"\n          icon="add"\n          size="mini"\n          @click.native="operation(\'add\')"\n          >add</sv-button\n        >\n        <sv-button type="info" icon="add" size="mini" @click.native="go"\n          >go 1</sv-button\n        >\n        <sv-button\n          type="danger"\n          icon="fail"\n          size="mini"\n          @click.native="operation(\'delete\')"\n          >delete</sv-button\n        >\n      </div>\n      <sv-tab v-model="value5">\n        <sv-tab-item v-for="(mess, index) in list2" :key="index">{{\n          mess\n        }}</sv-tab-item>\n      </sv-tab>\n    </div>\n  </div>\n</template>\n\nexport default {\n  data() {\n    return {\n      value1: 0,\n      list1: [\'首页\', \'消息\', \'空间\', \'其它\', \'设置\'],\n      value2: 1,\n      value3: 0,\n      value4: 0,\n      value5: 0,\n      list2: [\'首页\', \'消息\', \'空间\', \'其它\']\n    }\n  },\n  methods: {\n    customBarWidth(index) {\n      if (!index) index = 0.5\n      return index * 20 + \'px\'\n    },\n    operation(type) {\n      if (type === \'delete\') {\n        if (this.list2.length > 3) {\n          this.list2.pop()\n        }\n        return\n      }\n      this.list2.push(\'设置\')\n    },\n    go() {\n      this.value5 = 1\n    }\n  }\n}\n\n'.replace(/^ {8}/gm,"").trim()}}},o=e(50),d=Object(o.a)(v,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("layout-card",[e("div",[e("layout-column",{attrs:{title:"代码演示",url:"tab",tips:"查看源代码"},on:{handle:function(t){n.show=!0}}})],1)]),n._v(" "),e("div",{staticClass:"file-blank"}),n._v(" "),e("layout-card",[e("div",{staticClass:"site-introduce"},[e("div",{staticClass:"site-introduce-title"},[n._v("介绍")]),n._v(" "),e("div",{staticClass:"site-introduce-text"},[e("p",[n._v("\n          本组件必须和TabItem组件组合使用\n        ")]),n._v(" "),e("p",[n._v("我们提供了非常详细的例子，见右侧")])])])]),n._v(" "),e("layout-code",{attrs:{title:"搜索"},model:{value:n.show,callback:function(t){n.show=t},expression:"show"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",{staticClass:"vue"},[n._v(n._s(n.code))])])])],1)}),[],!1,null,null,null);t.default=d.exports}}]);