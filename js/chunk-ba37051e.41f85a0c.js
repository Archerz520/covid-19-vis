(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba37051e"],{"057f":function(t,e,r){var a=r("fc6a"),n=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?c(t):n(a(t))}},"1dde":function(t,e,r){var a=r("d039"),n=r("b622"),o=r("2d00"),i=n("species");t.exports=function(t){return o>=51||!a((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,r){"use strict";var a=r("6eeb"),n=r("825a"),o=r("d039"),i=r("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=c;(l||d)&&a(RegExp.prototype,c,(function(){var t=n(this),e=String(t.source),r=t.flags,a=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?i.call(t):r);return"/"+e+"/"+a}),{unsafe:!0})},"4de4":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").filter,o=r("1dde"),i=r("ae40"),c=o("filter"),s=i("filter");a({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"746f":function(t,e,r){var a=r("428f"),n=r("5135"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});n(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var a=r("c04e"),n=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=a(e);i in t?n.f(t,i,o(0,r)):t[i]=r}},a4d3:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),o=r("d066"),i=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),d=r("5135"),f=r("e8b5"),p=r("861d"),h=r("825a"),m=r("7b0b"),v=r("fc6a"),y=r("c04e"),b=r("5c6c"),g=r("7c73"),C=r("df75"),w=r("241c"),D=r("057f"),x=r("7418"),_=r("06cf"),k=r("9bf2"),j=r("d1e7"),O=r("9112"),R=r("6eeb"),$=r("5692"),S=r("f772"),N=r("d012"),P=r("90e3"),E=r("b622"),M=r("e538"),F=r("746f"),T=r("d44e"),L=r("69f3"),I=r("b727").forEach,B=S("hidden"),A="Symbol",W="prototype",H=E("toPrimitive"),V=L.set,z=L.getterFor(A),Y=Object[W],U=n.Symbol,J=o("JSON","stringify"),Q=_.f,X=k.f,q=D.f,G=j.f,K=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),at=n.QObject,nt=!at||!at[W]||!at[W].findChild,ot=c&&l((function(){return 7!=g(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=Q(Y,e);a&&delete Y[e],X(t,e,r),a&&t!==Y&&X(Y,e,a)}:X,it=function(t,e){var r=K[t]=g(U[W]);return V(r,{type:A,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},st=function(t,e,r){t===Y&&st(Z,e,r),h(t);var a=y(e,!0);return h(r),d(K,a)?(r.enumerable?(d(t,B)&&t[B][a]&&(t[B][a]=!1),r=g(r,{enumerable:b(0,!1)})):(d(t,B)||X(t,B,b(1,{})),t[B][a]=!0),ot(t,a,r)):X(t,a,r)},ut=function(t,e){h(t);var r=v(e),a=C(r).concat(ht(r));return I(a,(function(e){c&&!dt.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?g(t):ut(g(t),e)},dt=function(t){var e=y(t,!0),r=G.call(this,e);return!(this===Y&&d(K,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(K,e)||d(this,B)&&this[B][e])||r)},ft=function(t,e){var r=v(t),a=y(e,!0);if(r!==Y||!d(K,a)||d(Z,a)){var n=Q(r,a);return!n||!d(K,a)||d(r,B)&&r[B][a]||(n.enumerable=!0),n}},pt=function(t){var e=q(v(t)),r=[];return I(e,(function(t){d(K,t)||d(N,t)||r.push(t)})),r},ht=function(t){var e=t===Y,r=q(e?Z:v(t)),a=[];return I(r,(function(t){!d(K,t)||e&&!d(Y,t)||a.push(K[t])})),a};if(s||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),r=function(t){this===Y&&r.call(Z,t),d(this,B)&&d(this[B],e)&&(this[B][e]=!1),ot(this,e,b(1,t))};return c&&nt&&ot(Y,e,{configurable:!0,set:r}),it(e,t)},R(U[W],"toString",(function(){return z(this).tag})),R(U,"withoutSetter",(function(t){return it(P(t),t)})),j.f=dt,k.f=st,_.f=ft,w.f=D.f=pt,x.f=ht,M.f=function(t){return it(E(t),t)},c&&(X(U[W],"description",{configurable:!0,get:function(){return z(this).description}}),i||R(Y,"propertyIsEnumerable",dt,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:U}),I(C(rt),(function(t){F(t)})),a({target:A,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),a({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:ft}),a({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),a({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(m(t))}}),J){var mt=!s||l((function(){var t=U();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));a({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var a,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(a=e,(p(e)||void 0!==t)&&!ct(t))return f(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!ct(e))return e}),n[1]=e,J.apply(null,n)}})}U[W][H]||O(U[W],H,U[W].valueOf),T(U,A),N[B]=!0},ad6d:function(t,e,r){"use strict";var a=r("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b64b:function(t,e,r){var a=r("23e7"),n=r("7b0b"),o=r("df75"),i=r("d039"),c=i((function(){o(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(t){return o(n(t))}})},bb51:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("p",{staticClass:"source"},[t._v("全国数据来源于国家卫健委官方网站，数据截止至 "+t._s(t.currentData.date)+" 晚上24时")]),r("el-row",{staticClass:"row",attrs:{gutter:20}},[r("el-col",{attrs:{xs:12,sm:12,md:8,lg:8,xl:8}},[r("NumberPanel",{attrs:{name:"现有确诊",currentNumber:t.currentData.currentConfrim,color:"#c54242"}})],1),r("el-col",{attrs:{xs:12,sm:12,md:8,lg:8,xl:8}},[r("NumberPanel",{attrs:{name:"现有疑似",currentNumber:t.currentData.currentSupect,color:"#e6af2f"}})],1),r("el-col",{attrs:{xs:12,sm:12,md:8,lg:8,xl:8}},[r("NumberPanel",{attrs:{name:"累计治愈",currentNumber:t.currentData.totalCured,color:"#169200"}})],1),r("el-col",{attrs:{xs:12,sm:12,md:8,lg:8,xl:8}},[r("NumberPanel",{attrs:{name:"累计确诊",currentNumber:t.currentData.totalConfirm,color:"#860000"}})],1),r("el-col",{attrs:{xs:12,sm:12,md:8,lg:8,xl:8}},[r("NumberPanel",{attrs:{name:"现有重症",currentNumber:t.currentData.currentSerious,color:"#5d2929"}})],1),r("el-col",{attrs:{xs:12,sm:12,md:8,lg:8,xl:8}},[r("NumberPanel",{attrs:{name:"累计死亡",currentNumber:t.currentData.totalDeath,color:"#636363"}})],1)],1),r("p",{staticClass:"section-title"},[t._v("全国总体趋势")]),r("p",{staticClass:"source"},[t._v("以下图表数据来源于国家卫健委与湖北省卫健委")]),r("el-row",{staticStyle:{"margin-top":"30px"},attrs:{gutter:20}},[r("el-col",{staticClass:"chart-cards",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[r("ConfirmedAndSerChart",{attrs:{csvData:t.csvData}})],1),r("el-col",{staticClass:"chart-cards",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[r("ConfirmedIncrChart",{attrs:{csvData:t.csvData}})],1),r("el-col",{staticClass:"chart-cards",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[r("SupectedChart",{attrs:{csvData:t.csvData}})],1),r("el-col",{staticClass:"chart-cards",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[r("CuredAndDeathRate",{attrs:{csvData:t.csvData}})],1)],1),r("p",{staticClass:"section-title"},[t._v("国内各省趋势")]),t._m(0),r("el-row",{staticStyle:{"margin-top":"30px",padding:"0px 10px"},attrs:{gutter:20}},[r("ByProvince",{attrs:{csvData:t.timeseriesCsv}})],1),r("p",{staticClass:"section-title"},[t._v("相关分析")]),r("p",{staticClass:"source"},[t._v("疫情数据来源于澎湃新闻数美课（截止至 "+t._s(t.thePaperData)+"），宏观数据来源于国家统计局（截止至 "+t._s(t.theOverallData)+" 年末）")]),r("el-row",{staticStyle:{"margin-top":"30px"},attrs:{gutter:20}},[r("el-col",{staticClass:"chart-cards",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("PopulationChart",{attrs:{csvData:t.corrCsv}})],1),r("el-col",{staticClass:"chart-cards",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[r("BedUsage2Cured",{attrs:{csvData:t.corrCsv}})],1),r("el-col",{staticClass:"chart-cards",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[r("MedicalPerson2Cured",{attrs:{csvData:t.corrCsv}})],1)],1),t.jsonReady&&t.timeReady?r("p",{staticClass:"section-title"},[t._v("社会关注度")]):t._e(),t.jsonReady&&t.timeReady?r("p",{staticClass:"source"},[t._v("以下数据基于对新浪微博指数和百度指数相关关键词时序数据进行计算获得。(截止至"+t._s(t.timeData.time)+")")]):t._e(),t.jsonReady&&t.timeReady?r("el-row",{staticStyle:{"margin-top":"30px"},attrs:{gutter:20}},[r("el-col",{staticClass:"chart-cards",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[r("WHFocus",{attrs:{jsonData:t.focus}})],1),r("el-col",{staticClass:"chart-cards",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[r("MaskFocus",{attrs:{jsonData:t.mask}})],1)],1):t._e(),t.jsonReady&&t.timeReady?r("p",{staticClass:"section-title"},[t._v("谣言喜欢用什么词")]):t._e(),t.jsonReady&&t.timeReady?r("p",{staticClass:"source"},[t._v("基于丁香园辟谣信息")]):t._e(),t.jsonReady&&t.timeReady?r("el-row",{staticStyle:{"margin-top":"30px"},attrs:{gutter:20}},[r("el-col",{staticClass:"chart-cards",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("WordCloud",{attrs:{jsonData:t.wordCloud}})],1)],1):t._e()],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"source"},[t._v(" 各省趋势数据由 "),r("a",{attrs:{href:"https://github.com/BlankerL/DXY-COVID-19-Data"}},[t._v("Isaac Lin")]),t._v(" 采集自网络 ")])}],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"numberPanel",style:{borderLeftColor:this.$props.color}},[r("div",{staticClass:"name"},[t._v(t._s(t.name))]),r("div",{staticClass:"number",style:{color:this.$props.color}},[t._v(t._s(t.numberFormatted)+" 例")])])},i=[],c=(r("fb6a"),r("a9e3"),r("d3b7"),r("25f0"),{props:["name","currentNumber","color"],methods:{toThousands:function(t){var e="0";e=t instanceof Number?t.toString():t||"-";var r="";while(e.length>3)r=","+e.slice(-3)+r,e=e.slice(0,e.length-3);return e&&(r=e+r),r}},watch:{currentNumber:function(t){this.$data.numberFormatted=this.toThousands(this.$props.currentNumber)}},mounted:function(){this.$data.numberFormatted=this.toThousands(this.$props.currentNumber)},data:function(){return{numberFormatted:""}}}),s=c,u=r("2877"),l=Object(u["a"])(s,o,i,!1,null,null,null),d=l.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("p",[t._v("确诊病例增长趋势")]),r("div",{attrs:{id:"home-confirmed-incr-chart"}})])},p=[],h=(r("4160"),r("159b"),r("7104")),m=r("7f1a"),v=r.n(m),y={props:["csvData"],methods:{renderChart:function(){document.getElementById("home-confirmed-incr-chart").innerHTML="";var t=new h["View"];t.source(this.$props.csvData,{type:"csv"}).transform({type:"map",callback:function(t){return t.nonHubeiConfirmedIncr=Number(t.confirmIncr)-Number(t.hubeiConfirmedIncr),t}}).transform({type:"fold",fields:["confirmIncr","hubeiConfirmedIncr","nonHubeiConfirmedIncr"],key:"type",value:"value"}).transform({type:"map",callback:function(t){return"confirmIncr"==t.type?t.type="全国":"hubeiConfirmedIncr"==t.type?t.type="湖北地区":t.type="非湖北地区",t}}).transform({type:"pick",fields:["date","value","type"]});var e=0;t.rows.forEach((function(t){Number(t.value)>e&&(e=t.value)}));var r=new v.a.Chart({container:"home-confirmed-incr-chart",forceFit:!0,height:window.innerWidth>767?300:200,padding:[30,30,60,40]});r.source(t,{date:{type:"time",mask:"MM-DD"},value:{tickCount:5,type:"linear",alias:"确诊病例数"}}),r.axis("value",{position:"left",label:{autoRotate:!1,formatter:function(t){var e=Number(t);if(e>=1e3){var r=Number(t)/1e3;return r+"k"}return e}}}),r.line().position("date*value").color("type",(function(t){return"全国"===t?"#E82040":"湖北地区"===t?"#FA9835":"#5BAFE3"})).size(2).shape("smooth"),r.render()}},mounted:function(){this.renderChart()},watch:{csvData:function(t,e){this.renderChart()}}},b=y,g=Object(u["a"])(b,f,p,!1,null,null,null),C=g.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("p",[t._v("现有确诊病例与重症比例")]),r("div",{attrs:{id:"home-confirmed-chart"}})])},D=[],x={props:["csvData"],methods:{renderChart:function(){document.getElementById("home-confirmed-chart").innerHTML="";var t=new h["View"];t.source(this.$props.csvData,{type:"csv"}).transform({type:"map",callback:function(t){return t.normalConfirmed=Number(t.currentConfrim)-Number(t.currentSerious),t.currentSerious=Number(t.currentConfrim),t}}).transform({type:"fold",fields:["normalConfirmed","currentSerious"],key:"type",value:"value"}).transform({type:"map",callback:function(t){return t.type="normalConfirmed"===t.type?"一般确诊病例":"重症病例",t}}).transform({type:"pick",fields:["date","value","type"]});var e=new v.a.Chart({container:"home-confirmed-chart",forceFit:!0,height:window.innerWidth>767?300:200,padding:[10,20,60,50]});e.source(t,{date:{type:"time",mask:"MM-DD"},value:{type:"linear",tickCount:5}}),e.axis("value",{label:{formatter:function(t){return t=Number(t)/1e3+"k",t}}}),e.intervalStack().position("date*value").color("type",(function(t){return"一般确诊病例"===t?"#ff877a":"#800f03"})).opacity(.6),e.render()}},mounted:function(){this.renderChart()},watch:{csvData:function(t,e){this.renderChart()}}},_=x,k=Object(u["a"])(_,w,D,!1,null,null,null),j=k.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("p",[t._v("治愈率与死亡率趋势")]),r("div",{attrs:{id:"home-cured-death-rate"}})])},R=[],$={props:["csvData"],methods:{renderChart:function(){document.getElementById("home-cured-death-rate").innerHTML="";var t=new h["View"];t.source(this.$props.csvData,{type:"csv"}).transform({type:"map",callback:function(t){var e=Number(t.totalDeath),r=Number(t.totalCured),a=Number(t.totalConfirm);return t["deathRate"]=Math.round(e/a*1e3)/10,t["curedRate"]=Math.round(r/a*1e3)/10,t}}).transform({type:"fold",fields:["deathRate","curedRate"],key:"type",value:"rate"}).transform({type:"map",callback:function(t){return t.type="deathRate"===t.type?"死亡率":"治愈率",t}}).transform({type:"pick",fields:["date","rate","type"]});var e=0;t.rows.forEach((function(t){t.rate>e&&(e=t.rate)}));var r=new v.a.Chart({container:"home-cured-death-rate",forceFit:!0,height:window.innerWidth>767?300:200,padding:[10,20,60,50]});r.source(t,{date:{type:"time",mask:"MM-DD"},rate:{max:1.2*e>100?100:1.2*e,formatter:function(t){return t+="%",t},tickCount:5}}),r.line().position("date*rate").color("type",(function(t){return"死亡率"===t?"#969696":"#15B342"})).size(2).shape("smooth"),r.render()}},mounted:function(){this.renderChart()},watch:{csvData:function(t,e){this.renderChart()}}},S=$,N=Object(u["a"])(S,O,R,!1,null,null,null),P=N.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("p",[t._v("现有疑似病例")]),r("div",{attrs:{id:"home-supected-chart"}})])},M=[],F={props:["csvData"],methods:{renderChart:function(){document.getElementById("home-supected-chart").innerHTML="";var t=new h["View"];t.source(this.$props.csvData,{type:"csv"});var e=new v.a.Chart({container:"home-supected-chart",forceFit:!0,height:window.innerWidth>767?300:200,padding:[10,20,60,50]});e.source(t,{date:{type:"time",mask:"MM-DD"},currentSupect:{type:"linear",alias:"现有疑似病例数"}}),e.axis("currentSupect",{label:{formatter:function(t){return t=Number(t)/1e3+"k",t}}}),e.interval().position("date*currentSupect").color("#f9cd67").opacity(.6),e.render()}},mounted:function(){this.renderChart()},watch:{csvData:function(t,e){this.renderChart()}}},T=F,L=Object(u["a"])(T,E,M,!1,null,null,null),I=L.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("p",[t._v("人口、运输与确诊数的关系（湖北以外地区）")]),r("div",{attrs:{id:"home-population-transport-chart"}}),r("p",{staticClass:"remark"},[t._v("备注：点的大小表示累计确诊的数量。")])])},A=[],W={props:["csvData"],methods:{renderChart:function(){document.getElementById("home-population-transport-chart").innerHTML="";var t=window.innerWidth>767,e=new h["View"];e.source(this.$props.csvData,{type:"csv"}).transform({type:"filter",callback:function(t){return"湖北"!==t.province&&"香港"!==t.province&&"澳门"!==t.province&&"台湾"!==t.province}});var r=new v.a.Chart({container:"home-population-transport-chart",forceFit:!0,height:t?300:200,padding:[10,20,60,80]});r.source(e,{province:{type:"cat",alias:"省、市、自治区"},population:{type:"linear",alias:"年末常住人口(万人)"},transportTotal:{type:"linear",alias:"客运量(万人)"},confirmed:{type:"linear",alias:"确诊数"}}),r.legend("confirmed",!1),r.axis("population",{title:!0,label:{autoRotate:!1}}),r.axis("transportTotal",{title:{offset:65},label:{autoRotate:!1}}),r.tooltip({showTitle:!1}),r.point().position("population*transportTotal").size("confirmed",t?[4,30]:[4,10]).shape("circle").tooltip("province*population*transportTotal*confirmed").color("confirmed",(function(t){return t<200?"#5eb6c5":t<600?"#d49a83":"#710600"})).style("continent",{lineWidth:1,strokeOpacity:1,fillOpacity:.5,opacity:.8}),r.render()}},mounted:function(){this.renderChart()},watch:{csvData:function(t,e){this.renderChart()}}},H=W,V=Object(u["a"])(H,B,A,!1,null,null,null),z=V.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("p",[t._v("医院床位利用率与治愈率的关系（湖北以外地区）")]),r("div",{attrs:{id:"home-bed-usage-chart"}})])},U=[],J={props:["csvData"],methods:{renderChart:function(){document.getElementById("home-bed-usage-chart").innerHTML="";var t=new h["View"];t.source(this.$props.csvData,{type:"csv"}).transform({type:"filter",callback:function(t){return"湖北"!==t.province&&"香港"!==t.province&&"澳门"!==t.province&&"台湾"!==t.province}}).transform({type:"map",callback:function(t){var e=Number(t.cured),r=Number(t.confirmed);return t["curedRate"]=Math.round(e/r*1e3)/10,t}});var e=new v.a.Chart({container:"home-bed-usage-chart",forceFit:!0,height:window.innerWidth>767?300:200,padding:[10,20,60,60]});e.source(t,{province:{type:"cat",alias:"省、市、自治区"},curedRate:{type:"linear",alias:"治愈率",formatter:function(t){return t+="%",t}},confirmed:{type:"linear",alias:"确诊数"},bedUsageRate:{type:"linear",alias:"医院病床使用率",formatter:function(t){return t+="%",t}}}),e.axis("curedRate",{title:{offset:50},label:{autoRotate:!1}}),e.axis("bedUsageRate",{title:!0,label:{autoRotate:!1}}),e.tooltip({showTitle:!1}),e.legend("curedRate",!1),e.point().position("bedUsageRate*curedRate").shape("circle").tooltip("province*bedUsageRate*curedRate").color("curedRate",(function(t){return t>60?"#269e2a":t>30?"#5eaec1":"#c15e74"})).style("continent",{lineWidth:1,strokeOpacity:1,fillOpacity:.5,opacity:.8}),e.render()}},mounted:function(){this.renderChart()},watch:{csvData:function(t,e){this.renderChart()}}},Q=J,X=Object(u["a"])(Q,Y,U,!1,null,null,null),q=X.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("p",[t._v("每10万人平均卫生人员数与治愈率的关系（湖北以外地区）")]),r("div",{attrs:{id:"home-medical-person-chart"}})])},K=[],Z={props:["csvData"],methods:{renderChart:function(){document.getElementById("home-medical-person-chart").innerHTML="";var t=new h["View"];t.source(this.$props.csvData,{type:"csv"}).transform({type:"filter",callback:function(t){return"湖北"!==t.province&&"香港"!==t.province&&"澳门"!==t.province&&"台湾"!==t.province}}).transform({type:"map",callback:function(t){var e=Number(t.cured),r=Number(t.confirmed);return t["healthStaffPer10w"]=Math.round(Number(t.healthStaffPer10w)),t["curedRate"]=Math.round(e/r*1e3)/10,t}});var e=new v.a.Chart({container:"home-medical-person-chart",forceFit:!0,height:window.innerWidth>767?300:200,padding:[10,20,60,60]});e.source(t,{province:{type:"cat",alias:"省、市、自治区"},curedRate:{type:"linear",alias:"治愈率",formatter:function(t){return t+="%",t}},healthStaffPer10w:{type:"linear",alias:"每10万人平均卫生人员数"}}),e.axis("curedRate",{title:{offset:50},label:{autoRotate:!1}}),e.axis("healthStaffPer10w",{title:!0,label:{autoRotate:!1}}),e.tooltip({showTitle:!1}),e.legend("curedRate",!1),e.point().position("healthStaffPer10w*curedRate").shape("circle").tooltip("province*healthStaffPer10w*curedRate").color("curedRate",(function(t){return t>60?"#269e2a":t>30?"#5eaec1":"#c15e74"})).style("continent",{lineWidth:1,strokeOpacity:1,fillOpacity:.5,opacity:.8}),e.render()}},mounted:function(){this.renderChart()},watch:{csvData:function(t,e){this.renderChart()}}},tt=Z,et=Object(u["a"])(tt,G,K,!1,null,null,null),rt=et.exports,at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("div",{attrs:{id:"home-by-province"}})])},nt=[],ot=r("cebe"),it=r.n(ot),ct={props:["csvData"],methods:{renderChart:function(){var t=window.innerWidth>767;document.getElementById("home-by-province").innerHTML="";var e=new h["View"];e.source(this.$props.csvData,{type:"csv"}).transform({type:"filter",callback:function(t){return"澳门"!=t.provinceName}}).transform({type:"map",callback:function(t){return t["currentConfirmed"]=Number(t["province_confirmedCount"])-Number(t["province_curedCount"])-Number(t["province_deadCount"]),t}}).transform({type:"fold",fields:["currentConfirmed","province_curedCount","province_deadCount"],key:"type",value:"value",retains:["provinceName","updateTime"]}).transform({type:"map",callback:function(t){var e=t.type;return t.type="currentConfirmed"==e?"现有确诊":"province_curedCount"==e?"治愈出院":"死亡",t}});var r=new v.a.Chart({container:"home-by-province",forceFit:!0,height:t?600:450,padding:[20,0,40,20]});r.source(e,{provinceName:{type:"cat",alias:"省、市、自治区"},type:{type:"cat",alias:"分类"},value:{type:"linear",alias:"值"},updateTime:{type:"timeCat",alias:"时间"}}),r.axis(!1),r.facet("list",{fields:["provinceName"],cols:t?8:4,padding:t?20:5,eachView:function(t){t.line().position("updateTime*value").color("type",(function(t){return"现有确诊"==t?"#FF564D":"死亡"==t?"#969696":"#15B342"})).shape("smooth").opacity(.3).size(3)},colTitle:{offsetY:t?-10:-3,style:{textAlign:"center",fontSize:t?12:10}}}),r.render()}},mounted:function(){this.renderChart()},data:function(){return{}},watch:{csvData:function(t,e){this.renderChart()}}},st=ct,ut=Object(u["a"])(st,at,nt,!1,null,null,null),lt=ut.exports,dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("p",[t._v("公众对口罩的关注指数")]),r("div",{attrs:{id:"focus-mask"}})])},ft=[],pt={props:["jsonData"],methods:{renderChart:function(){if(this.$props.jsonData){document.getElementById("focus-mask").innerHTML="";var t=new h["View"];t.source(this.$props.jsonData);var e=window.innerWidth>767,r=new v.a.Chart({container:"focus-mask",forceFit:!0,height:e?300:200,padding:[10,30,60,30]});r.source(t,{date:{type:"time",mask:"YYYY-MM-DD"},focus:{alias:"综合关注度"}}),r.guide().dataMarker({position:["2020-01-20",4.338],content:"钟南山明确表示\n新型冠状病毒“人传人”",lineLength:10,autoAdjust:!0}),e&&r.guide().dataMarker({position:["2020-01-23",19.848],content:"工信部:30多家企业已复产",lineLength:30,autoAdjust:!0}),r.line().position("date*focus").size(2).shape("smooth"),r.render()}}},mounted:function(){this.renderChart()},watch:{jsonData:function(t,e){this.renderChart()}}},ht=pt,mt=Object(u["a"])(ht,dt,ft,!1,null,null,null),vt=mt.exports,yt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("p",[t._v("武汉肺炎搜索与微博讨论综合关注指数")]),r("div",{attrs:{id:"focus-overall-index"}})])},bt=[],gt={props:["jsonData"],methods:{renderChart:function(){if(this.$props.jsonData){var t=window.innerWidth>767;document.getElementById("focus-overall-index").innerHTML="";var e=new h["View"];e.source(this.$props.jsonData);var r=new v.a.Chart({container:"focus-overall-index",forceFit:!0,height:t?300:200,padding:[10,30,60,30]});r.source(e,{date:{type:"time",mask:"YYYY-MM-DD"},focus:{alias:"综合关注度"}}),r.line().position("date*focus").size(2).shape("smooth"),t&&(r.guide().dataMarker({position:["2019-12-31",9.33],content:"武汉市卫健委发布“不明原因肺炎”通报",lineLength:30,autoAdjust:!0}),r.guide().dataMarker({position:["2020-01-20",45.85],content:"钟南山明确表示新型冠状病毒“人传人”",lineLength:10,autoAdjust:!1,direction:"downward"})),r.guide().dataMarker({position:["2020-01-23",94.168],content:"关闭离汉通道",lineLength:30,autoAdjust:!0}),r.render()}}},mounted:function(){this.renderChart()},watch:{jsonData:function(t,e){this.renderChart()}}},Ct=gt,wt=Object(u["a"])(Ct,yt,bt,!1,null,null,null),Dt=wt.exports,xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("div",{attrs:{id:"focus-word-cloud"}})])},_t=[];r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b");function kt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function jt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function Ot(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?jt(Object(r),!0).forEach((function(e){kt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):jt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Rt(t){return Ot({},t.style,{fillOpacity:t.opacity,fontSize:t.origin._origin.size,rotate:t.origin._origin.rotate,text:t.origin._origin.text,textAlign:"center",fontFamily:t.origin._origin.font,fill:t.color,textBaseline:"Alphabetic"})}v.a.Shape.registerShape("point","cloud",{drawShape:function(t,e){var r=Rt(t);return e.addShape("text",{attrs:Ot({},r,{x:t.x,y:t.y})})}});var $t={props:["jsonData"],methods:{renderChart:function(){if(this.$props.jsonData){document.getElementById("focus-word-cloud").innerHTML="";var t=window.innerWidth>767,e=new h["View"];e.source(this.$props.jsonData);var r=e.range("cnt"),a=r[0],n=r[1];e.transform({type:"tag-cloud",fields:["keyword","cnt"],size:t?[600,300]:[300,300],font:"Microsoft Yahei",padding:0,spiral:"archimedean",rotate:function(){return 0},fontSize:function(e){return e.value?t?(e.value-a)/(n-a)*45+15:(e.value-a)/(n-a)*10+10:0}});var o=new v.a.Chart({container:"focus-word-cloud",forceFit:!0,height:300,padding:[10,10,10,10]});o.source(e,{x:{nice:!1},y:{nice:!1},keyword:{alias:"关键词"},value:{type:"linear",alias:"出现的谣言条数"}}),o.legend(!1),o.axis(!1),o.tooltip({showTitle:!1}),o.coord().reflect(),o.point().position("x*y").color("value","#F3C2BF-#B33D30").shape("cloud").tooltip("keyword*value"),o.render()}}},mounted:function(){this.renderChart()},watch:{jsonData:function(t,e){this.renderChart()}}},St=$t,Nt=Object(u["a"])(St,xt,_t,!1,null,null,null),Pt=Nt.exports,Et={name:"Home",components:{NumberPanel:d,SupectedChart:I,ConfirmedIncrChart:C,ConfirmedAndSerChart:j,CuredAndDeathRate:P,PopulationChart:z,BedUsage2Cured:q,MedicalPerson2Cured:rt,ByProvince:lt,WHFocus:Dt,MaskFocus:vt,WordCloud:Pt},methods:{renderCurrentData:function(){var t=new h["View"];t.source(this.$data.csvData,{type:"csv"}),this.$data.currentData=t.rows[t.rows.length-1]},checkLoadingFinish:function(){if(this.$data.csvReady&&this.$data.corrReady&&this.$data.timeseriesReady){var t=this.$data.loading;t&&t.close()}},loadData:function(){var t=this;it.a.get("./data/nhc.data.csv",{headers:{"Cache-Control":"no-cache"}}).then((function(e){t.$data.csvData=e.data,t.renderCurrentData(),t.$data.csvReady=!0,t.checkLoadingFinish()})).catch((function(){t.$data.csvReady=!0,t.checkLoadingFinish()})),it.a.get("./data/overall.stat.csv",{headers:{"Cache-Control":"no-cache"}}).then((function(e){t.$data.corrCsv=e.data,t.$data.corrReady=!0,t.checkLoadingFinish()})).catch((function(){t.$data.corrReady=!0,t.checkLoadingFinish()})),it.a.get("./data/timeseries.data.csv",{headers:{"Cache-Control":"no-cache"}}).then((function(e){t.$data.timeseriesCsv=e.data,t.$data.timeseriesReady=!0,t.checkLoadingFinish()})).catch((function(){t.$data.timeseriesReady=!0,t.checkLoadingFinish()})),it.a.get("./data/overall.stat.date.json",{headers:{"Cache-Control":"no-cache"}}).then((function(e){t.$data.thePaperData=e.data.thePaperData,t.$data.theOverallData=e.data.theOverallData})),it.a.get("./data/media.json",{headers:{"Cache-Control":"no-cache"}}).then((function(e){t.$data.focus=e.data.focus,t.$data.wordCloud=e.data.wordCloud,t.$data.mask=e.data.mask,t.$data.newsChannel=e.data.newsChannel,t.$data.jsonReady=!0})).catch((function(){t.$data.jsonReady=!0})),it.a.get("./media.updateTime.json",{headers:{"Cache-Control":"no-cache"}}).then((function(e){t.$data.timeData=e.data,t.$data.timeReady=!0})).catch((function(){t.$data.timeReady=!0}))}},mounted:function(){this.$data.loading=this.$loading({lock:!0,text:"数据加载中，稍等下哈",background:"rgba(226, 238, 247, 0.9)"}),this.loadData()},data:function(){return{csvData:"",csvReady:!1,corrCsv:"",corrReady:!1,timeseriesCsv:"",timeseriesReady:!1,currentData:{},loading:null,thePaperData:"",theOverallData:"",focus:null,wordCloud:null,mask:null,newsChannel:null,timeData:null,jsonReady:!1,timeReady:!1}}},Mt=Et,Ft=Object(u["a"])(Mt,a,n,!1,null,null,null);e["default"]=Ft.exports},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),o=r("56ef"),i=r("fc6a"),c=r("06cf"),s=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),n=c.f,u=o(a),l={},d=0;while(u.length>d)r=n(a,e=u[d++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),o=r("fc6a"),i=r("06cf").f,c=r("83ab"),s=n((function(){i(1)})),u=!c||s;a({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},e538:function(t,e,r){var a=r("b622");e.f=a},fb6a:function(t,e,r){"use strict";var a=r("23e7"),n=r("861d"),o=r("e8b5"),i=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),l=r("b622"),d=r("1dde"),f=r("ae40"),p=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),m=l("species"),v=[].slice,y=Math.max;a({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var r,a,l,d=s(this),f=c(d.length),p=i(t,f),h=i(void 0===e?f:e,f);if(o(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(d,p,h);for(a=new(void 0===r?Array:r)(y(h-p,0)),l=0;p<h;p++,l++)p in d&&u(a,l,d[p]);return a.length=l,a}})}}]);