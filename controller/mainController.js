const fs = require("fs");
const path = require("path");
const tokensFilePath = path.join(__dirname, "../data/tokens.json")
const tokensJson = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'))
<<<<<<< HEAD
//const db = require('../config/database')
const Nft = require('../models/Nft')
//Requerir DB
//Requerir Sequelize




=======
const Nft = require('../models/Nft')
>>>>>>> 4a8b1f47676c68892ec7c84fa14405253cb393d6
const mainController = {
    home: (req, res) =>{
      res.render("index",{
        user: req.session.userLogged 
      })
    },

    market: (req, res) =>{
      Nft.findAll()
      .then(nfts => {
         res.render("market", {tokens: nfts});
      })
<<<<<<< HEAD
      .catch(err => console.log(err));
      
=======
      .catch(err => console.log(err))
>>>>>>> 4a8b1f47676c68892ec7c84fa14405253cb393d6
    },
      
    cart: (req, res) =>{
      Nft.findAll()
      .then(nfts => {
         res.render("carrito", {tokens: nfts});
      })
      .catch(err => console.log(err));
    },

    
}
  
module.exports = mainController;
