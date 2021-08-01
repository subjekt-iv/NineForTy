const express = require('express')
const app = express()
const port = 3030
const path = require('path')

<<<<<<< HEAD


=======
>>>>>>> 4e216a6bdcb998a0a1d864d9718eed98394c9e57
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/register', function(request, response){
    response.sendFile(path.join(__dirname, 'views/register.html'))
})
app.get('/login', function(request, response){
    response.sendFile(path.join(__dirname, 'views/login.html'))
})

app.get('/market', (req, res) => {
    res.sendFile(path.join (__dirname, 'views/market.html'))
})

app.use(express.static('public'))

app.get('*', function (request, response){
    response.send('NOT FOUND', 404)
})

app.listen(port, ()=>{
<<<<<<< HEAD
    console.log('La app esta funcionado en http://localhost:'+ port )
=======
    console.log('La app esta funcionado en http://localhost:'+ port +"/home")
>>>>>>> 4e216a6bdcb998a0a1d864d9718eed98394c9e57
})

