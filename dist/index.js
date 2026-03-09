"use strict";var j=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var g=j(function(k,h){
var c=require('@stdlib/array-base-resolve-getter/dist'),q=require('@stdlib/array-base-copy/dist');function l(t,e){var s,v,a,f,o,n,u,p,i,r;if(u=t.length,u<1)return[];if(v=q(t),p=v[0].length,p<1)return[];for(s=[],f=c(e),a=[],r=0;r<u;r++)s.push(c(v[r])),a.push(f(e,r));for(o=[],i=0;i<p;i++){for(n={},r=0;r<u;r++)n[a[r]]=s[r](v[r],i);o.push(n)}return o}h.exports=l
});var x=g();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
