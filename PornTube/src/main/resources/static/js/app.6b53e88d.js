(function(t){function e(e){for(var o,a,u=e[0],c=e[1],s=e[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},i={app:0},r=[];function u(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0278bdd0":"3fe9335a","chunk-048e9442":"82bbee79","chunk-3faa419a":"77f79c7a","chunk-2d224cf0":"103c8f6b","chunk-635a326e":"227526b7","chunk-2c871d0a":"1ffd9ec3","chunk-7eeeaffc":"84a8f23e","chunk-64ab89fc":"f58a00d8","chunk-064dbec6":"e722662d","chunk-2595db34":"20d763a5","chunk-2d0b723a":"55fd0fd9","chunk-2d0cb6f3":"ba0ec5f3","chunk-2d0e95df":"fde99dd7","chunk-2d210469":"78c89147","chunk-2d21f0c8":"54af3225","chunk-2d22b903":"00a209cf","chunk-309ae0a9":"2f29f1fd","chunk-46ac1d5c":"4e272937","chunk-3a2d2762":"9a1666a4","chunk-7379d08d":"9cdf15f0","chunk-792ac7da":"2610502f","chunk-b06fbdf2":"751a9b3a","chunk-f5dab544":"84a03168"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0278bdd0":1,"chunk-048e9442":1,"chunk-3faa419a":1,"chunk-635a326e":1,"chunk-2c871d0a":1,"chunk-7eeeaffc":1,"chunk-64ab89fc":1,"chunk-064dbec6":1,"chunk-2595db34":1,"chunk-309ae0a9":1,"chunk-46ac1d5c":1,"chunk-3a2d2762":1,"chunk-7379d08d":1,"chunk-792ac7da":1,"chunk-b06fbdf2":1,"chunk-f5dab544":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-0278bdd0":"7877f8d7","chunk-048e9442":"f43dde33","chunk-3faa419a":"3fc27d66","chunk-2d224cf0":"31d6cfe0","chunk-635a326e":"cbfe0a98","chunk-2c871d0a":"cd3e2d88","chunk-7eeeaffc":"601d8c98","chunk-64ab89fc":"c7f430cd","chunk-064dbec6":"0a99b966","chunk-2595db34":"ebd9d9b6","chunk-2d0b723a":"31d6cfe0","chunk-2d0cb6f3":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d210469":"31d6cfe0","chunk-2d21f0c8":"31d6cfe0","chunk-2d22b903":"31d6cfe0","chunk-309ae0a9":"3b871ac8","chunk-46ac1d5c":"a9387f2c","chunk-3a2d2762":"4eac7897","chunk-7379d08d":"0a99b966","chunk-792ac7da":"f227590e","chunk-b06fbdf2":"e4725c30","chunk-f5dab544":"0a99b966"}[t]+".css",i=c.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var s=r[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===i))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===o||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],f.parentNode.removeChild(f),n(r)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f36":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view")],1)},i=[],r={name:"App",data:function(){return{}}},u=r,c=n("2877"),s=n("6544"),l=n.n(s),d=n("7496"),f=Object(c["a"])(u,a,i,!1,null,null,null),h=f.exports;l()(f,{VApp:d["a"]});n("b0c0"),n("d3b7");var p=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},t._l(t.items,(function(e){return n("router-link",{key:e.text,attrs:{to:e.link}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)],1)})),1),n("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"red",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"hidden-sm-and-down ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.goToHome()}}},[t._v(t._s(this.$store.state.webInfo.name))])]),n("v-text-field",{attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"搜索"}}),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.goToPublish}},"v-btn",a,!1),o),[n("v-icon",[t._v("mdi-video-plus")])],1)]}}])},[n("span",[t._v("发布")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),o),[n("v-icon",[t._v("mdi-bell")])],1)]}}])},[n("span",[t._v("通知")])]),this.$store.state.userInfo?n("Head"):t._e(),null==this.$store.state.userInfo?n("v-btn",{attrs:{outlined:""},on:{click:t.goToLoginPage}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-account")]),t._v(" 登录 ")],1):t._e()],1),n("v-main",[n("router-view")],1)],1)},v=[],b=n("8a54"),g={components:{Head:b["a"]},data:function(){return{userInfo:{},drawer:!1,items:[{icon:"mdi-home",text:"首页",link:"/"},{icon:"mdi-trending-up",text:"时下流行",link:"/hot"},{icon:"mdi-youtube-subscription",text:"订阅",link:"/subscribe"},{icon:"mdi-history",text:"历史记录",link:"/history"},{icon:"mdi-playlist-play",text:"稍后再看",link:"/playlist"}],headItem:[{icon:"mdi-head",text:"个人主页",link:"/user/",id:0},{icon:"mdi-wrench",text:"创作中心",link:"/studio",id:1},{icon:"mdi-logout",text:"退出",link:"/logout",id:2}]}},mounted:function(){},created:function(){this.userInfo=this.$store.state.userInfo,this.$vuetify.theme.dark=this.$store.state.darkThemOpen},methods:{headClick:function(t){0===t?this.$router.push("/user/"+this.userInfo.id):1===t?this.$router.push("/studio"):this.logout()},logout:function(){var t=this;fetch("/api/logout",{headers:{"Content-Type":"application/json; charset=UTF-8","X-XSRF-TOKEN":this.$cookies.get("XSRF-TOKEN")},method:"GET",credentials:"include"}).then((function(t){return t.json()})).then((function(e){200===e.status&&(t.$store.commit("setUserInfo",null),"/"===t.$route.path?location.reload():t.$router.push("/"))})).catch((function(t){return null}))},goToLoginPage:function(){this.$router.push("/login")},goToPublish:function(){this.$router.push("/studio/upload")},goToHome:function(){"/"!==this.$route.path&&this.$router.push("/")},goToUserHome:function(){this.$route.path!=="/user/"+this.$store.state.userInfo.id&&this.$router.push("/user/"+this.$store.state.userInfo.id)}}},k=g,y=(n("e30f"),n("40dc")),I=n("5bc1"),T=n("8336"),_=n("132d"),w=n("da13"),$=n("1800"),x=n("5d23"),V=n("f6c4"),E=n("f774"),S=n("2fa4"),P=n("8654"),O=n("2a7f"),L=n("3a2f"),C=Object(c["a"])(k,m,v,!1,null,"d2a5e28a",null),R=C.exports;l()(C,{VAppBar:y["a"],VAppBarNavIcon:I["a"],VBtn:T["a"],VIcon:_["a"],VListItem:w["a"],VListItemAction:$["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VMain:V["a"],VNavigationDrawer:E["a"],VSpacer:S["a"],VTextField:P["a"],VToolbarTitle:O["a"],VTooltip:L["a"]});var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"padding-left":"24px","padding-right":"24px"},attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},t._l(t.videoList,(function(t){return n("v-col",{key:t.id},[n("VideoCared",{attrs:{video:t}})],1)})),1),n("v-row",{attrs:{justify:"center"}},[n("v-pagination",{attrs:{length:t.length},on:{input:t.pageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},A=[],U=(n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"350px"}},[n("router-link",{attrs:{to:"/video/"+t.videoInfo.id}},[n("v-img",{attrs:{src:t.videoInfo.imgUrl,outlined:"","aspect-ratio":"1.77"}})],1),n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("router-link",{attrs:{to:"/user/"+t.videoInfo.userId}},[n("v-avatar",{attrs:{size:"48"}},[n("v-img",{attrs:{src:t.videoInfo.avatarUrl}})],1)],1)],1),n("v-col",{attrs:{cols:"10"}},[n("p",{staticStyle:{"font-size":"20px","margin-bottom":"0px",color:"black"}},[n("router-link",{staticStyle:{color:"black"},attrs:{to:"/video/"+t.videoInfo.id}},[t._v(" "+t._s(t.videoInfo.title)+" ")])],1),n("p",{staticStyle:{"font-size":"10px",color:"#606060"}},[t._v(" "+t._s(t.videoInfo.viewCount)+" 观看 "),n("span",{domProps:{innerHTML:t._s("&nbsp;&nbsp;")}}),t._v(" "+t._s(t.videoInfo.danmakuCount)+" 条弹幕 "),n("br"),n("router-link",{attrs:{to:"/user/"+t.videoInfo.userId}},[t._v(" "+t._s(t.videoInfo.username))]),n("br"),n("span",{domProps:{textContent:t._s(t.TimeUtil.timeToNowStrning(t.videoInfo.createTime))}})],1)])],1)],1)}),N=[],q=n("9878"),M={name:"VideoCard",props:{video:{type:Object,default:function(){}}},data:function(){return{TimeUtil:q["a"],videoInfo:this.video}},created:function(){}},D=M,F=n("8212"),H=n("62ad"),X=n("adda"),B=n("0fd9"),K=Object(c["a"])(D,U,N,!1,null,null,null),z=K.exports;l()(K,{VAvatar:F["a"],VCol:H["a"],VImg:X["a"],VRow:B["a"]});var J={name:"Index",components:{VideoCared:z},data:function(){return{videoList:[],page:1,size:24,length:0}},created:function(){console.log(this.$route.query.page),void 0===this.$route.query.page?this.page=1:this.page=this.$route.query.page,this.getVideoList()},methods:{getVideoList:function(){var t=this;fetch("/api/article/home/list?page=".concat(this.page,"&limit=").concat(this.size),{headers:{"Content-Type":"application/json; charset=UTF-8","X-XSRF-TOKEN":this.$cookies.get("XSRF-TOKEN")},method:"GET",credentials:"include"}).then((function(t){return t.json()})).then((function(e){t.videoList=e.data.list,t.page=e.data.currPage,t.length=e.data.totalPage})).catch((function(t){return null}))},pageChange:function(t){this.page=t,this.$router.push({query:{page:this.page}}),this.getVideoList(),this.$vuetify.goTo(0)}}},G=J,Y=(n("a4f2"),n("a523")),W=n("891e"),Q=Object(c["a"])(G,j,A,!1,null,null,null),Z=Q.exports;l()(Q,{VCol:H["a"],VContainer:Y["a"],VPagination:W["a"],VRow:B["a"]});var tt=n("f3a1");o["default"].use(p["a"]);var et=[{path:"/",name:"Index",component:R,meta:{title:"PornTube"},children:[{path:"/",name:"Index",component:Z,meta:{title:"PornTube"}},{path:"/hot",name:"Hot",component:function(){return n.e("chunk-2d0cb6f3").then(n.bind(null,"4a3c"))},meta:{title:"PornTube 时下流行"}},{path:"/subscribe",name:"Subscribe",component:function(){return n.e("chunk-f5dab544").then(n.bind(null,"1fae"))},meta:{title:"PornTube 订阅"}},{path:"/history",name:"History",component:function(){return n.e("chunk-2595db34").then(n.bind(null,"4342"))},meta:{title:"PornTube 播放历史"}},{path:"/playlist",name:"Playlist",component:function(){return n.e("chunk-064dbec6").then(n.bind(null,"ed70"))},meta:{title:"PornTube 稍后再看"}},{path:"/video/:id",name:"Vide",component:function(){return n.e("chunk-b06fbdf2").then(n.bind(null,"85bc"))},meta:{title:"播放"}},{path:"/user/setting",name:"UserSetting",component:function(){return Promise.all([n.e("chunk-048e9442"),n.e("chunk-3faa419a"),n.e("chunk-635a326e"),n.e("chunk-2c871d0a")]).then(n.bind(null,"4852"))},meta:{title:"个人设置",requireAuth:!0}},{path:"/vip",name:"VIP",component:function(){return n.e("chunk-7379d08d").then(n.bind(null,"e169"))},meta:{title:"VIP"}},{path:"/vip/pay",name:"VipPay",component:function(){return n.e("chunk-0278bdd0").then(n.bind(null,"b43d"))},meta:{title:"VIP"}},{path:"/user/:id",name:"User",component:function(){return Promise.all([n.e("chunk-635a326e"),n.e("chunk-3a2d2762")]).then(n.bind(null,"e382"))},meta:{title:"个人主页"}}]},{path:"/studio",name:"Studio",component:function(){return n.e("chunk-46ac1d5c").then(n.bind(null,"d1b8"))},meta:{title:"创作中心"},children:[{path:"/studio",name:"StudioIndex",component:function(){return n.e("chunk-2d22b903").then(n.bind(null,"f003"))},meta:{title:"创作中心",requireAuth:!0}},{path:"/studio/upload",name:"Upload",component:function(){return Promise.all([n.e("chunk-048e9442"),n.e("chunk-635a326e"),n.e("chunk-64ab89fc")]).then(n.bind(null,"e23f"))},meta:{title:"投稿",requireAuth:!0}},{path:"/studio/comment",name:"Comment",component:function(){return n.e("chunk-2d210469").then(n.bind(null,"b6cb"))},meta:{title:"评论",requireAuth:!0}},{path:"/studio/admin/invitation",name:"invitation",component:function(){return Promise.all([n.e("chunk-048e9442"),n.e("chunk-3faa419a"),n.e("chunk-2d224cf0")]).then(n.bind(null,"e25b"))},meta:{title:"邀请码",requireAuth:!0}},{path:"/studio/admin/examine",name:"Examine",component:function(){return Promise.all([n.e("chunk-048e9442"),n.e("chunk-3faa419a"),n.e("chunk-7eeeaffc")]).then(n.bind(null,"a8a6"))},meta:{title:"审核视频",requireAuth:!0}},{path:"/studio/admin/userlist",name:"Examine",component:function(){return n.e("chunk-2d0b723a").then(n.bind(null,"1fc2"))},meta:{title:"用户列表",requireAuth:!0}},{path:"/studio/admin/websetting",name:"Examine",component:function(){return n.e("chunk-309ae0a9").then(n.bind(null,"1f91"))},meta:{title:"网页设置",requireAuth:!0}},{path:"/studio/admin/category",name:"Examine",component:function(){return n.e("chunk-2d21f0c8").then(n.bind(null,"d7ba"))},meta:{title:"分区设置",requireAuth:!0}}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-792ac7da").then(n.bind(null,"dd7b"))},meta:{title:"登录"}},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))},meta:{title:"404"}}],nt=new p["a"]({mode:"history",routes:et});nt.beforeEach((function(t,e,n){null==nt.app.$options.store.state.webInfo.name&&fetch("/api/web/info",{headers:{"Content-Type":"application/json; charset=UTF-8"},method:"GET",credentials:"include"}).then((function(t){return t.json()})).then((function(t){nt.app.$options.store.state.webInfo=t.data})).catch((function(t){return null})),t.meta.title&&(document.title=t.meta.title),tt["a"].updateUserRole(nt.app.$options.store.state.userInfo)&&(nt.app.$options.store.state.userInfo.userRoleEntity.role="ROLE_USER",nt.app.$options.store.commit("setUserInfo",nt.app.$options.store.state.userInfo));var o=(new Date).getTime();return null!=nt.app.$options.store.state.userInfo?nt.app.$options.store.state.userInfo.expireTime>o?"/login"===t.path?n({path:"/"}):n():(nt.app.$options.store.commit("setUserInfo",null),n({path:"/login",query:{redirect:t.fullPath}})):t.meta.requireAuth?n({path:"/login",query:{redirect:t.fullPath}}):n()}));var ot=nt,at=n("2f62");o["default"].use(at["a"]);var it=new at["a"].Store({state:{webInfo:{},darkThemOpen:!1,userInfo:null!=localStorage.getItem("user")&&"undefined"!==localStorage.getItem("user")&&""!==localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,uploadVideoDateTemp:{}},mutations:{setUserInfo:function(t,e){localStorage.setItem("user",JSON.stringify(e)),t.userInfo=e},setWebInfo:function(t,e){localStorage.setItem("webInfo",JSON.stringify(e)),t.userInfo=e}},actions:{},modules:{}}),rt=n("f309");o["default"].use(rt["a"]);var ut=new rt["a"]({}),ct=n("2b27"),st=n.n(ct);o["default"].use(st.a),o["default"].config.productionTip=!1,new o["default"]({router:ot,store:it,vuetify:ut,render:function(t){return t(h)}}).$mount("#app")},"8a54":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.$store.state.userInfo?n("v-menu",{attrs:{top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{dark:"",icon:"",large:""}},"v-btn",a,!1),o),[n("v-avatar",{attrs:{size:"32px",item:""}},[n("v-img",{attrs:{src:t.userInfo.avatarUrl,alt:t.userInfo.username,title:t.userInfo.username}})],1)],1)]}}],null,!1,2968636732)},[n("v-list",t._l(t.headItem,(function(e,o){return n("v-list-item",{key:o,attrs:{link:""},on:{click:function(n){return t.headClick(e.id)}}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1)],1):t._e()},a=[],i=(n("d3b7"),n("ac1f"),n("5319"),{name:"Head",data:function(){return{userInfo:{},headItem:[{icon:"mdi-account",text:"个人主页",link:"/user/",id:0},{icon:"mdi-cash-usd",text:"付费会员",link:"/vip",id:3},{icon:"mdi-application",text:"创作中心",link:"/studio",id:1},{icon:"mdi-wrench",text:"自定义频道",link:"/user/setting",id:4},{icon:"mdi-logout",text:"退出",link:"/logout",id:2}]}},created:function(){this.userInfo=this.$store.state.userInfo},methods:{headClick:function(t){if(0===t)location.replace("/user/"+this.userInfo.id);else if(1===t){if("/studio"===this.$route.path)return;this.$router.push("/studio")}else if(3===t)this.$router.push("/vip");else if(4===t){if("/user/setting"===this.$route.path)return;this.$router.push("/user/setting")}else this.logout()},logout:function(){var t=this;this.$store.commit("setUserInfo",null),fetch("/api/logout",{headers:{"Content-Type":"application/json; charset=UTF-8","X-XSRF-TOKEN":this.$cookies.get("XSRF-TOKEN")},method:"GET",credentials:"include"}).then((function(t){return t.json()})).then((function(e){200===e.status&&(t.$store.commit("setUserInfo",null),"/"===t.$route.path?location.reload():t.$router.push("/"))})).catch((function(t){return null}))}}}),r=i,u=n("2877"),c=n("6544"),s=n.n(c),l=n("8212"),d=n("8336"),f=n("132d"),h=n("adda"),p=n("8860"),m=n("da13"),v=n("1800"),b=n("5d23"),g=n("e449"),k=Object(u["a"])(r,o,a,!1,null,null,null);e["a"]=k.exports;s()(k,{VAvatar:l["a"],VBtn:d["a"],VIcon:f["a"],VImg:h["a"],VList:p["a"],VListItem:m["a"],VListItemAction:v["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VMenu:g["a"]})},9878:function(t,e,n){"use strict";n("b65f");function o(t){if(""===t||null==t)return"";var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}function a(t){if(""===t||null==t)return"";var e=new Date(t);return e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日 "+e.getHours()+"时"+e.getMinutes()+"分"}function i(t,e){return a(t)+" ~ "+a(e)}function r(t){var e=(new Date).getTime(),n=e-t;return n=Math.trunc(n/1e3),n<60?n+"秒前":(n=Math.trunc(n/60),n<60?n+"分钟前":(n=Math.trunc(n/60),n<24?n+"小时前":(n=Math.trunc(n/24),n<30?n+"天前":o(t))))}var u,c,s={timeToNowStrning:r,renderTime:o,formateTimeToChinese:a,formateTime:i},l=s,d=n("2877"),f=Object(d["a"])(l,u,c,!1,null,null,null);e["a"]=f.exports},a4f2:function(t,e,n){"use strict";var o=n("a799"),a=n.n(o);a.a},a799:function(t,e,n){},e30f:function(t,e,n){"use strict";var o=n("0f36"),a=n.n(o);a.a},f3a1:function(t,e,n){"use strict";function o(t){return"ROLE_ADMIN"===t.userRoleEntity.role?"admin":"ROLE_VIP"===t.userRoleEntity.role?t.userRoleEntity.vipStopTime<(new Date).getTime()?"user":"vip":"ROLE_USER"===t.userRoleEntity.role?"user":void 0}function a(t){return"ROLE_VIP"===t.userRoleEntity.role?!(t.userRoleEntity.vipStopTime<(new Date).getTime()):"ROLE_ADMIN"===t.userRoleEntity.role}function i(t){return null!==t&&("ROLE_VIP"===t.userRoleEntity.role&&t.userRoleEntity.vipStopTime<(new Date).getTime())}var r,u,c={checkPower:o,updateUserRole:i,checkVip:a},s=c,l=n("2877"),d=Object(l["a"])(s,r,u,!1,null,null,null);e["a"]=d.exports}});