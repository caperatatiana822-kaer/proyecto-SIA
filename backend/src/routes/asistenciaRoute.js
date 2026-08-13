const express = require('express');
const router = express.Router();

const {
    getAllAsistencia,
    getAllAsistenciaById,
    createAsistencia,
    updateAsistencia,
    deleteAsistencia
} = require("../controllers/asistenciaController");

// Obtener todas las asistencias
router.get("/AsistenciaAll", getAllAsistencia);

// Obtener asistencia por ID
router.get("/AsistenciaById/:id", getAllAsistenciaById);

// Crear nueva asistencia
router.post("/CreateAsistencia", createAsistencia);

// Actualizar asistencia
router.put("/UpdateAsistencia/:id", updateAsistencia);

// Eliminar asistencia
router.delete("/DeleteAsistencia/:id", deleteAsistencia);

module.exports = router;