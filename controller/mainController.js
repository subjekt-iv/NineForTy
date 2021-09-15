const fs = require("fs");
const path = require("path");

const tokensFilePath = path.join(__dirname, "../data/tokens.json")
const tokensJson = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'))
/*
function findAll(){
  let usersJson= fs.readFileSync(path.join(__dirname, "../data/users.json"))
  let data = JSON.parse(usersJson)
  return data
}

function writeJson(array){
  let arrayJson = JSON.stringify(array);
  return fs.writeFileSync(path.join(__dirname, "../data/users.json"), arrayJson);
}
*/

const mainController = {
    home: (req, res) =>{
      res.render("index")
    },

    market: (req, res) =>{
      res.render("market", {tokens: tokensJson});
      },
      
      carrito: (req, res) =>{
        res.render("carrito")
      },
    
}
  
module.exports = mainController;
