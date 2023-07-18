"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(861),a=r(439),c=r(757),s=r.n(c),o=r(791),i=r(689),u=r(87),l=r(234),p=r(639),v="MovieDetails_button__uXZxd",d="MovieDetails_title__cUGs9",h="MovieDetails_paragraph__1+o0a",f="MovieDetails_text__RHcc4",m="MovieDetails_cont_text__s2zwq",x="MovieDetails_p_cont__GQw6E",_=r(184),w=function(){var e,t,r,c,w,g,y=(0,i.UO)().movieId,j=(0,o.useState)(null),b=(0,a.Z)(j,2),Z=b[0],k=b[1],E=(0,i.TH)(),T=(0,o.useRef)(null!==(e=null===(t=E.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,o.useEffect)((function(){if(y){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.TP)(y);case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[y]),(0,_.jsxs)("div",{children:[(0,_.jsx)(u.rU,{className:v,to:T.current,children:"Go back"}),Z&&(0,_.jsxs)("div",{children:[(0,_.jsx)("h1",{className:d,children:Z.title}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("img",{alt:Z.title,src:"https://image.tmdb.org/t/p/w300".concat(Z.poster_path)}),(0,_.jsxs)("div",{className:x,children:[(0,_.jsxs)("p",{className:h,children:["Release date: ",Z.release_date]}),(0,_.jsx)("p",{className:f,children:Z.overview})]})]})]}),(0,_.jsx)(u.rU,{className:v,state:{from:null!==(r=null===(c=E.state)||void 0===c?void 0:c.from)&&void 0!==r?r:"/"},to:"cast",children:"Cast"}),(0,_.jsx)(u.rU,{className:v,state:{from:null!==(w=null===(g=E.state)||void 0===g?void 0:g.from)&&void 0!==w?w:"/"},to:"reviews",children:"Reviews"}),(0,_.jsx)(o.Suspense,{fallback:(0,_.jsx)(p.Z,{}),children:(0,_.jsx)(i.j3,{})})]})}},234:function(e,t,r){r.d(t,{Df:function(){return v},TP:function(){return h},tx:function(){return _},z1:function(){return l},zv:function(){return m}});var n=r(861),a=r(757),c=r.n(a),s=r(243),o="a1f5b9e9409662faaf8dea1424605128",i="https://api.themoviedb.org/3",u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWY1YjllOTQwOTY2MmZhYWY4ZGVhMTQyNDYwNTEyOCIsInN1YiI6IjY0YWU2YjUwNjZhMGQzMDEzYTc0ZDQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K0sogxs4DauKrsrU3S5qyHUHTsR5OwOW6huAEekTRIc";function l(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"".concat(i,"/search/movie"),params:{query:t},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}},e.prev=1,e.next=4,s.Z.get("".concat(i,"/search/movie"),r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function v(){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"".concat(i,"/trending/all/day"),params:{api_key:o}},e.prev=1,e.next=4,s.Z.get("".concat(i,"/trending/all/day"),t);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"".concat(i,"/movie/").concat(t),params:{api_key:o}},e.prev=1,e.next=4,s.Z.get("".concat(i,"/movie/").concat(t),r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"".concat(i,"/movie/").concat(t,"/credits"),params:{api_key:o}},e.prev=1,e.next=4,s.Z.get("".concat(i,"/movie/").concat(t,"/credits"),r);case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function _(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"".concat(i,"/movie/").concat(t,"/reviews"),params:{api_key:o}},e.prev=1,e.next=4,s.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=135.44372179.chunk.js.map