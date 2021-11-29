const db = require("../database/models")

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false

    if(req.session.userLogged) {
       res.locals.isLogged = true;
       res.locals.userLogged = req.session.userLogged
    }

    let emailInCookie = req.cookies.userEmail
    let userFromCookie = db.Users.findOne({
        where: { email: emailInCookie}
      })
      .then((userToLogin => {req.session.userLogged = userToLogin}))

    next()

}

module.exports = userLoggedMiddleware