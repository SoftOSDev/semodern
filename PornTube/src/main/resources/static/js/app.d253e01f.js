(function(t){function e(e){for(var a,o,u=e[0],c=e[1],s=e[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function u(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-03c990ab":"9cd5759c","chunk-064dbec6":"2ddfc8c8","chunk-0bda2a62":"fac42385","chunk-2c81b7af":"0e89ec65","chunk-2d0cb6f3":"8bd0c6d2","chunk-2d22b903":"0335862f","chunk-38ddd0e8":"acb3625e","chunk-4bfc8fe1":"e26e5d58","chunk-f5dab544":"11b36885"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-03c990ab":1,"chunk-064dbec6":1,"chunk-0bda2a62":1,"chunk-2c81b7af":1,"chunk-38ddd0e8":1,"chunk-4bfc8fe1":1,"chunk-f5dab544":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-03c990ab":"ef0dc75e","chunk-064dbec6":"0a99b966","chunk-0bda2a62":"0a99b966","chunk-2c81b7af":"a3e517d8","chunk-2d0cb6f3":"31d6cfe0","chunk-2d22b903":"31d6cfe0","chunk-38ddd0e8":"e4725c30","chunk-4bfc8fe1":"3255bd56","chunk-f5dab544":"0a99b966"}[t]+".css",r=c.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===a||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5526:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view")],1)},r=[],i={name:"App",data:function(){return{}}},u=i,c=n("2877"),s=n("6544"),l=n.n(s),d=n("7496"),f=Object(c["a"])(u,o,r,!1,null,null,null),p=f.exports;l()(f,{VApp:d["a"]});n("b0c0"),n("d3b7");var h=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},t._l(t.items,(function(e){return n("router-link",{key:e.text,attrs:{to:e.link}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)],1)})),1),n("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"red",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"hidden-sm-and-down ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.goToHome()}}},[t._v(t._s(this.$store.state.webInfo.name))])]),n("v-text-field",{attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"搜索"}}),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.goToPublish}},"v-btn",o,!1),a),[n("v-icon",[t._v("mdi-video")])],1)]}}])},[n("span",[t._v("发布")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),a),[n("v-icon",[t._v("mdi-bell")])],1)]}}])},[n("span",[t._v("通知")])]),this.$store.state.userInfo?n("v-btn",{attrs:{icon:"",large:""}},[n("v-avatar",{attrs:{size:"32px",item:""}},[n("v-img",{attrs:{src:this.$store.state.userInfo.avatarUrl,alt:this.$store.state.userInfo.username,title:this.$store.state.userInfo.username}})],1)],1):t._e(),null==this.$store.state.userInfo?n("v-btn",{attrs:{outlined:""},on:{click:t.goToLoginPage}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-head")]),t._v(" 登录 ")],1):t._e()],1),n("v-main",[n("router-view")],1)],1)},v=[],b={data:function(){return{drawer:!0,items:[{icon:"mdi-home",text:"首页",link:"/"},{icon:"mdi-trending-up",text:"时下流行",link:"/hot"},{icon:"mdi-youtube-subscription",text:"订阅",link:"/subscribe"},{icon:"mdi-history",text:"历史记录",link:"/history"},{icon:"mdi-playlist-play",text:"稍后再看",link:"/playlist"}]}},mounted:function(){},created:function(){this.$vuetify.theme.dark=this.$store.state.darkThemOpen},methods:{goToLoginPage:function(){this.$router.push("/login")},goToPublish:function(){this.$router.push("/studio/upload")},goToHome:function(){"/"!==this.$route.path&&this.$router.push("/")}}},g=b,k=(n("cffa"),n("40dc")),y=n("5bc1"),I=n("8212"),_=n("8336"),w=n("132d"),T=n("adda"),x=n("da13"),S=n("1800"),V=n("5d23"),P=n("f6c4"),O=n("f774"),C=n("2fa4"),$=n("8654"),j=n("2a7f"),L=n("3a2f"),E=Object(c["a"])(g,m,v,!1,null,"0850bad4",null),A=E.exports;l()(E,{VAppBar:k["a"],VAppBarNavIcon:y["a"],VAvatar:I["a"],VBtn:_["a"],VIcon:w["a"],VImg:T["a"],VListItem:x["a"],VListItemAction:S["a"],VListItemContent:V["a"],VListItemTitle:V["b"],VMain:P["a"],VNavigationDrawer:O["a"],VSpacer:C["a"],VTextField:$["a"],VToolbarTitle:j["a"],VTooltip:L["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"padding-left":"24px","padding-right":"24px"},attrs:{"fill-height":"",fluid:""}},[n("div",{attrs:{id:"share-top"}}),n("v-row",[n("div",{staticClass:"d-flex flex-wrap",attrs:{color:"grey lighten-2",flat:"",tile:""}},t._l(t.videoList,(function(t){return n("div",{key:t.id,staticClass:"pa-2",attrs:{outlined:"",tile:""}},[n("VideoCared",{attrs:{video:t}})],1)})),0)]),n("v-pagination",{attrs:{length:t.length},on:{input:t.pageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)},U=[],M=(n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-left":"10px","padding-right":"10px"}},[n("router-link",{attrs:{to:"/video/"+t.videoInfo.id}},[n("v-img",{attrs:{src:t.videoInfo.imgUrl,outlined:"","aspect-ratio":"1.77","max-height":"400"}})],1),n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("router-link",{attrs:{to:"/user/"+t.videoInfo.userId}},[n("v-avatar",{attrs:{size:"48"}},[n("v-img",{attrs:{src:t.videoInfo.avatarUrl}})],1)],1)],1),n("v-col",{attrs:{cols:"10"}},[n("p",{staticStyle:{"font-size":"20px","margin-bottom":"0px",color:"black"}},[n("router-link",{staticStyle:{color:"black"},attrs:{to:"/video/"+t.videoInfo.id}},[t._v(" "+t._s(t.videoInfo.title)+" ")])],1),n("p",{staticStyle:{"font-size":"10px",color:"#606060"}},[t._v(" "+t._s(t.videoInfo.viewCount)+" 观看 "),n("span",{domProps:{innerHTML:t._s("&nbsp;&nbsp;")}}),t._v(" "+t._s(t.videoInfo.dislikeCount)+" 条弹幕 "),n("br"),n("router-link",{attrs:{to:"/user/"+t.videoInfo.userId}},[t._v(" "+t._s(t.videoInfo.username))]),n("br"),n("span",{domProps:{textContent:t._s(t.TimeUtil.renderTime(t.videoInfo.createTime))}})],1)])],1)],1)}),D=[],F=n("9878"),H={name:"VideoCard",props:{video:{type:Object,default:function(){}}},data:function(){return{TimeUtil:F["a"],videoInfo:this.video}},created:function(){}},q=H,z=n("62ad"),B=n("0fd9"),J=Object(c["a"])(q,M,D,!1,null,null,null),R=J.exports;l()(J,{VAvatar:I["a"],VCol:z["a"],VImg:T["a"],VRow:B["a"]});var K={name:"Index",components:{VideoCared:R},data:function(){return{videoList:[],page:1,size:20,length:0}},created:function(){this.getVideoList()},methods:{getVideoList:function(){var t=this;fetch("/api/article/home/list?page=".concat(this.page,"&limit=").concat(this.size),{headers:{"Content-Type":"application/json; charset=UTF-8","X-XSRF-TOKEN":this.$cookies.get("XSRF-TOKEN")},method:"GET",credentials:"include"}).then((function(t){return t.json()})).then((function(e){t.videoList=e.data.list,t.page=e.data.currPage,t.length=e.data.totalPage})).catch((function(t){return null}))},pageChange:function(t){this.page=t,this.videoList(),document.querySelector("#share-top").scrollIntoView()}}},X=K,G=(n("a4f2"),n("a523")),Y=n("891e"),W=Object(c["a"])(X,N,U,!1,null,null,null),Q=W.exports;l()(W,{VContainer:G["a"],VPagination:Y["a"],VRow:B["a"]}),a["default"].use(h["a"]);var Z=[{path:"/",name:"Index",component:A,meta:{title:"PornTube"},children:[{path:"/",name:"Index",component:Q,meta:{title:"PornTube"}},{path:"/hot",name:"Hot",component:function(){return n.e("chunk-2d0cb6f3").then(n.bind(null,"4a3c"))},meta:{title:"PornTube 时下流行"}},{path:"/subscribe",name:"Subscribe",component:function(){return n.e("chunk-f5dab544").then(n.bind(null,"1fae"))},meta:{title:"PornTube 订阅"}},{path:"/history",name:"History",component:function(){return n.e("chunk-0bda2a62").then(n.bind(null,"4342"))},meta:{title:"PornTube 播放历史"}},{path:"/playlist",name:"Playlist",component:function(){return n.e("chunk-064dbec6").then(n.bind(null,"ed70"))},meta:{title:"PornTube 稍后再看"}},{path:"/video/:id",name:"Vide",component:function(){return n.e("chunk-38ddd0e8").then(n.bind(null,"85bc"))},meta:{title:"播放"}}]},{path:"/studio",name:"Studio",component:function(){return n.e("chunk-03c990ab").then(n.bind(null,"d1b8"))},meta:{title:"创作中心"},children:[{path:"/studio",name:"StudioIndex",component:function(){return n.e("chunk-2d22b903").then(n.bind(null,"f003"))},meta:{title:"创作中心",requireAuth:!0}},{path:"/studio/upload",name:"Upload",component:function(){return n.e("chunk-4bfc8fe1").then(n.bind(null,"e23f"))},meta:{title:"投稿",requireAuth:!0}}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-2c81b7af").then(n.bind(null,"dd7b"))},meta:{title:"登录"}}],tt=new h["a"]({mode:"history",routes:Z});tt.beforeEach((function(t,e,n){if(null==tt.app.$options.store.state.webInfo.name&&fetch("/api/web/info",{headers:{"Content-Type":"application/json; charset=UTF-8"},method:"GET",credentials:"include"}).then((function(t){return t.json()})).then((function(t){tt.app.$options.store.state.webInfo=t.data})).catch((function(t){return null})),t.meta.title&&(document.title=t.meta.title),t.meta.requireAuth){var a=(new Date).getTime();return null!=tt.app.$options.store.state.userInfo&&tt.app.$options.store.state.userInfo.expireTime>a?n():n({path:"/login",query:{redirect:t.fullPath}})}return n()}));var et=tt,nt=n("2f62");a["default"].use(nt["a"]);var at=new nt["a"].Store({state:{webInfo:{},darkThemOpen:!1,userInfo:null!=localStorage.getItem("user")&&"undefined"!==localStorage.getItem("user")&&""!==localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,uploadVideoDateTemp:{}},mutations:{setUserInfo:function(t,e){localStorage.setItem("user",JSON.stringify(e)),t.userInfo=e},setWebInfo:function(t,e){localStorage.setItem("webInfo",JSON.stringify(e)),t.userInfo=e}},actions:{},modules:{}}),ot=n("f309");a["default"].use(ot["a"]);var rt=new ot["a"]({}),it=n("2b27"),ut=n.n(it);a["default"].use(ut.a),a["default"].config.productionTip=!1,new a["default"]({router:et,store:at,vuetify:rt,render:function(t){return t(p)}}).$mount("#app")},9878:function(t,e,n){"use strict";function a(t){if(""===t||null==t)return"";var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}function o(t){if(""===t||null==t)return"";var e=new Date(t);return e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日 "+e.getHours()+"时"+e.getMinutes()+"分"}function r(t,e){return o(t)+" ~ "+o(e)}var i,u,c={renderTime:a,formateTimeToChinese:o,formateTime:r},s=c,l=n("2877"),d=Object(l["a"])(s,i,u,!1,null,null,null);e["a"]=d.exports},a4f2:function(t,e,n){"use strict";var a=n("a799"),o=n.n(a);o.a},a799:function(t,e,n){},cffa:function(t,e,n){"use strict";var a=n("5526"),o=n.n(a);o.a}});