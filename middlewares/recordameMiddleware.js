//const db = require('../database/models')


/*
function recordameMiddleware(req, res, next){
   
    if(req.cookies.recordame != undefined && req.session.userLogged == undefined){
        db.Users.findOne({
            where: { email: req.body.email}
          })
          .then((userToLogin => {req.session.userLogged = userToLogin}))
          
          
          //let users = db.Users.findAll();
          let userToLogin = db.Users.findOne({
            where: { email: emailInCookie}
          })
          .then((userToLogin => {req.session.userLogged = userToLogin}))
    
        next()
    
    }
}
   
*/

//module.exports = recordameMiddleware;