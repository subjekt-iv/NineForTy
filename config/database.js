const { Sequelize } = require('sequelize');
module.exports = new Sequelize('nineForty', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });