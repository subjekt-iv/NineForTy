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
router.get('/carrito', mainController.cart);
router.get("/login", mainController.login);
router.get("/register", mainController.register);

router.post("/register", upload.single("avatar"), mainController.createUSER);


router.get("/market", mainController.market);



module.exports = router;