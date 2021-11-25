const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router()
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
router.post("/create", upload.single("botonupload"), productController.create);
router.get("/edit/:id", productController.edit);
router.post("/edit/:id", upload.single("botonupload"), productController.update);
router.get("/highestPrice", productController.highestPrice)
router.get("/detail/:id", productController.detail);
router.post("/delete/:id" , productController.delete);
router.get("/myNFT", productController.myNFT);
<<<<<<< HEAD

=======
router.get("/delete/:id" , productController.destroy);
>>>>>>> d619b9385aaee9e354a74fccf59b9e02c381fb63




module.exports = router;

/*productController.destroy*/