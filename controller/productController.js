const { sequelize } = require('../database/models');
const {validationResult , body } = require('express-validator');
const db = require('../database/models');
const Op = db.Sequelize.Op;




const productController = {
  detail: (req, res) => {
    db.Nfts.findByPk(req.params.id,{
      include:[{association: "users"}]})
    .then(nfts => {
      res.render("products/detail", {nfts: nfts})
    })
    .then();
    
  },
  highestPrice: (req, res) => {
    db.Nfts.findAll({
      where: {
        price: {[db.Sequelize.Op.gte]:5}
      }
    })
    .then(nfts => {
      res.render("highestPrice", {nfts: nfts})
    });
  },
  lowestPrice: (req, res) => {
    db.Nfts.findAll({
      where: {
        price: {[db.Sequelize.Op.lt]:5}
      }
    })
    .then(nfts => {
      res.render("lowestPrice", {nfts: nfts})
    });
  },

  myNFT: (req, res) => {
    db.Nfts.findAll()
    .then( nfts => {
      res.render("myNFT", {nfts: nfts})
    });
  },
  
  add: (req, res) => {
    res.render("products/create", {user: req.session.userLogged} )
  },


  create: (req,res, next) =>{


    const errors = validationResult(req); 

    if (errors.errors.length > 0) {
      return res.render ('products/create', {
        errors: errors.mapped(),
        oldData: req.body
      })
    }
    
    db.Nfts.create({
      price: req.body.price,
      userID: req.session.userLogged.userID,
      name: req.body.name,
      keyword: req.body.keyword,
      description: req.body.description,
      image:  req.file.filename
    }
    )
    .then(res.redirect("/market"));
    },

    edit: (req,res) =>{
      db.Nfts.findByPk(req.params.id)
      
      .then(nft => {
        res.render("products/edit", {nft: nft})
      })
    },

    update: (req, res) => {
      //console.log(req.session.userLogged.userID)
      console.log(req.body)
       
      
      db.Nfts.update({
       

       
        price: req.body.price,
        //userID: req.session.userLogged.userID,
        name: req.body.name,
        keyword: req.body.keyword,
        description: req.body.description,
        image:  req.file.filename
      },
      {
        where: {
          nftID: req.params.id
      }
      })
      
      
      res.redirect("/products/edit/" + req.params.id)
    },

    delete: (req, res) => {
      db.Nfts.destroy({
        where: {
          nftID: req.params.id
        }
      })
      res.redirect("/market")
    },
 
    destroy: (req,res,next)=>{
      db.Nfts.destroy({
        where: { nftID : req.params.id}
      })
      .then(res.redirect("/market"));
    }



}



module.exports = productController;





















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

const productController = {
    
 

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
    })

    Nft.findByPk(req.params.id,{
      include:[{association:"Usuario"}]})
    .then((token)=>{
      res.render("products/detail", {token: token})}
      )
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

*/

