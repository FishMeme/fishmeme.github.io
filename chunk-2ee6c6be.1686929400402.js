(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ee6c6be"],{6620:function(t,e,n){"use strict";n("fda9")},"77be":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"inviteform"},[n("div",{staticClass:"linkform"},[n("div",{staticClass:"tr"},[n("div",{staticClass:"formtit"},[t._v(t._s(t.$t("account.my_refer_link")))])]),n("div",{staticClass:"tr"},[n("div",{staticClass:"linkbox"},[t._v(" https://fishmeme.com/#Launchpad?refid="+t._s(t.walletAddr)+" ")])]),n("div",{staticClass:"tr"},[n("button",{staticClass:"btn_copy",attrs:{id:"btnCopyInviteLink","data-clipboard-text":"https://fishmeme.com/#Launchpad?refid="+t.walletAddr},on:{click:function(e){return t.copyContractAddress()}}},[t._v(t._s(t.$t("account.copy")))])])]),n("div",{staticClass:"invitelist"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("account.my_refer_info")))]),n("div",{staticClass:"list"},[n("table",[n("tr",[n("th",[t._v(t._s(t.$t("account.level1")))]),n("th",[t._v(t._s(t.$t("account.level2")))])]),n("tr",[n("td",[t._v(t._s(t.firstLevel))]),n("td",[t._v(t._s(t.secondLevel))])])])])])])])},s=[],i=n("2f62"),c=n("e015"),o=n("99e5"),a=n.n(o),l=n("d693");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v={name:"Account",data:function(){return{referContractInstant:{},firstLevel:0,secondLevel:0}},computed:d({},Object(i["b"])(["walletAddr","refAddr"])),mounted:function(){var t=this;c["a"].$on("message",(function(e){t.initWeb3Instant((function(){t.pageInit()}))})),t.initWeb3Instant((function(){t.pageInit()}))},methods:{copyContractAddress:function(){var t=this,e=this,n=new e.$Clipboard("#btnCopyInviteLink");n.on("success",(function(e){t.$Message.success({content:"copy success"}),n.destroy()})),n.on("error",(function(e){t.$Message.error({content:"copy fail"}),n.destroy()}))},pageInit:function(){var t=this;t.getChilrenCount(),t.getGrandChilrenCount()},getCurrentWalletAddr:function(){var t=this,e=t.$store.getters.walletAddr;return""==e?t.$Message.info({content:t.$t("common.unconnectips")}):e},initWeb3Instant:function(t){this.web3=new a.a(window.web3.currentProvider),this.referContractInstant=new this.web3.eth.Contract(l["a"].REFER_CONTRACT.ABI,l["a"].REFER_CONTRACT.ADDRESS),t&&t()},getChilrenCount:function(){var t=this,e=t.getCurrentWalletAddr();return t.referContractInstant.methods.getReferCount(e).call().then((function(e){console.log("111111111111:"+e),t.firstLevel=e}))},getGrandChilrenCount:function(){var t=this,e=t.getCurrentWalletAddr();return t.referContractInstant.methods.getGrandfatherReferCount(e).call().then((function(e){console.log("2222222222222:"+e),t.secondLevel=e}))}}},p=v,b=(n("6620"),n("2877")),C=Object(b["a"])(p,r,s,!1,null,"75026e06",null);e["default"]=C.exports},fda9:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2ee6c6be.1686929400402.js.map