"use strict";var j=function(v,e){return function(){try{return e||v((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var g=j(function(k,h){
var c=require('@stdlib/array-base-resolve-getter/dist'),q=require('@stdlib/array-base-copy/dist');function l(v,e){var t,u,a,f,o,n,i,p,s,r;if(i=v.length,i<1)return[];if(u=q(v),p=u[0].length,p<1)return[];for(t=[],f=c(e),a=[],r=0;r<i;r++)t.push(c(u[r])),a.push(f(e,r));for(o=[],s=0;s<p;s++){for(n={},r=0;r<i;r++)n[a[r]]=t[r](u[r],s);o.push(n)}return o}h.exports=l
});var x=g();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
