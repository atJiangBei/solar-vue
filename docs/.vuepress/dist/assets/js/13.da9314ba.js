(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{127:function(t,i,e){},210:function(t,i,e){t.exports=e.p+"assets/img/logo200.656bd0f2.png"},225:function(t,i,e){"use strict";var s=e(127);e.n(s).a},438:function(t,i,e){"use strict";e.r(i);var s=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"introduce"},[s("div",{staticClass:"introduce-card"},[s("div",{staticClass:"introduce-bg"},[s("canvas",{staticStyle:{"min-width":"800px",width:"100%"},attrs:{width:"2500",height:"800"}})]),t._v(" "),s("div",{staticClass:"introduce-text-one"},[s("div",{staticClass:"home-logo"},[s("img",{staticClass:"logo-default",attrs:{src:e(210)}})]),t._v(" "),s("h2",[t._v("solar-vue")]),t._v(" "),s("div",{staticClass:"home-text"},[t._v("轻量的，可靠的，人性化的")])])]),t._v(" "),s("div",{staticClass:"file-blank"}),t._v(" "),s("div",{staticClass:"introduce-card"},[s("h3",[t._v("特性")]),t._v(" "),s("ul",[s("li",{staticClass:"tips-list-item"},[t._v("00+的实用组件：满足移动端的基本开发")]),t._v(" "),s("li",{staticClass:"tips-list-item"},[t._v("统一的视觉规范：保证了应用的项目内部、项目之间都能保持高度的视觉一致性")]),t._v(" "),s("li",{staticClass:"tips-list-item"},[t._v("适用于多场景的产生：提供按需加载能力，使用灵活，避免引入无用代码")])])]),t._v(" "),s("div",{staticClass:"file-blank"}),t._v(" "),s("div",{staticClass:"introduce-card"},[s("h3",[t._v("浏览器支持")]),t._v(" "),s("ul",[s("li",{staticClass:"tips-list-item"},[t._v("Android 4.4+,")]),t._v(" "),s("li",{staticClass:"tips-list-item"},[t._v("iOS 8+")])])])])}],o=(e(211),e(212)),n={mounted:function(){var t=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}();function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function e(t,i){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!==Object(o.a)(i)&&"function"!=typeof i?t:i}function s(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+Object(o.a)(i));t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(t,i):t.__proto__=i)}var n=function(o){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;i(this,n);var s=e(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return s.radius=t,s.color="rgba("+[255*Math.random()|0,255*Math.random()|0,255*Math.random()|0,Math.random()].join(",")+")",s.prevCrood=null,s}return s(n,F3.Obj),t(n,[{key:"render",value:function(t){t.fillStyle="#fff",t.fillRect(this.croods2D.position.x,this.croods2D.position.y,this.radius*this.croods2D.scale*this.yScale,this.radius*this.croods2D.scale*this.yScale)}}]),n}(),a=function(o){function a(t,s,o,n){i(this,a);var r=e(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return r.renderer=t,r.scene=s,r.camera=o,r.cvs=n,r.xOffset=0,r.waveHeight=.4,r.waveWidth=8,r.col=33,r.colPointNum=33,r.flyTime=2e3,r.timePass=0,r.scale=1,r.scaleStep=.01,r.planeFunction=function(){return 0},r.rotate={x:!1,y:!1,z:!1},r.pointGroup=new F3.Obj,r.scene.add(r.pointGroup),r.resize(n.width,n.height),r.init(),r}return s(a,F3.Time),t(a,[{key:"resize",value:function(t,i){this.cvs.width=t,this.cvs.height=i,this.stepWidth=1.8*t/this.col,this.pointGroup.setPosition(this.cvs.width/2,1.2*this.cvs.height,-this.col*this.stepWidth/2),this.pointGroup.setRotation(.1,0,0)}},{key:"init",value:function(){for(var t,i=-(this.col-1)/2;i<=(this.col-1)/2;i++)for(var e=-(this.colPointNum-1)/2;e<=(this.colPointNum-1)/2;e++)t=new n(10),this.pointGroup.add(t),t.initPos=new F3.Vector3(0,0,0),t.flyDelay=0}},{key:"update",value:function(t){this.timePass+=t,this.xOffset=this.timePass/500;var i=void 0,e=void 0,s=void 0,o=void 0,n=void 0,a=0;for(s=-(this.col-1)/2;s<=(this.col-1)/2;s++)for(n=-(this.colPointNum-1)/2;n<=(this.colPointNum-1)/2;n++)o=this.planeFunction(s,n,this.xOffset),(i=this.pointGroup.children[a]).yScale=1,e=(e=(this.timePass-i.flyDelay)/this.flyTime)>1?1:e<0?0:e,i.setPosition(s*this.stepWidth,o*this.stepWidth,n*this.stepWidth),a++;(this.rotate.x||this.rotate.y||this.rotate.z)&&this.pointGroup.setRotation(this.rotate.x?this.pointGroup.rotation.x+.001:0,this.rotate.y?this.pointGroup.rotation.y+.001:0,this.rotate.z?this.pointGroup.rotation.z+.001:0)}},{key:"setFunction",value:function(t){this.planeFunction=t}},{key:"toggleRotate",value:function(t){this.rotate[t]=!this.rotate[t],this.rotate[t]||(this.pointGroup.rotation[t]=0)}},{key:"animate",value:function(){var t=this;this.addTick((function(i){t.update(i),t.renderer.render(t.scene,t.camera)}))}}]),a}(),r={"sin(sqrt(x^2+z^2))":function(t,i,e){return Math.sin(Math.sqrt(Math.pow(t/2,2)+Math.pow(i/2,2))-e)},"cos(x)*sin(z)":function(t,i,e){return Math.cos(t/4+e)*Math.sin(i/4+e)*1}};!function(t){var i=t.getContext("2d"),e=new F3.Scene,s=new F3.Camera;s.origin=new F3.Vector3(t.width/2,t.height/3),s.p=1200;var o=new F3.Renderer(i,t),n=new a(o,e,s,t);n.animate(),n.setFunction(r["sin(sqrt(x^2+z^2))"]),n.toggleRotate("y"),F3.TIME.start()}(document.querySelector("canvas"))}},a=(e(225),e(1)),r=Object(a.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),s,!1,null,null,null);i.default=r.exports}}]);