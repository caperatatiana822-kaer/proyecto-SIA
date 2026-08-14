const { DataTypes } = require('sequelize');
const  sequelize  = require("../config/conectionDB");

const Aprendiz = sequelize.define(
    'Aprendiz',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        tipoDocumento: {
            type: DataTypes.STRING(5),
            allowNull: false,
            defaultValue: 'CC',
        },
        numeroDocumento: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
    },
    {
        tableName: 'aprendices',
        timestamps: true,
    }
);

module.exports = Aprendiz;