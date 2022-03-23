(()=>{"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){t(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}function r(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var o="function"==typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},c={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function a(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}const d={onFormSubmit:t=>{},onEliminarClick:t=>{},onEditarClick:t=>{},sum:(t,e)=>{},renderForm:function(t){f.value=t.codigo||"",p.value=t.nombre||"",s.value=t.cantidad||"",y.value=t.precio||"",g.value=t.categoria||1},renderTable:function(t){const e=t.map((t=>{const e=document.createElement("tr");e.innerHTML=`\n <td>${t.codigo}</td>\n <td>${t.nombre}</td>\n <td>${t.cantidad}</td>\n <td>${t.precio}</td>\n <td>${t.total}</td>\n <td>\n   <div class="btn-group">\n     <a title="Editar" href="#" class="btn btn-sm btn-outline-secondary">\n       <i class="bi bi-pencil-square"></i>\n     </a> |\n     <a title="Eliminar" href="#" class="btn btn-sm btn-outline-danger">\n       <i class="bi bi-trash"></i>\n     </a>\n   </div>\n  </td>\n `;const[n,r]=e.getElementsByTagName("a");return r.addEventListener("click",(e=>{e.preventDefault(),d.onEliminarClick(t.codigo)})),n.addEventListener("click",(e=>{e.preventDefault(),d.onEditarClick(t.codigo)})),e}));function n(t,e){return t.map(e).reduce(((t,e)=>t+e),0)}m.innerHTML="",e.forEach((t=>{m.appendChild(t)})),b.innerHTML=n(t,(t=>t.cantidad)),E.innerHTML=n(t,(t=>t.precio)),h.innerHTML=n(t,(t=>t.total))}},l=document.getElementsByTagName("form")[0],f=document.getElementById("codigo"),p=document.getElementById("nombre"),s=document.getElementById("cantidad"),y=document.getElementById("precio"),g=document.getElementById("categoria"),m=document.getElementsByTagName("tbody")[0],b=document.getElementById("cantidad-total"),E=document.getElementById("precio-total"),h=document.getElementById("gran-total");l.addEventListener("submit",(t=>{t.preventDefault();const e=new FormData(l),n=Array.from(e.entries()),[r,o,i,c,a]=n,u=parseInt(r[1]),f=o[1],p=parseInt(i[1]),s=parseFloat(c[1]),y=a[1];d.onFormSubmit({codigo:u,nombre:f,cantidad:p,precio:s,categoria:y})}));const v="producto-agregado",w="producto-modificado",O="producto-eliminado",j="producto-seleccionado",I="producto-agregado-o-modificado",P=t=>({type:j,payload:{codigo:t}}),T=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return function(t){return function(){var o=t.apply(void 0,arguments),i=function(){throw new Error(r(15))},c={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},a=e.map((function(t){return t(c)}));return i=u.apply(void 0,a)(o.dispatch),n(n({},o),{},{dispatch:i})}}}((t=>e=>n=>{console.log("disptaching",n);const r=e(n);return console.log("next state",t.getState()),r}),(t=>e=>n=>{if(n.type!==I)return e(n);const r=n.payload,o=r.codigo?{type:w,payload:r}:{type:v,payload:r};return t.dispatch(o),t.dispatch(P(null))}),function(t){let e=0;return t=>t=>n=>{if(n.type!=v)return t(n);e++;const r={...n,payload:{...n.payload,codigo:e}};return t(r)}}()),N=function t(e,n,i){var u;if("function"==typeof n&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error(r(0));if("function"==typeof n&&void 0===i&&(i=n,n=void 0),void 0!==i){if("function"!=typeof i)throw new Error(r(1));return i(t)(e,n)}if("function"!=typeof e)throw new Error(r(2));var d=e,l=n,f=[],p=f,s=!1;function y(){p===f&&(p=f.slice())}function g(){if(s)throw new Error(r(3));return l}function m(t){if("function"!=typeof t)throw new Error(r(4));if(s)throw new Error(r(5));var e=!0;return y(),p.push(t),function(){if(e){if(s)throw new Error(r(6));e=!1,y();var n=p.indexOf(t);p.splice(n,1),f=null}}}function b(t){if(!a(t))throw new Error(r(7));if(void 0===t.type)throw new Error(r(8));if(s)throw new Error(r(9));try{s=!0,l=d(l,t)}finally{s=!1}for(var e=f=p,n=0;n<e.length;n++)(0,e[n])();return t}function E(t){if("function"!=typeof t)throw new Error(r(10));d=t,b({type:c.REPLACE})}function h(){var t,e=m;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(r(11));function n(){t.next&&t.next(g())}return n(),{unsubscribe:e(n)}}})[o]=function(){return this},t}return b({type:c.INIT}),(u={dispatch:b,subscribe:m,getState:g,replaceReducer:E})[o]=h,u}(((t,e)=>{switch(e.type){case v:return function(t,e){const n=e.payload,r=n.cantidad*n.precio;return{...t,productos:[...t.productos,{...n,total:r}]}}(t,e);case w:return function(t,e){const n=e.payload,r=t.productos.slice(),o=n.codigo,i=n.cantidad*n.precio,c=r.find((t=>t.codigo===o)),a=r.indexOf(c);return r[a]={...n,total:i},{...t,productos:r}}(t,e);case O:return function(t,e){const n=e.payload.codigo,r=t.productos.filter((t=>t.codigo!==n));return{...t,productos:r}}(t,e);case j:return function(t,e){const n=e.payload.codigo;return{...t,producto:t.productos.find((t=>t.codigo==n))||{}}}(t,e);default:return t}}),{producto:{},productos:[]},T);N.subscribe(function(t,e){let n;return function(){let e=t.getState();var r;e!==n&&(n=e,r=e,d.renderForm(r.producto),d.renderTable(r.productos))}}(N)),d.onFormSubmit=t=>N.dispatch({type:I,payload:t}),d.onEliminarClick=t=>N.dispatch((t=>({type:O,payload:{codigo:t}}))(t)),d.onEditarClick=t=>N.dispatch(P(t))})();