"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{789:function(r,e,t){t.d(e,{Df:function(){return v},TP:function(){return l},tx:function(){return g},z1:function(){return o},zv:function(){return m}});var n=t(861),a=t(757),u=t.n(a),c=t(243),s="a1f5b9e9409662faaf8dea1424605128",i="https://api.themoviedb.org/3";function o(r){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("".concat(i,"/search/search-movies"),{params:{api_key:s,query:e}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function v(){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("".concat(i,"/trending/get-trending"),{params:{api_key:s}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error getting trending movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function l(r){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("".concat(i,"/movies/get-movie-details"),{params:{api_key:s,movie_id:e}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error getting movie details:",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function m(r){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("".concat(i,"/movies/get-movie-credits"),{params:{api_key:s,movie_id:e}});case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error getting movie credits:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function g(r){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("".concat(i,"/movies/get-movie-reviews"),{params:{api_key:s,movie_id:e}});case 3:return t=r.sent,r.abrupt("return",t.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error getting movie reviews:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}},493:function(r,e,t){t.r(e);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(789),o=t(184);e.default=function(r){var e=r.match,t=(0,s.useState)([]),u=(0,a.Z)(t,2),p=u[0],v=u[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.zv)(e.params.movieId);case 3:t=r.sent,v(t.cast),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e.params.movieId]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Cast"}),(0,o.jsx)("ul",{children:p.map((function(r){return(0,o.jsx)("li",{children:r.name},r.id)}))})]})}}}]);
//# sourceMappingURL=493.0913d151.chunk.js.map