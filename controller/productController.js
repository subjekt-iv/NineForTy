const fs = require("fs");
const path = require("path");
const Tokens = require('../models/Tokens')
const Nft = require('../models/Nft')
const Usuario = require('../models/Usuario')


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

  store: (req, res) =>{
    let data = findAll();
    let ultimo = data.length-1;
    let newNFT ={
      id: Number(data[ultimo].id)+1,
      name: req.body.title,
      description: req.body.description,
      keywords: req.body.tags.split(" "), 
      price: req.body.price,
      image: "../../img/"+req.file.filename
    }

    data.push(newNFT)
    writeJson(data)
    res.redirect("market")

  },

  detail: (req,res)=>{
    /*let tokens = findAll();
    
    let tokenFound = tokens.find(function(token){
        return token.id == req.params.id
    })*/

    Nft.findByPk(req.params.id,{
      include:[{association:"Usuario"}]})
    .then((token)=>{
      res.render("products/detail", {token: token})}
      )
  },

  edit: (req,res) =>{
    let tokens = findAll();
      
      let tokenToEdit = tokens.find(function(token){
          return token.id == req.params.id
      })
      res.render("products/edit", {token: tokenToEdit})
  },

  update: (req, res) => {
      //obtener autos
      

      //actualizo mi array
      let tokensActualizados = Tokens.getAll().map(token => {
        if(token.id == req.params.id){
          //token.name = req.body.title,
          //token.description = req.body.description,
          //token.keywords = req.body.keywords.split(" "),
          //token.price = req.body.price,
          //token.image = "../img/"+req.file.filename
          token.name = req.body.title
          token.description = req.body.description
          token.keywords = req.body.keywords
					token.price = req.body.price
          token.image = req.file ?  req.file.filename : token.image
        }
        return token;
      })
      
      //escribo el json
      writeJson(data);

      res.redirect("/products/detail/"+req.params.id)

  },

  myNFT: (req, res) => {
    let tokens = findAll();

    res.render('mynft.ejs', { tokens });
  },

  destroy: (req,res) => {

    
    
      //busco todos los autos
      let tokensActualizados = Tokens.getAll().filter(elem => elem.id != req.params.id);

      Tokens.modifiedAll(tokensActualizados);
		res.redirect('/market');


  }
      
}
module.exports = productController;
