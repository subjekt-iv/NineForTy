const express = require('express');
const fs = require("fs");
const path = require("path");
const router = express.Router();
const mainController = require("../controller/mainController");
const multer = require("multer");

const storage = multer.diskStorage({ 
   destination: function (req, file, cb) { 
      cb(null, './public/img/avatars'); 
   }, 
   filename: function (req, file, cb) { 
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})
  
var upload = multer({ storage: storage})


router.get('/', mainController.home);
router.get('/carrito', mainController.carrito);


router.get("/market", mainController.market);

module.exports = router;