"use strict";var g=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var c=g(function(b,h){
var a=require('@stdlib/array-base-resolve-getter/dist');function j(t,e){var i,o,p,s,n,u,f,v,r;if(u=t.length,u<1)return[];if(f=t[0].length,f<1)return[];for(i=[],p=a(e),o=[],r=0;r<u;r++)i.push(a(t[r])),o.push(p(e,r));for(s=[],v=0;v<f;v++){for(n={},r=0;r<u;r++)n[o[r]]=i[r](t[r],v);s.push(n)}return s}h.exports=j
});var q=c();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
