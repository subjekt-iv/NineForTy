const port = 3030
const path = require('path')
const express = require('express');


const indexRouter = require("./routes/index");

const productsRouter = require('./routes/products');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', indexRouter);
app.use('/products', productsRouter);

app.get('/register', (req, res) => {
    res.render(path.join (__dirname, 'views/register.ejs'))
})
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));
app.get('*', function (request, response){
    response.send('NOT FOUND', 404)
})
/*app.use(function(req, res, next) {
    next(createError(404));
});*/

app.listen(port, ()=>{
    console.log('La app esta funcionado en http://localhost:'+ port )
})




module.exports = app;