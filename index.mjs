// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy@v0.2.2-esm/index.mjs";function t(t,s){var n,i,o,a,d,f,h,p,l,m;if((h=t.length)<1)return[];if((p=(i=e(t))[0].length)<1)return[];for(n=[],a=r(s),o=[],m=0;m<h;m++)n.push(r(i[m])),o.push(a(s,m));for(d=[],l=0;l<p;l++){for(f={},m=0;m<h;m++)f[o[m]]=n[m](i[m],l);d.push(f)}return d}export{t as default};
//# sourceMappingURL=index.mjs.map
