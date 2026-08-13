const express = require("express");

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// DB
const db = require("./src/config/conectionDB");

// Rutas
const aprendizRoute = require("./src/routes/aprendizRoute");
const asistenciaRoute = require("./src/routes/asistenciaRoute");

// Middlewares

const app = express();

const PORT = process.env.PORT || 3001;

// Middlewares globales
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Ruta base
app.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a asistencia API",
    });
});

// Rutas API
app.use("/api/aprendiz", aprendizRoute);
app.use("/api/asistencia", asistenciaRoute);

// Ruta no encontrada
app.use((req, res) => {
    res.status(404).json({
        message: "Ruta no encontrada"
    });
});

// Iniciar el servidor
const init = async () => {
    try {
        await db.authenticate();

        console.log("Conexión a DB exitosa.");

        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en el puerto ${PORT}`);
        });

    } catch (error) {
        console.error("Error al conectar con la DB:", error);
    }
};

init();