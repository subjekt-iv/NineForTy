const express = require('express');
const router = express.Router();
const mainController = require("../controller/mainController");

router.get('/', mainController.home);
router.get("/market", mainController.market);
router.get('/carrito', mainController.cart);
router.get("/login", mainController.login);
router.get("/register", mainController.register);



module.exports = router;