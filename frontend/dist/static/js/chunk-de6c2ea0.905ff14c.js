(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de6c2ea0"],{"9ed6":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("vue-particles",{staticClass:"login-bg",attrs:{color:"#39AFFD",particleOpacity:.7,particlesNumber:100,shapeType:"circle",particleSize:4,linesColor:"#8DD1FE",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),o("div",{staticClass:"login-box"},[o("div",{staticClass:"login-box-title"},[e._v("后台管理系统")]),o("div",{staticClass:"login-box-from"},[o("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{ref:"username",attrs:{placeholder:"请输入用户名",size:"medium",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[o("el-button",{attrs:{slot:"prepend",icon:"el-icon-user"},slot:"prepend"})],1)],1),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"请输入密码",size:"medium",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[o("el-button",{attrs:{slot:"prepend",icon:"el-icon-key"},slot:"prepend"})],1),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),o("el-form-item",[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"medium",loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("立即登陆")])],1)],1)],1)])],1)},s=[],n=o("61f7"),i={name:"Login",data:function(){var e=function(e,t,o){Object(n["b"])(t)?o():o(new Error("Please enter the correct user name"))},t=function(e,t,o){t.length<6?o(new Error("The password can not be less than 6 digits")):o()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},a=i,l=(o("fcfd"),o("2877")),c=Object(l["a"])(a,r,s,!1,null,"747fcf1c",null);t["default"]=c.exports},b2f6:function(e,t,o){},fcfd:function(e,t,o){"use strict";o("b2f6")}}]);