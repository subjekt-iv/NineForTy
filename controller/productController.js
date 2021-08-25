const fs = require("fs");
const path = require("path");
const methodOverride =  require('method-override');


function findAll(){
  let tokensJson= fs.readFileSync(path.join(__dirname, "../data/tokens.json"));
  let data = JSON.parse(tokensJson);
  return data;
}

function writeJson(array){
  let arrayJson = JSON.stringify(array);
  return fs.writeFileSync(path.join(__dirname, "../data/tokens.json"), arrayJson);
}


const productController = {
   
    market: (req, res) => {

      let tokens = findAll

      res.render("market", { tokens })
    },

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
      res.redirect("/market")
  
    },
  
    edit: (req,res) =>{
      let tokens = findAll();
        
        let tokenToEdit = tokens.find(function(token){
            return token.id == req.params.id
        })
        res.render("products/editNFT", {token: tokenToEdit})
    },
    
    update: function(req, res){
      let data = findAll();
  
      let nftUpdate = data.map(function(token){
        if(token.id == req.params.id){
          token.name = req.body.title,
          token.description = req.body.description,
          token.keywords = req.body.keywords.split(" "),
          token.price = req.body.price,
          token.image = "../../img/"+req.file.filename
        }
        return token;
      })
      
      writeJson(data);
  
      res.redirect("/products/detail/"+req.params.id)
  
    },
    
    detail: (req,res)=>{
        let tokens = findAll();
        
        let tokenFound = tokens.find(function(token){
            return token.id == req.params.id
        })

        res.render("products/detail", {token: tokenFound})
    },
    
    myNFT: (req, res) => {
      res.render('mynft.ejs');
    }
}

module.exports = productController;