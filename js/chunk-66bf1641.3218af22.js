(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66bf1641"],{"10f9":function(t,e,a){},"386b":function(t,e,a){var s=a("5ca1"),n=a("79e5"),i=a("be13"),o=/"/g,r=function(t,e,a,s){var n=String(i(t)),r="<"+e;return""!==a&&(r+=" "+a+'="'+String(s).replace(o,"&quot;")+'"'),r+">"+n+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(r),s(s.P+s.F*n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",a)}},4740:function(t,e,a){},6652:function(t,e,a){"use strict";a("4740")},"74c9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back-button"},[a("rect-button",{attrs:{width:"48px"},on:{click:t.back}},[a("i",{staticClass:"el-icon-back"})])],1)},n=[],i=(a("a481"),a("b54a"),a("44be")),o={props:{link:{type:String,default:"/"}},components:{RectButton:i["a"]},methods:{back:function(){this.$routerHistory.hasPrevious()&&this.$routerHistory.previous().path===this.link?this.$router.go(-1):this.$router.replace(this.link)}}},r=o,c=(a("6652"),a("2877")),l=Object(c["a"])(r,s,n,!1,null,"165f60a9",null);e["a"]=l.exports},"7f25":function(t,e,a){"use strict";a("10f9")},"8d3c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("auto-header",{scopedSlots:t._u([{key:"left",fn:function(){return[a("div",{staticClass:"info hidden-sm-and-down"},[a("back-button"),a("div",[t._v(t._s(t.proposalsNum))])],1),a("back-button",{staticClass:"hidden-md-and-up"})]},proxy:!0},{key:"right",fn:function(){return[a("rect-button",{staticClass:"hidden-sm-and-down",attrs:{width:"150px"},on:{click:t.checkEnvrionment}},[t._v("\n        New proposal\n      ")]),a("rect-button",{staticClass:"hidden-md-and-up",attrs:{width:"48px"},on:{click:t.checkEnvrionment}},[a("i",{staticClass:"el-icon-document-checked"})])]},proxy:!0}])},[a("h1",[t._v(t._s(t.workspace.name))])]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.fullscreenLoading,expression:"fullscreenLoading"}],staticClass:"home"},[a("div",{staticClass:"list"},[a("div",{staticClass:"list_title"},[a("div",{staticClass:"select_items"},t._l(t.filtrateList,(function(e,s){return a("div",{key:s,staticClass:"select_item",class:{active:t.status==e},on:{click:function(a){return t.filtrate(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])})),0)]),t._l(t.workspace.proposals,(function(e,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:"All"===t.status||e.status===t.status,expression:"status === 'All' || proposal.status === status ? true : false"}],key:s,staticClass:"list_item",on:{click:function(a){return t.toDetail(e)}}},[a("div",{staticClass:"up"},[a("div",{staticClass:"state",style:{background:"Active"==e.status?"#21b66f":"#ff4231"}},[t._v("\n            "+t._s(e.status)+"\n          ")]),a("div",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}})]),a("div",{staticClass:"down",domProps:{innerHTML:t._s("Start "+t.dateString(e.start)+" end "+t.dateString(e.end))}})])}))],2),a("metamask-dialog",{attrs:{showDialog:t.showMetamaskDialog},on:{onClose:function(e){t.showMetamaskDialog=!1}}}),a("custom-rpc-dialog",{attrs:{showDialog:t.showRpcDialog},on:{onClose:function(e){t.showRpcDialog=!1}}})],1)],1)},n=[],i=(a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("bd86")),o=(a("28a5"),a("7f7f"),a("96cf"),a("3b8d")),r=a("8576"),c=a("4aa0"),l=a("30cb"),u=a("44be"),d=a("bd64"),p=a("da26"),f=a("74c9"),h=a("2f62");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={data:function(){return{status:"All",filtrateList:["All","Active","Closed"],showMetamaskDialog:!1,showRpcDialog:!1,correctNetWork:!1}},components:{AutoHeader:l["a"],RectButton:u["a"],MetamaskDialog:d["a"],CustomRpcDialog:p["a"],BackButton:f["a"]},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this.$route.params.id,a=this.$route.params.name,s=this.$route.params.contract,this.$store.dispatch("changeWorkspace",{id:e,name:a,contract:s});case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{filtrate:function(t){this.status=t},toDetail:function(t){this.$router.push({name:"proposal",params:{proposalId:t.id,proposal:t}})},toNewProposals:function(){this.$router.push({name:"newProposals",params:{id:this.workspace.id,name:this.workspace.name}})},checkEnvrionment:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.showRpcDialog=!1,this.showMetamaskDialog=!1,t.next=4,Object(r["d"])();case 4:if(e=t.sent,!e){t.next=12;break}return t.next=8,window.ethereum.request({method:"eth_chainId"});case 8:a=t.sent,parseInt(a)===c["a"].automataChainId?this.toNewProposals():this.showRpcDialog=!0,t.next=13;break;case 12:this.showMetamaskDialog=!0;case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dateString:function(t){var e=new Date(1e3*parseInt(t)),a=e.toLocaleString().split(",")[0];return"Invalid Date"===a&&(a="Unknown"),a}},computed:m({proposalsNum:function(){if(this.workspace&&this.workspace.proposals){var t=this.workspace.proposals.length;return t>0?"Proposals(".concat(t,")"):"Proposals"}return"Proposals"},workspace:function(){return this.activeWorkspace.id===this.$route.params.id?this.activeWorkspace:{}},fullscreenLoading:{get:function(){return this.loadProposals},set:function(){}}},Object(h["c"])({activeWorkspace:"activeWorkspace",loadProposals:"loadProposals"}))},w=g,b=(a("7f25"),a("2877")),k=Object(b["a"])(w,s,n,!1,null,"6345ae42",null);e["default"]=k.exports},"8d68":function(t,e,a){},"939d":function(t,e,a){"use strict";a("8d68")},a481:function(t,e,a){"use strict";var s=a("cb7c"),n=a("4bf8"),i=a("9def"),o=a("4588"),r=a("0390"),c=a("5f1b"),l=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,(function(t,e,a,v){return[function(s,n){var i=t(this),o=void 0==s?void 0:s[e];return void 0!==o?o.call(s,i,n):a.call(String(i),s,n)},function(t,e){var n=v(a,t,this,e);if(n.done)return n.value;var d=s(t),p=String(this),f="function"===typeof e;f||(e=String(e));var g=d.global;if(g){var w=d.unicode;d.lastIndex=0}var b=[];while(1){var k=c(d,p);if(null===k)break;if(b.push(k),!g)break;var C=String(k[0]);""===C&&(d.lastIndex=r(p,i(d.lastIndex),w))}for(var _="",y=0,x=0;x<b.length;x++){k=b[x];for(var S=String(k[0]),D=l(u(o(k.index),p.length),0),O=[],$=1;$<k.length;$++)O.push(h(k[$]));var P=k.groups;if(f){var j=[S].concat(O,D,p);void 0!==P&&j.push(P);var M=String(e.apply(void 0,j))}else M=m(S,p,D,O,P,e);D>=y&&(_+=p.slice(y,D)+M,y=D+S.length)}return _+p.slice(y)}];function m(t,e,s,i,o,r){var c=s+t.length,l=i.length,u=f;return void 0!==o&&(o=n(o),u=p),a.call(r,u,(function(a,n){var r;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,s);case"'":return e.slice(c);case"<":r=o[n.slice(1,-1)];break;default:var u=+n;if(0===u)return a;if(u>l){var p=d(u/10);return 0===p?a:p<=l?void 0===i[p-1]?n.charAt(1):i[p-1]+n.charAt(1):a}r=i[u-1]}return void 0===r?"":r}))}}))},a510:function(t,e,a){t.exports=a.p+"img/metamask.4cf8e73b.png"},b54a:function(t,e,a){"use strict";a("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},bd64:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{staticStyle:{"font-weight":"bold"},attrs:{title:"Install MetaMask",center:"",visible:t.dialogVisiable,"custom-class":"dialog-style",width:"400px",fullscreen:t.isSmallScreen},on:{"update:visible":function(e){t.dialogVisiable=e}}},[s("div",{staticClass:"detail"},[s("img",{staticClass:"image",attrs:{src:a("a510"),alt:"metamask"}}),s("div",{staticClass:"warn"},[t._v("\n      Looks like MetaMask plugin is missing on your browser, you need to\n      connect to MetaMask wallet to continue. Please refresh the page after\n      your installation.\n    ")]),s("rect-button",{staticClass:"create",attrs:{width:"200px"},on:{click:function(e){return t.openLink("https://metamask.io/download.html")}}},[t._v("\n      Install")])],1)])},n=[],i=a("44be"),o={props:{showDialog:{type:Boolean,default:!1}},components:{RectButton:i["a"]},computed:{dialogVisiable:{get:function(){return this.showDialog},set:function(t){return this.$emit("onClose",!1),t}},isSmallScreen:function(){return window.innerWidth<450}},methods:{openLink:function(t){window.open(t),this.$emit("onClose",!1)}}},r=o,c=(a("939d"),a("2877")),l=Object(c["a"])(r,s,n,!1,null,"1f6ec030",null);e["a"]=l.exports},bea3:function(t,e,a){"use strict";a("f4a5")},da26:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{staticStyle:{"font-weight":"bold"},attrs:{title:"Change Network",center:"",visible:t.dialogVisiable,"custom-class":"dialog-style",width:"400px",fullscreen:t.isSmallScreen},on:{"update:visible":function(e){t.dialogVisiable=e}}},[s("div",{staticClass:"detail"},[s("img",{staticClass:"image",attrs:{src:a("a171"),alt:"metamask"}}),s("div",{staticClass:"warn"},[t._v("\n      You need to connect to Automata network to continue.\n      "),s("a",{attrs:{href:"https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-custom-Network-RPC-and-or-Block-Explorer",target:"_blank"}},[t._v("\n        Click here")]),t._v("\n      to check how to setup custom network for Metamask.\n    ")]),s("div",{staticClass:"ata-info"},[s("div",{staticClass:"state"},[s("div",{staticClass:"title"},[t._v("Automata network")])]),s("div",{staticClass:"state"},[s("div",{staticClass:"address"},[s("div",{staticClass:"content"},[t._v("RPC URL")])]),s("div",{staticClass:"address"},[s("div",{staticClass:"content"},[t._v(t._s(t.address))]),s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.copied,expression:"copied"}],staticClass:"content copy"},[t._v("\n              Copied!\n            ")])]),s("el-button",{staticClass:"btn",attrs:{size:"mini","data-clipboard-text":t.address},on:{click:function(e){return t.copyAddress()}}},[s("i",{staticClass:"el-icon-document-copy"})])],1)]),s("div",{staticClass:"state"},[s("div",{staticClass:"content"},[t._v("Chain ID")]),s("div",[t._v(t._s(t.chainId))])]),s("div",{staticClass:"state"},[s("div",{staticClass:"content"},[t._v("Currency Symbol")]),s("div",[t._v("ATA")])])])])])},n=[],i=(a("96cf"),a("3b8d")),o=a("b311"),r=a.n(o),c=a("4aa0"),l={props:{showDialog:{type:Boolean,default:!1}},data:function(){return{address:c["a"].automataAddress,chainId:c["a"].automataChainId,copied:!1}},computed:{dialogVisiable:{get:function(){return this.showDialog},set:function(t){return this.copied=!1,this.$emit("onClose",!1),t}},isSmallScreen:function(){return window.innerWidth<450}},methods:{openLink:function(t){window.open(t),this.$emit("onClose",!1)},copyAddress:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=new r.a(".btn"),a=this,e.on("success",(function(t){console.debug(t),a.copied=!0}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},u=l,d=(a("bea3"),a("2877")),p=Object(d["a"])(u,s,n,!1,null,"f721bc62",null);e["a"]=p.exports},f4a5:function(t,e,a){}}]);
//# sourceMappingURL=chunk-66bf1641.3218af22.js.map