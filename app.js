const express = require('express')
const app = express()
const port = 3030
const path = require('path')

const indexRouter = require("./routes/index");
const productsRouter = require('./routes/products');


app.use('/', indexRouter);


app.use('/products', productsRouter);





app.use(express.static('public'))

app.get('*', function (request, response){
    response.send('NOT FOUND', 404)
})

/*app.use(function(req, res, next) {
    next(createError(404));
  });*/

app.listen(port, ()=>{
    console.log('La app esta funcionado en http://localhost:'+ port )
})

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));


