(function(){"use strict";var e={7480:function(e,n,t){t.d(n,{Z:function(){return c}});var a,o,r=t(9097),i={name:"ErrorBoundary",data:()=>({error:!1}),props:{componentName:{type:String,required:!0},errorMessage:{type:String,required:!0}},errorCaptured(e){this.error=!0,(0,r.H)(this.componentName,this.errorMessage,e)},render(e){return this.error?e("h3",`Something went wrong! ${this.errorMessage}`):this.$slots.default[0]}},s=i,l=t(1001),d=(0,l.Z)(s,a,o,!1,null,"00eddd5c",null),c=d.exports},2974:function(e,n,t){t.d(n,{Z:function(){return g}});var a=function(){var e=this,n=e._self._c;return n("div",{staticClass:"landing-hero"},[e.loaded?e._e():n("LandingHeroSkeleton"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"landing-hero-container"},[n("transition",{attrs:{name:"skywatcher",appear:""}},[e.loaded?n("div",{staticClass:"tunned-logo"},[n("h1",[e._v("SkyWatcher")])]):e._e()]),n("transition",{attrs:{name:"skywatcher-delayed",appear:""}},[e.loaded?n("h2",[e._v("The universe at the tip of your fingers")]):e._e()]),n("div",{staticClass:"description"},[n("transition",{attrs:{name:"flip",appear:""}},[e.loaded?n("p",[e._v("This webapp was built by a universe fan.")]):e._e()])],1),n("transition",{attrs:{name:"flip-delayed",appear:""}},[e.displayInstallButton&&e.loaded&&e.loadedPrompt?n("div",{staticClass:"install-button"},[e.installing?e.installing?n("BaseSpinner",{staticClass:"installing"}):e._e():n("BaseButton",{staticClass:"install",attrs:{onClickHandler:e.onClickHandler}},[e._v(" Install App ")])],1):e._e()])],1)],1)},o=[],r=function(){var e=this,n=e._self._c;return n("div",{staticClass:"landing-hero-skeleton"},[n("h1",[e._v("Loading")]),n("h3",[e._v("Hero Image — Carina Nebula")]),n("BaseSpinner")],1)},i=[],s=t(7328),l={name:"LandingHeroSkeleton",components:{BaseSpinner:s.Z}},d=l,c=t(1001),u=(0,c.Z)(d,r,i,!1,null,"b484d884",null),m=u.exports,p=t(4828),f={name:"LandingHero",components:{LandingHeroSkeleton:m,BaseButton:p.Z,BaseSpinner:s.Z},props:{displayInstallButton:{type:Boolean,default:!1},onClickHandler:{type:Function,default:()=>{}},installing:{type:Boolean,default:!1},loadedPrompt:{type:Boolean,default:!1}},data(){return{nasaApisUrl:"https://api.nasa.gov/",loaded:!1}},mounted(){if(!this.loaded){const e=document.querySelector(".landing-hero-container"),n=window.getComputedStyle(e).backgroundImage,t=n.match(/\((.*?)\)/)[1].replace(/('|")/g,""),a=new Image;a.onload=()=>{this.loaded=!0},a.src=t,a.complete&&a.onload()}}},h=f,v=(0,c.Z)(h,a,o,!1,null,"97d54b72",null),g=v.exports},4828:function(e,n,t){t.d(n,{Z:function(){return d}});var a=function(){var e=this,n=e._self._c;return n("button",{staticClass:"base-button",class:{"button-animation-variant-active":e.wasClicked&&e.variant,"button-animation-active":e.wasClicked&&!e.variant,small:e.small,variant:e.variant},attrs:{disabled:e.disabled},on:{click:function(n){e.wasClicked=!0},animationend:e.handleAndFinish}},[e._t("default",(function(){return[e._v("Click Me")]}))],2)},o=[],r={name:"BaseButton",props:{onClickHandler:{type:Function,default:()=>{}},disabled:{type:Boolean,default:!1},small:{type:Boolean,default:!1},variant:{type:Boolean,default:!1}},data(){return{wasClicked:!1}},methods:{handleAndFinish(){this.wasClicked=!1,this.onClickHandler()}}},i=r,s=t(1001),l=(0,s.Z)(i,a,o,!1,null,"c1b9cde0",null),d=l.exports},7328:function(e,n,t){t.d(n,{Z:function(){return d}});var a=function(e,n){return e("span",{staticClass:"base-spinner",class:{big:n.props.big}})},o=[],r={name:"BaseSpinner",props:{big:{type:Boolean,default:!1}}},i=r,s=t(1001),l=(0,s.Z)(i,a,o,!0,null,"e6792074",null),d=l.exports},520:function(e,n,t){var a=t(306);const o=a.Z.create({baseURL:"https://api.nasa.gov/",params:{api_key:"sRXVuCaiP9Pbcc78QP2BRWcq0IwMg8WTW9kliVuV"}});n.Z=o},8743:function(e,n,t){t.d(n,{Z:function(){return d},L:function(){return c}});var a=t(520),o=t(9097);const r="planetary/";async function i(e,n){try{const t=await a.Z.get(`${r}apod`,{params:{start_date:e,end_date:n}});return t.data}catch(t){(0,o.H)(i.name,"Unable to get astronomy pictures of the day for dates",t)}}var s=t(2528),l=t(4105);async function d(e,n){const t=await i(e,n);if(!t)return!1;const a=t.map((e=>{const{copyright:n,date:t,explanation:a,hdurl:o,media_type:r,title:i,url:l}=e;return{copyright:n,date:(0,s.Z)(t),explanation:a,hdurl:o,mediaType:r,title:i,url:l}}));return a}async function c(){const e=(0,l.Z)(new Date,"yyyy-MM-dd"),n=await d(e,e);return n?{url:n[0].url,mediaType:n[0].mediaType}:{url:!1,mediaType:""}}},6226:function(e,n,t){t.d(n,{uf:function(){return u},sY:function(){return d},xr:function(){return c}});var a=t(520),o=t(9097);const r="neo/rest/v1/";async function i(e){try{const n=await a.Z.get(`${r}feed`,{params:{start_date:e,end_date:e}});return n.data}catch(n){(0,o.H)(i.name,"Unable to get near earth objects for dates",n)}}var s=t(4105),l=t(3996);async function d(e){const n=(0,s.Z)(e,"yyyy-MM-dd"),t=await i(n);if(!t)return!1;const a=t.near_earth_objects[n].map((e=>{const{absolute_magnitude_h:n,close_approach_data:t,estimated_diameter:a,id:o,is_potentially_hazardous_asteroid:r,is_sentry_object:i,name:s}=e;return{magnitude:n,date:t[0].epoch_date_close_approach,missDistance:{astronomical:t[0].miss_distance.astronomical,lunar:t[0].miss_distance.lunar,kilometers:t[0].miss_distance.kilometers,miles:t[0].miss_distance.miles},diameter:{feet:{min:a.feet.estimated_diameter_min,max:a.feet.estimated_diameter_max},kilometers:{min:a.kilometers.estimated_diameter_min,max:a.kilometers.estimated_diameter_max},meters:{min:a.meters.estimated_diameter_min,max:a.meters.estimated_diameter_max},miles:{min:a.miles.estimated_diameter_min,max:a.miles.estimated_diameter_max}},id:o,isPotentiallyHazardous:r,isSentryObject:i,name:s}}));return a}function c(e,n,t){let a;switch(e){case"name":a=n.slice().sort(((e,n)=>e.name<n.name?-1:1));break;case"missDistance":a=n.slice().sort(((e,n)=>e.missDistance<n.missDistance?-1:1));break;case"minDiameter":a=n.slice().sort(((e,n)=>e.diameter[t].min>n.diameter[t].min?-1:1));break;case"maxDiameter":a=n.slice().sort(((e,n)=>e.diameter[t].max>n.diameter[t].max?-1:1));break;case"hour":a=n.slice().sort(((e,n)=>(0,l.Z)(e.date,n.date)?-1:1));break;default:a=n}return a}function u(e,n){let t;switch(e){case"sentry":t=n.filter((e=>e.isSentryObject));break;case"hazardous":t=n.filter((e=>e.isPotentiallyHazardous));break;default:t=n}return t}},9097:function(e,n,t){function a(e,n,t){console.error(`[Error at ${e}] ${n}: ${t.message}`),console.error(t.stack)}t.d(n,{H:function(){return a}})},6883:function(e,n,t){function a(){return navigator.onLine}function o(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://")}function r(){return!/android|iphone|kindle|ipad/i.test(navigator.userAgent)}async function i(){const e=await navigator.getInstalledRelatedApps(),n=e.filter((e=>"https://nashaguayo.github.io/skywatcher/manifest.json"===e.url));return!!n.length}t.d(n,{Gg:function(){return a},Ts:function(){return i},nI:function(){return r},uJ:function(){return o}})},4932:function(e,n,t){var a=t(7195),o=function(){var e=this,n=e._self._c;return n("div",{class:{"bottom-margin":e.displayFooter},attrs:{id:"app"}},[e.displayHeader?n("HamburgerMenu"):e._e(),n("transition",{attrs:{mode:"out-in",name:e.$route.meta.transition&&!e.$route.query?.noTransition?e.$route.meta.transition:""}},[n("router-view",{key:e.$route.fullPath})],1),e.displayFooter?n("FooterInfo"):e._e()],1)},r=[],i=(t(7658),function(){var e=this,n=e._self._c;return n("div",{staticClass:"hamburger-menu"},[n("transition",{attrs:{name:"slide-from-right"}},[e.open?n("div",{staticClass:"hamburger-menu-container"},[n("h1",{staticClass:"title"},[e._v("SkyWatcher")]),n("BaseButton",{staticClass:"navigation-link",attrs:{small:!0,onClickHandler:e.goToHomePage,disabled:"home"===e.$router.currentRoute.name,variant:"home"!==e.$router.currentRoute.name}},[e._v(" Home ")]),n("BaseButton",{staticClass:"navigation-link",attrs:{small:!0,onClickHandler:e.goToApodPage,disabled:"apod"===e.$router.currentRoute.name,variant:"apod"!==e.$router.currentRoute.name}},[e._v(" Astronomy Picture of the Day ")]),n("BaseButton",{staticClass:"navigation-link",attrs:{small:!0,onClickHandler:e.goToNeoPage,disabled:"neo"===e.$router.currentRoute.name,variant:"neo"!==e.$router.currentRoute.name}},[e._v(" Near Earth Objects ")]),n("hr"),n("BaseButton",{staticClass:"navigation-link",attrs:{small:!0,onClickHandler:e.openGithubProfileInNewTab,variant:!0}},[e._v(" Github Profile ")]),n("BaseButton",{staticClass:"navigation-link",attrs:{small:!0,onClickHandler:e.openGithubRepositoryInNewTab,variant:!0}},[e._v(" Code Repository ")]),n("BaseButton",{staticClass:"navigation-link",attrs:{small:!0,onClickHandler:e.openLinkedinProfileInNewTab,variant:!0}},[e._v(" LinkedIn Profile ")]),n("BaseButton",{staticClass:"navigation-link",attrs:{small:!0,onClickHandler:e.openNasaApiUrlInNewTab,variant:!0}},[e._v(" Nasa API ")])],1):e._e()]),n("transition",{attrs:{name:"translate-right"}},[e.open?e._e():n("FontAwesomeIcon",{staticClass:"open-menu-icon",attrs:{icon:"fa-solid fa-bars"},on:{click:function(n){e.open=!0}}})],1),n("transition",{attrs:{name:"translate-left"}},[e.open?n("FontAwesomeIcon",{staticClass:"close-menu-icon",attrs:{icon:"fa-solid fa-chevron-left"},on:{click:function(n){e.open=!1}}}):e._e()],1)],1)}),s=[],l=t(4828),d={name:"HamburgerMenu",components:{BaseButton:l.Z},data(){return{open:!1}},created(){window.addEventListener("popstate",this.popState)},beforeDestroy(){window.removeEventListener("popstate",this.popState)},methods:{popState(){this.open=!1},goToHomePage(){this.open=!1,this.$router.push({name:"home",query:{noTransition:!0}})},goToApodPage(){this.open=!1,this.$router.push({name:"apod",query:{noTransition:!0}})},goToNeoPage(){this.open=!1,this.$router.push({name:"neo",query:{noTransition:!0}})},openGithubProfileInNewTab(){window.open("https://github.com/nashaguayo/","_blank","noreferrer")},openGithubRepositoryInNewTab(){window.open("https://github.com/nashaguayo/skywatcher/","_blank","noreferrer")},openLinkedinProfileInNewTab(){window.open("https://www.linkedin.com/in/natasha-aguayo-104a48102/","_blank","noreferrer")},openNasaApiUrlInNewTab(){window.open("https://api.nasa.gov/","_blank","noreferrer")}}},c=d,u=t(1001),m=(0,u.Z)(c,i,s,!1,null,"738b1ee7",null),p=m.exports,f=function(){var e=this,n=e._self._c;return n("div",{staticClass:"footer-info"},[n("div",{staticClass:"links"},[n("FooterInfoLink",{attrs:{icon:"fa-brands fa-square-github",handler:e.openGithubProfileInNewTab}}),n("FooterInfoLink",{attrs:{icon:"fa-solid fa-code",handler:e.openGithubRepositoryInNewTab}}),n("FooterInfoLink",{attrs:{icon:"fa-brands fa-linkedin",handler:e.openLinkedinProfileInNewTab}}),n("FooterInfoLink",{attrs:{icon:"fa-solid fa-rocket",handler:e.openNasaApiUrlInNewTab}})],1),e._m(0)])},h=[function(){var e=this,n=e._self._c;return n("div",{staticClass:"author"},[n("span",[e._v("Get more information on SkyWatcher")])])}],v=function(){var e=this,n=e._self._c;return n("FontAwesomeIcon",{staticClass:"footer-info-link",class:{active:e.wasClicked},attrs:{icon:e.icon},on:{click:function(n){e.wasClicked=!0},animationend:e.endAnimationAndHandle}})},g=[],b={name:"FooterInfoLink",props:{icon:{type:String,required:!0},handler:{type:Function,required:!0}},data(){return{wasClicked:!1}},methods:{endAnimationAndHandle(){this.wasClicked=!1,this.handler()}}},y=b,k=(0,u.Z)(y,v,g,!1,null,"b44a901e",null),w=k.exports,_={name:"FooterInfo",components:{FooterInfoLink:w},methods:{openGithubProfileInNewTab(){window.open("https://github.com/nashaguayo/","_blank","noreferrer")},openGithubRepositoryInNewTab(){window.open("https://github.com/nashaguayo/skywatcher/","_blank","noreferrer")},openLinkedinProfileInNewTab(){window.open("https://www.linkedin.com/in/natasha-aguayo-104a48102/","_blank","noreferrer")},openNasaApiUrlInNewTab(){window.open("https://api.nasa.gov/","_blank","noreferrer")}}},C=_,B=(0,u.Z)(C,f,h,!1,null,"53abcea7",null),I=B.exports,T={name:"App",components:{HamburgerMenu:p,FooterInfo:I},computed:{displayHeader(){return this.$route.meta.header??!1},displayFooter(){return this.$route.meta.footer??!1}},created(){window.addEventListener("online",this.online),window.addEventListener("offline",this.offline)},beforeDestroy(){window.removeEventListener("online",this.online),window.removeEventListener("offline",this.offline)},methods:{online(){this.$router.push({name:"home"})},offline(){this.$router.push({name:"offline"})}}},N=T,A=(0,u.Z)(N,o,r,!1,null,null,null),P=A.exports,Z=t(2241),S=function(){var e=this,n=e._self._c;return n("div",{staticClass:"home-view"},[n("ErrorBoundary",{attrs:{componentName:"LandingHero",errorMessage:"Unable to load landing hero"}},[n("LandingHero")],1),n("ErrorBoundary",{attrs:{componentName:"ApodBlock",errorMessage:"Unable to load astronomy picture of the day"}},[n("ApodBlock")],1),n("ErrorBoundary",{attrs:{componentName:"NeoBlock",errorMessage:"Unable to load asteroids data"}},[n("NeoBlock")],1)],1)},H=[],x=t(7480),L=t(2974),$=function(){var e=this,n=e._self._c;return n("div",{staticClass:"apod-block"},[e.loaded?e._e():n("ApodBlockSkeleton"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"apod-block-container"},[e._m(0),e.error?n("div",{staticClass:"error"},[e._v(" There was some error loading today's picture. Try again later. ")]):n("div",{staticClass:"content"},["image"===e.mediaType?n("div",{staticClass:"image",style:{backgroundImage:`url(${e.url})`},on:{load:function(n){e.loaded=!0}}}):"video"===e.mediaType?n("LazyYoutube",{staticClass:"video",attrs:{src:e.url}}):e._e(),n("BaseButton",{staticClass:"learn-more-button",attrs:{variant:!0,onClickHandler:e.goToApodPage}},[e._v(" Learn More! ")])],1)])],1)},E=[function(){var e=this,n=e._self._c;return n("h2",{staticClass:"title"},[e._v(" Astronomy Picture "),n("br"),e._v(" of the Day ")])}],F=function(){var e=this,n=e._self._c;return n("div",{staticClass:"apod-block-skeleton"},[e._m(0),n("BaseSpinner")],1)},M=[function(){var e=this,n=e._self._c;return n("h2",[e._v("Astronomy Picture"),n("br"),e._v("of the Day")])}],j=t(7328),G={name:"ApodBlockSkeleton",components:{BaseSpinner:j.Z}},O=G,D=(0,u.Z)(O,F,M,!1,null,"6ae8da3e",null),R=D.exports,q=t(8743),U={name:"ApodBlock",components:{ApodBlockSkeleton:R,BaseButton:l.Z},data(){return{url:"",mediaType:"",error:!0,loaded:!1}},watch:{url(e){if("video"===this.mediaType)return void(this.loaded=!0);const n=new Image;n.src=e,n.onload=()=>{this.loaded=!0},n.onerror=()=>{this.loaded=!0,this.error=!0}}},async created(){const{url:e,mediaType:n}=await(0,q.L)();e&&(this.mediaType=n,this.url=e,this.error=!1)},methods:{goToApodPage(){this.$router.push({name:"apod"})}}},z=U,W=(0,u.Z)(z,$,E,!1,null,"33f119e9",null),V=W.exports,Y=function(){var e=this,n=e._self._c;return n("div",{staticClass:"neo-block"},[e.loaded?n("div",{staticClass:"neo-block-container"},[n("h2",[e._v("Asteroids")]),n("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:"fa-solid fa-meteor"}}),0===this.amount?n("span",[e._v(" No hazardous asteroids passing through earth today. We're safe... for now! ")]):n("span",[e._v(" There "+e._s(1!==this.amount?"are":"is")+" "+e._s(this.amount)+" hazardous "+e._s(1!==this.amount?"asteroids":"asteroid")+" passing through Earth today. ")]),n("BaseButton",{attrs:{onClickHandler:e.goToNeoPage}},[e._v("Check out more")])],1):n("NeoBlockSkeleton")],1)},J=[],K=function(){var e=this,n=e._self._c;return n("div",{staticClass:"neo-block-skeleton"},[n("h2",[e._v("Asteroids")]),n("span",[e._v("Getting hazardous asteroids for today...")]),n("BaseSpinner")],1)},Q=[],X={name:"NeoBlockSkeleton",components:{BaseSpinner:j.Z}},ee=X,ne=(0,u.Z)(ee,K,Q,!1,null,"2e9a2c48",null),te=ne.exports,ae=t(6226),oe={name:"NeoBlock",components:{NeoBlockSkeleton:te,BaseButton:l.Z},data(){return{amount:null,loaded:!1}},async created(){const e=await(0,ae.sY)(new Date);this.amount=e.filter((e=>e.isPotentiallyHazardous)).length,this.loaded=!0},methods:{goToNeoPage(){this.$router.push({name:"neo"})}}},re=oe,ie=(0,u.Z)(re,Y,J,!1,null,"51fc7b95",null),se=ie.exports,le={name:"HomeView",title:"Universe Explorer",components:{ErrorBoundary:x.Z,LandingHero:L.Z,ApodBlock:V,NeoBlock:se}},de=le,ce=(0,u.Z)(de,S,H,!1,null,null,null),ue=ce.exports,me=t(6883);a.ZP.use(Z.ZP);const pe=[{path:"/",name:"home",component:ue,meta:{header:!0,footer:!0}},{path:"/404",name:"pageNotFound",component:()=>t.e(510).then(t.bind(t,9510)),meta:{header:!0}},{path:"*",redirect:"/404"},{path:"/about",name:"about",component:()=>t.e(298).then(t.bind(t,1298)),meta:{header:!0,footer:!0}},{path:"/offline",name:"offline",component:()=>t.e(988).then(t.bind(t,6988))},{path:"/desktop-guardian",name:"desktopGuardian",component:()=>t.e(845).then(t.bind(t,2845)),meta:{footer:!0}},{path:"/install",name:"install",component:()=>t.e(898).then(t.bind(t,2898))},{path:"/installing",name:"installing",component:()=>t.e(238).then(t.bind(t,238))},{path:"/launch-app",name:"launchApp",component:()=>t.e(877).then(t.bind(t,8877))},{path:"/apod",name:"apod",component:()=>t.e(376).then(t.bind(t,8376)),meta:{header:!0,footer:!0}},{path:"/neo",name:"neo",component:()=>t.e(259).then(t.bind(t,3259)),meta:{header:!0,footer:!0}}],fe=new Z.ZP({base:"/skywatcher",mode:"hash",routes:pe});fe.beforeEach(((e,n,t)=>{(0,me.nI)()&&"desktopGuardian"!==e.name?t({name:"desktopGuardian"}):(0,me.nI)()||(0,me.uJ)()||"install"===e.name||"installing"===e.name||"launchApp"===e.name?(0,me.Gg)()||"offline"===e.name?(e.meta.transition="slide-from-home",t()):t({name:"offline"}):t({name:"install"})}));var he=fe;function ve(e){const{title:n}=e.$options;if(n)return"function"===typeof n?n.call(e):n}var ge={created(){const e=ve(this);e&&(document.title=`SkyWatcher — ${e}`)}},be=t(4593),ye=t.n(be),ke=t(4340),we=t(4984),_e=t(5021),Ce=t(4496),Be=t(4337);(0,Be.z)("/skywatcher/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),ke.vI.add(_e.YHc),ke.vI.add(_e.Psp),ke.vI.add(_e.bE7),ke.vI.add(_e.Uwo),ke.vI.add(_e.g82),ke.vI.add(_e.mDh),ke.vI.add(_e.xiG),ke.vI.add(_e.A35),ke.vI.add(_e.dT$),ke.vI.add(_e.tMT),ke.vI.add(_e.vGs),ke.vI.add(Ce.M0L),ke.vI.add(Ce.D9H),a.ZP.component("FontAwesomeIcon",we.GN),a.ZP.use(ye()),a.ZP.mixin(ge),a.ZP.config.productionTip=!1,new a.ZP({router:he,render:e=>e(P)}).$mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,r){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var d=o();void 0!==d&&(n=d)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,a){return t.f[a](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{238:"fc20ceac",259:"4aed63e2",298:"109c0742",376:"c0c7e979",510:"d775d5b5",845:"be317db8",877:"154d6286",898:"ca065010",988:"d7a1136e"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{238:"5965a8e1",259:"8b80a682",376:"8b9e5367",510:"167960b2",845:"57285eb9",877:"5b6ab680",898:"8a32a6cb",988:"cc301ba5"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="skywatcher:";t.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var s,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==n+r){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+r),s.src=a),e[a]=[o];var m=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/skywatcher/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,a,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(t){if(r.onerror=r.onload=null,"load"===t.type)a();else{var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode&&r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=i,r.href=n,t?t.parentNode.insertBefore(r,t.nextSibling):document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var o=t[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===n))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===n)return o}},a=function(a){return new Promise((function(o,r){var i=t.miniCssF(a),s=t.p+i;if(n(i,s))return o();e(a,s,null,o,r)}))},o={143:0};t.f.miniCss=function(e,n){var t={238:1,259:1,376:1,510:1,845:1,877:1,898:1,988:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=a(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,a){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(t,a){o=e[n]=[t,a]}));a.push(o[2]=r);var i=t.p+t.u(n),s=new Error,l=function(a){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+n+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};t.l(i,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,r,i=a[0],s=a[1],l=a[2],d=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(l)var c=l(t)}for(n&&n(a);d<i.length;d++)r=i[d],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},a=self["webpackChunkskywatcher"]=self["webpackChunkskywatcher"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(4932)}));a=t.O(a)})();
//# sourceMappingURL=app.87bedb0e.js.map