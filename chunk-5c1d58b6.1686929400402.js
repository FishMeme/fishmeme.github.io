(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c1d58b6"],{1272:function(t,e,n){"use strict";n("4435")},4435:function(t,e,n){},6593:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"managerform"},[n("div",{staticClass:"claimform"},[n("div",{staticClass:"tr"},[t._v(t._s(t.currentSupply)+"/"+t._s(t.totalSupply))]),n("div",{staticClass:"tr"},[n("button",{staticClass:"btn_claim",on:{click:function(e){return t.claimFee()}}},[t._v(t._s(t.$t("imo.claim"))+" ")])])])])])},a=[],i=n("99e5"),o=n.n(i),c=n("2f62"),s=n("d693"),u=n("e015");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"FeeClaim",data:function(){return{idoContractInstant:{},feeClaimContractInstant:{},currentSupply:0,totalSupply:0}},computed:p({},Object(c["b"])(["walletAddr","refAddr"])),mounted:function(){var t=this;u["a"].$on("message",(function(e){t.initWeb3Instant((function(){t.pageInit()}))})),t.initWeb3Instant((function(){t.pageInit()}))},methods:{pageInit:function(){var t=this;t.getTargetCurrentSupply().then((function(e){t.currentSupply=e})),t.getTargetTotalSupply().then((function(e){t.totalSupply=e}))},getCurrentWalletAddr:function(){var t=this,e=t.$store.getters.walletAddr;return""==e?t.$Message.info({content:t.$t("common.unconnectips")}):e},initWeb3Instant:function(t){this.web3=new o.a(window.web3.currentProvider),this.idoContractInstant=new this.web3.eth.Contract(s["a"].IDO_CONTRACT.ABI,s["a"].IDO_CONTRACT.ADDRESS),this.feeClaimContractInstant=new this.web3.eth.Contract(s["a"].FEECLAIM_CONTRACT.ABI,s["a"].FEECLAIM_CONTRACT.ADDRESS),t&&t()},getTargetTotalSupply:function(){var t=this;return t.idoContractInstant.methods.targetTotalSupply().call()},getTargetCurrentSupply:function(){var t=this;return t.idoContractInstant.methods.targetCurrentSupply().call()},claimFee:function(){var t=this,e={from:t.getCurrentWalletAddr()};t.feeClaimContractInstant.methods.withdraw().send(e).on("transactionHash",(function(e){t.$Message.loading({content:"claiming...",duration:0,background:!0})})).then((function(e){t.$Message.destroy(),t.$Message.success({content:"claim success!",onClose:function(){t.isUsdtApproved=!0}})})).catch((function(e){t.$Message.destroy(),t.$Message.error({content:"claim fail!"})}))}}},g=d,C=(n("1272"),n("2877")),b=Object(C["a"])(g,r,a,!1,null,"61786227",null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-5c1d58b6.1686929400402.js.map