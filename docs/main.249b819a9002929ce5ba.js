(()=>{var e,t={1457:(e,t,n)=>{"use strict";n(1202);var o=n(1892),r=n.n(o),a=n(5760),i=n.n(a),c=n(8311),s=n.n(c),l=n(8192),p=n.n(l),d=n(8060),u=n.n(d),f=n(4865),g=n.n(f),m=n(9994),v={};v.styleTagTransform=g(),v.setAttributes=p(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u();r()(m.Z,v);m.Z&&m.Z.locals&&m.Z.locals;var h=n(1555),b=document.createElement("div"),x=(document.createElement("div"),document.querySelector(".btn")),w=document.querySelector(".btn-get-list");function y(e){var t=new XMLHttpRequest;t.open("GET","https://randomfox.ca/floof/"),t.onload=function(){200!=t.status?console.log("Ошибка ".concat(t.status,": ").concat(t.statusText)):e(JSON.parse(t.response).image)},t.onprogress=function(e){e.lengthComputable&&console.log("Поулчено ".concat(e.loaded," из ").concat(e.total))},t.send()}function O(e){b.innerHTML=e&&""!=e?'\n    <div class="wrapper">\n        <div class="wrapper__img">\n            <img class="wrapper__img_photo" src='.concat(e,' alt="Photo">\n        </div>\n    </div>\n    '):'\n      <div class = "fail">OOOps!\n      </div>\n    ';var t=document.querySelector(".start");t.parentNode.insertBefore(b,t)}x.addEventListener("click",(function(e){y(O)})),w.addEventListener("click",(function(){console.log(h)})),y(O)},1555:e=>{var t=window.XMLHttpRequest.prototype.open,n=[];window.XMLHttpRequest.prototype.open=function(e,o,r,a,i){return this.addEventListener("load",(function(){n.push(JSON.parse(this.response))})),t.apply(this,arguments)},e.exports=n},9994:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(4933),r=n.n(o),a=n(3476),i=n.n(a),c=n(9470),s=i()(r());s.i(c.Z),s.push([e.id,"*{margin:0;padding:0;box-sizing:border-box;text-align:center;background-color:#312d2d;color:white;font-family:Courier New, monospace}button{height:fit-content;width:fit-content;padding:5px 10px;font-weight:bold}.container{max-width:1000px;margin:0 auto}h1{margin-top:2rem;text-align:center}#app{margin:0 auto}.fail{margin:1rem auto 0 auto;display:flex;flex-direction:column;text-align:center}.btn{margin:15px auto 0 auto;background-color:#be7507}.wrapper{margin:1rem auto;display:flex;flex-direction:column}.wrapper__img{text-align:center}.wrapper__img_photo{height:300px;width:300px;object-fit:cover}\n",""]);const l=s}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(p=0;p<e.length;p++){for(var[n,r,a]=e[p],c=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(p--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,c,s]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var p=s(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0;return o.O(p)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[372],(()=>o(1457)));r=o.O(r)})();