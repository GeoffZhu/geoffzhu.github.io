webpackJsonp([1],{"3fDE":function(t,e){},"7gC8":function(t,e){},"9n10":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"dateTimeFormatter",function(){return B});var r=n("fZjL"),s=n.n(r),i=(n("7gC8"),n("9n10"),n("slWF"),n("nuQn"),n("7+uW")),o=n("zL8q"),c=n.n(o),l={name:"App",created:function(){var t=this;setTimeout(function(){t.$alert("\n        星云消息是一款开源软件，\n        使用的技术与星云web钱包完全相同，\n        绝对不会保任何您的信息，\n        请放心使用。","安全，放心",{confirmButtonText:"OK"})},1e3)}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(t){n("3fDE")},null,null).exports,f=n("Y81h"),p=n.n(f),h=n("/ocq"),v=n("Xxa5"),m=n.n(v),g=n("exGp"),_=n.n(g),b=n("okF9"),w={name:"locked",data:function(){return{filename:"",$rawFile:null,dialogVisible:!1,password:""}},created:function(){var t=this;return _()(m.a.mark(function e(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{onUnlockClick:function(){this.$refs["key-file-input"].click()},onConfirmClick:function(){var t=this;return _()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.password)try{store.account.fromKey(store.fileJson,t.password),t.dialogVisible=!1,t.$router.push({name:"list"})}catch(e){console.error(e),t.$message({type:"error",message:"密码错误"})}else t.$message("请输入密码");case 1:case"end":return e.stop()}},e,t)}))()},handkeFileChange:function(t){var e=this;this.$rawFile=t.target.files[0],this.filename=t.target.files[0].name,Object(b.readAsText)(this.$rawFile).then(function(t){try{store.fileJson=JSON.parse(t),store.account=Account.fromAddress(store.fileJson.address),e.$message({type:"warning",message:"正在解锁中...",onClose:function(){e.dialogVisible=!0}})}catch(t){console.error(t),e.$message({type:"error",message:"请确认您选择是钱包文件"})}}).catch(function(t){return console.error(t)})}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("img",{staticClass:"banner",attrs:{src:"http://o80ronwlu.bkt.clouddn.com/banner.jpg",alt:"banner"}}),t._v(" "),n("el-button",{staticClass:"unlock-btn",attrs:{type:"primary"},nativeOn:{click:function(e){return t.onUnlockClick(e)}}},[t._v("使用您的 钱包文件 解锁星云消息")]),t._v(" "),n("input",{ref:"key-file-input",staticClass:"c-hide",attrs:{type:"file"},on:{change:t.handkeFileChange}}),t._v(" "),n("el-dialog",{attrs:{title:"请输入密码",visible:t.dialogVisible,center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"dialog-wrapper"},[n("div",{staticClass:"line"},[n("el-input",{staticClass:"password-input",attrs:{"auto-complete":"off",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("div",{staticClass:"line mt10"},[n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.onConfirmClick(e)}}},[t._v("解锁")])],1)])])],1)},staticRenderFns:[]};var x,y=n("VU/8")(w,k,!1,function(t){n("i0se")},"data-v-9fc38776",null).exports,C=n("mvHQ"),$=n.n(C),A=(x=_()(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,neb.api.getAccountState(store.account.getAddressString());case 2:return(e=t.sent).balanceNas=Unit.fromBasic(e.balance,"nas"),t.abrupt("return",e);case 5:case"end":return t.stop()}},t,this)})),function(){return x.apply(this,arguments)});var S,F,T,D,E=(S=_()(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:return e=t.sent,t.abrupt("return",neb.api.call({from:store.account.getAddressString(),to:store.contractAdddress,value:0,nonce:e.nonce,gasPrice:store.gasPrice,gasLimit:"200000",contract:{function:"getDiaryList",args:$()([100,0])}}).then(function(t){return JSON.parse(t.result)}));case 4:case"end":return t.stop()}},t,this)})),function(){return S.apply(this,arguments)}),G=(F=_()(m.a.mark(function t(e){var n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:return n=t.sent,t.abrupt("return",neb.api.call({from:store.account.getAddressString(),to:store.contractAdddress,value:0,nonce:n.nonce,gasPrice:store.gasPrice,gasLimit:"200000",contract:{function:"getDiary",args:$()([e])}}).then(function(t){return JSON.parse(t.result)}));case 4:case"end":return t.stop()}},t,this)})),function(t){return F.apply(this,arguments)}),N=(T=_()(m.a.mark(function t(e,n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:return a=t.sent,t.abrupt("return",neb.api.call({from:store.account.getAddressString(),to:store.contractAdddress,value:0,nonce:Number(a.nonce)+1,gasPrice:store.gasPrice,gasLimit:"200000",contract:{function:"setDiary",args:$()([{title:e,content:n}])}}));case 4:case"end":return t.stop()}},t,this)})),function(t,e){return T.apply(this,arguments)}),P=(D=_()(m.a.mark(function t(e,n){var a,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"200000";return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:return a=t.sent,(r=new Transaction([{chainId:1,name:"Mainnet",url:"https://mainnet.nebulas.io"},{chainId:1001,name:"Testnet",url:"https://testnet.nebulas.io"},{chainId:100,name:"Local Nodes",url:"http://127.0.0.1:8685"}][1].chainId,store.account,store.contractAdddress,"0",Number(a.nonce)+1,Number(store.gasPrice),s,{function:"setDiary",args:$()([{title:e,content:n}])})).signTransaction(),t.abrupt("return",neb.api.sendRawTransaction(r.toProtoString()));case 7:case"end":return t.stop()}},t,this)})),function(t,e){return D.apply(this,arguments)}),M={name:"list",data:function(){return{loading:!0,list:[]}},created:function(){var t=this;return _()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t.list=e.sent,t.loading=!1;case 4:case"end":return e.stop()}},e,t)}))()},methods:{onItemClick:function(t){this.$router.push({path:"detail",query:{title:t}})}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content"},[n("div",{staticClass:"btn-wrapper"},[t._m(0),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){t.$router.push({name:"add"})}}},[t._v("发一条")])],1),t._v(" "),t._l(t.list,function(e){return n("div",{key:e.index,staticClass:"title-wrapper",on:{click:function(n){t.onItemClick(e.title)}}},[n("h1",{staticClass:"title"},[t._v(t._s(e.title))])])}),t._v(" "),0===t.list.length?n("div",{staticClass:"empty"},[n("p",[t._v("还没有消息，发一条吧")])]):t._e()],2),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"title"},[this._v("星云消息")]),e("span",[this._v("永不会被删除的消息平台")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",[this._v("© 2018 "),e("a",{attrs:{href:"https://nebulas.io/"}},[this._v("星云链智能合约")]),this._v(" 强力驱动")]),this._v(" "),e("div",[e("a",{attrs:{href:"https://github.com/GeoffZhu/nebulas-message",target:"_blank"}},[this._v("Github")])])])}]};var R=n("VU/8")(M,O,!1,function(t){n("wx4i")},"data-v-7338b8a1",null).exports,V={name:"detail",data:function(){return{loading:!0,title:"",content:""}},created:function(){var t=this;return _()(m.a.mark(function e(){var n,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.query.title,e.next=3,G(n);case 3:a=e.sent,t.title=a.title,t.content=a.content,t.loading=!1;case 7:case"end":return e.stop()}},e,t)}))()},methods:{}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.content))])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",[this._v("© 2018 "),e("a",{attrs:{href:"https://nebulas.io/"}},[this._v("星云链智能合约")]),this._v(" 强力驱动")]),this._v(" "),e("div",[e("a",{attrs:{href:"https://github.com/GeoffZhu/nebulas-message",target:"_blank"}},[this._v("Github")])])])}]};var U=n("VU/8")(V,I,!1,function(t){n("RTQI")},"data-v-0f721d11",null).exports,J={name:"add",data:function(){return{loading:!1,disabled:!0,estimateGas:0,title:"",content:"",txhash:""}},methods:{onClickTestDeploy:function(){var t=this;return _()(m.a.mark(function e(){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,N(t.title,t.content);case 3:n=e.sent,t.loading=!1,'""'===n.result&&(t.$message({message:"测试成功，发布需要花费GAS "+n.estimate_gas,type:"success"}),t.estimateGas=n.estimate_gas,t.disabled=!1);case 6:case"end":return e.stop()}},e,t)}))()},onClickDeploy:function(){var t=this;return _()(m.a.mark(function e(){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,P(t.title,t.content,t.estimateGas);case 4:n=e.sent,t.$message({message:"发布成功，等待区块接受中...",type:"success"}),t.txhash=n.txhash,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),t.$message({message:"发布失败，请检查您的是否有足够的余额支付手续费（GAS）",type:"error"});case 13:t.loading=!1;case 14:case"end":return e.stop()}},e,t,[[1,9]])}))()}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content"},[n("el-input",{attrs:{placeholder:"请输入标题",disabled:!t.disabled},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("el-input",{staticClass:"mt10",attrs:{type:"textarea",rows:10,placeholder:"请输入内容",disabled:!t.disabled},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("div",{staticClass:"btn-wrapper"},[n("el-button",{staticClass:"ml10",attrs:{type:"primary",disabled:t.disabled},nativeOn:{click:function(e){return t.onClickDeploy(e)}}},[t._v("发布")]),t._v(" "),n("el-button",{attrs:{type:"primary",disabled:!t.disabled},nativeOn:{click:function(e){return t.onClickTestDeploy(e)}}},[t._v("计算发布需花费GAS")]),t._v(" "),t.txhash?n("p",{staticClass:"hash"},[n("i",{staticClass:"el-icon-warning mr10"}),t._v("需要等待星云链完成本次转账才能在列表页显示，可以通过 txhash:"+t._s(t.txhash)+" 查询进度")]):t._e()],1)],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",[this._v("© 2018 "),e("a",{attrs:{href:"https://nebulas.io/"}},[this._v("星云链智能合约")]),this._v(" 强力驱动")]),this._v(" "),e("div",[e("a",{attrs:{href:"https://github.com/GeoffZhu/nebulas-message",target:"_blank"}},[this._v("Github")])])])}]};var L=n("VU/8")(J,q,!1,function(t){n("xPRp")},"data-v-c31d7452",null).exports;p.a.configure({showSpinner:!1}),i.default.use(h.a);var j=new h.a({routes:[{path:"/locked",name:"locked",component:y},{path:"/list",name:"list",component:R},{path:"/detail",name:"detail",component:U},{path:"/add",name:"add",component:L}]});j.beforeEach(function(t,e,n){p.a.start(),"/locked"!==t.path?store.account?n():n("/locked"):n(),p.a.done()});var Q=j;function B(t,e){if(!t||""==t)return"";if(t.toString().length<13&&(t*=1e3),"string"==typeof t){var n=t.match(/(\/Date\((\d+)\)\/)/);n&&n.length>=3&&(t=parseInt(n[2]))}if(!(t=new Date(t))||"Invalid Date"==t.toUTCString())return"";var a={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds(),q:Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};return e=e.replace(/([yMdhmsqS])+/g,function(e,n){var r=a[n];return void 0!==r?(e.length>1&&(r=(r="0"+r).substr(r.length-2)),r):"y"===n?(t.getFullYear()+"").substr(4-e.length):e})}i.default.config.productionTip=!1,i.default.use(c.a),s()(a).forEach(function(t){i.default.filter(t,a[t])}),window.store={contractAdddress:"n1m76MKMy36jRaeF8VRbQimE2GA2qNJkFBH"},neb.api.gasPrice().then(function(t){store.gasPrice=t.gas_price,new i.default({el:"#app",router:Q,components:{App:d},template:"<App/>"})}).catch(function(t){console.error(t),Object(o.MessageBox)("网络错误，请检查您的网络","错误",{confirmButtonText:"确定"})})},RTQI:function(t,e){},i0se:function(t,e){},nuQn:function(t,e){},slWF:function(t,e){},wx4i:function(t,e){},xPRp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3cfa478e3c89de6e887d.js.map