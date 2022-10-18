let response = {
    "status":"error",
    "status_code":409,
    "message":"Por favor complete todos los datos y pronto nos pondremos en contacto",
    "validations":{
        "nombre":"The name field is required.",
        "apellido":"The name field is required.",
        "emailuser":"The field email user must be between 6 and 120 characters in length",
        "number":"The number field is required."},
    "data":null
};

// Solo si hay error
if(response.status == 'error') {
    // Colocar mensaje en formulario
    document.querySelector('#message-error').innerText = response.message;
    // Recorrer validaciones por clave
    for(let key in response.validations) {
        // Asignar mensaje al span correspondiente
        document.querySelector(`#${key}-error`).innerText = response.validations[key];
    }
}

