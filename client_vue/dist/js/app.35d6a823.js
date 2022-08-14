(function(){"use strict";var t={6961:function(t,e,s){var o=s(144),a=s(998),n=s(6190),i=s(9930),r=s(4324),l=s(3059),c=function(){var t=this,e=t._self._c;return e(a.Z,[t.connectAppStore.isUserLoggedIn?[e("AppBar",{on:{"open-user-settings":function(e){t.userSettings=!0}}}),e(l.Z,[e("RootComponent",{attrs:{fetchPosts:t.fetchPosts},on:{"open-dialog":t.openEditDialog}})],1),e(i.Z,{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:o}){return[e(n.Z,t._g(t._b({staticClass:"add-button",attrs:{elevation:"2",fab:"",color:"rgb(34 117 173)"}},"v-btn",o,!1),s),[e(r.Z,{attrs:{color:"white"}},[t._v("mdi-plus")])],1)]}}],null,!1,337341766),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("PostForm",{on:{"post-submit":t.handlePostSubmit}})],1),e(i.Z,{attrs:{width:"500",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[e("PostFormEdit",{attrs:{postData:t.editPost},on:{"post-edit-submit":t.handlePostEditSubmit,"post-edit-cancel":t.handlePostEditCancel}})],1),e(i.Z,{attrs:{width:"500"},model:{value:t.userSettings,callback:function(e){t.userSettings=e},expression:"userSettings"}},[e("UserSettings",{attrs:{user:t.connectAppStore.user},on:{"post-user-settings":function(e){t.userSettings=!1,t.fetchPosts=!t.fetchPosts}}})],1)]:e("LoginComponent")],2)},u=[],m=s(2118),p=function(){var t=this,e=t._self._c;return e(m.Z,[e("PostsComponent",{attrs:{fetchPosts:t.fetchPosts},on:{"open-post-dialog":t.openDialog}})],1)},d=[],h=function(){var t=this,e=t._self._c;return e("div",t._l(t.posts,(function(s,o){return e("div",{key:o},[e("PostComponent",{attrs:{post:s},on:{"get-posts":t.getPosts,"open-dialog":t.openDialog}})],1)})),0)},g=[],f=s(9669),v=s.n(f),b=s(1154),Z=s(9582),_=s(4886),y=s(9223),P=s(8014),x=function(){var t=this,e=t._self._c;return e(Z.Z,{staticClass:"mx-auto post--class"},[e(P.V9,[e("UserInfo",{attrs:{user:t.post.userInfo[0],showName:!0,small:!1}})],1),e(_.ZB,[e("div",{staticClass:"text--post"},[e("div",{staticClass:"text--primary"},[t._v(" "+t._s(t.post.text)+" ")]),t.post?.tags.length>0?e("div",{staticClass:"tags--post"},t._l(t.post.tags,(function(s,o){return e("span",{key:o},[t._v(" #"+t._s(s)+" ")])})),0):t._e()]),t.post.image?e("img",{staticClass:"image--post",attrs:{src:t.post.image}}):t._e()]),e(_.h7,[e(b.Z,{attrs:{color:"rgb(34 117 173)",content:t.post.likes||"0",overlap:""}},[e(n.Z,{attrs:{icon:"",color:"rgb(34 117 173)"},on:{click:t.likePost}},[e(r.Z,[t._v("mdi-heart-outline")])],1)],1),e(b.Z,{attrs:{color:"rgb(34 117 173)",content:t.comments.length||"0",overlap:""}},[e(n.Z,{staticStyle:{"margin-left":"10px"},attrs:{icon:"",color:"rgb(34 117 173)"},on:{click:function(e){t.showMessages=!t.showMessages}}},[e(r.Z,[t._v("mdi-message-outline")])],1)],1),t.post.user==t.connectAppStore.user._id?e(n.Z,{staticStyle:{"margin-left":"10px"},attrs:{icon:"",color:"rgb(34 117 173)"},on:{click:t.handleDelete}},[e(r.Z,[t._v("mdi-delete-outline")])],1):t._e(),t.post.user==t.connectAppStore.user._id?e(n.Z,{staticStyle:{"margin-left":"10px"},attrs:{icon:"",color:"rgb(34 117 173)"},on:{click:t.handleEdit}},[e(r.Z,[t._v("mdi-pencil")])],1):t._e()],1),e(y.Z,{staticClass:"my-3"}),t._v(" Comments... "),t.showMessages?e("PostComments",{attrs:{comments:t.comments,postId:t.post._id},on:{"get-comments":t.getComments}}):t._e()],1)},S=[],C=s(3423),w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-info"},[t.small?e("div",[t.user.displayPicture?e(C.Z,{attrs:{size:"30"}},[e("img",{attrs:{src:t.user.displayPicture,alt:"John"}})]):e(C.Z,{attrs:{color:t.avatarColor,size:"30"}},[e("span",{staticClass:"white--text text-h5"},[t._v(t._s(t.user.userName[0]))])])],1):e("div",[t.user.displayPicture?e(C.Z,[e("img",{attrs:{src:t.user.displayPicture,alt:"John"}})]):e(C.Z,{attrs:{color:t.avatarColor}},[e("span",{staticClass:"white--text text-h5"},[t._v(t._s(t.user.userName[0]))])])],1),t.showName?e("div",[t.small?e("div",{staticClass:"user-name small-font"},[t._v(" "+t._s(t.user.userName)+" ")]):e("div",{staticClass:"user-name"},[t._v(" "+t._s(t.user.userName)+" ")])]):t._e()])},I=[];function k(t){let e,s=0;for(e=0;e<t.length;e+=1)s=t.charCodeAt(e)+((s<<5)-s);let o="#";for(e=0;e<3;e+=1){const t=s>>8*e&255;o+=`00${t.toString(16)}`.slice(-2)}return o}var N={name:"UserInfo",components:{},props:["user","showName","small"],data:()=>({avatarColor:"blue"}),created(){this.avatarColor=k(this.user.userName)}},A=N,D=s(1001),U=(0,D.Z)(A,w,I,!1,null,null,null),E=U.exports,O=s(1357),$=function(){var t=this,e=t._self._c;return e("div",[t.comments.length>0?e("div",t._l(t.comments,(function(s,o){return e("div",{key:o},[e("div",{staticClass:"comment"},[e("UserInfo",{attrs:{user:s.userInfo[0],showName:!0,small:!0}}),e("span",{attrs:{id:"comment-text"}},[t._v(t._s(s.comment))])],1)])})),0):t._e(),e("div",{staticClass:"comment"},[e("UserInfo",{attrs:{user:t.connectAppStore.user,showName:!0,small:!0}}),e(O.Z,{attrs:{label:"Add Comment",required:""},model:{value:t.newComment,callback:function(e){t.newComment=e},expression:"newComment"}}),e(n.Z,{attrs:{depressed:"",text:"",color:"rgb(34 117 173)"},on:{click:t.addComment}},[t._v("Add")])],1)])},L=[],j=s(8262);const B=(0,j.Q_)("connectAppStore",{state:()=>({user:{},editPostData:{}}),getters:{isUserLoggedIn:t=>!!t.user.userName},actions:{setUser(t){this.user=t},deleteUser(){this.user={}},async setEditPost(t){this.editPostData=t},clearEditPost(){this.editPostData={}}}});var R={name:"PostsComments",props:["comments","postId"],components:{UserInfo:E},data:()=>({posts:[],connectAppStore:B(),newComment:""}),methods:{async addComment(){if(""!=this.newComment)try{const t={post:this.postId,user:this.connectAppStore.user._id,comment:this.newComment};await v().post("http://localhost:4000/comment/",t),this.$emit("get-comments"),this.newComment=""}catch(t){console.log(t)}}}},F=R,M=(0,D.Z)(F,$,L,!1,null,null,null),q=M.exports,W={name:"PostComponent",props:["post"],components:{UserInfo:E,PostComments:q},data:()=>({comments:[],showMessages:!1,connectAppStore:B()}),methods:{async getComments(){try{const t=await v().get(`http://localhost:4000/comment/${this.post._id}/?getUserInfo=true`);this.comments=t.data}catch(t){console.log(t)}},async likePost(){try{await v().post(`http://localhost:4000/posts/${this.post._id}/like`),this.$emit("get-posts")}catch(t){console.log(t)}},async handleDelete(){try{await v()["delete"](`http://localhost:4000/posts/${this.post._id}`),this.$emit("get-posts")}catch(t){console.log(t)}},async handleEdit(){this.$emit("open-dialog",this.post)}},created(){this.getComments()}},T=W,J=(0,D.Z)(T,x,S,!1,null,null,null),z=J.exports,Q={name:"PostsComponent",components:{PostComponent:z},props:["fetchPosts"],data:()=>({posts:[]}),methods:{async getPosts(){try{const t=await v().get("http://localhost:4000/posts/?getUserInfo=true");this.posts=t.data}catch(t){console.log(t)}},openDialog(t){this.$emit("open-post-dialog",t)}},created(){this.getPosts()},watch:{fetchPosts(){this.getPosts()}}},V=Q,G=(0,D.Z)(V,h,g,!1,null,null,null),H=G.exports,K={name:"RootComponent",components:{PostsComponent:H},props:["fetchPosts"],data:()=>({}),methods:{openDialog(t){this.$emit("open-dialog",t)}}},X=K,Y=(0,D.Z)(X,p,d,!1,null,null,null),tt=Y.exports,et=s.p+"img/black_logo.0cb4b0e4.png",st=s(120),ot=s(5125),at=s(5495),nt=s(1713),it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-screen"},[e(at.Z,{attrs:{contain:"","max-height":"100",src:t.logo}}),e(ot.Z,{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(m.Z,[e(nt.Z,[e(O.Z,{attrs:{label:"User Name",required:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),e(nt.Z,[e(O.Z,{attrs:{label:"Password",required:""},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}})],1),e(nt.Z,[t.checkbox?e(O.Z,{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}):t._e()],1),e(st.Z,{attrs:{label:"Click to Signup",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),e(n.Z,{attrs:{color:"primary"},on:{click:t.submit}},[t._v(" "+t._s(t.checkbox?"Signup":"Login")+" ")])],1)],1)],1)},rt=[],lt=s.p+"img/color_logo.2b1bbfa7.png",ct={setup(){const t=B();return{connectAppStore:t}},data:()=>({valid:!0,userName:"",passWord:"",email:"",emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1,logo:lt,show1:!1}),methods:{async submit(){function t(t){t&&Object.keys(t).length>0&&(localStorage.setItem("user",JSON.stringify(t)),window.location.reload(!1))}if(this.checkbox){const e={userName:this.userName,password:this.passWord,email:this.email},s=await v().post("http://localhost:4000/user/create",e);t(s.data)}else{const e={userName:this.userName,password:this.passWord},s=await v().post("http://localhost:4000/user/login",e);t(s.data.user)}}}},ut=ct,mt=(0,D.Z)(ut,it,rt,!1,null,null,null),pt=mt.exports,dt=s(1234),ht=s(3687),gt=s(6072),ft=function(){var t=this,e=t._self._c;return e(Z.Z,[e(_.EB,{staticClass:"text-h5 grey lighten-2"},[t._v(" New Post ")]),e(_.ZB,[e(ot.Z,[e(m.Z,[e(nt.Z,[e(gt.Z,{attrs:{name:"input-7-1",label:"Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),e(nt.Z,[e(O.Z,{attrs:{label:"Tags",required:""},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1),e(nt.Z,[e(dt.Z,{attrs:{label:"Image",dense:"","prepend-icon":"mdi-camera"},on:{change:t.fileInput}})],1)],1)],1)],1),e(y.Z),e(_.h7,[e(ht.Z),e(n.Z,{attrs:{color:"primary"},on:{click:t.onSubmit}},[t._v(" Submit ")])],1)],1)},vt=[],bt={name:"PostForm",components:{},data:()=>({connectAppStore:B(),message:"",tags:"",base64Image:""}),async created(){},methods:{async onSubmit(){const t={text:this.message,tags:this.tags.split(","),image:this.base64Image,user:this.connectAppStore.user._id};await v().post("http://localhost:4000/posts/",t),this.$emit("post-submit")},fileInput(t){if(t){let e=new FileReader,s=this;e.addEventListener("load",(function(t){s.base64Image=t.target.result})),e.readAsDataURL(t)}}}},Zt=bt,_t=(0,D.Z)(Zt,ft,vt,!1,null,null,null),yt=_t.exports,Pt=s(704),xt=s(4528),St=function(){var t=this,e=t._self._c;return e(Pt.Z,{attrs:{app:"",color:"rgb(165 208 228)",dense:""}},[e(at.Z,{staticClass:"mx-2",attrs:{src:t.logo,"max-height":"25","max-width":"140",contain:""}}),e("div",{staticClass:"d-flex align-center"}),e(ht.Z),e(xt.Z,{attrs:{bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:s}){return[e(n.Z,t._g({attrs:{icon:""}},s),[e("UserInfo",{attrs:{user:t.connectAppStore.user,showName:!1,small:!0}})],1)]}}])},[e(Z.Z,[e(P.km,{staticClass:"justify-center"},[e("div",{staticClass:"mx-auto text-center"},[e(n.Z,{attrs:{depressed:"",text:""},on:{click:t.handleUserSettings}},[t._v(" User Settings ")]),e(y.Z,{staticClass:"my-3"}),e(n.Z,{attrs:{depressed:"",text:""},on:{click:t.handleLogout}},[t._v(" Logout ")])],1)])],1)],1)],1)},Ct=[],wt={name:"AppBar",components:{UserInfo:E},data:()=>({logo:et,connectAppStore:B()}),async created(){},methods:{handleLogout(){localStorage.removeItem("user"),window.location.reload(!1)},handleUserSettings(){this.$emit("open-user-settings")}}},It=wt,kt=(0,D.Z)(It,St,Ct,!1,null,null,null),Nt=kt.exports,At=function(){var t=this,e=t._self._c;return e(Z.Z,[e(_.EB,{staticClass:"text-h5 grey lighten-2"},[t._v(" Edit Post ")]),e(_.ZB,[e(ot.Z,[e(m.Z,[e(nt.Z,[e(gt.Z,{attrs:{name:"input-7-1",label:"Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),e(nt.Z,[e(O.Z,{ref:"tags",attrs:{required:""},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1),e(nt.Z,[e(dt.Z,{attrs:{label:"Image","prepend-icon":"mdi-camera",dense:""},on:{change:t.fileInput},model:{value:t.base64Image,callback:function(e){t.base64Image=e},expression:"base64Image"}})],1),t.base64Image?e(nt.Z,[e(at.Z,{attrs:{"lazy-src":"https://picsum.photos/id/11/10/6","max-height":"150","max-width":"250",src:t.base64Image}})],1):t._e()],1)],1)],1),e(y.Z),e(_.h7,[e(ht.Z),e(n.Z,{attrs:{color:"primary"},on:{click:t.onSubmit}},[t._v(" Submit ")]),e(n.Z,{attrs:{color:"primary"},on:{click:t.onCancel}},[t._v(" Cancel ")])],1)],1)},Dt=[],Ut={name:"PostFormEdit",props:["postData"],components:{},data:()=>({message:"",tags:"",base64Image:"",connectAppStore:B()}),async mounted(){this.message=this.postData.text,this.tags=this.postData.tags.join(",")||"",this.base64Image=this.postData.image},methods:{async onSubmit(){const t={text:this.message,tags:this.tags.split(","),image:this.base64Image,user:this.connectAppStore.user._id};console.log("postBody =",t),await v().patch(`http://localhost:4000/posts/${this.postData._id}`,t),this.$emit("post-edit-submit")},fileInput(t){let e=new FileReader,s=this;e.addEventListener("load",(function(t){s.base64Image=t.target.result})),e.readAsDataURL(t)},onCancel(){this.$emit("post-edit-cancel")}},watch:{postData(t){Object.keys(t).length>0&&(this.message=t.text,this.tags=t.tags.join(",")||"",this.base64Image=t.image)}}},Et=Ut,Ot=(0,D.Z)(Et,At,Dt,!1,null,null,null),$t=Ot.exports,Lt=function(){var t=this,e=t._self._c;return e(Z.Z,[e(_.EB,{staticClass:"text-h5 grey lighten-2"},[t._v(" User Settings ")]),e(_.ZB,[e(ot.Z,[e(m.Z,[e(nt.Z,[e(O.Z,{attrs:{name:"input-7-1",label:"User Name"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),e(nt.Z,[e(dt.Z,{attrs:{label:"Display Picture",dense:"","prepend-icon":"mdi-camera"},on:{change:t.fileInput}})],1),t.displayImage?e(nt.Z,[e("img",{staticClass:"image--post",attrs:{src:t.displayImage}})]):t._e()],1)],1)],1),e(y.Z),e(_.h7,[e(ht.Z),e(n.Z,{attrs:{color:"primary"},on:{click:t.onSubmit}},[t._v(" Submit ")])],1)],1)},jt=[],Bt={name:"UserSettings",props:["user"],components:{},data:()=>({userName:"",displayImage:"",connectAppStore:B()}),async mounted(){this.userName=this.user.userName,this.displayImage=this.user.displayPicture},methods:{fileInput(t){if(t){let e=new FileReader,s=this;e.addEventListener("load",(function(t){s.displayImage=t.target.result})),e.readAsDataURL(t)}else this.displayImage=""},async onSubmit(){const t={...this.user,userName:this.userName,displayPicture:this.displayImage},e=await v().patch(`http://localhost:4000/user/${this.user._id}`,t);localStorage.setItem("user",JSON.stringify(e.data)),this.connectAppStore.setUser(e.data),this.$emit("post-user-settings")}}},Rt=Bt,Ft=(0,D.Z)(Rt,Lt,jt,!1,null,null,null),Mt=Ft.exports,qt={name:"App",components:{RootComponent:tt,LoginComponent:pt,PostForm:yt,AppBar:Nt,PostFormEdit:$t,UserSettings:Mt},data:()=>({logo:et,connectAppStore:B(),dialog:!1,fetchPosts:!1,editDialog:!1,userSettings:!1,editPost:{}}),async created(){const t=localStorage.getItem("user");t&&this.connectAppStore.setUser(JSON.parse(t))},methods:{handleLogout(){localStorage.removeItem("user"),window.location.reload(!1)},handlePostSubmit(){this.dialog=!1,this.fetchPosts=!this.fetchPosts},openEditDialog(t){this.editPost=t,this.editDialog=!0},handlePostEditSubmit(){this.editDialog=!1,this.editPost={},this.fetchPosts=!this.fetchPosts},handlePostEditCancel(){this.editDialog=!1,this.editPost={}}}},Wt=qt,Tt=(0,D.Z)(Wt,c,u,!1,null,null,null),Jt=Tt.exports,zt=s(1705);o.ZP.use(zt.Z);var Qt=new zt.Z({}),Vt=s(5706);o.ZP.use(j.og);const Gt=(0,j.WB)();o.ZP.use(Vt.ZP),o.ZP.config.productionTip=!1,new o.ZP({vuetify:Qt,pinia:Gt,render:t=>t(Jt)}).$mount("#app")}},e={};function s(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,o,a,n){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],n=t[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(s.O).every((function(t){return s.O[t](o[l])}))?o.splice(l--,1):(r=!1,n<i&&(i=n));if(r){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[o,a,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,n,i=o[0],r=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(l)var u=l(s)}for(e&&e(o);c<i.length;c++)n=i[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},o=self["webpackChunkclient_vue"]=self["webpackChunkclient_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(6961)}));o=s.O(o)})();
//# sourceMappingURL=app.35d6a823.js.map