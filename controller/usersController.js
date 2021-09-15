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
        res.render("register")
      },

    users: (req, res) => {
        let users = findAll()
         res.render("users");
         },

         login: (req,res)=>{
            res.render("login")
        },
        
    createUSER: (req,res)=>{
            let data = findAll();
            let ultimo = data.length-1;
            let newUser = {
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
          
       
 


}

module.exports = usersController;