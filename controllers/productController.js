const fs = require("fs");
const path = require("path");

function findAll(){
    //leer el json
    let tokensJson= fs.readFileSync(path.join(__dirname, "../data/tokens.json"))
  
    //parsear la inform
    let data = JSON.parse(tokensJson)
    return data
  }
  
  function writeJson(array){
    //transformamos en un string
    let arrayJson = JSON.stringify(array);
    
    //procesamos la inform en el Json
    return fs.writeFileSync(path.join(__dirname, "../data/tokens.json"), arrayJson);
  
  }