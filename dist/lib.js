!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.lib=n():e.lib=n()}(this,function(){return function(e){function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),o=function(){function e(n){var t=this;i(this,e),this.currnet=null,this.mql=[],this.glbSegment={min:!0,max:!1},this.config=n,this.fnList={},"max"in n&&(this.glbSegment.max=n.max,delete n.max),"min"in n&&(this.glbSegment.min=n.min,delete n.min),Object.keys(n).forEach(function(e){"max"in n[e]||(n[e].max=t.glbSegment.max),"min"in n[e]||(n[e].min=t.glbSegment.min)}),0 in n?n[0].min=!0:n[0]={min:!0},this.build(n)}return r(e,[{key:"build",value:function(e){var n=this,t=Object.keys(e);this.mql=t.sort(function(e,n){return e-n}).reduce(function(i,r,o){var u=null;if(o!==t.length-1){u="(min-width: "+n.getBreakpoint(r,"min",e[r].min)+"px) and (max-width: "+n.getBreakpoint(t[o+1],"max",e[t[o+1]].max)+"px)"}else{u="(min-width: "+n.getBreakpoint(r,"min",e[r].min)+"px)"}return i.push(window.matchMedia(u)),i[o].matches&&(n.currnet=r),n.fnList[r]=function(t){t.matches&&("out"in e[n.currnet]&&e[n.currnet].out(),"in"in e[r]&&e[r].in(),n.currnet=r)},i[o].addListener(n.fnList[r]),i},[])}},{key:"getBreakpoint",value:function(e,n,t){return"min"===n?t?+e:+e+1:t?+e:+e-1}},{key:"destroy",value:function(){var e=this;console.log(Object.keys(this.config)),Object.keys(this.config).forEach(function(n){console.log("this.mql",e.mql[n]),e.mql[n].removeListener(e.fnList[n])})}}]),e}();n.default=o}]).default});