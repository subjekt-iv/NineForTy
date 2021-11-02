


module.exports = (sequelize, dataTypes) => {
let alias = 'Nfts'
    
let cols =  {
    nftID:{ 
        type: dataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    price: {
        type: dataTypes.INTEGER
    },
    userID: {
        type: dataTypes.INTEGER
    },
    name: {
        type: dataTypes.STRING
    },
    keyword: {
        type: dataTypes.STRING
    },
    description: {
        type: dataTypes.TEXT
    },
    createdAt: {
        type: dataTypes.INTEGER
    },
    updatedAt: {
        type: dataTypes.INTEGER
    },
    image: {
        type: dataTypes.STRING
    }
};



let config = {timestamps: false,
    tableName: 'nfts'
    };


const Nft = sequelize.define(alias, cols, config)

Nft.associate = (models) => {
    Nft.belongsTo(models.Users, {
        as: "users",
        foreignKey: "userID"
    })
}
return Nft
}