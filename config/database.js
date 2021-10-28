const { Sequelize } = require('sequelize');
module.exports = new Sequelize('nineForty', 'root', 'raptor700', {
    host: 'localhost',
    dialect: 'mysql'
  });