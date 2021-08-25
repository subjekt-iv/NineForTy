const fs = require("fs");
const path = require("path");

const tokensFilePath = path.join(__dirname, "../data/tokens.json")
const tokensJson = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'))
/*
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

    */

const mainController = {
    home: (req, res) =>{
      res.render("index")
    },

    market: (req, res) =>{
      res.render("market", {tokensJson})

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

/*
    market: function(req, res){
        //obtenemos todos los autos
        let tokens = findAll() ;  

        //devuelvo la respuesta
        res.render("market", { tokens } )

    },
*/
  }


module.exports = mainController; 