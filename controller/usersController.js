const fs = require("fs");
const path = require("path");
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");


function findAll(){
    let usersJson= fs.readFileSync(path.join(__dirname, "../data/users.json"))
    let data = JSON.parse(usersJson)
    return data
}
  
function writeJson(array){
    let arrayJson = JSON.stringify(array);
    return fs.writeFileSync(path.join(__dirname, "../data/users.json"), arrayJson);
}

/*el if va entre el req.session y el res.render

if(req.body.recordame!=undefined){
  res.cookie('recordame', usuarioALoguearse.email, usuarioALoguearse.password, {maxAge:60000})
}

*/


const usersController = {
    register: (req,res)=>{
        let imageVldt = req.query.ifFile;
        res.render("register", {imageVldt} )
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
    },
    login: (req,res)=>{
        res.render("login")
    },
    userList: (req, res) =>{
    let users = findAll();
    res.render("userList", {users });
}
}

module.exports = usersController;