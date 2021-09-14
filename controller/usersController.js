const fs = require("fs");
const path = require("path");


function findAll(){
    let usersJson= fs.readFileSync(path.join(__dirname, "../data/users.json"))
    let data = JSON.parse(usersJson)
    return data
}
  
function writeJson(array){
    let arrayJson = JSON.stringify(array);
    return fs.writeFileSync(path.join(__dirname, "../data/users.json"), arrayJson);
}

const usersController = {
    register: (req,res)=>{
        let imageVldt = req.query.ifFile;
        res.render("register", {imageVldt} )
    },
    createUSER: (req,res)=>{
        let data = findAll();
        let ultimo = data.length-1;
        if (req.file == undefined){
          res.redirect("/users/register/?ifFile=0")
          for (const key in req.query) {
            console.log(key, req.query[key])
          }
        }
      
        let newUser ={
          id: Number(data[ultimo].id)+1,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: req.body.password,
          image: "../../img/avatar"+req.file.filename
        }
        
        data.push(newUser)
        writeJson(data)
        res.redirect("/")
    } ,
    login: (req,res)=>{
        res.render("login")
    },
    userList: (req, res) =>{
    let users = findAll();
    res.render("userList", {users });
}
}

module.exports = usersController;