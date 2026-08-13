const asistencia = require('../models/asistenciaModel');


// crear registro de asistencia
const asistenciaCreate = async (data) => {
    try {
        const newAsistencia = await asistencia.create(data);
        return newAsistencia;
    }catch (error) {
        console.log(error);
        throw error; 
    }
}

// obtener todos los registros de asistencia
const asistenciaGetAll = async () => {
    try {
        const asistencias = await asistencia.findAll();
        return asistencias;
    }catch (error) {
        console.log(error);
        throw error; 
    }
}

// obtener registro de asistencia por id
const getasistenciaById = async (id) => {
    try {
        const asistenciaid = await asistencia.findOne({ where: { id } });
        return asistenciaid;
    }catch (error) {
        console.log(error);
        throw error;
    }
}

// inactivar registro de asistencia
const asistenciaDelete = async (id) => {
    try {
        const asistenciaDelete = await asistencia.destroy({ where: { id } });
        return asistenciaDelete;
    }catch (error) {
        console.log(error);
        throw error;
    }
}

// actualizar registro de asistencia
const asistenciaUpdate = async (id, data) => {
    try {
        // 1. Buscar el registro de asistencia
        const asistenciaToUpdate = await asistencia.findOne({ where: { id } });

        // 2. Si no existe, retornar null
        if (!asistenciaToUpdate) {
            return null;
        }

        // 3. Actualizar el registro de asistencia
        await asistenciaToUpdate.update(data);

        // 4. Retornar el registro de asistencia actualizado COMPLETO
        return asistenciaToUpdate;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    asistenciaCreate,
    asistenciaGetAll,
    getasistenciaById,
    asistenciaDelete,
    asistenciaUpdate
}