var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,o)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,__spreadValues=(e,t)=>{for(var o in t||(t={}))__hasOwnProp.call(t,o)&&__defNormalProp(e,o,t[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(t))__propIsEnum.call(t,o)&&__defNormalProp(e,o,t[o]);return e},__spreadProps=(e,t)=>__defProps(e,__getOwnPropDescs(t));!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueCollapseIt={},e.Vue)}(this,(function(e,t){"use strict";const o={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:(4-2*e)*e-1,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},a={directive:"collapse",collapsed:!1,speed:300,ease:"easeInOutCubic"},l=(()=>{const e=new WeakMap,l=(e,t,o)=>e+(t-e)*o,i=(t,a,n)=>{const d=e.get(t),r=performance.now()-d.startTime,s=Math.min(o[n](r/a),1);t.style.height=`${Math.min(Math.max(l(d.oldHeight,d.endValue,s),0),d.oldHeight)}px`,t.style.paddingTop=`${Math.min(Math.max(l(d.oldPaddingTop,d.endValue,s),0),d.oldPaddingTop)}px`,t.style.paddingBottom=`${Math.min(Math.max(l(d.oldPaddingBottom,d.endValue,s),0),d.oldPaddingBottom)}px`,t.style.marginTop=`${Math.min(Math.max(l(d.oldMarginTop,d.endValue,s),0),d.oldMarginTop)}px`,t.style.marginBottom=`${Math.min(Math.max(l(d.oldMarginBottom,d.endValue,s),0),d.oldMarginBottom)}px`,t.style.overflow="hidden",s<1?requestAnimationFrame((()=>i(t,a,n))):(d.endTime=performance.now(),t.style.display=d.oldDisplay)},n=(t,a,i)=>{const d=e.get(t),r=performance.now()-d.startTime,s=Math.min(o[i](r/a),1);"none"===d.oldDisplay&&(t.style.display="block"),t.style.height=`${Math.min(Math.max(l(d.endValue,d.oldHeight,s),0),d.oldHeight)}px`,t.style.paddingTop=`${Math.min(Math.max(l(d.endValue,d.oldPaddingTop,s),0),d.oldPaddingTop)}px`,t.style.paddingBottom=`${Math.min(Math.max(l(d.endValue,d.oldPaddingBottom,s),0),d.oldPaddingBottom)}px`,t.style.marginTop=`${Math.min(Math.max(l(d.endValue,d.oldMarginTop,s),0),d.oldMarginTop)}px`,t.style.marginBottom=`${Math.min(Math.max(l(d.endValue,d.oldMarginBottom,s),0),d.oldMarginBottom)}px`,t.style.overflow="hidden",s<1?requestAnimationFrame((()=>n(t,a,i))):(d.endTime=performance.now(),t.style.overflow=d.oldOverflow)};function d(t,o,l){var d,r,s;const p="boolean"==typeof o.value?o.value:(null==(d=o.value)?void 0:d.collapsed)||a.collapsed,u=l?0:(null==(r=o.value)?void 0:r.speed)||a.speed,m=(null==(s=o.value)?void 0:s.ease)||a.ease;p?(e.set(t,__spreadProps(__spreadValues({},e.get(t)),{startTime:performance.now()})),requestAnimationFrame((()=>i(t,u,m)))):(e.set(t,__spreadProps(__spreadValues({},e.get(t)),{startTime:performance.now()})),requestAnimationFrame((()=>n(t,u,m))))}return{mounted(o,a){t.nextTick((()=>{const t={el:o,startValue:o.getBoundingClientRect().height,endValue:0,startTime:0,endTime:0,oldPaddingTop:parseFloat(getComputedStyle(o).getPropertyValue("padding-top")),oldPaddingBottom:parseFloat(getComputedStyle(o).getPropertyValue("padding-bottom")),oldMarginTop:parseFloat(getComputedStyle(o).getPropertyValue("margin-top")),oldMarginBottom:parseFloat(getComputedStyle(o).getPropertyValue("margin-top")),oldDisplay:getComputedStyle(o).getPropertyValue("display"),oldOverflow:getComputedStyle(o).getPropertyValue("overflow"),oldPosition:getComputedStyle(o).getPropertyValue("position"),oldVisibility:getComputedStyle(o).getPropertyValue("visibility"),oldHeight:0};"none"===t.oldDisplay?(o.style.display="block",o.style.position="absolute",o.style.visibility="hidden",t.oldHeight=o.getBoundingClientRect().height,o.style.display=t.oldDisplay,o.style.position=t.oldPosition,o.style.visibility=t.oldVisibility):t.oldHeight=o.getBoundingClientRect().height,e.set(o,t),d(o,a,!0)}))},updated(e,o){if("boolean"==typeof o.value){if(o.value===o.oldValue)return}else if(o.value.collapsed===o.oldValue.collapsed)return;t.nextTick((()=>{d(e,o)}))},unmounted(t){e.delete(t)}}})(),i={install(e,t){(null==t?void 0:t.collapsed)&&(a.collapsed=t.collapsed),(null==t?void 0:t.speed)&&(a.speed=t.speed),(null==t?void 0:t.ease)&&(a.ease=t.ease),e.directive((null==t?void 0:t.directive)||a.directive,l)}};e.VCollapseIt=l,e.default=i,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
