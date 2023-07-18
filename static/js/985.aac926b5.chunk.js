"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[985],{692:function(e,t,n){n.d(t,{Z:function(){return a}});n(791);var r="MovieItem_Item__i+SHt",o=n(184);var a=function(e){var t=e.movie;return(0,o.jsx)("div",{children:(0,o.jsx)("p",{className:r,children:t.title})})}},985:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(861),o=n(439),a=n(757),i=n.n(a),s=n(791);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=n(433);function p(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=p(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var m=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=p(e))&&(r&&(r+=" "),r+=t);return r},v=["theme","type"],h=["delay","staleId"],g=function(e){return"number"==typeof e&&!isNaN(e)},y=function(e){return"string"==typeof e},E=function(e){return"function"==typeof e},T=function(e){return y(e)||E(e)?e:null},b=function(e){return(0,s.isValidElement)(e)||y(e)||E(e)||g(e)};function O(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,a=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,p=e.isIn,m=o?"".concat(t,"--").concat(a):t,v=o?"".concat(n,"--").concat(a):n,h=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,d.Z)(n)))};(e=t.classList).add.apply(e,(0,d.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,s.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};p||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),s.createElement(s.Fragment,null,r)}}function I(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var _={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,d.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},C=function(e){var t=e.theme,n=e.type,r=f(e,v);return s.createElement("svg",l({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},w={info:function(e){return s.createElement(C,l({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(C,l({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(C,l({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(C,l({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function x(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],u=(0,s.useRef)(null),p=(0,s.useRef)(new Map).current,m=function(e){return-1!==i.indexOf(e)},v=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return p.get(e)}}).current;function O(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function C(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function x(){var e=v.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function N(e,t){var r=t.delay,a=t.staleId,i=f(t,h);if(b(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||p.has(e.toastId)&&null==e.updateId}(i)){var c=i.toastId,d=i.updateId,m=i.data,O=v.props,N=function(){return C(c)},L=null==d;L&&v.count++;var j,R,M=l(l(l({},O),{},{style:O.toastStyle,key:v.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:d,data:m,closeToast:N,isIn:!1,className:T(i.className||O.toastClassName),bodyClassName:T(i.bodyClassName||O.bodyClassName),progressClassName:T(i.progressClassName||O.progressClassName),autoClose:!i.isLoading&&(j=i.autoClose,R=O.autoClose,!1===j||g(j)&&j>0?j:R),deleteToast:function(){var e=I(p.get(c),"removed");p.delete(c),_.emit(4,e);var t=v.queue.length;if(v.count=null==c?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==c?v.props.limit:1;if(1===t||1===r)v.displayedToast++,x();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)x()}}else n()}});M.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(E(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):y(o)||g(o)?a=o:r?a=w.spinner():function(e){return e in w}(n)&&(a=w[n](i))),a}(M),E(i.onOpen)&&(M.onOpen=i.onOpen),E(i.onClose)&&(M.onClose=i.onClose),M.closeButton=O.closeButton,!1===i.closeButton||b(i.closeButton)?M.closeButton=i.closeButton:!0===i.closeButton&&(M.closeButton=!b(O.closeButton)||O.closeButton);var P=e;(0,s.isValidElement)(e)&&!y(e.type)?P=(0,s.cloneElement)(e,{closeToast:N,toastProps:M,data:m}):E(e)&&(P=e({closeToast:N,toastProps:M,data:m})),O.limit&&O.limit>0&&v.count>O.limit&&L?v.queue.push({toastContent:P,toastProps:M,staleId:a}):g(r)?setTimeout((function(){k(P,M,a)}),r):k(P,M,a)}}function k(e,t,n){var r=t.toastId;n&&p.delete(n);var o={content:e,props:t};p.set(r,o),c((function(e){return[].concat((0,d.Z)(e),[r]).filter((function(e){return e!==n}))})),_.emit(4,I(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return v.containerId=e.containerId,_.cancelEmit(3).on(0,N).on(1,(function(e){return u.current&&C(e)})).on(5,O).emit(2,v),function(){p.clear(),_.emit(3,v)}}),[]),(0,s.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(p.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){var t=(0,s.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",C),document.addEventListener("touchmove",_),document.addEventListener("touchend",C);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=N(t.nativeEvent),d.y=k(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?I():O()}}function O(){a(!0)}function I(){a(!1)}function _(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&I(),d.x=N(t),d.y=k(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function C(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",C);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),E(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;E(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",O),window.addEventListener("blur",I)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",I))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return m&&v&&(w.onMouseEnter=I,w.onMouseLeave=O),y&&(w.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:O,pauseToast:I,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:w}}function j(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function R(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,u=e.className,f=e.style,d=e.controlledProgress,p=e.progress,v=e.rtl,h=e.isIn,g=e.theme,y=i||d&&0===p,T=l(l({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(T.transform="scaleX(".concat(p,")"));var b=m("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":v}),O=E(u)?u({rtl:v,type:a,defaultClassName:b}):m(b,u);return s.createElement("div",c({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:O,style:T},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){h&&r()}))}var M=function(e){var t=L(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,f=e.onClick,d=e.type,p=e.hideProgressBar,v=e.closeToast,h=e.transition,g=e.position,y=e.className,T=e.style,b=e.bodyClassName,O=e.bodyStyle,I=e.progressClassName,_=e.progressStyle,C=e.updateId,w=e.role,x=e.progress,N=e.rtl,k=e.toastId,M=e.deleteToast,P=e.isIn,Z=e.isLoading,D=e.iconOut,z=e.closeOnClick,B=e.theme,S=m("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":z}),A=E(y)?y({rtl:N,position:g,type:d,defaultClassName:S}):m(S,y),H=!!x||!u,Y={closeToast:v,type:d,theme:B},F=null;return!1===i||(F=E(i)?i(Y):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,Y):j(Y)),s.createElement(h,{isIn:P,done:M,position:g,preventExitTransition:r,nodeRef:o},s.createElement("div",l(l({id:k,onClick:f,className:A},a),{},{style:T,ref:o}),s.createElement("div",l(l({},P&&{role:w}),{},{className:E(b)?b({type:d}):m("Toastify__toast-body",b),style:O}),null!=D&&s.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Z})},D),s.createElement("div",null,c)),F,s.createElement(R,l(l({},C&&!H?{key:"pb-".concat(C)}:{}),{},{rtl:N,theme:B,delay:u,isRunning:n,isIn:P,closeToast:v,hide:p,type:d,style:_,className:I,controlledProgress:H,progress:x||0}))))},P=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},Z=O(P("bounce",!0)),D=(O(P("slide",!0)),O(P("zoom")),O(P("flip")),(0,s.forwardRef)((function(e,t){var n=x(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,f=e.containerId;function d(e){var t=m("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return E(i)?i({position:e,rtl:u,defaultClassName:t}):m(t,T(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:f},r((function(e,t){var n=t.length?l({},c):l(l({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return s.createElement(M,l(l({},o),{},{isIn:a(o.toastId),style:l(l({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:Z,autoClose:5e3,closeButton:j,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var z,B=new Map,S=[],A=1;function H(){return""+A++}function Y(e){return e&&(y(e.toastId)||g(e.toastId))?e.toastId:H()}function F(e,t){return B.size>0?_.emit(0,e,t):S.push({content:e,options:t}),t.toastId}function G(e,t){return l(l({},t),{},{type:t&&t.type||e,toastId:Y(t)})}function Q(e){return function(t,n){return F(t,G(e,n))}}function q(e,t){return F(e,G("default",t))}q.loading=function(e,t){return F(e,G("default",l({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},q.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=y(o)?q.loading(o,n):q.loading(o.render,l(l({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=l(l(l({type:e},s),n),{},{data:o}),i=y(t)?{render:t}:t;return r?q.update(r,l(l({},a),i)):q(i.render,l(l({},a),i)),o}q.dismiss(r)},u=E(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},q.success=Q("success"),q.info=Q("info"),q.error=Q("error"),q.warning=Q("warning"),q.warn=q.warning,q.dark=function(e,t){return F(e,G("default",l({theme:"dark"},t)))},q.dismiss=function(e){B.size>0?_.emit(1,e):S=S.filter((function(t){return null!=e&&t.options.toastId!==e}))},q.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},q.isActive=function(e){var t=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=B.get(n||z);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=l(l(l({delay:100},r),t),{},{toastId:t.toastId||e,updateId:H()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,F(i,a)}}),0)},q.done=function(e){q.update(e,{progress:1})},q.onChange=function(e){return _.on(4,e),function(){_.off(4,e)}},q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_.on(2,(function(e){z=e.containerId||e,B.set(z,e),S.forEach((function(e){_.emit(0,e.content,e.options)})),S=[]})).on(3,(function(e){B.delete(e.containerId||e),0===B.size&&_.off(0).off(1).off(5)}));var U=n(234),W=n(639),J=n(692),V=n(87),K=n(689),X="Movies_input__KrUqs",$="Movies_button__GcIka",ee=n(184),te=function(){var e=(0,V.lr)(),t=(0,o.Z)(e,2),n=t[0],a=t[1],c=n.get("search"),u=(0,K.TH)(),l=(0,s.useState)(""),f=(0,o.Z)(l,2),d=f[0],p=f[1],m=(0,s.useState)([]),v=(0,o.Z)(m,2),h=v[0],g=v[1],y=(0,s.useState)(!1),E=(0,o.Z)(y,2),T=E[0],b=E[1];(0,s.useEffect)((function(){if(c){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,(0,U.z1)(c);case 4:if((t=e.sent).length&&q.info((0,ee.jsxs)("span",{children:["Found movies with name ",c]})),t.length){e.next=8;break}return e.abrupt("return",q.warning("Sorry movie('s) not found...",{}));case 8:g(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,b(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}else b(!1)}),[c]);return(0,ee.jsxs)("div",{children:[(0,ee.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({search:e.target.elements.search.value}),p("")},children:[(0,ee.jsx)("input",{name:"search",type:"text",defaultValue:d,className:X}),(0,ee.jsx)("button",{className:$,type:"submit",children:"Search"})]}),T&&(0,ee.jsx)(W.Z,{}),(0,ee.jsx)("ul",{children:h.map((function(e){return(0,ee.jsx)(V.rU,{to:"/movies/".concat(e.id),state:{from:u},children:(0,ee.jsx)(J.Z,{movie:e})},e.id)}))}),(0,ee.jsx)(D,{hideProgressBar:!0})]})}},234:function(e,t,n){n.d(t,{Df:function(){return d},TP:function(){return m},tx:function(){return y},z1:function(){return l},zv:function(){return h}});var r=n(861),o=n(757),a=n.n(o),i=n(243),s="a1f5b9e9409662faaf8dea1424605128",c="https://api.themoviedb.org/3",u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWY1YjllOTQwOTY2MmZhYWY4ZGVhMTQyNDYwNTEyOCIsInN1YiI6IjY0YWU2YjUwNjZhMGQzMDEzYTc0ZDQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K0sogxs4DauKrsrU3S5qyHUHTsR5OwOW6huAEekTRIc";function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(c,"/search/movie"),params:{query:t},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}},e.prev=1,e.next=4,i.Z.get("".concat(c,"/search/movie"),n);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function d(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"".concat(c,"/trending/all/day"),params:{api_key:s}},e.prev=1,e.next=4,i.Z.get("".concat(c,"/trending/all/day"),t);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(c,"/movie/").concat(t),params:{api_key:s}},e.prev=1,e.next=4,i.Z.get("".concat(c,"/movie/").concat(t),n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(c,"/movie/").concat(t,"/credits"),params:{api_key:s}},e.prev=1,e.next=4,i.Z.get("".concat(c,"/movie/").concat(t,"/credits"),n);case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function y(e){return E.apply(this,arguments)}function E(){return(E=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(c,"/movie/").concat(t,"/reviews"),params:{api_key:s}},e.prev=1,e.next=4,i.Z.get("".concat(c,"/movie/").concat(t,"/reviews"),n);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=985.aac926b5.chunk.js.map