const express = require('express');
const fs = require("fs");
const path = require("path");
const router = express.Router();
const mainController = require("../controller/mainController");
const multer = require("multer");
const { check } = require("express-validator");



router.get('/', mainController.home);
router.get('/carrito', mainController.cart);
router.get("/market", mainController.market);
router.get('pruebaSession', function (req, res) {

if(req.session.numeroVisitas == undefined) {
   req.session.numeroVisitas = 0 
}
numeroVisitas ++ 
router.send('session tiene el numero + req.session.numeroVisitas')
})

module.exports = router;