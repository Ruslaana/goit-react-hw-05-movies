(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{789:function(e,r,t){"use strict";t.d(r,{Df:function(){return f},TP:function(){return v},tx:function(){return y},z1:function(){return o},zv:function(){return d}});var n=t(861),a=t(757),s=t.n(a),i=t(243),u="a1f5b9e9409662faaf8dea1424605128",c="https://api.themoviedb.org/3";function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(c,"/search/search-movies"),{params:{api_key:u,query:r}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(c,"/trending/get-trending"),{params:{api_key:u}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error getting trending movies:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(c,"/movies/get-movie-details"),{params:{api_key:u,movie_id:r}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error getting movie details:",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(c,"/movies/get-movie-credits"),{params:{api_key:u,movie_id:r}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error getting movie credits:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(c,"/movies/get-movie-reviews"),{params:{api_key:u,movie_id:r}});case 3:return t=e.sent,e.abrupt("return",t.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error getting movie reviews:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},633:function(e,r,t){"use strict";t(791);var n=t(184);r.Z=function(e){var r=e.movie;return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:r.title}),(0,n.jsxs)("p",{children:["Release Date:",r.release_data]})]})}},415:function(e,r,t){"use strict";t.r(r);var n=t(861),a=t(439),s=t(757),i=t.n(s),u=t(791),c=t(7),o=t.n(c),p=t(789),f=t(633),l=t(184),v=function(){var e=(0,u.useState)([]),r=(0,a.Z)(e,2),t=r[0],s=r[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Df)();case 2:r=e.sent,s(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Popular Movies"}),(0,l.jsx)("ul",{children:t.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(f.Z,{movie:e})},e.id)}))})]})};v.prototype={movies:o().arrayOf(o().shape({id:o().number.isRequired,title:o().string.isRequired,release_data:o().string.isRequired})).isRequired},r.default=v},888:function(e,r,t){"use strict";var n=t(47);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,r,t,a,s,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:s,resetWarningCache:a};return t.PropTypes=t,t}},7:function(e,r,t){e.exports=t(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=415.5ca100fc.chunk.js.map