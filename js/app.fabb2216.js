(function(t){function e(e){for(var s,i,u=e[0],r=e[1],c=e[2],d=0,f=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,u=1;u<a.length;u++){var r=a[u];0!==n[r]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/bets/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a5c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("Calculadora")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-space-around align-center"},[a("div",[a("v-simple-table",{staticClass:"my-4",attrs:{dark:"",dense:"","fixed-header":"",height:"500px"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Cuota 1 ")]),a("th",{staticClass:"text-left"},[t._v(" Cuota 2 ")])])]),a("tbody",t._l(t.cuotas1,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.cuot1))]),a("td",[t._v(t._s(e.cuot2))])])})),0)]},proxy:!0}])})],1),a("div",[a("v-card",{staticClass:"my-8 py-8 px-6",attrs:{elevation:"4",outlined:"",shaped:"",tile:""}},[a("div",{staticClass:"d-flex justify-center align-center"},[a("div",{staticClass:"mx-4"},[t._v("Inversión")]),a("v-text-field",{attrs:{required:""},model:{value:t.inversion,callback:function(e){t.inversion=e},expression:"inversion"}})],1),a("div",{staticClass:"d-flex flex justify-center align-center"},[a("div",{staticClass:"mx-4"},[t._v("Cuota 1")]),a("v-text-field",{attrs:{required:""},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),a("div",{staticClass:"d-flex flex justify-center align-center"},[a("div",{staticClass:"mx-4"},[t._v("Cuota 2")]),a("v-text-field",{attrs:{required:""},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t.sur?a("div",{staticClass:"d-flex flex-column justify-center align-center"},[a("h2",{staticClass:"font-weight-bold my-4 red--text"},[t._v("SUREBET ENCONTRADA")]),a("img",{staticClass:"mb-2",attrs:{src:"https://images.emojiterra.com/google/android-11/512px/1f911.png",width:"30px",height:"30px",alt:""}}),a("span",{staticClass:"my-2 font-weight-bold"},[t._v("Para la C1 debes apostar: "),a("b",{staticClass:"red--text"},[t._v(t._s(this.apuesta1)+"€")])]),a("span",{staticClass:"my-2 font-weight-bold"},[t._v("Para la C2 debes apostar: "),a("b",{staticClass:"red--text"},[t._v(t._s(this.apuesta2)+"€")])]),a("span",{staticClass:"my-2 font-weight-bold"},[t._v("Si lo haces, da igual que apuesta ganes que el beneficio será: "),a("b",{staticClass:"red--text"},[t._v(t._s(this.total)+"€")])]),a("span",{staticClass:"font-weight-bold"},[t._v(" o mejor dicho "),a("b",{staticClass:"red--text"},[t._v(t._s(this.ganancia)+"€")]),t._v(" redondeados")])]):null===this.sur?a("div",{staticClass:"font-weight-bold"},[a("h2",{staticClass:" my-4 red--text"},[t._v(t._s(this.messageError))])]):!1===this.sur?a("div",{staticClass:"font-weight-bold"},[a("h2",{staticClass:"font-weight-bold my-4 red--text"},[t._v("SUREBET NO ENCONTRADA")])]):t._e(),a("div",{staticClass:"d-flex flex-column justify-center align-center my-2"},[a("v-btn",{staticClass:"mr-4 my-2",attrs:{color:"error"},on:{click:t.prob}},[t._v(" Calcular ")])],1)])],1),a("div",[[a("v-simple-table",{staticClass:"my-4",attrs:{dark:"",dense:"","fixed-header":"",height:"500px"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Cuota 1 ")]),a("th",{staticClass:"text-left"},[t._v(" Cuota 2 ")])])]),a("tbody",t._l(t.cuotas2,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.cuot1))]),a("td",[t._v(t._s(e.cuot2))])])})),0)]},proxy:!0}])})]],2)])},u=[],r=(a("b680"),a("d3b7"),a("25f0"),a("a9e3"),{name:"Calculadora",props:[],data:function(){return{inversion:0,probabilidad:0,value1:0,value2:0,sur:null,messageError:"",apuesta1:0,apuesta2:0,total:0,ganancia:0,cuotas1:[{name:"1",cuot1:1.1,cuot2:11},{name:"2",cuot1:1.12,cuot2:9.33},{name:"3",cuot1:1.14,cuot2:8.14},{name:"4",cuot1:1.16,cuot2:7.25},{name:"5",cuot1:1.18,cuot2:6.58},{name:"6",cuot1:1.2,cuot2:6},{name:"7",cuot1:1.22,cuot2:5.5},{name:"8",cuot1:1.25,cuot2:5},{name:"9",cuot1:1.28,cuot2:4.5},{name:"10",cuot1:1.3,cuot2:4.33},{name:"11",cuot1:1.33,cuot2:4},{name:"12",cuot1:1.36,cuot2:3.75},{name:"13",cuot1:1.4,cuot2:3.5},{name:"14",cuot1:1.44,cuot2:3.25}],cuotas2:[{name:"1",cuot1:1.5,cuot2:3},{name:"2",cuot1:1.53,cuot2:2.89},{name:"3",cuot1:1.57,cuot2:2.75},{name:"4",cuot1:1.6,cuot2:2.67},{name:"5",cuot1:1.66,cuot2:2.52},{name:"6",cuot1:1.7,cuot2:2.43},{name:"7",cuot1:1.72,cuot2:2.39},{name:"8",cuot1:1.75,cuot2:2.33},{name:"9",cuot1:1.8,cuot2:2.25},{name:"10",cuot1:1.83,cuot2:2.2},{name:"11",cuot1:1.85,cuot2:2.18},{name:"12",cuot1:1.9,cuot2:2.11},{name:"13",cuot1:1.95,cuot2:2.05},{name:"14",cuot1:1.99,cuot2:2.01}]}},methods:{prob:function(){if(0!=this.value1&&0!=this.value2){this.probabilidad=1/this.value1+1/this.value2,this.probabilidad=this.trunc(this.probabilidad,2);var t=1/this.probabilidad*this.inversion;this.probabilidad<1?(this.sur=!0,this.apuesta1=(1/this.value1*t).toFixed(2),this.apuesta2=(1/this.value2*t).toFixed(2),this.ganancia=(this.apuesta1*this.value1-this.inversion).toFixed(2),this.total=this.apuesta1*this.value1,this.total=this.total.toFixed(2)):this.sur=!1}else this.sur=null,this.messageError="Inserta bien los importes"},trunc:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=t.toString(),s=a.indexOf(".")+1,n=a.substr(0,s+e);return Number(n)}}}),c=r,l=(a("6d53"),a("2877")),d=a("6544"),f=a.n(d),v=a("8336"),p=a("b0af"),h=a("1f4f"),m=a("8654"),b=Object(l["a"])(c,i,u,!1,null,null,null),x=b.exports;f()(b,{VBtn:v["a"],VCard:p["a"],VSimpleTable:h["a"],VTextField:m["a"]});var _={name:"App",components:{Calculadora:x},data:function(){return{}}},C=_,g=a("7496"),y=a("f6c4"),w=Object(l["a"])(C,n,o,!1,null,null,null),j=w.exports;f()(w,{VApp:g["a"],VMain:y["a"]});var O=a("f309");s["a"].use(O["a"]);var k=new O["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:k,render:function(t){return t(j)}}).$mount("#app")},"6d53":function(t,e,a){"use strict";a("0a5c")}});
//# sourceMappingURL=app.fabb2216.js.map