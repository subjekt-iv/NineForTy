const fs = require("fs");
const path = require("path");
const tokensFilePath = path.join(__dirname, "../data/tokens.json")
const tokensJson = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'))
const Nft = require('../models/Nft')
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
      .catch(err => console.log(err))
    },
      
    cart: (req, res) =>{
        res.render("carrito")
    },

    
}
  
module.exports = mainController;
