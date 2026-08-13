const express = require('express');
const router = express.Router();

const {
    getAllAprendiz,
    getAllAprendizById,
    createAprendiz,
    updateAprendiz,
    deleteAprendiz
} = require("../controllers/aprendizController");

// Obtener todos los aprendices
router.get("/AprendizAll", getAllAprendiz);

// Obtener aprendiz por ID
router.get("/AprendizById/:id", getAllAprendizById);

// Crear nuevo aprendiz
router.post("/CreateAprendiz", createAprendiz);

// Actualizar aprendiz
router.put("/UpdateAprendiz/:id", updateAprendiz);

// Eliminar aprendiz
router.delete("/DeleteAprendiz/:id", deleteAprendiz);

module.exports = router;