(this["webpackJsonpplayoff-v2"]=this["webpackJsonpplayoff-v2"]||[]).push([[0],{149:function(e,o,a){},286:function(e,o,a){"use strict";a.r(o);var t=a(0),n=a(135),c=a(7),r=a(27),i=a(14),l=(a(149),a(136)),s=a.n(l),u=3,d=[{key:"mpt",displayName:"\u05de\u05db\u05d1\u05d9 \u05e4\u05f4\u05ea",initialPoints:61,goalDiffrence:27},{key:"hpt",displayName:"\u05d4\u05e4\u05d5\u05e2\u05dc \u05e4\u05f4\u05ea",initialPoints:60,goalDiffrence:23},{key:"tve",displayName:"\u05e2\u05d9\u05e8\u05d5\u05e0\u05d9 \u05d8\u05d1\u05e8\u05d9\u05d4",initialPoints:55,goalDiffrence:21},{key:"uef",displayName:"\u05d0.\u05d0.\u05e4\u05d0\u05d7\u05dd",initialPoints:51,goalDiffrence:16},{key:"ako",displayName:"\u05d4\u05e4\u05d5\u05e2\u05dc \u05e2\u05db\u05d5",initialPoints:47,goalDiffrence:7},{key:"jaf",displayName:"\u05de\u05db\u05d1\u05d9 \u05d9\u05e4\u05d5",initialPoints:44,goalDiffrence:0},{key:"kfs",displayName:"\u05d4\u05e4\u05d5\u05e2\u05dc \u05db\u05e4\u05f4\u05e1",initialPoints:42,goalDiffrence:-1},{key:"bni",displayName:"\u05d1\u05e0\u05d9 \u05d9\u05d4\u05d5\u05d3\u05d4",initialPoints:41,goalDiffrence:-4}],h={HOME:1,AWAY:2,TIE:3},v=[{home:"hpt",away:"kfs",round:31,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"mpt",away:"ako",round:31,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"tve",away:"jaf",round:31,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"uef",away:"bni",round:31,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"mpt",away:"hpt",round:32,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"ako",away:"bni",round:32,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"kfs",away:"tve",round:32,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"jaf",away:"uef",round:32,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"hpt",away:"ako",round:33,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"tve",away:"mpt",round:33,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"uef",away:"kfs",round:33,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"bni",away:"jaf",round:33,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"hpt",away:"tve",round:34,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"ako",away:"jaf",round:34,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"kfs",away:"bni",round:34,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"mpt",away:"uef",round:34,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"uef",away:"hpt",round:35,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"tve",away:"ako",round:35,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"bni",away:"mpt",round:35,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"jaf",away:"kfs",round:35,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"hpt",away:"bni",round:36,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"ako",away:"kfs",round:36,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"mpt",away:"jaf",round:36,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"tve",away:"uef",round:36,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"jaf",away:"hpt",round:37,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"uef",away:"ako",round:37,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"bni",away:"tve",round:37,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1},{home:"kfs",away:"mpt",round:37,homeGoals:void 0,awayGoals:void 0,result:void 0,lock:!1}],m=a(89),j=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=o.reduce((function(e,o){return o.result&&(e[o.home]=(e[o.home]||0)+1,e[o.away]=(e[o.away]||0)+1),e}),{}),t=function(e){return e.reduce((function(e,o){return o.result===h.HOME&&(e[o.home]=(e[o.home]||0)+3),o.result===h.AWAY&&(e[o.away]=(e[o.away]||0)+3),o.result===h.TIE&&(e[o.home]=(e[o.home]||0)+1,e[o.away]=(e[o.away]||0)+1),e}),{})}(o),n=function(e){return e.reduce((function(e,o){return e[o.home]=(e[o.home]||0)+(o.homeGoals||0)-(o.awayGoals||0),e[o.away]=(e[o.away]||0)+(o.awayGoals||0)-(o.homeGoals||0),e}),{})}(o);return e.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{games:(a[e.key]||0)+30,points:e.initialPoints+(t[e.key]||0),goalDiffrence:e.goalDiffrence+(n[e.key]||0)})})).sort((function(e,o){return o.points-e.points||o.goalDiffrence-e.goalDiffrence}))},f=function(e,o){var a;return(null===(a=e.find((function(e){return e.key===o})))||void 0===a?void 0:a.displayName)||o};function b(e){try{JSON.parse(e)}catch(o){return!1}return!0}function y(e){var o=e.map((function(e){return[e.home,e.round,e.result,e.homeGoals,e.awayGoals]}));return JSON.stringify(o)}function w(e){var o=e.action,a=e.category,t=e.label,n=e.value;window.gtag&&window.gtag("event",o,{event_category:a,event_label:t,value:n})}var O=function(e,o){return e.reduce((function(e,a){return(e[a[o]]=e[a[o]]||[]).push(a),e}),{})},p=function(e,o){return Math.floor(Math.random()*(o-e+1)+e)},k=function(){var e=[0,0,0,0,0,1,1,1,1,2,2,2,3];return e[Math.floor(Math.random()*(e.length-1+1))]},G=function(){try{var e=atob(new URL(document.location).searchParams.get("state")),o=window.localStorage.getItem("fixtures");if(b(e))return JSON.parse(e);if(b(o)&&window.localStorage.getItem("version")===u.toString()&&o.length)return JSON.parse(o)}catch(a){console.error(a)}return[]},x=function(e,o){var a=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){var o=Object(i.a)(e,5);return{home:o[0],round:o[1],result:o[2],homeGoals:o[3],awayGoals:o[4]}}))}(o);return a.reduce((function(o,a){var t=e.findIndex((function(e){return e.home===a.home&&e.round===a.round})),n=a.result,r=a.homeGoals,i=a.awayGoals;return-1!==t&&n&&(o[t]=Object(c.a)(Object(c.a)({},e[t]),{},{result:n,homeGoals:r,awayGoals:i})),o}),Object(r.a)(e))},g=function(e){var o=new URL(document.location.origin);return o.searchParams.set("state",btoa(y(e.filter((function(e){return e.result}))))),o},N=function(e,o){return/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)&&navigator.share?navigator.share({text:e.toString()}):navigator.clipboard?navigator.clipboard.writeText(e.toString()).catch((function(e){return console.error(e)})):(window.prompt(e.toString()),Promise.resolve())};window.currentCalcuation=new Map;var A=a(1);function S(e){var o=e.team,a=void 0===o?{}:o,t=e.showGoals,n=void 0!==t&&t,c=e.idx,r=e.chance;return Object(A.jsxs)("div",{className:"row",children:[Object(A.jsx)("div",{className:"col",children:c+1}),Object(A.jsx)("div",{className:"col",children:a.displayName}),Object(A.jsx)("div",{className:"col ".concat(37===a.games?"done":""," "),children:a.games}),n&&Object(A.jsx)("div",{className:"col gf",children:a.goalDiffrence}),Object(A.jsx)("div",{className:"col",children:a.points}),Object(A.jsx)("div",{className:"col",children:r})]},a.key)}var C=a(142);function E(e){var o=e.teams,a=e.showGoals,t=e.chancePrecentile;return Object(A.jsxs)("div",{className:"table",children:[Object(A.jsxs)("div",{className:"row head-row",children:[Object(A.jsx)("th",{children:"\u05de\u05e7\u05d5\u05dd"}),Object(A.jsx)("th",{children:"\u05e7\u05d1\u05d5\u05e6\u05d4"}),Object(A.jsx)("th",{children:"\u05de\u05e9\u05d7\u05e7\u05d9\u05dd"}),a&&Object(A.jsx)("th",{children:"\u05d4\u05e4\u05e8\u05e9"}),Object(A.jsx)("th",{children:"\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea"}),Object(A.jsx)("th",{children:"\u05e1\u05d9\u05db\u05d5\u05d9 \u05e2\u05dc\u05d9\u05d4"})]}),Object(A.jsx)(C.a,{enabled:!0,top:0,bottomBoundary:1200,children:Object(A.jsx)("div",{className:"top-4",children:o.slice(0,4).map((function(e,o){return Object(A.jsx)(S,{team:e,showGoals:a,idx:o,chance:t.get(e.key)||null})}))})}),Object(A.jsx)("div",{children:o.slice(4).map((function(e,o){return Object(A.jsx)(S,{team:e,showGoals:a,idx:o+4,chance:t.get(e.key)||null})}))})]})}var P=d;function M(e){var o=e.fixture,a=e.index,n=e.applyFn,c=e.showRoundNumber,r=void 0===c||c,i=e.showGoals,l=Object(t.useRef)(o.homeGoals),s=Object(t.useRef)(o.awayGoals),u=o.homeGoals,d=o.awayGoals;Object(t.useEffect)((function(){i&&(l.current.value=u,s.current.value=d)}),[u,d,i]);var v=function(e){e.stopPropagation();var o,t=l.current.valueAsNumber&&l.current.checkValidity()?l.current.valueAsNumber:0,c=s.current.valueAsNumber&&s.current.checkValidity()?s.current.valueAsNumber:0;o=t>c?h.HOME:t<c?h.AWAY:h.TIE,n(a,o,t,c)},m=function(e){var o=e===h.HOME?1:0,t=e===h.AWAY?1:0;n(a,e,o,t)};return Object(A.jsxs)("tr",{className:"round-".concat(o.round," team-").concat(o.home," team-").concat(o.away),children:[r?Object(A.jsx)("td",{children:o.round}):"",Object(A.jsx)("td",{className:"".concat(o.result===h.HOME?"bold":""),children:Object(A.jsx)("div",{children:Object(A.jsx)("div",{onClick:function(){m(h.HOME)},children:f(P,o.home)})})}),i&&Object(A.jsx)("td",{className:"goals-col",children:Object(A.jsx)("div",{children:Object(A.jsx)("input",{onClick:function(e){e.target.select()},onChange:v,type:"number",min:"0",size:"1",max:"13",ref:l,disabled:o.lock})})}),Object(A.jsx)("td",{className:"tie-col ".concat(o.result===h.TIE?"bold":""),onClick:function(){m(h.TIE)},children:"X"}),i&&Object(A.jsx)("td",{className:"goals-col",children:Object(A.jsx)("div",{children:Object(A.jsx)("input",{onClick:function(e){e.target.select()},onChange:v,type:"number",min:"0",size:"1",max:"13",ref:s,disabled:o.lock})})}),Object(A.jsx)("td",{className:"".concat(o.result===h.AWAY?"bold":""),children:Object(A.jsx)("div",{children:Object(A.jsx)("div",{onClick:function(){m(h.AWAY)},children:f(P,o.away)})})})]},a)}function I(e){var o=e.fixtures,a=e.applyFn,t=e.showGoals,n=O(o,"round");return Object.keys(n).map((function(e){return Object(A.jsxs)("div",{children:[Object(A.jsxs)("h3",{children:["\u05de\u05d7\u05d6\u05d5\u05e8 ",e]}),Object(A.jsxs)("table",{children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"1"}),t&&Object(A.jsx)("th",{className:"goals-col"}),Object(A.jsx)("th",{className:"tie-col",children:"x"}),t&&Object(A.jsx)("th",{className:"goals-col"}),Object(A.jsx)("th",{children:"2"})]})}),Object(A.jsx)("tbody",{children:n[e].map((function(e){return Object(A.jsx)(M,{fixture:e,applyFn:a,index:"".concat(e.home,"/").concat(e.away),showRoundNumber:!1,showGoals:t},"".concat(e.home,"/").concat(e.away))}))})]})]},"round".concat(e))}))}var D=a(87),F=(a(285),{icon:"\ud83d\udccb",position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});function H(){var e=Object(t.useState)(Object(r.a)(v)),o=Object(i.a)(e,2),a=o[0],n=o[1],l=Object(t.useState)(j(d,Object(r.a)(v))),f=Object(i.a)(l,2),b=f[0],O=f[1],S=Object(t.useState)(!1),C=Object(i.a)(S,2),P=C[0],M=C[1],H=Object(t.useState)(0),z=Object(i.a)(H,2),R=(z[0],z[1]),T=Object(t.useState)(new Map),W=Object(i.a)(T,2),Y=W[0],J=W[1];Object(t.useEffect)((function(){if(a.every((function(e){return e.result}))){var e=b.findIndex((function(e){return"hpt"===e.key}))+1;w({action:"complete",category:"hpt",label:e}),w({action:"complete",category:"complete",label:a.reduce((function(e,o){return e.concat(o.result)}),"")}),1===e||2===e?Object(m.a)({particleCount:750,spread:360,colors:["#89CFF0","#0047AB","#3F00FF","#4169E1"]}):m.a&&m.a.reset()}}),[b,a]),Object(t.useEffect)((function(){var e,o;(e=a,o=1e4,new Promise((function(a,t){var n=d.map((function(e){return e.key})),r=window.currentCalcuation,l=0;for(l=0;l<o;l++){var s=e.map((function(e){return e.result?Object(c.a)({},e):Object(c.a)(Object(c.a)({},e),{},{result:p(1,3)})})),u=j(d,s).slice(0,2).map((function(e){return e.key})),h=s.reduce((function(e,o){return e.concat(o.result)}),"");r.set(h,u)}var v=new Map(n.map((function(e){return[e,0]})));Array.from(r.values()).forEach((function(e){var o=Object(i.a)(e,2),a=o[0],t=o[1];v.set(a,v.get(a)+1),v.set(t,v.get(t)+1)}));var m=n.reduce((function(e,o){return e.set(o,(v.get(o)/r.size*100).toFixed(1)),e}),new Map);console.log(m),a({poolSize:r.size,promotionsCount:v,precentile:m})}))).then((function(e){var o=e.precentile,a=void 0===o?new Map:o,t=e.poolSize;J(a),R(t)})),O(j(d,a)),window.currentCalcuation.size>0&&(window.currentCalcuation.clear(),L())}),[a]),Object(t.useEffect)((function(){var e=G();n(x(v,e))}),[]);var B=g(a),L=function(){};return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("div",{id:"table",children:Object(A.jsx)(E,{teams:b,showGoals:P,chancePrecentile:Y})}),Object(A.jsxs)("div",{className:"buttons",children:[Object(A.jsx)("button",{onClick:function(){w({action:"click",category:"button",label:"share"}),N(B).then((function(){D.b.success("\u05d4\u05d5\u05e2\u05ea\u05e7 \u05dc\u05dc\u05d5\u05d7",F)}))},children:"\u05e9\u05ea\u05e3 \u05de\u05e6\u05d1 \u05e0\u05d5\u05db\u05d7\u05d9"}),Object(A.jsx)("button",{onClick:function(){w({action:"click",category:"button",label:"reset"}),n(v)},children:"\u05d0\u05d9\u05e4\u05d5\u05e1"}),Object(A.jsx)("button",{onClick:function(){w({action:"click",category:"button",label:"shuffle"});var e=a.every((function(e){return e.result})),o=a.map((function(o){if(o.lock||o.result&&!e)return o;var a=k(),t=k(),n=a>t?h.HOME:a<t?h.AWAY:h.TIE;return Object(c.a)(Object(c.a)({},o),{},{result:n,homeGoals:a,awayGoals:t})}));n(o)},children:"\u05d0\u05e7\u05e8\u05d0\u05d9"})]}),Object(A.jsx)("div",{children:Object(A.jsxs)("label",{children:[Object(A.jsx)(s.a,{onChange:function(e){w({action:"click",category:"goals",label:e.toString()}),M(e)},checked:P,className:"switch"}),"\u05d4\u05e4\u05e8\u05e9 \u05e9\u05e2\u05e8\u05d9\u05dd"]})}),Object(A.jsx)("div",{id:"fixtures",children:Object(A.jsx)(I,{fixtures:a,applyFn:function(e,o,t,i){var l=Object(r.a)(a),s=l.findIndex((function(o){return"".concat(o.home,"/").concat(o.away)===e}));if(!l[s].lock){var d=o===l[s].result?void 0:o;l[s]=Object(c.a)(Object(c.a)({},l[s]),{},{result:d,homeGoals:d?t:void 0,awayGoals:d?i:void 0}),n(l);var h=y(l);window.localStorage.setItem("fixtures",h),window.localStorage.setItem("version",u)}},showGoals:P})}),Object(A.jsx)(D.a,{rtl:!0})]})}var z=document.getElementById("root");Object(n.createRoot)(z).render(Object(A.jsx)(t.StrictMode,{children:Object(A.jsx)(H,{})}))}},[[286,1,2]]]);
//# sourceMappingURL=main.d64b7ba1.chunk.js.map