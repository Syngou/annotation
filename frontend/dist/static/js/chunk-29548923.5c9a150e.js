(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29548923"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var r=n("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("6b75");function a(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var i=n("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return a(t)||o(t)||Object(i["a"])(t)||c()}},"349d":function(t,e,n){},3810:function(t,e,n){},"508e":function(t,e,n){"use strict";n("3810")},5238:function(t,e,n){"use strict";n("5f72")},"5f72":function(t,e,n){},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"840f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"tags-container"},t._l(t.types,(function(e,r){return n("span",{key:r,staticClass:"text-tag",style:{backgroundColor:e.color}},[t._v(t._s(e.text))])})),0),t._l(t.textArray,(function(e,r){return n("div",{key:r,staticClass:"entity-item-box"},[n("entity-item-box",{attrs:{labels:t.types,entities:t.annotationArray[t.currentPage*t.sentenceCount+r-t.sentenceCount]}})],1)})),n("div",{staticClass:"page"},[n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[2,3,4,5],"page-size":2,layout:"total, sizes, prev, pager, next, jumper",total:t.annotationArray.length},on:{"size-change":t.handleSizeChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])],2)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{margin:"30px"}},[n("ul",[n("li",[t._v("字上面的标签表示标注值，下方为预测值")])])])])}],o=n("2909"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"highlight-container highlight-container--bottom-labels"},t._l(t.chunks,(function(t,e){return n("entity-item",{key:e,attrs:{content:t.text,standardType:t.standardType,predictType:t.predictType,standardColor:t.standardColor,predictColor:t.predictColor}})})),1)},c=[],s=(n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("06c5"));function u(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(s["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("span",{staticClass:"highlight",staticStyle:{"border-color":"black"}},[n("span",{staticClass:"bottom"},[n("span",{staticClass:"highlight__standard",style:{backgroundColor:t.standardColor,color:"black"},attrs:{"data-label":t.standardType}}),n("span",{staticClass:"highlight__content"},[t._v(t._s(t.content)+" ")]),n("span",{staticClass:"highlight__label",style:{backgroundColor:t.predictColor,color:"black"},attrs:{"data-label":t.predictType}})])])]],2)},d=[],f={props:{content:{type:String,default:"",required:!0},standardType:{type:String,default:""},standardColor:{type:String,default:"64FFDA"},predictColor:{type:String,default:"64FFDA"},predictType:{type:String,default:""}},data:function(){return{showMenu:!1}}},p=f,y=(n("5238"),n("2877")),h=Object(y["a"])(p,l,d,!1,null,"25760515",null),b=h.exports,g={components:{EntityItem:b},props:{labels:{type:Array,default:function(){return[]},required:!0},entities:{type:Array,default:function(){return[]},required:!0}},computed:{chunks:function(){var t,e=[],n=this.entities,r=u(n);try{for(r.s();!(t=r.n()).done;){var a=t.value;e.push({standardType:a.standard_label,predictType:a.predict_label,standardColor:this.pickColor(a.standard_type),predictColor:this.pickColor(a.predict_type),text:a.value})}}catch(o){r.e(o)}finally{r.f()}return e}},methods:{pickColor:function(t){var e,n=u(this.labels);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.text&&r.text==t)return r.color}}catch(a){n.e(a)}finally{n.f()}return"#ffffff"}}},v=g,m=(n("508e"),Object(y["a"])(v,i,c,!1,null,"0efc5f40",null)),C=m.exports,_=n("b775");function A(){return Object(_["a"])({url:"/mockjs/error/text",method:"get"})}var x={name:"index",components:{EntityItemBox:C},data:function(){return{currentPage:1,annotationArray:[],types:[],sentenceCount:2}},created:function(){this.fetchData()},computed:{textArray:function(){for(var t=this.currentPage,e=[],n=this.sentenceCount*t-this.sentenceCount;n<=this.sentenceCount*t-1;n++)this.annotationArray[n]&&e.push([]);return e}},methods:{handleSizeChange:function(t){this.sentenceCount=t},fetchData:function(){var t=this;A().then((function(e){var n;(n=t.types).push.apply(n,Object(o["a"])(e.data.labels));for(var r=0;r<t.types.length;r++)t.types[r]["text"]&&(t.types[r]["color"]=t.$store.state.annotate.colorArray[r]);t.annotationArray=e.data.annotations}))}}},k=x,S=(n("a471"),Object(y["a"])(k,r,a,!1,null,"01071782",null));e["default"]=S.exports},a471:function(t,e,n){"use strict";n("349d")}}]);