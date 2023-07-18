"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{546:function(e,t,n){n(791);var r=n(184);t.Z=function(e){var t=e.movie;return(0,r.jsx)("div",{children:(0,r.jsx)("h3",{children:t.title})})}},221:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var r=n(861),o=n(439),a=n(757),i=n.n(a),s=n(791),c=n(234);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=n(433);function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var v=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r},h=["theme","type"],g=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},E=function(e){return"string"==typeof e},T=function(e){return"function"==typeof e},b=function(e){return E(e)||T(e)?e:null},O=function(e){return(0,s.isValidElement)(e)||E(e)||T(e)||y(e)};function I(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,a=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,m=o?"".concat(t,"--").concat(a):t,v=o?"".concat(n,"--").concat(a):n,h=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,p.Z)(n)))};(e=t.classList).add.apply(e,(0,p.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,s.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};d||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[d]),s.createElement(s.Fragment,null,r)}}function C(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var w={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},_=function(e){var t=e.theme,n=e.type,r=d(e,h);return s.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},x={info:function(e){return s.createElement(_,f({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(_,f({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(_,f({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(_,f({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,m=function(e){return-1!==i.indexOf(e)},v=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return l.get(e)}}).current;function h(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function I(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function _(){var e=v.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var r=t.delay,a=t.staleId,i=d(t,g);if(O(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var c=i.toastId,p=i.updateId,m=i.data,h=v.props,L=function(){return I(c)},N=null==p;N&&v.count++;var j,R,P=f(f(f({},h),{},{style:h.toastStyle,key:v.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:p,data:m,closeToast:L,isIn:!1,className:b(i.className||h.toastClassName),bodyClassName:b(i.bodyClassName||h.bodyClassName),progressClassName:b(i.progressClassName||h.progressClassName),autoClose:!i.isLoading&&(j=i.autoClose,R=h.autoClose,!1===j||y(j)&&j>0?j:R),deleteToast:function(){var e=C(l.get(c),"removed");l.delete(c),w.emit(4,e);var t=v.queue.length;if(v.count=null==c?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==c?v.props.limit:1;if(1===t||1===r)v.displayedToast++,_();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)_()}}else n()}});P.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(T(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):E(o)||y(o)?a=o:r?a=x.spinner():function(e){return e in x}(n)&&(a=x[n](i))),a}(P),T(i.onOpen)&&(P.onOpen=i.onOpen),T(i.onClose)&&(P.onClose=i.onClose),P.closeButton=h.closeButton,!1===i.closeButton||O(i.closeButton)?P.closeButton=i.closeButton:!0===i.closeButton&&(P.closeButton=!O(h.closeButton)||h.closeButton);var M=e;(0,s.isValidElement)(e)&&!E(e.type)?M=(0,s.cloneElement)(e,{closeToast:L,toastProps:P,data:m}):T(e)&&(M=e({closeToast:L,toastProps:P,data:m})),h.limit&&h.limit>0&&v.count>h.limit&&N?v.queue.push({toastContent:M,toastProps:P,staleId:a}):y(r)?setTimeout((function(){k(M,P,a)}),r):k(M,P,a)}}function k(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,p.Z)(e),[r]).filter((function(e){return e!==n}))})),w.emit(4,C(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return v.containerId=e.containerId,w.cancelEmit(3).on(0,L).on(1,(function(e){return u.current&&I(e)})).on(5,h).emit(2,v),function(){l.clear(),w.emit(3,v)}}),[]),(0,s.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function j(e){var t=(0,s.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",w),document.addEventListener("touchmove",C),document.addEventListener("touchend",w);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=k(t.nativeEvent),d.y=N(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?I():O()}}function O(){a(!0)}function I(){a(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&I(),d.x=k(t),d.y=N(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function w(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",w);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),T(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;T(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",O),window.addEventListener("blur",I)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",I))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&v&&(_.onMouseEnter=I,_.onMouseLeave=O),y&&(_.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:O,pauseToast:I,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:_}}function R(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,c=e.className,l=e.style,d=e.controlledProgress,p=e.progress,m=e.rtl,h=e.isIn,g=e.theme,y=i||d&&0===p,E=f(f({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(E.transform="scaleX(".concat(p,")"));var b=v("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),O=T(c)?c({rtl:m,type:a,defaultClassName:b}):v(b,c);return s.createElement("div",u({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:O,style:E},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){h&&r()}))}var M=function(e){var t=j(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,d=e.type,p=e.hideProgressBar,m=e.closeToast,h=e.transition,g=e.position,y=e.className,E=e.style,b=e.bodyClassName,O=e.bodyStyle,I=e.progressClassName,C=e.progressStyle,w=e.updateId,_=e.role,x=e.progress,L=e.rtl,k=e.toastId,N=e.deleteToast,M=e.isIn,Z=e.isLoading,D=e.iconOut,z=e.closeOnClick,B=e.theme,S=v("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":z}),A=T(y)?y({rtl:L,position:g,type:d,defaultClassName:S}):v(S,y),Y=!!x||!u,F={closeToast:m,type:d,theme:B},Q=null;return!1===i||(Q=T(i)?i(F):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,F):R(F)),s.createElement(h,{isIn:M,done:N,position:g,preventExitTransition:r,nodeRef:o},s.createElement("div",f(f({id:k,onClick:l,className:A},a),{},{style:E,ref:o}),s.createElement("div",f(f({},M&&{role:_}),{},{className:T(b)?b({type:d}):v("Toastify__toast-body",b),style:O}),null!=D&&s.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Z})},D),s.createElement("div",null,c)),Q,s.createElement(P,f(f({},w&&!Y?{key:"pb-".concat(w)}:{}),{},{rtl:L,theme:B,delay:u,isRunning:n,isIn:M,closeToast:m,hide:p,type:d,style:C,className:I,controlledProgress:Y,progress:x||0}))))},Z=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},D=I(Z("bounce",!0)),z=(I(Z("slide",!0)),I(Z("zoom")),I(Z("flip")),(0,s.forwardRef)((function(e,t){var n=L(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,l=e.containerId;function d(e){var t=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return T(i)?i({position:e,rtl:u,defaultClassName:t}):v(t,b(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return s.createElement(M,f(f({},o),{},{isIn:a(o.toastId),style:f(f({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));z.displayName="ToastContainer",z.defaultProps={position:"top-right",transition:D,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var B,S=new Map,A=[],Y=1;function F(){return""+Y++}function Q(e){return e&&(E(e.toastId)||y(e.toastId))?e.toastId:F()}function G(e,t){return S.size>0?w.emit(0,e,t):A.push({content:e,options:t}),t.toastId}function H(e,t){return f(f({},t),{},{type:t&&t.type||e,toastId:Q(t)})}function q(e){return function(t,n){return G(t,H(e,n))}}function W(e,t){return G(e,H("default",t))}W.loading=function(e,t){return G(e,H("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=E(o)?W.loading(o,n):W.loading(o.render,f(f({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=f(f(f({type:e},s),n),{},{data:o}),i=E(t)?{render:t}:t;return r?W.update(r,f(f({},a),i)):W(i.render,f(f({},a),i)),o}W.dismiss(r)},u=T(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},W.success=q("success"),W.info=q("info"),W.error=q("error"),W.warning=q("warning"),W.warn=W.warning,W.dark=function(e,t){return G(e,H("default",f({theme:"dark"},t)))},W.dismiss=function(e){S.size>0?w.emit(1,e):A=A.filter((function(t){return null!=e&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),w.emit(5,e)},W.isActive=function(e){var t=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=S.get(n||B);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=f(f(f({delay:100},r),t),{},{toastId:t.toastId||e,updateId:F()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,G(i,a)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return w.on(4,e),function(){w.off(4,e)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,(function(e){B=e.containerId||e,S.set(B,e),A.forEach((function(e){w.emit(0,e.content,e.options)})),A=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&w.off(0).off(1).off(5)}));var J=n(639),U=n(546),V=n(87),K=n(184),X=function(){var e=(0,s.useState)(""),t=(0,o.Z)(e,2),n=t[0],a=t[1],u=(0,s.useState)([]),l=(0,o.Z)(u,2),f=l[0],d=l[1],p=(0,s.useState)(!1),m=(0,o.Z)(p,2),v=m[0],h=m[1];(0,s.useEffect)((function(){if(n){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,c.z1)(n);case 4:if((t=e.sent).length&&W.info((0,K.jsxs)("span",{children:["Found movies with name ",n]})),t.length){e.next=8;break}return e.abrupt("return",W.warning("Sorry movie('s) not found...",{}));case 8:d(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,h(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}else h(!1)}),[n]);return(0,K.jsxs)("div",{children:[(0,K.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(e.target.elements.search.value)},children:[(0,K.jsx)("input",{name:"search",type:"text",defaultValue:n}),(0,K.jsx)("button",{type:"submit",children:"Search"})]}),v&&(0,K.jsx)(J.Z,{}),(0,K.jsx)("ul",{children:f.map((function(e){return(0,K.jsx)(V.rU,{to:"/movies/".concat(e.id),children:(0,K.jsx)(U.Z,{movie:e})},e.id)}))})]})}},234:function(e,t,n){n.d(t,{Df:function(){return d},TP:function(){return m},tx:function(){return y},z1:function(){return l},zv:function(){return h}});var r=n(861),o=n(757),a=n.n(o),i=n(243),s="a1f5b9e9409662faaf8dea1424605128",c="https://api.themoviedb.org/3",u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWY1YjllOTQwOTY2MmZhYWY4ZGVhMTQyNDYwNTEyOCIsInN1YiI6IjY0YWU2YjUwNjZhMGQzMDEzYTc0ZDQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K0sogxs4DauKrsrU3S5qyHUHTsR5OwOW6huAEekTRIc";function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(c,"/search/movie"),params:{query:t},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}},e.prev=1,e.next=4,i.Z.get("".concat(c,"/search/movie"),n);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function d(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"".concat(c,"/trending/all/day"),params:{api_key:s}},e.prev=1,e.next=4,i.Z.get("".concat(c,"/trending/all/day"),t);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(c,"/movie/").concat(t),params:{api_key:s}},e.prev=1,e.next=4,i.Z.get("".concat(c,"/movie/").concat(t),n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(c,"/movie/").concat(t,"/credits"),params:{api_key:s}},e.prev=1,e.next=4,i.Z.get("".concat(c,"/movie/").concat(t,"/credits"),n);case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function y(e){return E.apply(this,arguments)}function E(){return(E=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"".concat(c,"/movie/").concat(t,"/reviews"),params:{api_key:s}},e.prev=1,e.next=4,i.Z.get("".concat(c,"/movie/").concat(t,"/reviews"),n);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Error getting movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=221.4e18ab42.chunk.js.map