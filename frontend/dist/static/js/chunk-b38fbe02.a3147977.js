(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b38fbe02"],{"03f8":function(t,e,n){"use strict";n("0730")},"0730":function(t,e,n){},"0c4c":function(t,e,n){"use strict";n("3434")},"1cac":function(t,e,n){},3434:function(t,e,n){},4512:function(t,e,n){"use strict";n("a19c")},"53fe":function(t,e,n){},"5b68":function(t,e,n){"use strict";n("53fe")},"5f1d":function(t,e,n){},8188:function(t,e,n){},8205:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopNavigation"),n("FunctionBar"),n("Essay"),n("Remind"),n("el-backtop",{attrs:{duration:0,bottom:70}}),n("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topNavigation"},[n("span",{staticClass:"title"},[t._v("医疗文本标注平台")]),n("a",{attrs:{href:"#"},on:{click:function(e){return t.$bus.$emit("showIntroduce")}}},[t._v("功能介绍")]),n("a",{attrs:{href:"#"},on:{click:function(e){return t.$bus.$emit("showPaste")}}},[t._v("输入文本")]),n("a",{attrs:{href:"#"},on:{click:function(e){return t.$bus.$emit("showAnnotate")}}},[t._v("自动化标注")]),n("a",{attrs:{href:"#"},on:{click:function(e){return t.$bus.$emit("showDrawer")}}},[t._v("已标注")]),t.avatar?n("div",{staticClass:"right-menu"},[n("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[n("div",{staticClass:"avatar-wrapper"},[n("img",{staticClass:"user-avatar",attrs:{src:t.avatar+"?imageView2/1/w/80/h/80"}})]),n("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/"}},[n("el-dropdown-item",[t._v(" 首页 ")])],1),n("router-link",{attrs:{to:"/profile"}},[n("el-dropdown-item",[t._v(" 个人中心 ")])],1),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.logout(e)}}},[n("span",{staticStyle:{display:"block"}},[t._v("退出")])])],1)],1)],1):n("router-link",{staticStyle:{float:"right"},attrs:{to:"/login"}},[t._v("登录")]),n("Introduce"),n("Paste"),n("AutoAnnotate"),n("ShowAnnotation")],1)},i=[],r=(n("96cf"),n("1da1")),l=n("5530"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{visible:t.introduceModal,title:"功能介绍","modal-append-to-body":!1,width:t.width},on:{"update:visible":function(e){t.introduceModal=e}}},[n("div",[n("div",[t._v("按下鼠标，滑过文本，松开，即可标注文本")]),n("hr"),n("div",[t._v("也可以选择使用快捷键标注.对应快捷键：")]),n("hr"),n("div",[n("el-tag",{attrs:{type:"danger"}},[t._v("红：r(red) ")]),n("el-tag",{attrs:{type:"primary"}},[t._v("蓝：b(blue) ")]),n("el-tag",{attrs:{type:"success"}},[t._v("绿：g(green) ")]),n("el-tag",{attrs:{type:"warning"}},[t._v("橙：o(orange)")])],1),n("hr"),n("div",[t._v("自动化标注功能用于机器学习自动化标注，人工标注时不推荐使用")])]),n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.introduceModal=!1}}},[t._v("我知道了")])],1)])],1)},d=[],u=n("a78e"),p=n.n(u),h={name:"Introduce",created:function(){var t=this;this.$bus.$on("showIntroduce",(function(){t.introduceModal=!0})),this.haveRead()},data:function(){return{introduceModal:!1,width:""}},mounted:function(){var t=window.innerWidth;this.width=t<=450?"80%":"30%"},methods:{haveRead:function(){p.a.get("haveRead")||(this.introduceModal=!0,p.a.set("haveRead","true",{expires:36500,path:""}))}}},f=h,v=n("2877"),m=Object(v["a"])(f,c,d,!1,null,"48637630",null),w=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{visible:t.pasteContentModal,title:"在这里输入或粘贴你的文本（若不成功，请刷新网页后重试）","modal-append-to-body":!1,width:t.width},on:{"update:visible":function(e){t.pasteContentModal=e}}},[n("label",[n("textarea",{attrs:{type:"text",id:"pasteContent"}})]),n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.pasteContent}},[t._v("确定")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.pasteContentModal=!1}}},[t._v("取消")])],1)])],1)},b=[],y={name:"Paste",created:function(){var t=this;this.$bus.$on("showPaste",(function(){t.pasteContentModal=!0}))},data:function(){return{pasteContentModal:!1,width:""}},mounted:function(){var t=window.innerWidth;this.width=t<=450?"80%":"30%"},methods:{pasteContent:function(){this.pasteContentModal=!1,this.$store.state.inputContent=document.getElementById("pasteContent").value,document.getElementById("pasteContent").value="",this.$store.state.data[1]=[],this.$store.state.data[0]=[],this.$store.state.data[2]=[],this.$store.state.data[3]=[]}}},_=y,$=(n("03f8"),Object(v["a"])(_,g,b,!1,null,"3de0d7b6",null)),x=$.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{visible:t.annotateModal,title:"自动化标注","modal-append-to-body":!1,width:t.width},on:{"update:visible":function(e){t.annotateModal=e}}},[n("el-collapse",[n("el-collapse-item",{attrs:{title:"使用说明"}},[n("div",[t._v(" 一键标注全文，用于机器学习自动标注，后台传来要标注的词，前台进行标注，人工检查是否正确 ")]),n("hr"),n("div",[t._v(" 如果每种类型有多个值，请用"),n("span",{staticStyle:{color:"red","font-size":"20px"}},[t._v(" 一个 ")]),t._v(" 空格隔开"),n("br"),n("hr"),t._v(" 人工标注时不推荐使用"),n("br"),n("hr"),n("span",{staticStyle:{color:"red","font-size":"20px"}},[t._v("若要使用，需在最开始时使用（即还未进行标注时），否则会有奇怪的结果")])])])],1),n("el-input",{model:{value:t.relation,callback:function(e){t.relation=e},expression:"relation"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[n("el-button",[t._v("关系")])],1)]),n("el-input",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[n("el-button",[t._v("名称")])],1)]),n("el-input",{model:{value:t.medicine,callback:function(e){t.medicine=e},expression:"medicine"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[n("el-button",[t._v("药物")])],1)]),n("el-input",{model:{value:t.tool,callback:function(e){t.tool=e},expression:"tool"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[n("el-button",[t._v("器械")])],1)]),n("span",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.autoAnnotate}},[t._v("确定")])],1)],1)],1)},k=[];n("b0c0"),n("99af"),n("a630"),n("a15b"),n("ac1f"),n("3ca3"),n("1276"),n("498a");function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function j(t){if(Array.isArray(t))return S(t)}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("ddb0");function T(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("25f0");function A(t,e){if(t){if("string"===typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}function E(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function M(t){return j(t)||T(t)||A(t)||E()}var O=n("4360"),z={buttonStyle:function(){return"height:20px;\n        width:20px;\n        text-align:center;\n        line-height:20px;\n        border-radius:30px;\n        margin-left:5px;\n        outline: none;\n        cursor:pointer;\n        background-color:white"},textStyle:function(t){var e=["red","blue","green","orange"];return"border:5px solid ".concat(e[t],";background-color:").concat(e[t],";border-radius: 10px;padding: 0 5px 0 3px;")},annotate:function(t,e){var n=this,a=O["a"].state.selectionText.trim();O["a"].commit("addToList",{id:t,text:a});var o=this.textStyle(e);if(a.length>0){var s=document.createElement("button");s.setAttribute("id",t),s.addEventListener("click",(function(){n.deleteById(t)})),s.setAttribute("style",this.buttonStyle());var i=document.createElement("span");i.setAttribute("style",o);var r=window.getSelection().getRangeAt(0);r.surroundContents(i),i.appendChild(s),window.getSelection().removeAllRanges(),O["a"].state.id++}},deleteById:function(t){var e=document.getElementById("essay"),n=document.getElementById(t).parentNode,a=document.createTextNode(n.innerText.trim()),o=n.innerText.trim();e.insertBefore(a,n),e.removeChild(n),O["a"].commit("deleteAnnotatedText",{type:t,text:o})},autoAnnotate:function(t){for(var e=this,n=document.getElementById("essay"),a=[],o=0;o<t.length;o++){var s;(s=a).push.apply(s,M(t[o].split(" ")));for(var i=0;i<a.length;i++)0!==a[i].length&&function(){O["a"].state.data[o].push(a[i]),n.innerHTML=n.innerHTML.split(O["a"].state.data[o][i]).join("<span style='".concat(e.textStyle(o),"'>").concat(O["a"].state.data[o][i].trim(),"<button class='deleteButton' style='").concat(e.buttonStyle(),"'></button> </span>"));for(var t=Array.from(document.getElementsByClassName("deleteButton")),s=function(n){t[n].id=o+""+O["a"].state.id++,t[n].onclick=function(){e.deleteById(t[n].id)}},r=0;r<t.length;r++)s(r)}();a=[]}}},B={name:"AutoAnnotate",created:function(){var t=this;this.$bus.$on("showAnnotate",(function(){t.annotateModal=!0}))},data:function(){return{annotateModal:!1,relation:"",name:"",medicine:"",tool:"",width:""}},mounted:function(){var t=window.innerWidth;this.width=t<=450?"80%":"30%"},methods:{autoAnnotate:function(){this.annotateModal=!1,z.autoAnnotate([this.relation,this.name,this.medicine,this.tool]),this.relation="",this.name="",this.medicine="",this.tool=""}}},D=B,I=Object(v["a"])(D,C,k,!1,null,"254ec1ee",null),N=I.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-drawer",{staticClass:"drawer",attrs:{visible:t.drawer,"modal-append-to-body":!1,"show-close":!1,title:"title",size:"40%","with-header":!1},on:{"update:visible":function(e){t.drawer=e}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.data[0].length>0,expression:"$store.state.data[0].length > 0"}],staticClass:"list"},[n("button",{staticClass:"btn",staticStyle:{"background-color":"red","margin-top":"0"}},[t._v(" 关系 ")]),n("div",[n("ol",t._l(t.$store.state.data[0],(function(e,a){return n("li",{key:a,staticClass:"list-item"},[t._v(" "+t._s(e)+" ")])})),0)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.data[1].length>0,expression:"$store.state.data[1].length > 0"}],staticClass:"list"},[n("button",{staticClass:"btn",staticStyle:{"background-color":"blue"},attrs:{type:"primary",size:"medium"}},[t._v(" 名称 ")]),n("div",[n("ol",t._l(t.$store.state.data[1],(function(e,a){return n("li",{key:a,staticClass:"list-item"},[t._v(" "+t._s(e)+" ")])})),0)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.data[2].length>0,expression:"$store.state.data[2].length > 0"}],staticClass:"list"},[n("button",{staticClass:"btn",staticStyle:{"background-color":"green"},attrs:{type:"success",size:"medium"}},[t._v(" 药物 ")]),n("div",[n("ol",t._l(t.$store.state.data[2],(function(e,a){return n("li",{key:a,staticClass:"list-item"},[t._v(" "+t._s(e)+" ")])})),0)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.data[3].length>0,expression:"$store.state.data[3].length > 0"}],staticClass:"list"},[n("button",{staticClass:"btn",staticStyle:{"background-color":"orange"},attrs:{type:"warning",size:"medium"}},[t._v(" 器械 ")]),n("div",[n("ol",t._l(t.$store.state.data[3],(function(e,a){return n("li",{key:a,staticClass:"list-item"},[t._v(" "+t._s(e)+" ")])})),0)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.$store.state.data[0].length&&0==t.$store.state.data[1].length&&0==t.$store.state.data[2].length&&0==t.$store.state.data[3].length,expression:"\n        $store.state.data[0].length == 0 &&\n        $store.state.data[1].length == 0 &&\n        $store.state.data[2].length == 0 &&\n        $store.state.data[3].length == 0\n      "}],staticStyle:{"font-size":"30px"}},[t._v(" 只有标注了才会在这里显示哦👨🏻‍🔬 ")]),n("div",{staticClass:"upload-button"},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:0!=t.$store.state.data[0].length||0!=t.$store.state.data[1].length||0!=t.$store.state.data[2].length||0!=t.$store.state.data[3].length,expression:"\n          $store.state.data[0].length != 0 ||\n          $store.state.data[1].length != 0 ||\n          $store.state.data[2].length != 0 ||\n          $store.state.data[3].length != 0\n        "}],attrs:{type:"primary"},on:{click:t.uploadData}},[t._v("上传数据")])],1)])],1)},P=[],F=n("bc3a"),L=n.n(F),U=n("5c96"),H=L.a.create({baseURL:"http://localhost:8000",timeout:5e3});H.interceptors.response.use((function(t){var e=t.data;if(2e4===e.code)return e;Object(U["Message"])({type:"error",showClose:!0,message:e.message||"Error",duration:3e3})}),(function(t){return Object(U["Message"])({message:"网络请求发生错误，请检查您的网络状态或联系管理员",showClose:!0,type:"error",duration:3e3}),Promise.reject(t)}));var W=H,J={postToBackend:function(t){return W({url:"upload/?relation=".concat(t[0],"&name=").concat(t[1],"&medicine=").concat(t[2],"&tool=").concat(t[3]),method:"GET"})},translate:function(t){return W({url:"translate/?text=".concat(t),method:"get"})}},G={name:"ShowAnnotation",created:function(){var t=this;this.$bus.$on("showDrawer",(function(){t.drawer=!0}))},data:function(){return{drawer:!1,relation:"",name:"",medicine:"",tool:""}},methods:{uploadData:function(){var t=this;J.postToBackend(this.$store.state.data).then((function(){t.$message.success("上传成功"),t.drawer=!1}))}}},V=G,X=(n("5b68"),Object(v["a"])(V,R,P,!1,null,"4ce822b4",null)),Y=X.exports,q=n("2f62"),K={name:"TopNavigation",components:{Introduce:w,Paste:x,AutoAnnotate:N,ShowAnnotation:Y},computed:Object(l["a"])({},Object(q["b"])(["avatar"])),methods:{logout:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("user/logout");case 2:case"end":return e.stop()}}),e)})))()}}},Q=K,Z=(n("dbc2"),Object(v["a"])(Q,s,i,!1,null,"394cca14",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-dropdown",{staticClass:"el-dropdown-link",staticStyle:{"margin-left":"20px","margin-top":"20px"}},[n("a",{attrs:{href:"javascript:void(0)"}},[t._v(" 功能 "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("待开发")]),n("el-dropdown-item",[t._v("待开发")])],1)],1),n("el-dropdown",{staticClass:"el-dropdown-link",staticStyle:{"margin-left":"20px"}},[n("a",{attrs:{href:"javascript:void(0)"}},[t._v(" 翻译 "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("待开发")]),n("el-dropdown-item",[t._v("待开发")])],1)],1),n("el-dropdown",{staticClass:"el-dropdown-link",staticStyle:{"margin-left":"20px"}},[n("a",{attrs:{href:"javascript:void(0)"}},[t._v(" 工具 "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("待开发")]),n("el-dropdown-item",[t._v("待开发")])],1)],1),n("span",{staticClass:"functionButton"},[n("button",{on:{click:t.reduceFontSize}},[t._v("-")]),n("span",[t._v("字体")]),n("button",{on:{click:t.addFontSize}},[t._v("+")])])],1)},nt=[],at={name:"myDropDown",methods:{addFontSize:function(){this.$store.state.fontSize++},reduceFontSize:function(){this.$store.state.fontSize--}}},ot=at,st=(n("4512"),Object(v["a"])(ot,et,nt,!1,null,"3c73fbe2",null)),it=st.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"paper"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showDialog,expression:"showDialog"}],ref:"showDialog",staticClass:"dialog"},[n("el-button",{attrs:{type:"danger",size:"medium"},on:{click:function(e){return t.annotateText("0"+t.$store.state.id,0)}}},[t._v("关系(r) ")]),n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){return t.annotateText("1"+t.$store.state.id,1)}}},[t._v("名称(b) ")]),n("el-button",{attrs:{type:"success",size:"medium"},on:{click:function(e){return t.annotateText("2"+t.$store.state.id,2)}}},[t._v("药物(g) ")]),n("el-button",{attrs:{type:"warning",size:"medium"},on:{click:function(e){return t.annotateText("3"+t.$store.state.id,3)}}},[t._v("器械(o) ")]),n("el-button",{attrs:{type:"info",size:"medium"},on:{click:t.translateText}},[t._v("翻译(t) ")])],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.choice=!1}}},[t._v("取消 ")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showTranslateCard,expression:"showTranslateCard"}],ref:"translateCard",staticClass:"translate-card"},[n("TranslateCard",{attrs:{result:t.translateResult}})],1),n("pre",{ref:"essay",staticClass:"input-content",style:"font-size:"+t.$store.state.fontSize+"px",attrs:{id:"essay"},domProps:{innerHTML:t._s(t.$store.state.inputContent)},on:{mouseup:function(e){return t.getSelection(e)}}})])},lt=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{attrs:{shadow:"hover"}},[t._v(" "+t._s(t.result)+" ")])],1)},dt=[],ut={name:"TranslateCard",props:{result:{type:String,default:function(){return"translate result"}}},methods:{}},pt=ut,ht=Object(v["a"])(pt,ct,dt,!1,null,"29182c56",null),ft=ht.exports,vt={name:"Essays",data:function(){return{showDialog:!1,selectText:"",showTranslateCard:!1,translateResult:""}},components:{TranslateCard:ft},created:function(){this.annotateByShortcut()},methods:{showSelectBox:function(t,e){this.$refs.showDialog.style.left=t+10+"px",this.$refs.showDialog.style.top=e+10+"px",this.$refs.translateCard.style.left=t+10+"px",this.$refs.translateCard.style.top=e+10+"px"},getSelection:function(t){""!==window.getSelection().toString()&&(this.selectText=window.getSelection().toString(),this.$store.state.selectionText=window.getSelection().toString(),this.showSelectBox(t.clientX,t.clientY+document.documentElement.scrollTop),this.$refs.showDialog.style.display="block",this.showDialog=!0)},annotateByShortcut:function(){var t=this;document.onkeydown=function(e){var n=e.key,a=t.$store.state.id;t.showDialog=!1,"r"===n?z.annotate("0"+a,0):"b"===n?z.annotate("1"+a,1):"g"===n?z.annotate("2"+a,2):"o"===n&&z.annotate("3"+a,3)}},annotateText:function(t,e){this.showDialog=!1,z.annotate(t,e)},translateText:function(t){var e=this;this.showDialog=!1;var n=window.getSelection().toString();J.translate(n).then((function(t){console.log(t),e.translateResult=t,e.$message.success(t.message)}))}}},mt=vt,wt=(n("0c4c"),Object(v["a"])(mt,rt,lt,!1,null,"17adb926",null)),gt=wt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[t._v("Copyright © 2020 Syngou")])},yt=[],_t={name:"Footer"},$t=_t,xt=(n("9fac"),Object(v["a"])($t,bt,yt,!1,null,"06dac75f",null)),Ct=xt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{staticClass:"remind-title",attrs:{visible:t.remind,title:"温馨提示"},on:{"update:visible":function(e){t.remind=e}}},[n("p",{staticClass:"remind-message"},[t._v("您有还未上传的数据哦")]),n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.introduceModal=!1}}},[t._v("仍要离开")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.introduceModal=!1}}},[t._v("上传并离开")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.introduceModal=!1}}},[t._v("继续标注")])],1)])],1)},St=[],jt={data:function(){return{remind:!1}},mounted:function(){this.isUpload(),this.isPC()},methods:{isUpload:function(){var t=this;window.onbeforeunload=function(){t.$store.state.isUpload}},isPC:function(){for(var t=["Android","iPhone","Windows Phone","iPad","iPod"],e=navigator.userAgent,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){this.$message.warning({message:"手机是无法进行标注的哦,请使用电脑浏览器。",duration:5e3,showClose:!0});break}}}},Tt=jt,At=(n("8838"),Object(v["a"])(Tt,kt,St,!1,null,"3ee981ac",null)),Et=At.exports,Mt={name:"Home",components:{TopNavigation:tt,FunctionBar:it,Essay:gt,Footer:Ct,Remind:Et}},Ot=Mt,zt=(n("87f3"),Object(v["a"])(Ot,a,o,!1,null,"02a7cbc7",null));e["default"]=zt.exports},"87f3":function(t,e,n){"use strict";n("8188")},8838:function(t,e,n){"use strict";n("5f1d")},"9fac":function(t,e,n){"use strict";n("1cac")},a15b:function(t,e,n){"use strict";var a=n("23e7"),o=n("44ad"),s=n("fc6a"),i=n("a640"),r=[].join,l=o!=Object,c=i("join",",");a({target:"Array",proto:!0,forced:l||!c},{join:function(t){return r.call(s(this),void 0===t?",":t)}})},a19c:function(t,e,n){},c9fc:function(t,e,n){},dbc2:function(t,e,n){"use strict";n("c9fc")}}]);