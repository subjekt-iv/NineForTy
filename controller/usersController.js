const fs = require("fs");
const path = require("path");
const { validationResult, body } = require('express-validator');
const User = require('../models/User')
const bcrypt = require("bcryptjs");


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
    register: (req,res)=>{
        //let imageVldt = req.query.ifFile;
        res.render('register') //, {imageVldt} )
    },

    processRegister: (req, res) => {
      const resultValidation = validationResult(req);
      if(resultValidation.errors.length > 0) {
        return res.render('register', {
          errors: resultValidation.mapped(),
          oldData: req.body
        
        });
      }

      let userInDB = User.findByField('email', req.body.email);
      if(userInDB) {
        return res.render('register', {
          errors: {
            email: {
              msg: 'Este email ya esta registrado'
            }
          },
          oldData: req.body
        });
      }

      let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        avatar: req.file.filename
      }

      let userCreated = User.create(userToCreate);

      return res.redirect('/login');

     /* User.create(req.body);
      return res.send('Usuario creado con exito')
      */
    },

    login: (req,res)=>{
      res.render("login")
    },

    userList: (req, res) =>{
      let users = findAll();
      res.render("userList", {users });
  }




    
    
}












    /*
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
          image: "../../img/avatar"+req.file.filename
        }
        data.push(newUser)
        writeJson(data)
        res.redirect("/")
        /*if (errors.isEmpty()) {
          
        }
        
        
    } else {
      console.log(req.body);
      console.log(errors);
      res.render("register", { errors: errors.mapped(), old: req.body });*/
    /* },
    login: (req,res)=>{
        res.render("login")
    },
   
}

*/


module.exports = usersController