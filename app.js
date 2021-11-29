const express = require('express');
const app = express();
const port = 3030;
const path = require('path')
const methodOverride = require("method-override");
const multer = require("multer");
const session = require("express-session");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const indexRouter = require("./routes/");
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const apiRouter= require('./routes/apiRoutes.js');
const recordameMiddleware = require('./middlewares/recordameMiddleware');
const cors = require('cors')

//DB
const db = require('./database/config/config')
//const Nft = require('./database/models/index')

app.use(express.json());

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(cors())
//app.use(recordameMiddleware);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

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





//app.use(session({secret: "secret"}))


/*app.get('*', function (req, res){
    res.status('NOT FOUND', 404).send(body)
});

app.use(function(req, res, next) {
    next(createError(404));
});*/







module.exports = app