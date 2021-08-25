const fs = require('fs');
const path = require('path');

const tokensFilePath = path.join(__dirname, '../data/tokens.json');
const data = JSON.parse(fs.readFileSync(tokensFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const tokens = {
    getAll: () => {
        return data;
    },
    findById: (id)=>{
       return  data.find(elem => String(elem.id) === id)
    },
    modifiedAll: (data)=>{
        fs.writeFileSync(tokensFilePath, JSON.stringify(data))
    },
    searchByName:(stringToSearch) => {
        return data.filter(elem => elem.name.includes(stringToSearch))
    }
}

module.exports = products;