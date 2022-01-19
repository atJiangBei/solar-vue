(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{327:function(n,e){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},328:function(n,e,t){"use strict";var i=t(4),l=t(329).trim;i({target:"String",proto:!0,forced:t(330)("trim")},{trim:function(){return l(this)}})},329:function(n,e,t){var i=t(2),l=t(28),r=t(22),o=t(327),a=i("".replace),s="["+o+"]",v=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),d=function(n){return function(e){var t=r(l(e));return 1&n&&(t=a(t,v,"")),2&n&&(t=a(t,c,"")),t}};n.exports={start:d(1),end:d(2),trim:d(3)}},330:function(n,e,t){var i=t(81).PROPER,l=t(3),r=t(327);n.exports=function(n){return l((function(){return!!r[n]()||"​᠎"!=="​᠎"[n]()||i&&r[n].name!==n}))}},615:function(n,e,t){"use strict";t.r(e);t(328),t(27),t(80);var i=t(0),l=t(331),r=t.n(l);t(332);i.a.use(r.a);var o={data:function(){return{codeshow:!1,show:!1,type:"",message:"",code:',\n<template>\n  <div>\n    <div class="demo-title">基本用法</div>\n    <div>\n      <sv-write placeholder="基本用法" v-model="value1"></sv-write>\n    </div>\n    <div class="demo-title">右侧带图标，只能输入手机号，11位</div>\n    <div>\n      <sv-write type="tel" :max-length="11" placeholder="请输入手机号" v-model="value2" right-icon="edit"></sv-write>\n    </div>\n    <div class="demo-title">左右都有图标</div>\n    <div>\n      <sv-write\n        label="信息"\n        type="text"\n        placeholder="请输入信息"\n        v-model="value3"\n        right-icon="edit"\n        left-icon="records"\n      ></sv-write>\n    </div>\n    <div class="demo-title">必须为数字并且内容居右，带有验证</div>\n    <div>\n      <sv-write\n        label="信息"\n        type="number"\n        errmessage="您输入的号码不符合规则"\n        :regexp="telReg"\n        placeholder="请输入号码"\n        align="right"\n        v-model="value4"\n      ></sv-write>\n    </div>\n    <div class="demo-title">带有验证的必填项</div>\n    <div>\n      <sv-write\n        label="姓名"\n        type="text"\n        align="right"\n        :max-length="10"\n        required\n        placeholder="请输入您的姓名"\n        v-model="value5"\n        RightIcon="edit"\n        errmessage="您好！姓名是必填项"\n      ></sv-write>\n    </div>\n    <div class="demo-title">textarea</div>\n    <div>\n      <sv-write\n        label="介绍"\n        type="textarea"\n        align="right"\n        :max-length="100"\n        required\n        placeholder="请介绍"\n        v-model="value6"\n        right-icon="message"\n        left-icon="records"\n        errmessage="您必须介绍"\n      ></sv-write>\n    </div>\n    <div class="demo-title">事件</div>\n    <div>\n      <sv-write\n        label="信息"\n        type="text"\n        placeholder="请输入信息"\n        v-model="value7"\n        right-icon="edit"\n        left-icon="records"\n        @on-change="change"\n        @on-clear="onclear"\n        @on-focus="onfocus"\n        @on-blur="onblur"\n        @right-click="rightclick"\n        @left-click="leftclick"\n      ></sv-write>\n    </div>\n    <div class="demo-blank"></div>\n  </div>\n</template>\n\nexport default {\n  created() {\n    //const idReg18 = /^[1-9]d{5}(18|19|([23]d))d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{3}[0-9Xx]$/\n  },\n  data() {\n    return {\n      value1: \'\',\n      value2: \'\',\n      value3: \'\',\n      value4: \'\',\n      value5: \'\',\n      value6: \'\',\n      value7: \'\',\n      telReg: /^[1][3,4,5,7,8][0-9]{9}$/\n    }\n  },\n  methods: {\n    change(val) {\n      console.log(val)\n    },\n    onclear(val) {\n      console.log(\'清除\')\n    },\n    onfocus() {\n      console.log(\'获得焦点\')\n    },\n    onblur() {\n      console.log(\'失去焦点\')\n    },\n    leftclick() {\n      console.log(\'点击左侧图标\')\n    },\n    rightclick() {\n      console.log(\'点击右侧图标\')\n    }\n  }\n}\n\n\n'.replace(/^ {8}/gm,"").trim()}}},a=t(50),s=Object(a.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("layout-card",[t("div",[t("layout-column",{attrs:{title:"代码演示",url:"write",tips:"查看源代码"},on:{handle:function(e){n.show=!0}}})],1)]),n._v(" "),t("div",{staticClass:"file-blank"}),n._v(" "),t("layout-card",[t("div",{staticClass:"site-introduce"},[t("div",{staticClass:"site-introduce-title"},[n._v("介绍")]),n._v(" "),t("div",{staticClass:"site-introduce-text"},[t("p",[n._v("我们为此组件内置了一个状态state用来判断验证结果，当然，您也可以自己验证")]),n._v(" "),t("p",[n._v("当您设置了regexp,minLength,required等属性时，我们默认您开启了自动验证")]),n._v(" "),t("p",[n._v("我们推荐您结合本文的Form组件搭配使用")])])])]),n._v(" "),t("layout-code",{attrs:{title:"搜索"},model:{value:n.show,callback:function(e){n.show=e},expression:"show"}},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"vue"},[n._v(n._s(n.code))])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);