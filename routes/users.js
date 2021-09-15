const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router()
const usersController = require("../controller/usersController");
const multer = require("multer");


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})


router.get("/login", usersController.login);
router.get("/register", usersController.register);
router.get("/users", usersController.users);
/*
router.post("/register", upload.single("avatar"), mainController.createUSER);
*/

module.exports = router;