const fs = require('fs');

const User = {
    fileName: './data/users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findAll: function () {
        return this.getData();
    },


    findByPK: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },


    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },


    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1
        }
        return 1;
    },


    create: function (userData) {
        let allUsers = this.findAll();
        //creo el usuario 
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        //lo inserto en el array
        allUsers.push(newUser);
        //guardo el archivo Json
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '))
        //retorno el nuevo usuario
        return newUser
    },


    delete: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
    }


}



//module.exports = User;