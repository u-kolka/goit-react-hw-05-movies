"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[919],{300:function(n,t,e){e.d(t,{Dx:function(){return h},S1:function(){return f},rU:function(){return l},zC:function(){return p}});var r,i,o,c,a=e(168),s=e(731),u=e(444),l=(0,u.ZP)(s.OL)(r||(r=(0,a.Z)(["\n    display: inline-block;\n    font-weight: 600;\n    padding: 10px 16px;\n    opacity: 0.6;\n    text-decoration: none;\n    color: rgba(14, 14, 14, 0.885);\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n\n     &:hover {\n    opacity: 1;\n    }\n"]))),f=u.ZP.div(i||(i=(0,a.Z)(["\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 10px;\n    width: 100%;\n"]))),p=u.ZP.div(o||(o=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: space-evenly;\n    width: 60%;\n"]))),h=u.ZP.h2(c||(c=(0,a.Z)(["\n  font-size: 16px;\n"])))},375:function(n,t,e){e.d(t,{c:function(){return a},x:function(){return s}});var r,i,o=e(168),c=e(444),a=c.ZP.li(r||(r=(0,o.Z)(["\n&:not(:last-child) {\n    margin-bottom: 20px;\n}\n"]))),s=c.ZP.p(i||(i=(0,o.Z)(["\nmargin-left: 200px;\nmargin-bottom: 20px;\n"])))},919:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r=e(861),i=e(885),o=e(757),c=e.n(o),a=e(791),s=e(689),u=e(745),l=e(197),f=e(544),p=e(300),h=e(184),d=function(n){var t=n.movie,e=l.F.postersUrl,r=l.F.altProfileUrl,i=l.F.postersSize;return(0,h.jsx)(f.ri,{children:t&&t.cast.map((function(n){var t=n.id,o=n.name,c=n.profile_path,a=n.character,s=null===c?r:"".concat(e+i+c);return(0,h.jsx)("li",{children:(0,h.jsxs)(p.S1,{children:[(0,h.jsx)("img",{src:s,alt:o,width:"100"}),(0,h.jsxs)(p.zC,{children:[(0,h.jsx)("h3",{children:o}),a&&(0,h.jsxs)("p",{children:["Character: ",a]})]})]})},t)}))})},x=e(966),v=e(375),m=function(){var n=(0,a.useState)(null),t=(0,i.Z)(n,2),e=t[0],o=t[1],l=(0,s.TH)().state.id;return(0,a.useEffect)((function(){var n=new AbortController;try{!function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.fetchMovieCredits(l);case 2:t=n.sent,o(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}catch(t){console.error(t)}return function(){n.abort()}}),[l]),e?e.cast.length>0?(0,h.jsx)(x.$,{children:(0,h.jsx)(d,{movie:e})}):(0,h.jsx)(v.x,{children:"We don't have any casts for this movie :( "}):null}}}]);
//# sourceMappingURL=919.df1240e1.chunk.js.map