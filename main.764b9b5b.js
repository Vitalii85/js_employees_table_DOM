parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw o}}}}function t(e){return o(e)||a(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=document.querySelector("thead"),c=l.rows[0].cells,u=document.querySelector("tbody"),s=-1;l.addEventListener("click",function(e){var n=e.target.closest("th").cellIndex,r=t(u.rows);r.sort(function(e,t){switch(c[n].innerText){case"Age":return e.cells[n].innerText-t.cells[n].innerText;case"Salary":return e.cells[n].innerText.slice(1).split(",").join("")-t.cells[n].innerText.slice(1).split(",").join("");default:return e.cells[n].innerText.localeCompare(t.cells[n].innerText)}}),s===n?(s=-1,r.reverse()):s=n,u.append.apply(u,t(r))}),u.addEventListener("click",function(e){var t=e.target.closest("tr"),n=u.querySelector(".active");n&&n.classList.remove("active"),t.classList.add("active")});var d=document.createElement("form"),p=document.createElement("button");d.classList.add("new-employee-form"),p.innerText="Save to table",p.type="submit";var m,f=e(c);try{for(f.s();!(m=f.n()).done;){var y=m.value,b=document.createElement("label"),v=void 0;switch(b.innerText=y.innerText+":",y.innerText){case"Age":(v=document.createElement("input")).name="age",v.type="number",v.dataset.qa="age";break;case"Salary":(v=document.createElement("input")).name="salary",v.type="number",v.dataset.qa="salary";break;case"Office":(v=document.createElement("select")).name="office",v.innerHTML="<option>Tokyo</option><option>Singapore</option>\n        <option>London</option><option>New York</option><option>Edinburgh\n        </option><option>San Francisco</option>",v.dataset.qa="office";break;default:(v=document.createElement("input")).name=y.innerText.toLowerCase(),v.type="text",v.dataset.qa=y.innerText.toLowerCase()}b.append(v),d.append(b)}}catch(E){f.e(E)}finally{f.f()}function x(){var t,n=document.createElement("tr"),r=e(c);try{for(r.s();!(t=r.n()).done;){var a=t.value,o=d.querySelector("[name=".concat(a.innerText.toLowerCase(),"]")),i=document.createElement("td");switch(a.innerText.toLowerCase()){case"name":if(o.value.length<4)return T(150,10,"Employee Name error","Employee Name should be 4 letters or more","error");i.innerText=o.value;break;case"age":if(o.value<18||o.value>90)return T(250,10,"Employee Age error","Employee Age should be between 18 and 90","error");i.innerText=o.value;break;case"salary":if(o.value<1)return T(350,10,"Employee Salary error","Employee Salary should be bigger than 0","error");i.innerText="$"+(+o.value).toLocaleString("en-US");break;default:if(""===o.value)return T(450,10,"Invalid input","Input all fields","error");i.innerText=o.value}n.append(i)}}catch(E){r.e(E)}finally{r.f()}u.append(n),T(10,10,"Employee successfully added","New Employee was successfully added to the table","success"),d.reset()}function T(e,t,n,r,a){var o=document.createElement("div"),i=document.createElement("h2"),l=document.createElement("p");o.classList.add("notification",a),o.dataset.qa="notification",i.classList.add("title"),o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px"),i.innerText=n,l.innerText=r,o.append(i,l),document.body.append(o),setTimeout(function(){o.hidden=!0},2e3)}d.append(p),document.body.append(d),d.addEventListener("submit",function(e){e.preventDefault(),x()}),u.addEventListener("dblclick",function(e){if(!e.target.matches("input")&&!e.target.matches("select")){var t,n=e.target.closest("td"),r=n.cellIndex,a=n.innerText;switch(c[r].innerText){case"Age":(t=document.createElement("input")).type="number",n.innerText="",t.value=a;break;case"Salary":n.innerText="",(t=document.createElement("input")).type="number",t.value=a.slice(1).split(",").join("");break;case"Office":n.innerText="",(t=document.createElement("select")).innerHTML="<option>Tokyo</option><option>Singapore</option>\n        <option>London</option><option>New York</option><option>Edinburgh\n        </option><option>San Francisco</option>",t.value=a;break;default:(t=document.createElement("input")).type="text",n.innerText="",t.value=a}t.classList.add("cell-input"),n.append(t),t.focus(),t.addEventListener("blur",function(){var e=t.value;switch(t.remove(),c[r].innerText){case"Name":if(e.length<4)return n.innerText=a,T(150,10,"Employee Name error","Employee Name should be 4 letters or more","error");n.innerText=e;break;case"Age":if(e<18||e>90)return n.innerText=a,T(250,10,"Employee Age error","Employee Age should be between 18 and 90","error");n.innerText=e;break;case"Salary":if(e<1)return n.innerText=a,T(350,10,"Employee Salary error","Employee Salary should be bigger than 0","error");n.innerText="$"+e.toLocaleString("en-US");break;default:if(""===e)return n.innerText=a,T(450,10,"Invalid input","Input can't be empy","error");n.innerText=e}e!==a&&T(10,10,"Data successfully chenged","Data was successfully chenged","success")}),t.addEventListener("keydown",function(e){"Enter"===e.key&&t.blur()})}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.764b9b5b.js.map