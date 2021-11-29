const db = require('../../database/models');

let apiController = {
 
    userList: (req, res) => {
        db.Users.findAll()
        .then(users=> {
            return res.json({
                count: users.length, 
                users: users,
                status: 200
            })
        })
    },

    givenUser: (req, res) => {
        db.Users.findByPk(req.params.id)
        .then(user=> {
            return res.json({
                data: user,
                status: 200,
            })
        })
    },


    productsList: (req, res) => {
        db.Nfts.findAll({
            include:[{association: "users"}]})
        .then(tokens=> {
            return res.json({
                count: tokens.length,
                user: tokens.user,
                products: tokens,
                status: 200
            })
        })
    },

    givenProduct: (req, res) => {
        db.Nfts.findByPk(req.params.id,{
            include:[{association: "users"}]})
        .then(token=> {
            return res.json({
                data: token,
                status: 200,
            })
        })
    },
}


module.exports = apiController;