"use strict";
const texto = document.querySelector("#texto");
const pequeño = document.querySelector("#pequeño");
const mediano = document.querySelector("#mediano");
const grande = document.querySelector("#grande");
const entrada = document.querySelector("#entrada");
const texto2 = document.querySelector(".texto--2");
const button = document.querySelector("button");
pequeño === null || pequeño === void 0 ? void 0 : pequeño.addEventListener("click", () => {
    texto.style.fontSize = ".9rem"; /* reto: dependiendo de la opcion al recargar la pagina se quede esa opcion*/
});
mediano === null || mediano === void 0 ? void 0 : mediano.addEventListener("click", () => {
    texto.style.fontSize = "2rem";
});
grande === null || grande === void 0 ? void 0 : grande.addEventListener("click", () => {
    texto.style.fontSize = "3rem";
});
button.addEventListener("click", validar);
function validar() {
    if (entrada.value) {
        texto2.innerText = entrada.value;
        entrada.value = '';
    }
    else {
        alert("escribe algo");
    }
    ;
}
;
