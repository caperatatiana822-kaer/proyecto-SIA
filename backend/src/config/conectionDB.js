const { Sequelize } = require('sequelize');

const db = new Sequelize('SIA', 'root', 'kelly12345', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = db;