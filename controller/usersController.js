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




  register: (req,res)=>{
      let imageVldt = req.query.ifFile;
      res.render("register", {
        imageVldt,
        user: req.session.userLogged
      } )
  },
  createUSER: (req,res)=>{
    let passEncrypted = bcrypt.hashSync(req.body.password,10);
    db.Users.create({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      userName: req.body.username,
      email: req.body.email,
      password: passEncrypted,
      avatar:  "../../img/avatars/"+req.file.filename
    })

    .then(res.redirect("/users/login"));
  },
    /*  let data = findAll();
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
*/login: (req,res)=>{
  let errors = [];
    res.render("login",{errors})
},
 processLogin:(req,res)=>{
  db.Users.findOne({
    where: { email: req.body.email},
  }).then(function(result){
    
    
    userToLogin = result 
  
    if(userToLogin){
      //let passwordCheck = bcrypt.compareSync(req.body.password, userToLogin.password)
      if(req.body.password == userToLogin.password){
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        if(req.body.recordame!==undefined){
         res.cookie('recordame', userToLogin.email, userToLogin.password, {maxAge:60000})
         
        };
        res.redirect("/users/profile/")
      } else{
        return res.render("login", { 
          errors: {
            password: {
              msg: "Wrong password"
            }
          }})
        }
      } else {
        return res.render("login", { 
            errors: {
              email: {
                msg: "There's no account associated with this email"
               }
              }}
          );
        }
      }
    )
  },  
  
  profile: (req,res)=>{
    db.Users.findByPk(req.session.userLogged.userID)
    .then(user => res.render("profile", {
      user: user
    }))
    
  },
  editProfile: (req,res)=>{
    db.Users.findByPk(req.session.userLogged.userID)
    .then(user => res.render("editProfile", {
      user:user
    }));
  },
  updateProfile: (req,res)=>{
    let userToEdit = req.session.userLogged;

    console.log(userToEdit)
    console.log(req.body)
    console.log(req.file)
    if ( req.body.password == req.body.password2 ){
    db.Users.update({
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      userName:req.body.userName,
      email:req.body.email,
      password:req.body.password,
      avatar:  "../../img/avatars/"+req.file.filename
    },
    {where:
      { userID : userToEdit.userID}
    })
    .then(res.redirect("/users/profile/"))
    } else {
      return res.render("editProfile", { 
        errors: {
          password: {
            msg: "Passwords don't match"
          }
        },
        user: req.session.userLogged })
    }
    
      /*{
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
      */
  }

}
module.exports = usersController