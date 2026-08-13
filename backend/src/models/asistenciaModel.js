const { DataTypes } = require('sequelize');
const  sequelize  = require('../config/conectionDB');

const Asistencia = sequelize.define(
    'Asistencia',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        aprendizId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        estado: {
            type: DataTypes.ENUM(
                'Falto',
                'Asistio',
            ),
            allowNull: false,
            defaultValue: 'Asistio',
        },
        observacion: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    },
    {
        tableName: 'asistencias',
        timestamps: true,
    }
);

module.exports = Asistencia;