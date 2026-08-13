const {
  asistenciaCreate,
  asistenciaUpdate,
  asistenciaDelete,
  getasistenciaById,
  asistenciaGetAll,
} = require("../services/asistenciaService");
const Response = require("../functions/response");

// Obtener todos los registros
const getAllAsistencia = async (req, res) => {
  try {
    const asistencia = await asistenciaGetAll();
    const response = new Response(
      "Registros de asistencia obtenidos exitosamente",
      asistencia,
      null,
    );
    res.status(200);
    res.json(response.json);
  } catch (error) {
    console.error("Error en getAllAsistencia:", error);
    const errorResponse = new Response("Error interno del servidor", null, [
      { message: error.message || "Ocurrió un error inesperado" },
    ]);
    res.status(500);
    res.json(errorResponse.json);
  }
};

// Obtener un registro por id
const getAllAsistenciaById = async (req, res) => {
  try {
    const { id } = req.params;
    var errors = [];

    if (!id) {
      errors.push("El ID de la asistencia es obligatorio");
    }

    if (errors.length > 0) {
      var response = new Response(
        "Error al obtener la asistencia",
        null,
        errors,
      );
      res.status(400);
      res.json(response.json);
      return;
    }

    data = { id };

    const asistencia = await getasistenciaById(id);

    var response = new Response(
      `Asistencia ${id} obtenida exitosamente`,
      asistencia,
      null,
    );
    res.status(201);
    res.json(response.json);
  } catch (error) {
    console.error("Error en getAllAsistenciaById:", error);
    const errorResponse = new Response("Error interno del servidor", null, [
      { message: error.message || "Ocurrió un error inesperado" },
    ]);
    res.status(500);
    res.json(errorResponse.json);
  }
};

// Crear registro de asistencia
const createAsistencia = async (req, res) => {
  try {
    // ID del aprendiz
    // fecha
    // estado
    // observacion

    const { aprendizId, fecha, estado, observacion } = req.body;

    var errors = [];

    // Validaciones

    if (!aprendizId || aprendizId.toString().trim() === "") {
      errors.push("El ID del aprendiz es obligatorio");
    }

    if (!fecha || fecha.trim() === "") {
      errors.push("La fecha de asistencia es obligatoria");
    }

    if (!estado || estado.trim() === "") {
      errors.push("El estado de la asistencia es obligatorio");
    }

    if (errors.length > 0) {
      var response = new Response("Error al crear la asistencia", null, errors);
      res.status(400);
      res.json(response.json);
      return;
    }

    data = {
      aprendizId,
      fecha,
      estado,
      observacion,
    };

    const asistencia = await asistenciaCreate(data);

    var response = new Response(
      "Asistencia creada exitosamente",
      asistencia,
      null,
    );
    res.status(201);
    res.json(response.json);
  } catch (error) {
    console.error("Error en createAsistencia:", error);
    const errorResponse = new Response("Error interno del servidor", null, [
      { message: error.message || "Ocurrió un error inesperado" },
    ]);
    res.status(500);
    res.json(errorResponse.json);
  }
};

// Actualizar registro de asistencia
const updateAsistencia = async (req, res) => {
  try {
    const { id } = req.params;

    const { aprendizId, fecha, estado, observacion } = req.body;

    var errors = [];

    // Validaciones

    if (!id) {
      errors.push("El ID de la asistencia es obligatorio");
    }

    if (!aprendizId || aprendizId.toString().trim() === "") {
      errors.push("El ID del aprendiz es obligatorio");
    }

    if (!fecha || fecha.trim() === "") {
      errors.push("La fecha de asistencia es obligatoria");
    }

    if (!estado || estado.trim() === "") {
      errors.push("El estado de la asistencia es obligatorio");
    }

    if (errors.length > 0) {
      var response = new Response(
        "Error al actualizar la asistencia",
        null,
        errors,
      );
      res.status(400);
      res.json(response.json);
      return;
    }

    data = {
      id,
      aprendizId,
      fecha,
      estado,
      observacion,
    };

    const asistencia = await asistenciaUpdate(id, data);

    var response = new Response(
      `Asistencia ${id} actualizada exitosamente`,
      asistencia,
      null,
    );
    res.status(201);
    res.json(response.json);
  } catch (error) {
    console.error("Error en updateAsistencia:", error);
    const errorResponse = new Response("Error interno del servidor", null, [
      { message: error.message || "Ocurrió un error inesperado" },
    ]);
    res.status(500);
    res.json(errorResponse.json);
  }
};

// Eliminar registro de asistencia
const deleteAsistencia = async (req, res) => {
  try {
    const { id } = req.params;

    var errors = [];

    if (!id) {
      errors.push("El ID de la asistencia es obligatorio");
    }

    if (errors.length > 0) {
      var response = new Response(
        "Error al eliminar la asistencia",
        null,
        errors,
      );
      res.status(400);
      res.json(response.json);
      return;
    }

    const asistencia = await asistenciaDelete(id);

    var response = new Response(
      `Asistencia ${id} eliminada exitosamente`,
      { id },
      null,
    );
    res.status(201);
    res.json(response.json);
  } catch (error) {
    console.error("Error en deleteAsistencia:", error);
    const errorResponse = new Response("Error interno del servidor", null, [
      { message: error.message || "Ocurrió un error inesperado" },
    ]);
    res.status(500);
    res.json(errorResponse.json);
  }
};

module.exports = {
  getAllAsistencia,
  getAllAsistenciaById,
  createAsistencia,
  updateAsistencia,
  deleteAsistencia,
};
