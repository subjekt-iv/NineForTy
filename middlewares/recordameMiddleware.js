const fs = require("fs");
const path = require("path");
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");


function findAll(){
    let usersJson= fs.readFileSync(path.join(__dirname, "../data/users.json"))
    let data = JSON.parse(usersJson)
    return data
};

function recordameMiddleware(req, res, next){
    if(req.cookies.recordame!=undefined&&req.session.userLogged==undefined){
        let users = findAll();
        let userToLogin = users.find(user=>user.email === req.cookies.email);
        req.session.userLogged = userToLogin;
    }
    next();
}

module.exports = recordameMiddleware;