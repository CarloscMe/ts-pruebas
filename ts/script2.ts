const entrada2 = document.querySelector("#entrada2") as HTMLInputElement;
const hola = document.querySelector("#hola") as HTMLParagraphElement;

entrada2?.addEventListener("input", ()=>{
    hola.textContent = entrada2.value
})