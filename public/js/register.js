window.addEventListener('load', function(){
    let formulario = document.querySelector('form.formulario')
    

    formulario.addEventListener('submit', function (event) {
    

    let errores = []

    
    let campoPrimerNombre = document.querySelector('#first_name')
    if (campoPrimerNombre.value == '') {
        errores.push('Your first name must be defined')
    } else if (campoPrimerNombre.value < 1) {
        errores.push('You must define your full name')
    }

    let campoUltimoNombre = document.querySelector('#last_name')
    if (campoUltimoNombre.value == '') {
        errores.push('Your last name must be defined')
    } else if (campoUltimoNombre.value.length < 1) {
        errores.push('You must define your full last name')
    }

    let campoEmail = document.querySelector('#email')
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!campoEmail.value.match(mailformat)) {
        errores.push('Your email is invalid')
    } else if (campoEmail.value.length < 1) {
        errores.push('Please type your')
    }
    
    let campoNombreUsuario = document.querySelector('#username')
    if (campoNombreUsuario.value == '') {
        errores.push('Your user name must be defined')
    } else if (campoNombreUsuario.value.length < 1) {
        errores.push('Username must be longer than 1 character')
    }

    
    let campoPassword = document.querySelector('#password')
    if (campoPassword.value == '') {
        errores.push('You must type a password of your choice')   
    } else if (campoPassword.value.length < 8) {
        errores.push('password must have 8 characters at least')
    }

let campoPassword2 = document.querySelector('#password2')
if (campoPassword2.value == '') {
    errores.push('Please repeat your password')   
} else if (campoPassword2 != campoPassword) {
    errores.push('passwords dont match')
}


let cajaUpload = document.querySelector('#create')
if (cajaUpload.value == '') {
    errores.push('You must include your file')   
} 



  if (errores.length > 0) {
    event.preventDefault()
    
    let ulErrores = document.querySelector('div.errores ul')
  for (i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += '<li>' + errores[i] + '</li>'     
  }
}

})
    
})