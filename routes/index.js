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

module.exports = router;