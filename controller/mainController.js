const db = require('../database/models')

//const Nft = require('../database/models/Nft')
const mainController = {
    home: (req, res) =>{
      res.render("index",{
        user: req.session.userLogged 
      })
    },

    market: (req, res) =>{
      db.Nfts.findAll()
      .then(nfts => {
         res.render("market", {nfts: nfts});
      })
      .catch(err => console.log(err))
    },
      
    cart: (req, res) =>{
      Nft.findAll()
      .then(nfts => {
         res.render("carrito", {tokens: nfts});
      })
      .catch(err => console.log(err));
    },

    
}
module.exports = mainController;
