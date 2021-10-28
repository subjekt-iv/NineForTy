const fs = require("fs");
const path = require("path");
const tokensFilePath = path.join(__dirname, "../data/tokens.json")
const tokensJson = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'))
//const db = require('../config/database')
const Nft = require('../models/Nft')
//Requerir DB
//Requerir Sequelize




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
      .catch(err => console.log(err));
      
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
