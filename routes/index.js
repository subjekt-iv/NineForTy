const express = require('express');
const fs = require("fs");
const path = require("path");
const router = express.Router();
const mainController = require("../controller/mainController");
const multer = require("multer");
const { check } = require("express-validator");
const Nft = require('../models/Nft')
const db = require('../config/database')




router.get('/', mainController.home);
router.get('/carrito', mainController.cart);
router.get('/market', mainController.market);

//Testing (Get Token from DB)
/*router.get('/market', (req, res) => 
Nft.findAll()
.then(nfts => {
   res.render("market", {tokens: nfts});
})
.catch(err => console.log(err)));*/

router.get('pruebaSession', function (req, res) {

if(req.session.numeroVisitas == undefined) {
   req.session.numeroVisitas = 0 
}
numeroVisitas ++ 
router.send('session tiene el numero + req.session.numeroVisitas')
})




/*


//Testing (Add Token to DB)
*/
module.exports = router;