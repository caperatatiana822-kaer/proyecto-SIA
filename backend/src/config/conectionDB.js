const {Sequelize} = require('sequelize');

const db = new Sequelize(
        database = "sia",
        username = "root",
        password = "sebastian-12*",
    {

        dialect: "mysql",
        host: "localhost",
        port: 3306
    }
);

module.exports = db;
