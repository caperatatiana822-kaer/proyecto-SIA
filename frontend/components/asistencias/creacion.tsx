"use client";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

function obtenerFechasSemana(): string[] {
    const hoy = new Date();
    const diaActual = hoy.getDay(); // 0=domingo, 1=lunes, ...
    const offsetLunes = diaActual === 0 ? -6 : 1 - diaActual;

    const lunes = new Date(hoy);
    lunes.setDate(hoy.getDate() + offsetLunes);

    const fechas: string[] = [];
    for (let i = 0; i < 5; i++) {
        const dia = new Date(lunes);
        dia.setDate(lunes.getDate() + i);
        fechas.push(dia.toISOString().split("T")[0]);
    }
    return fechas;
}

export default function RegistrarAsistenciaPage() {

    const [aprendices, setAprendices] = useState<any[]>([]);
    const [marcas, setMarcas] = useState<Record<string, string>>({});
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");
    const [guardando, setGuardando] = useState(false);

    const fechasSemana = obtenerFechasSemana();

    useEffect(() => {
        const obtenerAprendices = async () => {
            try {
                setCargando(true);
                setError("");

                const response = await fetch("http://localhost:3001/api/aprendiz/AprendizAll");
                const datos = await response.json();

                if (!response.ok) {
                    throw new Error(datos.message || "Error al consultar aprendices");
                }

                setAprendices(datos.data || []);

            } catch (error: any) {
                console.error("Error al consultar aprendices:", error);
                setError(error.message || "No se pudieron cargar los aprendices");
                setAprendices([]);
            } finally {
                setCargando(false);
            }
        };

        obtenerAprendices();
    }, []);

    function claveCelda(idAprendiz: number, fecha: string) {
        return idAprendiz + "-" + fecha;
    }

    function marcarDirecto(idAprendiz: number, fecha: string, estadoElegido: string) {
        const clave = claveCelda(idAprendiz, fecha);
        const estadoActual = marcas[clave];

        const nuevasMarcas = { ...marcas };

        if (estadoActual === estadoElegido) {
            delete nuevasMarcas[clave];
        } else {
            nuevasMarcas[clave] = estadoElegido;
        }

        setMarcas(nuevasMarcas);
    }

    async function handleGuardar() {
        setGuardando(true);
        setError("");

        try {
            const claves = Object.keys(marcas);

            if (claves.length === 0) {
                alert("Marca al menos una asistencia antes de guardar");
                setGuardando(false);
                return;
            }

            for (const clave of claves) {
                const [idAprendizStr, fecha] = clave.split("-");
                const estado = marcas[clave];

                const response = await fetch("http://localhost:3001/api/asistencia/CreateAsistencia", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        aprendizId: Number(idAprendizStr),
                        fecha: fecha,
                        estado: estado,
                        observacion: "",
                    }),
                });

                const datos = await response.json();

                if (!response.ok) {
                    throw new Error(datos.message || "Error al guardar una asistencia");
                }
            }

            alert("Asistencias guardadas correctamente");
            setMarcas({});

        } catch (error: any) {
            console.error("Error al guardar asistencias:", error);
            setError(error.message || "No se pudieron guardar las asistencias");
        } finally {
            setGuardando(false);
        }
    }

    return (
        <div>

            <h1 className="text-xl font-semibold text-gray-900 mb-1">
                Registrar asistencia
            </h1>
            <p className="text-sm text-gray-500 mb-4">
                Haz clic en el check o la equis para marcar la asistencia del aprendiz
            </p>

            <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-md bg-green-500"></span>
                    <span className="text-sm text-gray-600">Asistió</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-md bg-red-500"></span>
                    <span className="text-sm text-gray-600">No asistió</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-md bg-gray-100 border border-gray-200"></span>
                    <span className="text-sm text-gray-600">Sin marcar</span>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                    <p className="text-red-600 text-sm">{error}</p>
                </div>
            )}

            {cargando && (
                <div className="bg-white border rounded-xl p-6">
                    <p className="text-gray-500">Cargando aprendices...</p>
                </div>
            )}

            {!cargando && aprendices.length > 0 && (
                <>
                    <div className="bg-white border rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="text-left px-4 py-3 font-medium text-gray-600">
                                        Aprendiz
                                    </th>
                                    {diasSemana.map(function (dia, i) {
                                        return (
                                            <th key={dia} className="text-center px-4 py-3 font-medium text-gray-600">
                                                {dia}
                                                <div className="text-xs text-gray-400 font-normal">
                                                    {fechasSemana[i]}
                                                </div>
                                            </th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {aprendices.map(function (aprendiz) {
                                    return (
                                        <tr key={aprendiz.id} className="border-b last:border-0 hover:bg-gray-50">
                                            <td className="px-4 py-3 text-gray-900">
                                                {aprendiz.nombre} {aprendiz.apellido}
                                            </td>

                                            {fechasSemana.map(function (fecha) {
                                                const clave = claveCelda(aprendiz.id, fecha);
                                                const estado = marcas[clave];

                                                return (
                                                    <td key={clave} className="px-4 py-3">
                                                        <div className="flex items-center justify-center gap-1.5">

                                                            <button
                                                                type="button"
                                                                onClick={function () {
                                                                    marcarDirecto(aprendiz.id, fecha, "Asistio");
                                                                }}
                                                                className={
                                                                    "h-7 w-7 rounded-md flex items-center justify-center transition border " +
                                                                    (estado === "Asistio"
                                                                        ? "bg-green-500 border-green-500 text-white"
                                                                        : "bg-white border-gray-300 text-gray-300 hover:border-green-400 hover:text-green-500")
                                                                }
                                                            >
                                                                <Check className="h-4 w-4" />
                                                            </button>

                                                            <button
                                                                type="button"
                                                                onClick={function () {
                                                                    marcarDirecto(aprendiz.id, fecha, "Falto");
                                                                }}
                                                                className={
                                                                    "h-7 w-7 rounded-md flex items-center justify-center transition border " +
                                                                    (estado === "Falto"
                                                                        ? "bg-red-500 border-red-500 text-white"
                                                                        : "bg-white border-gray-300 text-gray-300 hover:border-red-400 hover:text-red-500")
                                                                }
                                                            >
                                                                <X className="h-4 w-4" />
                                                            </button>

                                                        </div>
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4">
                        <button
                            type="button"
                            onClick={handleGuardar}
                            disabled={guardando}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {guardando ? "Guardando..." : "Registrar asistencia"}
                        </button>
                    </div>
                </>
            )}

        </div>
    );
}