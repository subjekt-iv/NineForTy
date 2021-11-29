window.addEventListener('load', function(){
    let formulario = document.querySelector('form.formulario')
    

    formulario.addEventListener('submit', function (event) {
    

    let errores = []

  

    let campoEmail = document.querySelector('#email')
    let acaEmail = document.querySelector('div.acaEmail')
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!campoEmail.value.match(mailformat)) {
        acaEmail.innerText = 'Invalid Credentials'
        errores.push('Your email is invalid')
    } else if (campoEmail.value.length < 1) {
        acaEmail.innerText = 'Invalid Credentials'
        errores.push('Please type your')
    }
    
    
    let campoPassword = document.querySelector('#password')
    let acaPassword1 = document.querySelector('div.acaPassword1')
    if (campoPassword.value == '') {
        acaPassword1.innerText = 'Invalid Credentials'
        errores.push('You must type a password of your choice')   
    } else if (campoPassword.value.length < 8) {
        acaPassword1.innerText = 'Invalid Credentials'
        errores.push('password must have 8 characters at least')
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