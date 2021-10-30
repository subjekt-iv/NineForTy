module.exports = (sequelize, dataTypes) => {
    let alias = 'users'
        
    let cols =  {
        userID: {
            type: dataTypes.INTEGER
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
        return Usuario
        }









       
    
    
    
    
    
    
    