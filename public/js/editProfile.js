window.addEventListener('load', function(){
    let formulario = document.querySelector('form.formulario')
    

    formulario.addEventListener('submit', function (event) {
    

    let errores = []

    
    let campoPrimerNombre = document.querySelector('#first_name')
    let acaFirstName = document.querySelector('div.acaFirstName')
    if (campoPrimerNombre.value == '') {
        acaFirstName.innerText = 'Your first name must be defined'
        errores.push('Your first name must be defined')
        
    } else if (campoPrimerNombre.value < 1) {
        acaFirstName.innerText = 'You must define your full name'
        errores.push('You must define your full name')
    }

    let campoUltimoNombre = document.querySelector('#last_name')
    let acaLastName = document.querySelector('div.acaLastName')
    if (campoUltimoNombre.value == '') {
        acaLastName.innerText = 'Your last name must be defined'
        errores.push('Your last name must be defined')
    } else if (campoUltimoNombre.value.length < 1) {
        acaLastName.innerText = 'You must define your full last name'
        errores.push('You must define your full last name')
    }

    let campoEmail = document.querySelector('#email')
    let acaEmail = document.querySelector('div.acaEmail')
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!campoEmail.value.match(mailformat)) {
        acaEmail.innerText = 'Your email is invalid'
        errores.push('Your email is invalid')
    } else if (campoEmail.value.length < 1) {
        acaEmail.innerText = 'Please type your full email'
        errores.push('Please type your')
    }
    
    let campoNombreUsuario = document.querySelector('#username')
    let acaUsername = document.querySelector('div.acaUsername')
    if (campoNombreUsuario.value == '') {
        acaUsername.innerText = 'Your username must be defined'
        errores.push('Your username must be defined')
    } else if (campoNombreUsuario.value.length < 1) {
        acaUsername.innerText = 'Username must be longer than 1 character'
        errores.push('Username must be longer than 1 character')
    }

    
    let campoPassword = document.querySelector('#password')
    let acaPassword1 = document.querySelector('div.acaPassword1')
    if (campoPassword.value == '') {
        acaPassword1.innerText = 'You must type a password of your choice'
        errores.push('You must type a password of your choice')   
    } else if (campoPassword.value.length < 8) {
        acaPassword1.innerText = 'password must have 8 characters at least'
        errores.push('password must have 8 characters at least')
    }

    let campoPassword2 = document.querySelector('#password2')
    let acaPassword2 = document.querySelector('div.acaPassword2')
    if (campoPassword2.value == '') {
    acaPassword2.innerText = 'Please repeat your password'
    errores.push('Please repeat your password')   
    } else if (campoPassword2 != campoPassword) {
    acaPassword2.innerText = 'Passwords dont match'
    errores.push('Passwords dont match')
    }


    let cajaUpload = document.querySelector('#create')
    let acaAvatar = document.querySelector('div.acaAvatar')
    if (cajaUpload.value == '') {
    acaAvatar.innerText = 'Please Update your avatar'
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