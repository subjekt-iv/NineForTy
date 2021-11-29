const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router()
const createTokenMiddleware = require('../middlewares/createTokenMiddleware')
//const authMiddleware = require('../middlewares/createAuthMiddleware')
const productController = require("../controller/productController");
const multer = require("multer");
//const bodyParser = require('body-parser')


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})

var upload = multer({ storage: storage})

router.get("/create", productController.add);
router.post("/create", upload.single("botonupload"), createTokenMiddleware, productController.create);
router.get("/edit/:id", productController.edit);
router.post("/edit/:id", upload.single("botonupload"), productController.update);
router.get("/highestPrice", productController.highestPrice)
router.get("/detail/:id", productController.detail);
router.post("/delete/:id" , productController.delete);
router.get("/myNFT", productController.myNFT);




module.exports = router;

/*productController.destroy*/