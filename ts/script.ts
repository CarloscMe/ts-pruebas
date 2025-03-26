const texto= document.querySelector("#texto") as HTMLParagraphElement;
const pequeño = document.querySelector("#pequeño") as HTMLInputElement;
const mediano = document.querySelector("#mediano") as HTMLInputElement;
const grande = document.querySelector("#grande") as HTMLInputElement;

const entrada = document.querySelector("#entrada") as HTMLInputElement;
const texto2 = document.querySelector(".texto--2") as HTMLParagraphElement;
const button = document.querySelector("button") as HTMLButtonElement;

const select = document.querySelector("select") as HTMLSelectElement;

pequeño?.addEventListener("click", () =>{
    texto.style.fontSize = ".9rem"                     /* reto: dependiendo de la opcion al recargar la pagina se quede esa opcion*/
});

mediano?.addEventListener("click", () =>{
    texto.style.fontSize = "2rem"
});

grande?.addEventListener("click", () =>{
    texto.style.fontSize = "3rem"
});

button.addEventListener("click", validar);

function validar () {

    if(entrada.value){
        texto2.innerText = entrada.value;
        entrada.value = '';
    }

    else {
        alert("escribe algo por favor");
    };
   
};

select.addEventListener("change", cambios);

function cambios() {
   
    const body = document.body as HTMLBodyElement;

    body.style.background = select.value;
}