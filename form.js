let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let number = document.getElementById("number");
let comentario = document.getElementById("comentario");

let error = document.getElementById("error");
error.style.color = "red";

function enviarFormulario(){
    console.log("enviando formulario...");

    let mensajesError = [];
    if (nombre.value === null || nombre.value === ""){
        mensajesError.push("ingresa tu nombre");
    }
    if (apellido.value === null || apellido.value === ""){
        mensajesError.push("ingresa tu apellido");
    }
    if (mail.value === null || mail.value === ""){
        mensajesError.push("ingresa tu mail");
    }
    if (number.value === null || number.value === ""){
        mensajesError.push("ingresa tu numero");
    }
    if (comentario.value === null || comentario.value === ""){
        mensajesError.push("ingresa tu comentario");
    }
    error.innerHTML = mensajesError.join(", ");
    return false;
}