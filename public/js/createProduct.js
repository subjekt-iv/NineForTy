
window.addEventListener('load', function(){
    let formulario = document.querySelector('form.createform')
    

    formulario.addEventListener('submit', function (event) {
    

    let errores = []

    var cajaUpload = document.querySelector('#botonupload')
    let acaUpload = document.querySelector('div.acaUpload')
    var filePath = cajaUpload.value
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    //var t = cajaUpload;

    if (cajaUpload.value == '') {
        acaUpload.innerHTML = 'You must include your file'
        errores.push('You must include your file')   
    } else
    
    if (!allowedExtensions.exec(filePath))  {
        acaUpload.innerHTML = 'Invalid File type'
            errores.push('Invalid File type');
        
    }  
    
    
    let campoPrice = document.querySelector('#price')
    let acaPrice = document.querySelector('div.acaPrice')
    if (this.value == '') {
      
        errores.push('Price must be defined')
    } else if (campoPrice.value < 1) {
        acaPrice.innerHTML = 'This price is invalid'
        errores.push('Price must above 1')
    }

    let campoNombre = document.querySelector('#name')
    let acaName = document.querySelector('div.acaName')
    if (campoNombre.value == '') {
        acaName.innerHTML = 'Name must be defined'
        errores.push('Name must be defined')
    } else if (campoNombre.value.length < 1) {
        acaName.innerHTML = 'Name must be longer than 1 character'
        errores.push('Name must be longer than 1 character')
    }
       

    let campoKeyword = document.querySelector('#keyword')
    let acaKeyword = document.querySelector('div.acaKeyword')
    if (campoKeyword.value == '') {
        acaKeyword.innerHTML = 'Keywords must be defined'
        errores.push('Keywords must be defined')
    } else if (campoKeyword.value.length < 1) {
        acaKeyword.innerHTML = 'Pleade type a longer Keyword'
        errores.push('There must be two keywords at least')
    }
    let campoDescription = document.querySelector('#description')
    let acaDescription = document.querySelector('div.acaDescription')
    if (campoDescription.value == '') {
        acaDescription.innerHTML = 'You must type a brief description'
        errores.push('You must type a brief description')   
    } else if (campoDescription.value.length < 15) {
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
