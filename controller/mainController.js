const fs = require("fs");
const path = require("path");

const tokensFilePath = path.join(__dirname, "../data/tokens.json")
const tokensJson = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'))




const mainController = {
    home: (req, res) =>{
      res.render("index")
    },

    market: (req, res) =>{
      res.render("market", {tokens: tokensJson});
    },
      
    cart: (req, res) =>{
        res.render("carrito")
    },

    
}
  
module.exports = mainController;
