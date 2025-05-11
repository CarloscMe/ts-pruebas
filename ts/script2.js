"use strict";
const entrada2 = document.querySelector("#entrada2");
const hola = document.querySelector("#hola");
entrada2 === null || entrada2 === void 0 ? void 0 : entrada2.addEventListener("input", () => {
    hola.textContent = entrada2.value;
});
