(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{204:function(t,n,e){var content=e(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("15000dd7",content,!0,{sourceMap:!1})},211:function(t,n,e){"use strict";var o=e(204);e.n(o).a},212:function(t,n,e){(t.exports=e(12)(!1)).push([t.i,".controls[data-v-2c8bd455]{text-align:center;margin:20px 0}.markdown-block-container[data-v-2c8bd455]{margin:20px 0;border:1px solid #dcdfe6;border-radius:5px;display:flex;flex-direction:row;min-height:200px;justify-content:space-around;flex-wrap:wrap}.markdown-block-container p[data-v-2c8bd455]{text-align:center;width:100%}.markdown-block-container div[data-v-2c8bd455]{width:45%;overflow:hidden;word-break:break-all}.markdown-block-container .result-mark-down[data-v-2c8bd455]{padding-top:5px}",""])},218:function(t,n,e){"use strict";var o=e(219),r={components:{vueMarkdown:e.n(o).a},props:{editPost:{type:Object}},data:function(){return{testString:"~~tast~~ **test**",post:this.editPost?this.editPost:{title:"",description:"",img:"",content:""}}},methods:{cancel:function(){this.$router.push("/admin/")},onSubmit:function(){this.$emit("submit",this.post)}}},c=(e(211),e(2)),component=Object(c.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"new-post"},[e("div",{staticClass:"container"},[e("form",{on:{submit:function(n){return n.preventDefault(),t.onSubmit(n)}}},[e("AppInput",{model:{value:t.post.title,callback:function(n){t.$set(t.post,"title",n)},expression:"post.title"}},[t._v("Title:")]),t._v(" "),e("AppInput",{model:{value:t.post.description,callback:function(n){t.$set(t.post,"description",n)},expression:"post.description"}},[t._v("Description:")]),t._v(" "),e("AppInput",{model:{value:t.post.img,callback:function(n){t.$set(t.post,"img",n)},expression:"post.img"}},[t._v("Image link:")]),t._v(" "),e("div",{staticClass:"markdown-block-container"},[e("p",[t._v("Content")]),t._v(" "),e("AppTextArea",{model:{value:t.testString,callback:function(n){t.testString=n},expression:"testString"}}),t._v(" "),e("vueMarkdown",{staticClass:"result-mark-down",attrs:{source:t.testString}})],1),t._v(" "),e("div",{staticClass:"controls"},[e("div",{staticClass:"btn btnDanger",on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),e("AppButton",[t._v("Save")])],1)],1)])])},[],!1,null,"2c8bd455",null);n.a=component.exports},342:function(t,n,e){"use strict";e.r(n);var o={components:{newPostForm:e(218).a},layout:"admin",methods:{onSubmit:function(t){var n=this;this.$store.dispatch("addPost",t).then(function(t){n.$router.push("/admin")}).catch(function(t){console.log("query error")})}}},r=e(2),component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("newPostForm",{on:{submit:this.onSubmit}})},[],!1,null,null,null);n.default=component.exports}}]);