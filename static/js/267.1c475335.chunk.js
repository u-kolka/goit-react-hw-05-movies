"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[267],{300:function(n,e,t){t.d(e,{Dx:function(){return h},S1:function(){return l},rU:function(){return u},zC:function(){return f}});var r,i,a,o,s=t(168),c=t(731),d=t(444),u=(0,d.ZP)(c.OL)(r||(r=(0,s.Z)(["\n    display: inline-block;\n    font-weight: 600;\n    padding: 10px 16px;\n    opacity: 0.6;\n    text-decoration: none;\n    color: rgba(14, 14, 14, 0.885);\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n\n     &:hover {\n    opacity: 1;\n    }\n"]))),l=d.ZP.div(i||(i=(0,s.Z)(["\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 10px;\n    width: 100%;\n"]))),f=d.ZP.div(a||(a=(0,s.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: space-evenly;\n    width: 60%;\n"]))),h=d.ZP.h2(o||(o=(0,s.Z)(["\n  font-size: 16px;\n"])))},267:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r=t(861),i=t(885),a=t(757),o=t.n(a),s=t(791),c=t(689),d=t(745),u=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function l(n){return n.map((function(n){var e=n.id;return u.find((function(n){return n.id===e})).name})).join(", ")}var f=t(197),h=t(300),m=t(184);function p(n){var e=n.genres,t=n.overview,r=n.rating,i=n.poster,a=n.date,o=n.title,s=f.F.postersUrl,c=f.F.altPosterUrl,d=f.F.postersSize,u=null===i?c:"".concat(s+d+i);return(0,m.jsxs)(h.S1,{children:[(0,m.jsx)("img",{src:u,alt:o,width:"250px",height:"375px"}),(0,m.jsxs)(h.zC,{children:[(0,m.jsxs)("h2",{children:[o," ",a.slice(0,4)]}),(0,m.jsxs)("p",{children:["Rating: ",r.toFixed(1)]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:t}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:l(e)})]})]})}var x,v=t(168),j=(0,t(444).ZP)(h.rU)(x||(x=(0,v.Z)(["\nposition: absolute;\ntop: 50px;\n"]))),y=function(n){var e=n.to,t=n.children;return(0,m.jsx)(j,{to:e,children:t})},g=[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}],w=function(n){var e,t,r=n.id,i=null!==(e=null===(t=(0,c.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{to:i,children:"Go back"}),(0,m.jsx)(h.Dx,{children:"Additional information"}),(0,m.jsx)("ul",{children:g.map((function(n){var e=n.href,t=n.text;return(0,m.jsx)(h.rU,{to:e,state:{id:r,from:i},children:t},e)}))})]})},Z=function(){var n=(0,s.useState)(null),e=(0,i.Z)(n,2),t=e[0],a=e[1],u=(0,c.UO)().id;if((0,s.useEffect)((function(){var n=new AbortController;try{!function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.Z.fetchMovieByID(u);case 2:e=n.sent,a((function(n){if(n!==e)return e}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}catch(e){console.error(e)}return function(){n.abort()}}),[u]),!t)return null;var l=t.genres,f=t.overview,h=t.vote_average,x=t.poster_path,v=t.release_date,j=t.title;return(0,m.jsxs)("main",{children:[(0,m.jsx)(p,{genres:l,overview:f,rating:h,poster:x,date:v,title:j}),(0,m.jsx)(w,{id:u}),(0,m.jsx)(s.Suspense,{children:(0,m.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=267.1c475335.chunk.js.map