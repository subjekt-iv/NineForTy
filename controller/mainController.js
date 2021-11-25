const db = require('../database/models');
const Op = db.Sequelize.Op;

//const Nft = require('../database/models/Nft')
const mainController = {
    home: (req, res) =>{
      res.render("index",{
        user: req.session.userLogged 
      })
    },

    market: (req, res) =>{
      db.Nfts.findAll({
          include:[{association: "users"}],
          order: [["price", "ASC"]]
        }
      )
      .then(nfts => {
         res.render("market", {nfts: nfts});
      })
      .catch(err => console.log(err))
    },
    search:( req, res, next ) =>{
      db.Nfts.findAll({
        include:[{association: "users"}],
        where: {
          name: {[Op.like]:"%"+ req.query.value +"%"}
        }
      }).then(nfts => {
        res.render("market", {nfts: nfts});
     })
     .catch(err => console.log(err))
    },
      
    cart: (req, res) =>{
      
      db.Nfts.findByPk(req.params.id)
      .then(nfts => {
        res.render("carrito", {nfts: nfts})
      })
      .catch(err => console.log(err))
        
    }

    
}
module.exports = mainController;
