const fs = require("fs");
const path = require("path");

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


const mainController = {
    home: (req, res) =>{
      res.render("index")
    },
    
    cart: (req, res) =>{
        res.render("carrito")
    },

    register: (req,res)=>{
        res.render("register")
    },

    login: (req,res)=>{
        res.render("login")
    },

   
    market: function(req, res){
        //obtenemos todos los autos
        let tokens = findAll() ;  
    
        //devuelvo la respuesta
        res.render("market", { tokens } )

    },
}
  
module.exports = mainController;