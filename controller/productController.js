const fs = require("fs");
const path = require("path");
const methodOverride =  require('method-override');


function findAll(){
  
//leer Json
  let tokensJson= fs.readFileSync(path.join(__dirname, "../data/tokens.json"))

//parsear la info

  let data = JSON.parse(tokensJson)
  return data
}

function writeJson(array){
  //transformamos en un string
  let arrayJson = JSON.stringify(array);
  
  //procesamos la inform en el Json
  return fs.writeFileSync(path.join(__dirname, "../data/tokens.json"), arrayJson);
}


const productController = {
   


    create: (req,res) =>{
        res.render("products/create")
    },

    edit: (req,res) =>{
        res.render("products/edit")
    },

    
    detail: (req,res)=>{
        let tokens = findAll();
        
        let tokenFound = tokens.find(function(token){
            return token.id == req.params.id
        })

        res.render("products/detail", {token: tokenFound})
    }

}

module.exports = productController;