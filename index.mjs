// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";function e(e,t){var s,n,f,o,u,h,i,a,l;if((h=e.length)<1)return[];if((i=e[0].length)<1)return[];for(s=[],f=r(t),n=[],l=0;l<h;l++)s.push(r(e[l])),n.push(f(t,l));for(o=[],a=0;a<i;a++){for(u={},l=0;l<h;l++)u[n[l]]=s[l](e[l],a);o.push(u)}return o}export{e as default};
//# sourceMappingURL=index.mjs.map
