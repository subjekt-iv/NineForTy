module.exports = (sequelize, dataTypes) => {
    let alias = 'Users'
        
    let cols =  {
        userID: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        firstName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        userName: {
            type: dataTypes.TEXT
        },
        email: {
            type: dataTypes.INTEGER
        },
        password: {
            type: dataTypes.INTEGER
        },
        avatar: {
            type: dataTypes.STRING
        }
    };

    let config = {timestamps: false,
        tableName: 'users'
        };
        const Usuario = sequelize.define(alias, cols, config)
        
        Usuario.associate = (models) => {
            Usuario.hasMany(models.Nfts, {
                as: "nfts",
                foreignKey: "userID"
            })
        }
        return Usuario
        }









       
    
    
    
    
    
    
    