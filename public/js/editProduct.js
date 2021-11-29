window.addEventListener('load', function(){
    let formulario = document.querySelector('form.editForm')
    

    formulario.addEventListener('submit', function (event) {
    

    let errores = []

    let cajaUpload = document.querySelector('#botonupload')
    if (cajaUpload.value == '') {
        errores.push('You must include your file')   
    } 
    
    let campoPrice = document.querySelector('#price')
    if (this.value == '') {
        errores.push('Price must be defined')
    } else if (campoPrice.value < 1) {
        errores.push('Price must above 1')
    }

    let campoNombre = document.querySelector('#name')
    if (campoNombre.value == '') {
        errores.push('Name must be defined')
    } else if (campoNombre.value.length < 1) {
        errores.push('Name must be longer than 1 character')
    }
       

    let campoKeyword = document.querySelector('#keyword')
    if (campoKeyword.value == '') {
        errores.push('Keywords must be defined')
    } else if (campoKeyword.value.length < 1) {
        errores.push('There must be two keywords at least')
    }
    let campoDescription = document.querySelector('#description')
    if (campoDescription.value == '') {
        errores.push('You must type a brief description')   
    } else if (campoDescription.value.length < 5) {
        errores.push('Description must be longer')
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