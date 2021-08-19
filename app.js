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

app.get('/create', (req, res) => {
    res.render(path.join (__dirname, 'views/create.ejs'))
})

app.get('/edit', (req, res) => {
    res.render(path.join (__dirname, 'views/edit.ejs'))
})

app.get('/register', (req, res) => {
    res.render(path.join (__dirname, 'views/register.ejs'))
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


