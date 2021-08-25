const express = require('express')
const app = express()
const port = 3030
const path = require('path')
const methodOverride = require("method-override");
const multer = require("multer");

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})
  
var upload = multer({ storage: storage})

const indexRouter = require("./routes/index");
const productsRouter = require('./routes/products');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:false}));

app.use('/', indexRouter);
app.use('/products', productsRouter);

/*app.get('/register', (req, res) => {
    res.render(path.join (__dirname, 'views/register.ejs'))
})

app.get('/mynft', (req, res) => {
    res.render(path.join (__dirname, 'views/mynft.ejs'))
})

app.get('/create', (req, res) => {
    res.render(path.join (__dirname, 'views/create.ejs'))
})

app.get('/edit', (req, res) => {
    res.render(path.join (__dirname, 'views/edit.ejs'))
})

app.get('/login', (req, res) => {
    res.render(path.join (__dirname, 'views/login.ejs'))
})*/

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


