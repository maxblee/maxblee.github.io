!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function i(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e){return null==e?"":e}function c(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function s(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function _(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function f(e){return document.createTextNode(e)}function g(){return f(" ")}function b(){return f("")}function h(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t,n){const l=new Set;for(let t=0;t<e.length;t+=1)e[t].checked&&l.add(e[t].__value);return n||l.delete(t),Array.from(l)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function w(e,t){e.value=null==t?"":t}function y(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}}let x;function $(e){x=e}function k(){if(!x)throw new Error("Function called outside component initialization");return x}const C=[],A=[],O=[],S=[],M=Promise.resolve();let j=!1;function E(e){O.push(e)}let R=!1;const q=new Set;function I(){if(!R){R=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];$(t),W(t.$$)}for($(null),C.length=0;A.length;)A.pop()();for(let e=0;e<O.length;e+=1){const t=O[e];q.has(t)||(q.add(t),t())}O.length=0}while(C.length);for(;S.length;)S.pop()();j=!1,R=!1,q.clear()}}function W(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const L=new Set;let N;function U(e,t){e&&e.i&&(L.delete(e),e.i(t))}function D(e,t){const n=t.token={};function i(e,i,r,o){if(t.token!==n)return;t.resolved=o;let c=t.ctx;void 0!==r&&(c=c.slice(),c[r]=o);const a=e&&(t.current=e)(c);let u=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==i&&e&&(N={r:0,c:[],p:N},function(e,t,n,l){if(e&&e.o){if(L.has(e))return;L.add(e),N.c.push((()=>{L.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}}(e,1,1,(()=>{t.blocks[n]=null})),N.r||l(N.c),N=N.p)})):t.block.d(1),a.c(),U(a,1),a.m(t.mount(),t.anchor),u=!0),t.block=a,t.blocks&&(t.blocks[i]=a),u&&I()}if((r=e)&&"object"==typeof r&&"function"==typeof r.then){const n=k();if(e.then((e=>{$(n),i(t.then,1,t.value,e),$(null)}),(e=>{if($(n),i(t.catch,2,t.error,e),$(null),!t.hasCatch)throw e})),t.current!==t.pending)return i(t.pending,0),!0}else{if(t.current!==t.then)return i(t.then,1,t.value,e),!0;t.resolved=e}var r}function T(e,t){-1===e.$$.dirty[0]&&(C.push(e),j||(j=!0,M.then(I)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(r,o,c,a,s,d,_=[-1]){const f=x;$(r);const g=o.props||{},b=r.$$={fragment:null,ctx:null,props:d,update:e,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:_,skip_bound:!1};let h=!1;if(b.ctx=c?c(r,g,((e,t,...n)=>{const l=n.length?n[0]:t;return b.ctx&&s(b.ctx[e],b.ctx[e]=l)&&(!b.skip_bound&&b.bound[e]&&b.bound[e](l),h&&T(r,e)),t})):[],b.update(),h=!0,l(b.before_update),b.fragment=!!a&&a(b.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);b.fragment&&b.fragment.l(e),e.forEach(u)}else b.fragment&&b.fragment.c();o.intro&&U(r.$$.fragment),function(e,n,r){const{fragment:o,on_mount:c,on_destroy:a,after_update:u}=e.$$;o&&o.m(n,r),E((()=>{const n=c.map(t).filter(i);a?a.push(...n):l(n),e.$$.on_mount=[]})),u.forEach(E)}(r,o.target,o.anchor),I()}$(f)}var F=function(e){if(""===e)return"''";return/[^\w@%\-+=:,./]/.test(e)?"'"+e.replace(/'/g,"'\"'\"'")+"'":e};function H(e,t,n){const l=e.slice();return l[71]=t[n],l}function P(e,t,n){const l=e.slice();return l[65]=t[n],l}function z(e,t,n){const l=e.slice();return l[68]=t[n],l}function J(e,t,n){const l=e.slice();return l[62]=t[n],l[64]=n,l}function V(e,t,n){const l=e.slice();return l[59]=t[n],l[61]=n,l}function Q(e,t,n){const l=e.slice();return l[68]=t[n],l}function Y(e,t,n){const l=e.slice();return l[68]=t[n],l}function G(e,t,n){const l=e.slice();return l[78]=t[n],l[80]=n,l}function K(e,t,n){const l=e.slice();return l[78]=t[n],l[80]=n,l}function X(e,t,n){const l=e.slice();return l[78]=t[n],l[80]=n,l}function Z(e,t,n){const l=e.slice();return l[83]=t[n],l}function ee(e){let t,n,l,i=e[83].name+"";return{c(){t=d("option"),n=f(i),t.__value=l=e[83].value,t.value=t.__value},m(e,l){a(e,t,l),c(t,n)},p(e,r){64&r[0]&&i!==(i=e[83].name+"")&&m(n,i),64&r[0]&&l!==(l=e[83].value)&&(t.__value=l,t.value=t.__value)},d(e){e&&u(t)}}}function te(e){let t,n,l,i,r,o,s;return{c(){t=d("label"),n=f("Date Format\n\t\t\t"),l=d("p"),l.innerHTML='Select a date format conforming to <a href="https://docs.rs/chrono/0.4.9/chrono/format/strftime/index.html">these specifications.</a>',i=g(),r=d("input"),p(l,"class","help"),p(t,"class","svelte-geiib9")},m(u,d){a(u,t,d),c(t,n),c(t,l),c(t,i),c(t,r),w(r,e[8]),o||(s=h(r,"input",e[35]),o=!0)},p(e,t){256&t[0]&&r.value!==e[8]&&w(r,e[8])},d(e){e&&u(t),o=!1,s()}}}function ne(e){let t,n,l,i,r,o,_,f,b,h,v,m,w,y,x,$,k,C,A,O,S,M=e[10],j=[];for(let t=0;t<M.length;t+=1)j[t]=le(X(e,M,t));let E=e[10],R=[];for(let t=0;t<E.length;t+=1)R[t]=ie(K(e,E,t));let q=e[10],I=[];for(let t=0;t<q.length;t+=1)I[t]=re(G(e,q,t));return{c(){t=d("div"),n=d("div"),l=d("fieldset"),i=d("legend"),i.textContent="Rows",r=g(),o=d("p"),o.textContent="Which columns do you want to serve as the rows for your pivot table?",_=g();for(let e=0;e<j.length;e+=1)j[e].c();f=g(),b=d("div"),h=d("fieldset"),v=d("legend"),v.textContent="Columns",m=g(),w=d("p"),w.textContent="Which columns do you want to serve as the columns for your pivot table",y=g();for(let e=0;e<R.length;e+=1)R[e].c();x=g(),$=d("div"),k=d("fieldset"),C=d("legend"),C.textContent="Value",A=g(),O=d("p"),O.textContent="Which column do you want to aggregate values over?",S=g();for(let e=0;e<I.length;e+=1)I[e].c();p(o,"class","help"),p(l,"class","svelte-geiib9"),p(n,"class","pivot-field svelte-geiib9"),p(w,"class","help"),p(h,"class","svelte-geiib9"),p(b,"class","pivot-field svelte-geiib9"),p(O,"class","help"),p(k,"class","svelte-geiib9"),p($,"class","pivot-field svelte-geiib9"),p(t,"class","header-section svelte-geiib9")},m(e,u){a(e,t,u),c(t,n),c(n,l),c(l,i),c(l,r),c(l,o),c(l,_);for(let e=0;e<j.length;e+=1)j[e].m(l,null);c(t,f),c(t,b),c(b,h),c(h,v),c(h,m),c(h,w),c(h,y);for(let e=0;e<R.length;e+=1)R[e].m(h,null);c(t,x),c(t,$),c($,k),c(k,C),c(k,A),c(k,O),c(k,S);for(let e=0;e<I.length;e+=1)I[e].m(k,null)},p(e,t){if(9224&t[0]){let n;for(M=e[10],n=0;n<M.length;n+=1){const i=X(e,M,n);j[n]?j[n].p(i,t):(j[n]=le(i),j[n].c(),j[n].m(l,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=M.length}if(5128&t[0]){let n;for(E=e[10],n=0;n<E.length;n+=1){const l=K(e,E,n);R[n]?R[n].p(l,t):(R[n]=ie(l),R[n].c(),R[n].m(h,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=E.length}if(17416&t[0]){let n;for(q=e[10],n=0;n<q.length;n+=1){const l=G(e,q,n);I[n]?I[n].p(l,t):(I[n]=re(l),I[n].c(),I[n].m(k,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=q.length}},d(e){e&&u(t),s(j,e),s(R,e),s(I,e)}}}function le(e){let t,n,l,i,r,o,s,_,b=(e[3]?e[78]:"Column "+e[80])+"";return{c(){t=d("label"),n=d("input"),i=g(),r=f(b),o=g(),p(n,"type","checkbox"),n.__value=l=e[80],n.value=n.__value,e[25][1].push(n),p(t,"class","svelte-geiib9")},m(l,u){a(l,t,u),c(t,n),n.checked=~e[13].indexOf(n.__value),c(t,i),c(t,r),c(t,o),s||(_=h(n,"change",e[40]),s=!0)},p(e,t){8192&t[0]&&(n.checked=~e[13].indexOf(n.__value)),1032&t[0]&&b!==(b=(e[3]?e[78]:"Column "+e[80])+"")&&m(r,b)},d(l){l&&u(t),e[25][1].splice(e[25][1].indexOf(n),1),s=!1,_()}}}function ie(e){let t,n,l,i,r,o,s,_,b=(e[3]?e[78]:"Column "+e[80])+"";return{c(){t=d("label"),n=d("input"),i=g(),r=f(b),o=g(),p(n,"type","checkbox"),n.__value=l=e[80],n.value=n.__value,e[25][0].push(n),p(t,"class","svelte-geiib9")},m(l,u){a(l,t,u),c(t,n),n.checked=~e[12].indexOf(n.__value),c(t,i),c(t,r),c(t,o),s||(_=h(n,"change",e[41]),s=!0)},p(e,t){4096&t[0]&&(n.checked=~e[12].indexOf(n.__value)),1032&t[0]&&b!==(b=(e[3]?e[78]:"Column "+e[80])+"")&&m(r,b)},d(l){l&&u(t),e[25][0].splice(e[25][0].indexOf(n),1),s=!1,_()}}}function re(e){let t,n,l,i,r,o,s,_,b=(e[3]?e[78]:"Column "+e[80])+"";return{c(){t=d("label"),n=d("input"),i=g(),r=f(b),o=g(),p(n,"type","radio"),n.__value=l=e[80],n.value=n.__value,e[25][5].push(n),p(t,"class","svelte-geiib9")},m(l,u){a(l,t,u),c(t,n),n.checked=n.__value===e[14],c(t,i),c(t,r),c(t,o),s||(_=h(n,"change",e[42]),s=!0)},p(e,t){16384&t[0]&&(n.checked=n.__value===e[14]),1032&t[0]&&b!==(b=(e[3]?e[78]:"Column "+e[80])+"")&&m(r,b)},d(l){l&&u(t),e[25][5].splice(e[25][5].indexOf(n),1),s=!1,_()}}}function oe(e){let t,n,l,i,r;return{c(){t=d("pre"),n=d("code"),l=d("b"),l.textContent="Error:",i=f(" "),r=f(e[11]),p(n,"class","svelte-geiib9"),p(t,"class","inline-highlight svelte-geiib9")},m(e,o){a(e,t,o),c(t,n),c(n,l),c(n,i),c(n,r)},p(e,t){2048&t[0]&&m(r,e[11])},d(e){e&&u(t)}}}function ce(e){let t,n,l={ctx:e,current:null,token:null,hasCatch:!1,pending:ye,then:ue,catch:ae,value:58};return D(n=e[15],l),{c(){t=b(),l.block.c()},m(e,n){a(e,t,n),l.block.m(e,l.anchor=n),l.mount=()=>t.parentNode,l.anchor=t},p(t,i){if(e=t,l.ctx=e,32768&i[0]&&n!==(n=e[15])&&D(n,l));else{const t=e.slice();t[58]=l.resolved,l.block.p(t,i)}},d(e){e&&u(t),l.block.d(e),l.token=null,l=null}}}function ae(t){return{c:e,m:e,p:e,d:e}}function ue(e){let t,n,l,i,r,o,_,b,h,v=e[17]>=2&&se(e),m=e[58].data,w=[];for(let t=0;t<m.length;t+=1)w[t]=we(V(e,m,t));return{c(){t=d("div"),n=d("button"),l=d("a"),i=f("Download Results"),o=g(),_=d("div"),b=d("table"),v&&v.c(),h=g();for(let e=0;e<w.length;e+=1)w[e].c();p(l,"href",r=e[58].csvHref),p(l,"download","pivot-table-download.csv"),p(n,"type","button"),p(t,"class","download-link"),p(_,"class","data-table")},m(e,r){a(e,t,r),c(t,n),c(n,l),c(l,i),a(e,o,r),a(e,_,r),c(_,b),v&&v.m(b,null),c(b,h);for(let e=0;e<w.length;e+=1)w[e].m(b,null)},p(e,t){if(32768&t[0]&&r!==(r=e[58].csvHref)&&p(l,"href",r),e[17]>=2?v?v.p(e,t):(v=se(e),v.c(),v.m(b,h)):v&&(v.d(1),v=null),229376&t[0]){let n;for(m=e[58].data,n=0;n<m.length;n+=1){const l=V(e,m,n);w[n]?w[n].p(l,t):(w[n]=we(l),w[n].c(),w[n].m(b,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=m.length}},d(e){e&&u(t),e&&u(o),e&&u(_),v&&v.d(),s(w,e)}}}function se(e){let t,n,l=[...Array(Math.max(e[16]-1,0)).keys()],i=[];for(let t=0;t<l.length;t+=1)i[t]=de(Y(e,l,t));let r=e[58].data[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=_e(Q(e,r,t));return{c(){t=d("tr");for(let e=0;e<i.length;e+=1)i[e].c();n=g();for(let e=0;e<o.length;e+=1)o[e].c()},m(e,l){a(e,t,l);for(let e=0;e<i.length;e+=1)i[e].m(t,null);c(t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,c){if(65536&c[0]){const r=l.length;let o;for(l=[...Array(Math.max(e[16]-1,0)).keys()],o=r;o<l.length;o+=1){Y(e,l,o);i[o]||(i[o]=de(),i[o].c(),i[o].m(t,n))}for(o=l.length;o<r;o+=1)i[o].d(1);i.length=l.length}if(163840&c[0]){let n;for(r=e[58].data[0],n=0;n<r.length;n+=1){const l=Q(e,r,n);o[n]?o[n].p(l,c):(o[n]=_e(l),o[n].c(),o[n].m(t,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=r.length}},d(e){e&&u(t),s(i,e),s(o,e)}}}function de(e){let t;return{c(){t=d("th"),p(t,"class","svelte-geiib9")},m(e,n){a(e,t,n)},d(e){e&&u(t)}}}function _e(e){let t;return{c(){t=d("th"),p(t,"colspan",e[17]),p(t,"scope","colgroup"),p(t,"class","svelte-geiib9")},m(e,n){a(e,t,n)},p(e,n){131072&n[0]&&p(t,"colspan",e[17])},d(e){e&&u(t)}}}function fe(e){let t,n,l,i=e[62]+"";return{c(){t=d("td"),n=f(i),p(t,"colspan",e[17]),p(t,"class",l=o(e[64]%2==0?"even-col":"odd-col")+" svelte-geiib9")},m(e,l){a(e,t,l),c(t,n)},p(e,l){32768&l[0]&&i!==(i=e[62]+"")&&m(n,i),131072&l[0]&&p(t,"colspan",e[17])},d(e){e&&u(t)}}}function ge(e){let t,n=e[62].split("_<sep>_"),l=[];for(let t=0;t<n.length;t+=1)l[t]=he(H(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=b()},m(e,n){for(let t=0;t<l.length;t+=1)l[t].m(e,n);a(e,t,n)},p(e,i){if(32768&i[0]){let r;for(n=e[62].split("_<sep>_"),r=0;r<n.length;r+=1){const o=H(e,n,r);l[r]?l[r].p(o,i):(l[r]=he(o),l[r].c(),l[r].m(t.parentNode,t))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(e){s(l,e),e&&u(t)}}}function be(e){let t,n,l=[...Array(Math.max(e[16]-1,0)).keys()],i=[];for(let t=0;t<l.length;t+=1)i[t]=pe(z(e,l,t));let r=e[62].split("_<sep>_"),o=[];for(let t=0;t<r.length;t+=1)o[t]=ve(P(e,r,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=g();for(let e=0;e<o.length;e+=1)o[e].c();n=b()},m(e,l){for(let t=0;t<i.length;t+=1)i[t].m(e,l);a(e,t,l);for(let t=0;t<o.length;t+=1)o[t].m(e,l);a(e,n,l)},p(e,c){if(65536&c[0]){const n=l.length;let r;for(l=[...Array(Math.max(e[16]-1,0)).keys()],r=n;r<l.length;r+=1){z(e,l,r);i[r]||(i[r]=pe(),i[r].c(),i[r].m(t.parentNode,t))}for(r=l.length;r<n;r+=1)i[r].d(1);i.length=l.length}if(32768&c[0]){let t;for(r=e[62].split("_<sep>_"),t=0;t<r.length;t+=1){const l=P(e,r,t);o[t]?o[t].p(l,c):(o[t]=ve(l),o[t].c(),o[t].m(n.parentNode,n))}for(;t<o.length;t+=1)o[t].d(1);o.length=r.length}},d(e){s(i,e),e&&u(t),s(o,e),e&&u(n)}}}function he(e){let t,n,l,i=e[71]+"";return{c(){t=d("th"),n=f(i),p(t,"scope","row"),p(t,"class",l=o(e[64]%2==0?"even-col":"odd-col")+" svelte-geiib9")},m(e,l){a(e,t,l),c(t,n)},p(e,t){32768&t[0]&&i!==(i=e[71]+"")&&m(n,i)},d(e){e&&u(t)}}}function pe(e){let t;return{c(){t=d("th"),p(t,"class","svelte-geiib9")},m(e,n){a(e,t,n)},d(e){e&&u(t)}}}function ve(e){let t,n,l,i=e[65]+"";return{c(){t=d("th"),n=f(i),p(t,"scope","col"),p(t,"class",l=o(e[64]%2==0?"even-col":"odd-col")+" svelte-geiib9")},m(e,l){a(e,t,l),c(t,n)},p(e,t){32768&t[0]&&i!==(i=e[65]+"")&&m(n,i)},d(e){e&&u(t)}}}function me(e){let t;let n=function(e,t){return 0===e[61]?be:0===e[64]?ge:fe}(e)(e);return{c(){n.c(),t=b()},m(e,l){n.m(e,l),a(e,t,l)},p(e,t){n.p(e,t)},d(e){n.d(e),e&&u(t)}}}function we(e){let t,n,l,i=e[59],r=[];for(let t=0;t<i.length;t+=1)r[t]=me(J(e,i,t));return{c(){t=d("tr");for(let e=0;e<r.length;e+=1)r[e].c();n=g(),p(t,"class",l=o(e[61]%2==0?"even-row":"odd-row")+" svelte-geiib9")},m(e,l){a(e,t,l);for(let e=0;e<r.length;e+=1)r[e].m(t,null);c(t,n)},p(e,l){if(229376&l[0]){let o;for(i=e[59],o=0;o<i.length;o+=1){const c=J(e,i,o);r[o]?r[o].p(c,l):(r[o]=me(c),r[o].c(),r[o].m(t,n))}for(;o<r.length;o+=1)r[o].d(1);r.length=i.length}},d(e){e&&u(t),s(r,e)}}}function ye(e){let t,n=e[18]&&xe();return{c(){n&&n.c(),t=b()},m(e,l){n&&n.m(e,l),a(e,t,l)},p(e,l){e[18]?n||(n=xe(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&u(t)}}}function xe(e){let t;return{c(){t=d("div"),t.innerHTML='<div class="loader-icon svelte-geiib9"></div> \n\t\t\t\t<div class="loader svelte-geiib9">Loading…</div>',p(t,"class","loading-container")},m(e,n){a(e,t,n)},d(e){e&&u(t)}}}function $e(t){let n,i,r,o,b,v,x,$,k,C,A,O,S,M,j,R,q,I,W,L,N,U,D,T,B,F,H,P,z,J,V,Q,Y,G,K,X,le,ie,re,ae,ue,se,de,_e,fe,ge,be,he,pe,ve,me,we,ye,xe,$e,ke,Ce,Ae,Oe,Se,Me,je,Ee,Re,qe,Ie,We,Le,Ne,Ue,De,Te,Be,Fe,He,Pe,ze,Je,Ve,Qe,Ye,Ge,Ke,Xe,Ze,et,tt,nt,lt,it,rt,ot,ct,at,ut,st,dt,_t,ft,gt,bt,ht,pt,vt,mt,wt,yt,xt,$t,kt,Ct,At,Ot,St,Mt,jt=t[6],Et=[];for(let e=0;e<jt.length;e+=1)Et[e]=ee(Z(t,jt,e));let Rt="date"===t[5]&&te(t),qt=t[10]&&ne(t),It=t[11]&&oe(t),Wt=t[15]&&ce(t);return{c(){n=d("form"),i=d("div"),r=d("div"),o=d("fieldset"),b=d("legend"),b.textContent="Row Order",v=g(),x=d("p"),x.textContent="How do you want to sort the rows of the pivot table?",$=g(),k=d("div"),C=d("label"),A=d("input"),S=f("\n\t\t\t\t\t\tIndex Order"),M=g(),j=d("label"),R=d("input"),I=f("\n\t\t\t\t\t\tAscending Order"),W=g(),L=d("label"),N=d("input"),D=f("\n\t\t\t\t\t\tDescending Order"),T=g(),B=d("fieldset"),F=d("legend"),F.textContent="Column Order",H=g(),P=d("p"),P.textContent="How do you want to sort the columns of the pivot table?",z=g(),J=d("label"),V=d("input"),Y=f("\n\t\t\t\t\tAscending Order"),G=g(),K=d("label"),X=d("input"),ie=f("\n\t\t\t\t\tDescending Order"),re=g(),ae=d("label"),ue=d("input"),de=f("\n\t\t\t\t\tIndex Order"),_e=g(),fe=d("div"),ge=d("fieldset"),be=d("legend"),be.textContent="Data Type",he=g(),pe=d("p"),pe.textContent="What type of data are you aggregating?",ve=g(),me=d("label"),we=d("input"),xe=f("\n\t\t\t\tText"),$e=g(),ke=d("label"),Ce=d("input"),Oe=f("\n\t\t\t\tNumeric"),Se=g(),Me=d("label"),je=d("input"),Re=f("\n\t\t\t\tDate"),qe=g(),Ie=d("div"),We=d("div"),Le=d("label"),Le.textContent="What aggregation function do you want to use?",Ne=g(),Ue=d("select");for(let e=0;e<Et.length;e+=1)Et[e].c();De=g(),Rt&&Rt.c(),Te=g(),Be=d("div"),Fe=d("div"),He=d("label"),Pe=d("input"),ze=f("\n\t\t\t\t\tIgnore null values in aggregation column"),Je=g(),Ve=d("label"),Qe=d("input"),Ge=f("\n\t\t\t\t\tIgnore the header"),Ke=g(),Xe=d("label"),Ze=d("input"),et=f("\n\t\t\t\t\tDelimiter"),tt=g(),nt=d("div"),lt=d("div"),it=d("label"),it.textContent="Add your file",rt=g(),ot=d("input"),ct=g(),qt&&qt.c(),at=g(),ut=d("div"),st=d("button"),st.textContent="Create pivot table",dt=g(),_t=d("div"),It&&It.c(),ft=g(),gt=d("div"),bt=d("div"),ht=d("pre"),pt=d("code"),vt=f("$ "),mt=f(t[19]),wt=f("\n\t\t\t"),yt=d("div"),xt=_("svg"),$t=_("path"),Ct=g(),At=d("div"),Ot=d("div"),Wt&&Wt.c(),p(x,"class","help"),p(A,"type","radio"),A.__value=O="index",A.value=A.__value,t[25][2].push(A),p(C,"class","svelte-geiib9"),p(R,"type","radio"),R.__value=q="ascending",R.value=R.__value,t[25][2].push(R),p(j,"class","svelte-geiib9"),p(N,"type","radio"),N.__value=U="descending",N.value=N.__value,t[25][2].push(N),p(L,"class","svelte-geiib9"),p(k,"class","radio-fields"),p(o,"class","svelte-geiib9"),p(P,"class","help"),p(V,"type","radio"),V.__value=Q="ascending",V.value=V.__value,t[25][3].push(V),p(J,"class","svelte-geiib9"),p(X,"type","radio"),X.__value=le="descending",X.value=X.__value,t[25][3].push(X),p(K,"class","svelte-geiib9"),p(ue,"type","radio"),ue.__value=se="index",ue.value=ue.__value,t[25][3].push(ue),p(ae,"class","svelte-geiib9"),p(B,"class","svelte-geiib9"),p(r,"class","sorting svelte-geiib9"),p(pe,"class","help"),p(we,"type","radio"),we.__value=ye="text",we.value=we.__value,t[25][4].push(we),p(me,"class","svelte-geiib9"),p(Ce,"type","radio"),Ce.__value=Ae="numeric",Ce.value=Ce.__value,t[25][4].push(Ce),p(ke,"class","svelte-geiib9"),p(je,"type","radio"),je.__value=Ee="date",je.value=je.__value,t[25][4].push(je),p(Me,"class","svelte-geiib9"),p(fe,"class","data-type svelte-geiib9"),p(Le,"for","aggfunc-select"),p(Le,"class","svelte-geiib9"),p(Ue,"id","aggfunc-select"),void 0===t[7]&&E((()=>t[34].call(Ue))),p(We,"class","question-container-inner svelte-geiib9"),p(Ie,"class","question-container svelte-geiib9"),p(Pe,"type","radio"),Pe.checked=t[2],p(He,"class","svelte-geiib9"),p(Qe,"type","radio"),Qe.checked=Ye=!t[3],p(Ve,"class","svelte-geiib9"),p(Ze,"id","delimiter"),p(Ze,"class","svelte-geiib9"),p(Xe,"class","svelte-geiib9"),p(Fe,"class","ignore-handle svelte-geiib9"),p(Be,"class","ignore-handle-container svelte-geiib9"),p(it,"for","file-upload"),p(it,"class","svelte-geiib9"),p(ot,"type","file"),p(ot,"id","file-upload"),p(lt,"class","question-container-inner svelte-geiib9"),p(nt,"class","question-container svelte-geiib9"),p(i,"id","form-container"),p(st,"type","submit"),p(ut,"class","submit-section svelte-geiib9"),p(n,"class","svelte-geiib9"),p(_t,"class","error-panel svelte-geiib9"),p(pt,"class","svelte-geiib9"),p($t,"strokelinecap","round"),p($t,"strokelinejoin","round"),p($t,"strokewidth",kt=2),p($t,"d","M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"),p(xt,"width","25px"),p(xt,"xmlns","http://www.w3.org/2000/svg"),p(xt,"fill","none"),p(xt,"viewBox","0 0 24 24"),p(xt,"stroke","currentColor"),p(xt,"class","svelte-geiib9"),p(yt,"class","copy-icon svelte-geiib9"),p(yt,"aria-label","Copy generated clipivot command to clipboard"),p(ht,"id","clipivot-command"),p(ht,"class","inline-highlight"),p(bt,"class","command-container svelte-geiib9"),p(Ot,"class","table-output svelte-geiib9"),p(At,"class","table-output-container svelte-geiib9"),p(gt,"class","output-container")},m(e,l){a(e,n,l),c(n,i),c(i,r),c(r,o),c(o,b),c(o,v),c(o,x),c(o,$),c(o,k),c(k,C),c(C,A),A.checked=A.__value===t[0],c(C,S),c(k,M),c(k,j),c(j,R),R.checked=R.__value===t[0],c(j,I),c(k,W),c(k,L),c(L,N),N.checked=N.__value===t[0],c(L,D),c(r,T),c(r,B),c(B,F),c(B,H),c(B,P),c(B,z),c(B,J),c(J,V),V.checked=V.__value===t[1],c(J,Y),c(B,G),c(B,K),c(K,X),X.checked=X.__value===t[1],c(K,ie),c(B,re),c(B,ae),c(ae,ue),ue.checked=ue.__value===t[1],c(ae,de),c(i,_e),c(i,fe),c(fe,ge),c(ge,be),c(ge,he),c(ge,pe),c(ge,ve),c(ge,me),c(me,we),we.checked=we.__value===t[5],c(me,xe),c(ge,$e),c(ge,ke),c(ke,Ce),Ce.checked=Ce.__value===t[5],c(ke,Oe),c(ge,Se),c(ge,Me),c(Me,je),je.checked=je.__value===t[5],c(Me,Re),c(i,qe),c(i,Ie),c(Ie,We),c(We,Le),c(We,Ne),c(We,Ue);for(let e=0;e<Et.length;e+=1)Et[e].m(Ue,null);y(Ue,t[7]),c(i,De),Rt&&Rt.m(i,null),c(i,Te),c(i,Be),c(Be,Fe),c(Fe,He),c(He,Pe),c(He,ze),c(Fe,Je),c(Fe,Ve),c(Ve,Qe),c(Ve,Ge),c(Fe,Ke),c(Fe,Xe),c(Xe,Ze),w(Ze,t[4]),c(Xe,et),c(i,tt),c(i,nt),c(nt,lt),c(lt,it),c(lt,rt),c(lt,ot),c(i,ct),qt&&qt.m(i,null),c(n,at),c(n,ut),c(ut,st),a(e,dt,l),a(e,_t,l),It&&It.m(_t,null),a(e,ft,l),a(e,gt,l),c(gt,bt),c(bt,ht),c(ht,pt),c(pt,vt),c(pt,mt),c(ht,wt),c(ht,yt),c(yt,xt),c(xt,$t),c(gt,Ct),c(gt,At),c(At,Ot),Wt&&Wt.m(Ot,null),St||(Mt=[h(A,"change",t[24]),h(R,"change",t[26]),h(N,"change",t[27]),h(V,"change",t[28]),h(X,"change",t[29]),h(ue,"change",t[30]),h(we,"change",t[31]),h(Ce,"change",t[32]),h(je,"change",t[33]),h(Ue,"change",t[34]),h(Pe,"click",t[36]),h(Qe,"click",t[37]),h(Ze,"input",t[38]),h(ot,"change",t[39]),h(ot,"change",t[20]),h(st,"click",t[22]),h(xt,"click",t[21])],St=!0)},p(e,t){if(1&t[0]&&(A.checked=A.__value===e[0]),1&t[0]&&(R.checked=R.__value===e[0]),1&t[0]&&(N.checked=N.__value===e[0]),2&t[0]&&(V.checked=V.__value===e[1]),2&t[0]&&(X.checked=X.__value===e[1]),2&t[0]&&(ue.checked=ue.__value===e[1]),32&t[0]&&(we.checked=we.__value===e[5]),32&t[0]&&(Ce.checked=Ce.__value===e[5]),32&t[0]&&(je.checked=je.__value===e[5]),64&t[0]){let n;for(jt=e[6],n=0;n<jt.length;n+=1){const l=Z(e,jt,n);Et[n]?Et[n].p(l,t):(Et[n]=ee(l),Et[n].c(),Et[n].m(Ue,null))}for(;n<Et.length;n+=1)Et[n].d(1);Et.length=jt.length}192&t[0]&&y(Ue,e[7]),"date"===e[5]?Rt?Rt.p(e,t):(Rt=te(e),Rt.c(),Rt.m(i,Te)):Rt&&(Rt.d(1),Rt=null),4&t[0]&&(Pe.checked=e[2]),8&t[0]&&Ye!==(Ye=!e[3])&&(Qe.checked=Ye),16&t[0]&&Ze.value!==e[4]&&w(Ze,e[4]),e[10]?qt?qt.p(e,t):(qt=ne(e),qt.c(),qt.m(i,null)):qt&&(qt.d(1),qt=null),e[11]?It?It.p(e,t):(It=oe(e),It.c(),It.m(_t,null)):It&&(It.d(1),It=null),524288&t[0]&&m(mt,e[19]),e[15]?Wt?Wt.p(e,t):(Wt=ce(e),Wt.c(),Wt.m(Ot,null)):Wt&&(Wt.d(1),Wt=null)},i:e,o:e,d(e){e&&u(n),t[25][2].splice(t[25][2].indexOf(A),1),t[25][2].splice(t[25][2].indexOf(R),1),t[25][2].splice(t[25][2].indexOf(N),1),t[25][3].splice(t[25][3].indexOf(V),1),t[25][3].splice(t[25][3].indexOf(X),1),t[25][3].splice(t[25][3].indexOf(ue),1),t[25][4].splice(t[25][4].indexOf(we),1),t[25][4].splice(t[25][4].indexOf(Ce),1),t[25][4].splice(t[25][4].indexOf(je),1),s(Et,e),Rt&&Rt.d(),qt&&qt.d(),e&&u(dt),e&&u(_t),It&&It.d(),e&&u(ft),e&&u(gt),Wt&&Wt.d(),St=!1,l(Mt)}}}function ke(e,t,n){let l,i,r,o,c,a,{clipivot_core:u}=t,s="index",d="ascending",_=!1,f=!0,g=",",b="text",h=[{name:"Count",value:"count"},{name:"Unique Count",value:"countunique"},{name:"Maximum",value:"max"},{name:"Mean",value:"mean"},{name:"Minimum",value:"min"},{name:"Minimum and Maximum",value:"minmax"},{name:"Mode",value:"mode"},{name:"Range",value:"range"},{name:"Sample Standard Deviation",value:"stddev"},{name:"Sum",value:"sum"}],p=h,m="count",w=[],y=[],x=[],$=0;let k=!1;const C=[[],[],[],[],[],[]];let A,O,S,M,j,E,R,q,I,W,L,N,U,D;return e.$$set=e=>{"clipivot_core"in e&&n(23,u=e.clipivot_core)},e.$$.update=()=>{1&e.$$.dirty[0]&&n(43,A="index"===s?"":"ascending"===s?"--asc-rows":"--desc-rows"),2&e.$$.dirty[0]&&n(44,O="ascending"===d?"":"descending"===d?"--desc-cols":"--index-cols"),4&e.$$.dirty[0]&&n(45,S=_?"-e":""),8&e.$$.dirty[0]&&n(46,M=f?"":"--no-header"),16&e.$$.dirty[0]&&n(47,j=","===g?"":"\\t"===g?"-t":"-d "+F(g)),32&e.$$.dirty[0]&&"text"===b&&n(6,p=h.filter((e=>["count","countunique","max","min","minmax"].includes(e.value)))),32&e.$$.dirty[0]&&"numeric"===b&&n(6,p=h.filter((e=>["count","countunique","max","mean","median","min","minmax","range","stddev","sum"].includes(e.value)))),32&e.$$.dirty[0]&&"date"===b&&n(6,p=h.filter((e=>["count","countunique","max","min","minmax","range"].includes(e.value)))),160&e.$$.dirty[0]&&n(48,E="numeric"===b&&["max","min","minmax"].includes(m)?"-N":""),32&e.$$.dirty[0]&&"date"!==b&&n(8,l=void 0),256&e.$$.dirty[0]&&n(49,R=void 0===l?"":"-F "+F(l)),512&e.$$.dirty[0]&&n(50,q=w[0]),524288&e.$$.dirty[1]&&n(51,I=void 0===q?"":F(q.name)),4096&e.$$.dirty[0]&&n(52,W=0===y.length?"":"--cols "+y.join(" ")),8192&e.$$.dirty[0]&&n(53,L=0===x.length?"":"--rows "+x.join(" ")),16384&e.$$.dirty[0]&&n(54,N="-v "+$),6811648&e.$$.dirty[1]&&n(55,U=[W,L,j,M,S,E,R,A,O].filter((e=>""!==e))),128&e.$$.dirty[0]|26214400&e.$$.dirty[1]&&n(19,D=`clipivot ${m} ${I} ${N} ${U.join(" ")}`)},[s,d,_,f,g,b,p,m,l,w,i,r,y,x,$,o,c,a,k,D,async function(){let e=await u.read_header(q.stream(),g);n(11,r=e.errorMessage),null!==e.data&&n(10,i=e.data[0])},async function(){await navigator.clipboard.writeText(D)},function(e){e.preventDefault(),n(15,o=async function(){return q||n(11,r="You must add a file to run the pivot table"),n(17,a=y.length),n(16,c=x.length),n(18,k=!0),await u.pivot_table(q.stream(),m,g,f,x,y,$,_,s,d,b,l).then((e=>{if(n(18,k=!1),null!==e.errorMessage)throw n(11,r=e.errorMessage),new Error(r);{let t=new Blob([e.csvContent],{type:"text/csv"}),n=window.URL.createObjectURL(t);return{data:e.data,csvHref:n}}})).catch((e=>{}))}())},u,function(){s=this.__value,n(0,s)},C,function(){s=this.__value,n(0,s)},function(){s=this.__value,n(0,s)},function(){d=this.__value,n(1,d)},function(){d=this.__value,n(1,d)},function(){d=this.__value,n(1,d)},function(){b=this.__value,n(5,b)},function(){b=this.__value,n(5,b)},function(){b=this.__value,n(5,b)},function(){m=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(7,m),n(6,p),n(5,b),n(56,h)},function(){l=this.value,n(8,l),n(5,b)},()=>{n(2,_=!_)},()=>{n(3,f=!f)},function(){g=this.value,n(4,g)},function(){w=this.files,n(9,w)},function(){x=v(C[1],this.__value,this.checked),n(13,x)},function(){y=v(C[0],this.__value,this.checked),n(12,y)},function(){$=this.__value,n(14,$)}]}class Ce extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),B(this,e,ke,$e,r,{clipivot_core:23},[-1,-1,-1])}}let Ae;const Oe=new Array(32).fill(void 0);function Se(e){return Oe[e]}Oe.push(void 0,null,!0,!1);let Me=Oe.length;function je(e){const t=Se(e);return function(e){e<36||(Oe[e]=Me,Me=e)}(e),t}let Ee=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ee.decode();let Re=null;function qe(){return null!==Re&&Re.buffer===Ae.memory.buffer||(Re=new Uint8Array(Ae.memory.buffer)),Re}function Ie(e,t){return Ee.decode(qe().subarray(e,e+t))}function We(e){Me===Oe.length&&Oe.push(Oe.length+1);const t=Me;return Me=Oe[t],Oe[t]=e,t}function Le(e){return null==e}let Ne=null;let Ue=null;function De(){return null!==Ue&&Ue.buffer===Ae.memory.buffer||(Ue=new Int32Array(Ae.memory.buffer)),Ue}let Te=0,Be=new TextEncoder("utf-8");const Fe="function"==typeof Be.encodeInto?function(e,t){return Be.encodeInto(e,t)}:function(e,t){const n=Be.encode(e);return t.set(n),{read:e.length,written:n.length}};function He(e,t,n){if(void 0===n){const n=Be.encode(e),l=t(n.length);return qe().subarray(l,l+n.length).set(n),Te=n.length,l}let l=e.length,i=t(l);const r=qe();let o=0;for(;o<l;o++){const t=e.charCodeAt(o);if(t>127)break;r[i+o]=t}if(o!==l){0!==o&&(e=e.slice(o)),i=n(i,l,l=o+3*e.length);const t=qe().subarray(i+o,i+l);o+=Fe(e,t).written}return Te=o,i}function Pe(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return""+e;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=Pe(e[0]));for(let l=1;l<t;l++)n+=", "+Pe(e[l]);return n+="]",n}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let l;if(!(n.length>1))return toString.call(e);if(l=n[1],"Object"==l)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:l}function ze(e,t,n){Ae._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbf424a36720318fb(e,t,We(n))}let Je=null;function Ve(e,t){const n=t(4*e.length);return(null!==Je&&Je.buffer===Ae.memory.buffer||(Je=new Uint32Array(Ae.memory.buffer)),Je).set(e,n/4),Te=e.length,n}function Qe(e){return function(){try{return e.apply(this,arguments)}catch(e){Ae.__wbindgen_exn_store(We(e))}}}async function Ye(e){void 0===e&&(e=(document.currentScript&&document.currentScript.src||new URL("bundle.js",document.baseURI).href).replace(/\.js$/,"_bg.wasm"));const t={wbg:{}};t.wbg.__wbindgen_object_drop_ref=function(e){je(e)},t.wbg.__wbindgen_json_parse=function(e,t){return We(JSON.parse(Ie(e,t)))},t.wbg.__wbindgen_object_clone_ref=function(e){return We(Se(e))},t.wbg.__wbindgen_is_object=function(e){const t=Se(e);return"object"==typeof t&&null!==t},t.wbg.__wbindgen_is_null=function(e){return null===Se(e)},t.wbg.__wbindgen_is_undefined=function(e){return void 0===Se(e)},t.wbg.__wbg_getReader_ec1469ea13d16f9c=Qe((function(e){return We(Se(e).getReader())})),t.wbg.__wbg_close_5fb9c25f9cbdcfb7=function(e){Se(e).close()},t.wbg.__wbg_enqueue_c91ee39865e89fb7=function(e,t){Se(e).enqueue(Se(t))},t.wbg.__wbg_error_d3f82636245ef65d=function(e,t){Se(e).error(Se(t))},t.wbg.__wbg_read_8f01d2832282728e=function(e){return We(Se(e).read())},t.wbg.__wbg_releaseLock_80a2f6f7ace2c336=Qe((function(e){Se(e).releaseLock()})),t.wbg.__wbg_done_de22ed8d8ed28363=function(e){return Se(e).done},t.wbg.__wbg_value_0a642db492c64597=function(e){return We(Se(e).value)},t.wbg.__wbindgen_cb_drop=function(e){const t=je(e).original;if(1==t.cnt--)return t.a=0,!0;return!1},t.wbg.__wbindgen_is_function=function(e){return"function"==typeof Se(e)},t.wbg.__wbg_next_edda7e0003e5daf9=function(e){return We(Se(e).next)},t.wbg.__wbg_done_037d0a173aef1834=function(e){return Se(e).done},t.wbg.__wbg_value_e60bbfb7d52af62f=function(e){return We(Se(e).value)},t.wbg.__wbg_iterator_09191f8878ea9877=function(){return We(Symbol.iterator)},t.wbg.__wbg_isArray_8719d1387c4e1aca=function(e){return Array.isArray(Se(e))},t.wbg.__wbg_instanceof_ArrayBuffer_86f01c089ac2692f=function(e){return Se(e)instanceof ArrayBuffer},t.wbg.__wbg_values_a8e8f7b69d5eb117=function(e){return We(Se(e).values())},t.wbg.__wbg_new_1192d65414040ad9=function(e,t){return We(new Error(Ie(e,t)))},t.wbg.__wbg_call_8e95613cc6524977=Qe((function(e,t){return We(Se(e).call(Se(t)))})),t.wbg.__wbg_call_d713ea0274dfc6d2=Qe((function(e,t,n){return We(Se(e).call(Se(t),Se(n)))})),t.wbg.__wbg_next_2966fa909601a075=Qe((function(e){return We(Se(e).next())})),t.wbg.__wbg_isSafeInteger_cd80928ebe3e6591=function(e){return Number.isSafeInteger(Se(e))},t.wbg.__wbg_new_d0c63652ab4d825c=function(e,t){try{var n={a:e,b:t},l=new Promise(((e,t)=>{const l=n.a;n.a=0;try{return function(e,t,n,l){Ae.wasm_bindgen__convert__closures__invoke2_mut__h817def14b66246c0(e,t,We(n),We(l))}(l,n.b,e,t)}finally{n.a=l}}));return We(l)}finally{n.a=n.b=0}},t.wbg.__wbg_resolve_2529512c3bb73938=function(e){return We(Promise.resolve(Se(e)))},t.wbg.__wbg_then_4a7a614abbbe6d81=function(e,t){return We(Se(e).then(Se(t)))},t.wbg.__wbg_then_3b7ac098cfda2fa5=function(e,t,n){return We(Se(e).then(Se(t),Se(n)))},t.wbg.__wbg_buffer_49131c283a06686f=function(e){return We(Se(e).buffer)},t.wbg.__wbg_new_9b295d24cf1d706f=function(e){return We(new Uint8Array(Se(e)))},t.wbg.__wbg_set_3bb960a9975f3cd2=function(e,t,n){Se(e).set(Se(t),n>>>0)},t.wbg.__wbg_length_2b13641a9d906653=function(e){return Se(e).length},t.wbg.__wbg_instanceof_Uint8Array_b718c5caf9bb354d=function(e){return Se(e)instanceof Uint8Array},t.wbg.__wbg_byteLength_9828cd72f704b139=function(e){return Se(e).byteLength},t.wbg.__wbg_get_0e3f2950cdf758ae=Qe((function(e,t){return We(Reflect.get(Se(e),Se(t)))})),t.wbg.__wbindgen_number_get=function(e,t){const n=Se(t);var l="number"==typeof n?n:void 0;(null!==Ne&&Ne.buffer===Ae.memory.buffer||(Ne=new Float64Array(Ae.memory.buffer)),Ne)[e/8+1]=Le(l)?0:l,De()[e/4+0]=!Le(l)},t.wbg.__wbindgen_string_get=function(e,t){const n=Se(t);var l="string"==typeof n?n:void 0,i=Le(l)?0:He(l,Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),r=Te;De()[e/4+1]=r,De()[e/4+0]=i},t.wbg.__wbindgen_boolean_get=function(e){const t=Se(e);return"boolean"==typeof t?t?1:0:2},t.wbg.__wbindgen_debug_string=function(e,t){var n=He(Pe(Se(t)),Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),l=Te;De()[e/4+1]=l,De()[e/4+0]=n},t.wbg.__wbindgen_throw=function(e,t){throw new Error(Ie(e,t))},t.wbg.__wbindgen_rethrow=function(e){throw je(e)},t.wbg.__wbindgen_memory=function(){return We(Ae.memory)},t.wbg.__wbindgen_closure_wrapper1088=function(e,t,n){return We(function(e,t,n,l){const i={a:e,b:t,cnt:1,dtor:n},r=(...e)=>{i.cnt++;const t=i.a;i.a=0;try{return l(t,i.b,...e)}finally{0==--i.cnt?Ae.__wbindgen_export_2.get(i.dtor)(t,i.b):i.a=t}};return r.original=i,r}(e,t,87,ze))},("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:l}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,t);return Ae=n.exports,Ye.__wbindgen_wasm_module=l,Ae}var Ge=Object.freeze({__proto__:null,pivot_table:function(e,t,n,l,i,r,o,c,a,u,s,d){var _=He(t,Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),f=Te,g=He(n,Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),b=Te,h=Ve(i,Ae.__wbindgen_malloc),p=Te,v=Ve(r,Ae.__wbindgen_malloc),m=Te,w=He(a,Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),y=Te,x=He(u,Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),$=Te,k=He(s,Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),C=Te,A=Le(d)?0:He(d,Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),O=Te;return je(Ae.pivot_table(We(e),_,f,g,b,l,h,p,v,m,o,c,w,y,x,$,k,C,A,O))},read_header:function(e,t){var n=He(t,Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),l=Te;return je(Ae.read_header(We(e),n,l))},IntoUnderlyingSink:class{free(){const e=this.ptr;this.ptr=0,Ae.__wbg_intounderlyingsink_free(e)}write(e){return je(Ae.intounderlyingsink_write(this.ptr,We(e)))}close(){var e=this.ptr;return this.ptr=0,je(Ae.intounderlyingsink_close(e))}abort(e){var t=this.ptr;return this.ptr=0,je(Ae.intounderlyingsink_abort(t,We(e)))}},IntoUnderlyingSource:class{free(){const e=this.ptr;this.ptr=0,Ae.__wbg_intounderlyingsource_free(e)}pull(e){Ae.intounderlyingsource_pull(this.ptr,We(e))}cancel(){var e=this.ptr;this.ptr=0,Ae.intounderlyingsource_cancel(e)}},PipeOptions:class{free(){const e=this.ptr;this.ptr=0,Ae.__wbg_pipeoptions_free(e)}get preventClose(){return 0!==Ae.pipeoptions_preventClose(this.ptr)}get preventCancel(){return 0!==Ae.pipeoptions_preventCancel(this.ptr)}get preventAbort(){return 0!==Ae.pipeoptions_preventAbort(this.ptr)}get signal(){return je(Ae.pipeoptions_signal(this.ptr))}},QueuingStrategy:class{free(){const e=this.ptr;this.ptr=0,Ae.__wbg_queuingstrategy_free(e)}get highWaterMark(){return Ae.queuingstrategy_highWaterMark(this.ptr)}},default:Ye});(async()=>{const e=await(async()=>(await Ye("/build/assets/clipivot-wasm-c2a9b781.wasm"),Ge))();new Ce({target:document.getElementById("clipivot-entry"),props:{clipivot_core:e}})})()}();
//# sourceMappingURL=bundle.js.map
