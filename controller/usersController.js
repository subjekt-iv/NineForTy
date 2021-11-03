const fs = require("fs");
const path = require("path");
const { validationResult, body } = require('express-validator');
const User = require('../models/User')
const bcrypt = require("bcryptjs");
const db = require('../database/models')


/*function findAll(){
    let usersJson= fs.readFileSync(path.join(__dirname, "../data/users.json"))
    let data = JSON.parse(usersJson)
    return data
}
  
function writeJson(array){
    let arrayJson = JSON.stringify(array);
    return fs.writeFileSync(path.join(__dirname, "../data/users.json"), arrayJson);
}
*/
const usersController = {
  userList: (req, res) =>{
    db.Users.findAll()
    .then(users => {
      res.render("userList", {users: users})
    })
    /*
    res.render("userList", {users,
      user: req.session.userLogged });
      */
  },


/*

  register: (req,res)=>{
      let imageVldt = req.query.ifFile;
      res.render("register", {
        imageVldt,
        user: req.session.userLogged
      } )
  },
  createUSER: (req,res)=>{
      let data = findAll();
      let ultimo = data.length-1;
      if (req.file == undefined){
        res.redirect("/users/register/")
      }
      let errors = validationResult(req);
      let passEncrypted = bcrypt.hashSync(req.body.password,10);
      let newUser ={
        id: Number(data[ultimo].id)+1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: passEncrypted,
        username: req.body.username,
        avatar: "../../img/avatars/"+req.file.filename
      }
      data.push(newUser)
      writeJson(data)
      res.redirect("/")
      /*if (errors.isEmpty()) {
        
      }
      
      
    }
    */
   /*
    
} else {
  console.log(req.body);
  console.log(errors);
  res.render("register", { errors: errors.mapped(), old: req.body });
},*/
login: (req,res)=>{
  let errors = [];
    res.render("login",{errors})
},
 processLogin:(req,res)=>{
   let userToLogin = undefined;
  db.Users.findOne({
    where: { email: req.body.email}
  }).then((result => console.log(result))
  )
  
  console.log(userToLogin)
  req.session.userLogged = userToLogin
  if(userToLogin){
    console.log(userToLogin)
    console.log(req.session.userLogged)}


  
  /*let userToLogin = users.find(user=>user.email === req.body.email);
  if(userToLogin){
    let passwordCheck = bcrypt.compareSync(req.body.password, userToLogin.password)
    if(passwordCheck){
      delete userToLogin.password;
      req.session.userLogged = userToLogin;
      if(req.body.recordame!==undefined){
        res.cookie('recordame', userToLogin.email, userToLogin.password, {maxAge:60000})
      }
      res.redirect("/users/profile");
    } else{
      return res.render("login", { 
        errors: {
          password: {
            msg: "Wrong password"
          }
        }})
    }
  }
  else {
    return res.render("login", { 
        errors: {
          email: {
            msg: "There's no account associated with this email"
          }
        }}
    );
  };*/
},/*

 
  profile: (req,res)=>{
    res.render("profile", {
      user: req.session.userLogged 
    });
  },
  editProfile: (req,res)=>{
    let userToEdit = req.session.userLogged;
    res.render("editProfile", {
      user: req.session.userLogged 
    });
  },/*
  updateProfile: (req,res)=>{
    let users = findAll();
    let userToEdit = users.find(id => req.session.userLogged.id);
      {
        userToEdit.first_name: req.body.first_name,
        userToEdit.last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        image: "../../img/avatars/"+req.file.filename
      }
      data.push(newUser)
      writeJson(data)
      res.redirect("/users/profile",{
      user: req.session.userLogged 
    }));
  }*/
/*

    userList: (req, res) =>{
      let users = findAll();
      res.render("userList", {users,
        user: req.session.userLogged });
    },
    profile: (req,res)=>{
      res.render("profile", {
        user: req.session.userLogged 
      });
    }
  }
  */
}
module.exports = usersController