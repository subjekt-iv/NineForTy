const express = require('express')
const app = express()
const port = 3030
const path = require('path')
const methodOverride = require("method-override");
const multer = require("multer");
const session = require('express-session');
const recordameMiddleware = require('./middlewares/recordameMiddleware');
const cookieParser = require('cookie-parser')

app.listen(port, ()=>{
    console.log('La app esta funcionado en http://localhost:'+ port )
})

/*
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})
  
var upload = multer({ storage: storage});

*/

const indexRouter = require("./routes/");
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');



app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(recordameMiddleware);
app.use(express.static('public'));
app.use(session({secret: "secret"}))

app.get('*', function (request, response){
    response.send('NOT FOUND', 404)
});

/*app.use(function(req, res, next) {
    next(createError(404));
});*/

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));





module.exports = app