function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("7Y9D8");function u(e,n){return new Promise(((t,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();const{delay:{value:t},step:{value:o},amount:{value:r}}=n.currentTarget;!function(n,t,o){for(let r=0;r<n;r+=1){u(r+1,t+o*r).then((({position:n,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}))}}(Number(r),Number(t),Number(o))}));
//# sourceMappingURL=03-promises.a8b22627.js.map
