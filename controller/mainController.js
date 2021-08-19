const fs = require("fs");
const path = require("path");


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

    market: (req,res)=>{
        res.render("market")
    }

}
  
module.exports = mainController;