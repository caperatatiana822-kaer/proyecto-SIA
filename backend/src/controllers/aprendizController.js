const { aprendizCreate, aprendizUpdate, aprendizDelete, getaprendizById, aprendizGetAll } = require("../services/aprendizService");
const Response = require("../functions/response");

// Obtener todos los registros
const getAllAprendiz = async (req, res) => {
    try {
        const aprendiz = await aprendizGetAll();
        const response = new Response("Registros de aprendiz obtenidos exitosamente", aprendiz, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.error("Error en getAllAprendiz:", error);
        const errorResponse = new Response("Error interno del servidor", null, [
            { message: error.message || "Ocurrió un error inesperado" }
        ]);
        res.status(500);
        res.json(errorResponse.json);
    }
};

// Obtener un registro por id
const getAllAprendizById = async (req, res) => {
    try {
        const { id } = req.params;
        var errors = [];

        if (!id) {
            errors.push("El ID del aprendiz es obligatorio");
        }

        if (errors.length > 0) {
            var response = new Response("Error al obtener el aprendiz", null, errors);
            res.status(400)
            res.json(response.json);
            return;
        }

        data = { id }

        const aprendiz = await getaprendizById(id)

        var response = new Response(`Aprendiz ${id} obtenido exitosamente`, aprendiz, null);
        res.status(201);
        res.json(response.json);

    } catch (error) {
        console.error("Error en getAllAprendizById:", error);
        const errorResponse = new Response("Error interno del servidor", null, [
            { message: error.message || "Ocurrió un error inesperado" }
        ]);
        res.status(500);
        res.json(errorResponse.json);
    }
}

// Crear registro del aprendiz
const createAprendiz = async (req, res) => {
    try {

        // nombre
        // apellido
        // tipo de documento
        // numero de documento

        const { nombres, apellidos, tipoDocumento, numeroDocumento } = req.body;

        var errors = [];

        // Validaciones

        if (!nombres || nombres.trim() === "") {
            errors.push("El nombre del aprendiz es obligatorio");
        }

        if (!apellidos || apellidos.trim() === "") {
            errors.push("El apellido del aprendiz es obligatorio");
        }

        if (!tipoDocumento || tipoDocumento.trim() === "") {
            errors.push("El tipo de documento es obligatorio");
        }

        if (!numeroDocumento || numeroDocumento.toString().trim() === "") {
            errors.push("El número de documento es obligatorio");
        }

        if (errors.length > 0) {
            var response = new Response("Error al crear el aprendiz", null, errors);
            res.status(400)
            res.json(response.json);
            return;
        }

        data = {
            nombres,
            apellidos,
            tipoDocumento,
            numeroDocumento
        }

        const aprendiz = await aprendizCreate(data)

        var response = new Response("Aprendiz creado exitosamente", aprendiz, null);
        res.status(201);
        res.json(response.json);

    } catch (error) {
        console.error("Error en createAprendiz:", error);
        const errorResponse = new Response("Error interno del servidor", null, [
            { message: error.message || "Ocurrió un error inesperado" }
        ]);
        res.status(500);
        res.json(errorResponse.json);
    }
}

// Actualizar registro del aprendiz
const updateAprendiz = async (req, res) => {
    try {

        const { id } = req.params;

        const { nombres, apellidos, tipoDocumento, numeroDocumento } = req.body;

        var errors = [];

        // Validaciones

        if (!id) {
            errors.push("El ID del aprendiz es obligatorio");
        }

        if (!nombres || nombres.trim() === "") {
            errors.push("El nombre del aprendiz es obligatorio");
        }

        if (!apellidos || apellidos.trim() === "") {
            errors.push("El apellido del aprendiz es obligatorio");
        }

        if (!tipoDocumento || tipoDocumento.trim() === "") {
            errors.push("El tipo de documento es obligatorio");
        }

        if (!numeroDocumento || numeroDocumento.toString().trim() === "") {
            errors.push("El número de documento es obligatorio");
        }

        if (errors.length > 0) {
            var response = new Response("Error al actualizar el aprendiz", null, errors);
            res.status(400)
            res.json(response.json);
            return;
        }

        data = {
            id,
            nombres,
            apellidos,
            tipoDocumento,
            numeroDocumento
        }

        const aprendiz = await aprendizUpdate(id, data)

        var response = new Response(`Aprendiz ${id} actualizado exitosamente`, aprendiz, null);
        res.status(201);
        res.json(response.json);

    } catch (error) {
        console.error("Error en updateAprendiz:", error);
        const errorResponse = new Response("Error interno del servidor", null, [
            { message: error.message || "Ocurrió un error inesperado" }
        ]);
        res.status(500);
        res.json(errorResponse.json);
    }
}

// Eliminar registro del aprendiz
const deleteAprendiz = async (req, res) => {
    try {

        const { id } = req.params;

        var errors = [];

        if (!id) {
            errors.push("El ID del aprendiz es obligatorio");
        }

        if (errors.length > 0) {
            var response = new Response("Error al eliminar el aprendiz", null, errors)
            res.status(400)
            res.json(response.json);
            return;
        }

        const aprendiz = await aprendizDelete(id)

        var response = new Response(`Aprendiz ${id} eliminado exitosamente`, { id }, null);
        res.status(201);
        res.json(response.json);

    } catch (error) {
        console.error("Error en deleteAprendiz:", error);
        const errorResponse = new Response("Error interno del servidor", null, [
            { message: error.message || "Ocurrió un error inesperado" }
        ]);
        res.status(500);
        res.json(errorResponse.json);
    }
}

module.exports = {
    getAllAprendiz,
    getAllAprendizById,
    createAprendiz,
    updateAprendiz,
    deleteAprendiz
};