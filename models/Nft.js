const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize') ;
//const { FORCE } = require('sequelize/types/lib/index-hints');
const db = require('../config/database');

const Token = db.define('nfts', {
    nftID:{ 
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},

    price: {
        type: Sequelize.INTEGER
    },
    userID: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    keyword: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    createdAt: {
        type: Sequelize.INTEGER
    },
    updatedAt: {
        type: Sequelize.INTEGER
    },
    image: {
        type: Sequelize.STRING
    }
},


{timestamps: false,
tableName: 'nfts'
},

//Crear columnas de createdAt y updatedAt
)

module.exports = Token;
