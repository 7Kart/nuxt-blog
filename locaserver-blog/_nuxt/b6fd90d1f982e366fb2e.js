(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(t,e,n){var content=n(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("be80bfbc",content,!0,{sourceMap:!1})},233:function(t,e,n){"use strict";var o=n(208);n.n(o).a},234:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,"table[data-v-b1e5d93e]{width:100%;line-height:1.5em;border-collapse:separate;border-spacing:0 14px}table thead th[data-v-b1e5d93e]{padding:20px 22px;white-space:nowrap;font-size:20px}table td[data-v-b1e5d93e]{padding:20px}table tbody tr[data-v-b1e5d93e]{background-color:#fff;transition:all .25s cubic-bezier(.02,.01,.47,1);box-shadow:0 16px 16px rgba(0,0,0,.01)}table tbody tr[data-v-b1e5d93e]:hover{box-shadow:0 16px 16px rgba(0,0,0,.02);transform:translateY(-3px);transition-delay:0s!important}",""])},341:function(t,e,n){"use strict";n.r(e);n(43),n(26);var o=n(19),r=(n(20),n(16),n(35),n(116),{props:{thead:{type:Array,required:!0}}}),c=(n(233),n(2)),l=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container"},[n("table",[n("thead",[n("tr",t._l(t.thead,function(th,e){return n("th",{key:e},[t._v(t._s(th))])}),0)]),t._v(" "),t._t("tbody")],2)])])},[],!1,null,"b1e5d93e",null).exports,d=n(32),f=n.n(d);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var h={components:{commentTable:l},layout:"admin",mounted:function(){this.loadComments()},data:function(){return{comments:[]}},methods:{changeStatus:function(t){var e=!t.publish;f.a.put("https://fbtest-228.firebaseio.com/comments/".concat(t.id,"/publish.json"),e).then(function(e){t.publish=e.data})},deleteComment:function(t){var e=this;f.a.delete("https://fbtest-228.firebaseio.com/comments/".concat(t,".json")).then(function(n){if(200==n.status){var o=e.comments.findIndex(function(e){return e.id=t});e.comments.splice(o,1)}})},loadComments:function(){var t=this;f.a.get("https://fbtest-228.firebaseio.com/comments.json").then(function(e){var n=[];Object.keys(e.data).forEach(function(r){var c=e.data[r];n.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},c,{id:r})),t.comments=n})})}}},v=Object(c.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("commentTable",{attrs:{thead:["Name","Text","Status","Change status","Delete"]}},[n("tbody",{attrs:{slot:"tbody"},slot:"tbody"},t._l(t.comments,function(e){return n("tr",{key:e.name},[n("td",[n("span",[t._v(t._s(e.name))])]),t._v(" "),n("td",[n("span",[t._v(t._s(e.text))])]),t._v(" "),n("td",[e.publish?n("span",{staticClass:"status true"},[t._v("Publish")]):n("span",{staticClass:"status false"},[t._v("Hiden")])]),t._v(" "),n("td",[n("span",{staticClass:"link",on:{click:function(n){return t.changeStatus(e)}}},[t._v("Change status")])]),t._v(" "),n("td",[n("span",{staticClass:"link",on:{click:function(n){return t.deleteComment(e.id)}}},[t._v("Delete")])])])}),0)])],1)},[],!1,null,null,null);e.default=v.exports}}]);