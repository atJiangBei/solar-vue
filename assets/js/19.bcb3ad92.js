(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{362:function(t,n,i){},394:function(t,n,i){"use strict";i(362)},600:function(t,n,i){"use strict";i.r(n);i(35),i(7);var o=["icon","loading","popup","stepper","tab","notify","toast","button","switch","write","form","swiper","scroll-view"],e=function(t){var n=o.filter((function(n){return t.indexOf(n)>0}));n.length?this.hash=n[0]:this.hash=""},s={watch:{$route:function(t){e.call(this,t.path)}},mounted:function(){try{var t=window.location.pathname;e.call(this,t)}catch(t){console.log(t)}},computed:{url:function(){return this.src+this.hash}},data:function(){return{ifrboolean:!0,src:"/solar-vue/mobile/index.html#/",hash:""}}},a=(i(394),i(50)),r=Object(a.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{directives:[{name:"show",rawName:"v-show",value:this.ifrboolean,expression:"ifrboolean"}],staticClass:"layout-simulator"},[n("iframe",{attrs:{src:this.url}})])}),[],!1,null,null,null);n.default=r.exports}}]);