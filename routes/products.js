const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router()
const productController = require("../controller/productController");
const multer = require("multer");

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})
  
var upload = multer({ storage: storage})

router.get("/create", productController.create);
router.post("/create", upload.single("nftFile"), productController.store);
router.get("/edit/:id", productController.edit);
router.put("/edit/:id", upload.single("nftFile"), productController.update);
router.get("/detail/:id", productController.detail);
router.get('/myNFT', productController.myNFT);

/*
router.delete("/delete/:id" , productController.destroy);*/

module.exports = router;
