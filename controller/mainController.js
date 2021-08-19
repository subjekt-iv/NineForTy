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
    }

}
  
module.exports = mainController;