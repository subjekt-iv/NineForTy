const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize') ;
//const { FORCE } = require('sequelize/types/lib/index-hints');
const db = require('../config/database');

const Usuario = db.define('nfts', {
    userID:{ 
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    userName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.TEXT
    },
    createdAt: {
        type: Sequelize.INTEGER
    },
    updatedAt: {
        type: Sequelize.INTEGER
    },
    avatar: {
        type: Sequelize.STRING
    }
},


{timestamps: false,
tableName: 'users'
},


)

/*Usuario.associate = function(models){
    Usuario.hasMany(models.Nft, {
        as: "nfts",
        foreignKey: "userID"
    })
}*/



module.exports = Usuario;
