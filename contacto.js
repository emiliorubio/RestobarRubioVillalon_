const botonEnviar = document.querySelector('.enviar')


botonEnviar.addEventListener('click', ()=> { 
        
    Swal.fire({  
        icon: 'success',
        title: 'Enviado correctamente, pronto te contactaremos',
        confirmButtonText: 'OK',
    })
});





