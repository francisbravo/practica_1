//alert("Hola este es mi Javascript");

//let nombre = "marta";
//nombre = "maria";

//var nombre1 = "marta";

//const nombre2 = "marta";
//nombre2 = "maria"
//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//seleccionar elementos

let titulo = document.querySelector(".logo.fuente-acento");
console.log(titulo);

titulo.innerHTML="hola";

//condicionales

let textotitulo = titulo.innertext;
console.log(textotitulo);

if(textotitulo=="nombre") [titulo.innerHTML=
"otro";] else[
    console.log("no se cumple");
]

// funciones

let nombre = "gerald";
let ciudad ="peru";
let gusto ="lucuma";

let parrafo = document.querySelector(".parrafo2");
 
function cambiartexto(nombre,ciudad,gusto) [
    let contenido = `Me llamo ${nombre}, nací en
    ${ciudad} y vivo en Caballito. Me gusta 
la ${gusto} y salir a pasear en días de sol.
    Me encantaría aprender a programar para 
    poder ayudar a las personas a mostrar lo que hacen.`;

    return contenido;
]

parrafo.innertext = cambiartext("gerald",
    ciudad, gusto)

    /*------formulario-------*/

    const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
})