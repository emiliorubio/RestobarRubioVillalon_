(async() => {
    const {value: responder}  = await Swal.fire({
	title:"Bienvenido!",
	text: 'eres mayor de edad?',
	icon: 'question',
	confirmButtonText: 'Seleccionar',
	footer: 'No vendemos alcohol a menores de edad',
	width: '70%',
	padding:'2rem',
	backdrop: true,
	allowOutsideClick: false,
	allowEscapeKey:false,
	allowEnterKey:false,
	stopKeydownPropagation:false,

	input: 'select',
	inputPlaceholder: 'responder',
	inputValue:'',
	inputOptions: {
        Si: 'Si',
        No: 'No'
    }
    });


if (responder === 'Si') {
    Swal.fire({
        title: `${responder} puedes comprar`,
		icon:'success',
        timer: 3000,
	    timerProgressBar:true,
    })
} else {
    swal.fire({
    title:`No puedes comprar`,
	icon: 'error',
    showConfirmButton: false,
    allowOutsideClick: false,
	allowEscapeKey:false,
	allowEnterKey:false,
    })
    setTimeout(()=>{
        document.location.reload()
    },4000)
}


})() 