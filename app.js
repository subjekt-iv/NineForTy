const express = require('express')
const app = express()
const port = 3030
const path = require('path')

app.get('/', function(request, response){
    response.render(path.join(__dirname, 'views/index.ejs'))
})

app.get('/carrito', function(request, response){
    response.render(path.join(__dirname, 'views/carrito.ejs'))
})

app.get('/market', (req, res) => {
    res.render(path.join (__dirname, 'views/market.ejs'))
})

app.get('/crear', function(request, response){
    response.render(path.join(__dirname, 'views/crear.ejs'))
})

app.use(express.static('public'))

app.get('*', function (request, response){
    response.send('NOT FOUND', 404)
})

app.listen(port, ()=>{
    console.log('La app esta funcionado en http://localhost:'+ port )
})

app.set('view engine', 'ejs');

app.set('views', './views');


