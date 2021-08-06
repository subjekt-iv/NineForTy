const express = require('express')
const app = express()
const port = 3030
const path = require('path')

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join (__dirname, 'views/register.html'))
})


app.get('/carrito', function(request, response){
    response.sendFile(path.join(__dirname, 'views/carrito.html'))
})

app.get('/market', (req, res) => {
    res.sendFile(path.join (__dirname, 'views/market.html'))
})


app.use(express.static('public'))

app.get('*', function (request, response){
    response.send('NOT FOUND', 404)
})


app.listen(port, ()=>{
    console.log('La app esta funcionado en http://localhost:3030')
})

