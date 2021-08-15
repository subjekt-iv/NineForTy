const express = require('express')
const app = express()
const port = 3030
const path = require('path')

app.set("view engine", "ejs");
app.set("views", "./views");

app.get('/', function(request, response){
    response.render(path.join(__dirname, 'views/index'))
})

app.get('/register', (req, res) => {
    res.render(path.join (__dirname, 'views/register'))
})

app.get('/login', (req, res) => {
    res.render(path.join (__dirname, 'views/login'))
})


app.get('/carrito', function(request, response){
    response.render(path.join(__dirname, 'views/carrito'))
})

app.get('/market', (req, res) => {
    res.render(path.join (__dirname, 'views/market'))
})

app.get('/detail', (req, res) => {
    res.render(path.join (__dirname, 'views/products/detail'))
})

app.use(express.static('public'))

app.get('*', function (request, response){
    response.send('NOT FOUND', 404)
})


app.listen(port, ()=>{
    console.log('La app esta funcionado en http://localhost:3030')
})

