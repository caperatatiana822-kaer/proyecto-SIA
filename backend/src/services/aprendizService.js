const aprendiz = require('../models/aprendizModel');


// crear registro de aprendiz
const aprendizCreate = async (data) => {
    try {
        const newAprendiz = await aprendiz.create(data);
        return newAprendiz;
    }catch (error) {
        console.log(error);
        throw error; 
    }
}

// obtener todos los registros de aprendiz
const aprendizGetAll = async () => {
    try {
        const aprendices = await aprendiz.findAll();
        return aprendices;
    }catch (error) {
        console.log(error);
        throw error; 
    }
}

// obtener registro de aprendiz por id
const getaprendizById = async (id) => {
    try {
        const aprendizid = await aprendiz.findOne({ where: { id } });
        return aprendizid;
    }catch (error) {
        console.log(error);
        throw error;
    }
}

// inactivar registro de aprendiz
const aprendizDelete = async (id) => {
    try {
        const aprendizDelete = await aprendiz.destroy({ where: { id } });
        return aprendizDelete;
    }catch (error) {
        console.log(error);
        throw error;
    }
}

// actualizar registro de aprendiz
const aprendizUpdate = async (id, data) => {
    try {
        // 1. Buscar el registro de aprendiz
        const aprendizToUpdate = await aprendiz.findOne({ where: { id } });

        // 2. Si no existe, retornar null
        if (!aprendizToUpdate) {
            return null;
        }

        // 3. Actualizar el registro de aprendiz
        await aprendizToUpdate.update(data);

        // 4. Retornar el registro de aprendiz actualizado COMPLETO
        return aprendizToUpdate;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    aprendizCreate,
    aprendizGetAll,
    getaprendizById,
    aprendizDelete,
    aprendizUpdate
}