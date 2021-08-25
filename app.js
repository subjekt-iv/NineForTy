const express = require('express')
const app = express()
const port = 3030
const path = require('path')

const indexRouter = require("./routes/");
const productsRouter = require('./routes/products');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', indexRouter);
app.use('/products', productsRouter);

app.get('/register', (req, res) => {
    res.render(path.join (__dirname, 'views/register.ejs'))
})


app.use(express.static('public'))

app.get('*', function (request, response){
    response.send('NOT FOUND', 404)
})

/*app.use(function(req, res, next) {
    next(createError(404));
});*/



module.exports = app;