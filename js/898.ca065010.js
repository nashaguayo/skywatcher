"use strict";(self["webpackChunkskywatcher"]=self["webpackChunkskywatcher"]||[]).push([[898],{2898:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"install-view"},[e("ErrorBoundary",{attrs:{componentName:"LandingHero",errorMessage:"Unable to load landing hero"}},[e("LandingHero",{attrs:{displayInstallButton:!0,onClickHandler:t.install,loadedPrompt:t.loadedPrompt,installing:t.installing}})],1)],1)},a=[],r=(n(7658),n(7480)),s=n(2974),i={name:"InstallView",title:"Install",components:{ErrorBoundary:r.Z,LandingHero:s.Z},data(){return{deferredInstallPrompt:null,installing:!1,loadedPrompt:!1}},async created(){window.addEventListener("beforeinstallprompt",this.beforeInstallPrompt),window.addEventListener("appinstalled",this.appInstalled)},beforeDestroy(){window.removeEventListener("beforeinstallprompt",this.beforeInstallPrompt),window.removeEventListener("appinstalled",this.appInstalled)},methods:{async install(){this.installing=!0,await this.deferredInstallPrompt.prompt();const{outcome:t}=await this.deferredInstallPrompt.userChoice;"dismissed"===t&&(this.installing=!1)},beforeInstallPrompt(t){t.preventDefault(),this.deferredInstallPrompt=t,this.loadedPrompt=!0},appInstalled(){this.$router.push({name:"installing"})}}},o=i,d=n(1001),p=(0,d.Z)(o,l,a,!1,null,"707b09df",null),m=p.exports}}]);
//# sourceMappingURL=898.ca065010.js.map