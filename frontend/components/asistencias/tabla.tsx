"use client";

import { useEffect, useState } from "react";

export default function ConsultarAsistenciasPage() {

    const [asistencias, setAsistencias] = useState<any[]>([]);
    const [aprendices, setAprendices] = useState<any[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                setCargando(true);
                setError("");

                const [respAsistencias, respAprendices] = await Promise.all([
                    fetch("http://localhost:3001/api/asistencia/AsistenciaAll"),
                    fetch("http://localhost:3001/api/aprendiz/AprendizAll"),
                ]);

                const datosAsistencias = await respAsistencias.json();
                const datosAprendices = await respAprendices.json();

                if (!respAsistencias.ok) {
                    throw new Error(datosAsistencias.message || "Error al consultar asistencias");
                }

                if (!respAprendices.ok) {
                    throw new Error(datosAprendices.message || "Error al consultar aprendices");
                }

                setAsistencias(datosAsistencias.data || []);
                setAprendices(datosAprendices.data || []);

            } catch (error: any) {
                console.error("Error al consultar asistencias:", error);
                setError(error.message || "No se pudieron consultar las asistencias");
                setAsistencias([]);
            } finally {
                setCargando(false);
            }
        };

        obtenerDatos();
    }, []);

    function buscarAprendiz(aprendizId: number) {
    return aprendices.find(function (a) {
        return a.id === Number(aprendizId);
    });
}

    return (
        <div>

            <h1 className="text-xl font-semibold text-gray-900 mb-1">
                Consultar asistencias
            </h1>
            <p className="text-sm text-gray-500 mb-6">
                Historial de asistencias registradas
            </p>

            {cargando && (
                <div className="bg-white border rounded-xl p-6">
                    <p className="text-gray-500">Cargando asistencias...</p>
                </div>
            )}

            {error && !cargando && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <p className="text-red-600">Error: {error}</p>
                </div>
            )}

            {!cargando && !error && (
                <div className="bg-white border rounded-xl overflow-hidden">

                    {asistencias.length === 0 ? (
                        <div className="p-6 text-center text-gray-500">
                            No hay asistencias registradas.
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="text-left px-4 py-3 font-medium text-gray-600">Nombre</th>
                                    <th className="text-left px-4 py-3 font-medium text-gray-600">Apellido</th>
                                    <th className="text-left px-4 py-3 font-medium text-gray-600">Fecha</th>
                                    <th className="text-left px-4 py-3 font-medium text-gray-600">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {asistencias.map(function (registro) {

                                    const aprendiz = buscarAprendiz(registro.aprendizId);
                                    const esAsistio = registro.estado === "Asistio";

                                    return (
                                        <tr key={registro.id} className="border-b last:border-0 hover:bg-gray-50">
                                            <td className="px-4 py-3 text-gray-900">
                                                {aprendiz ? aprendiz.nombre : "—"}
                                            </td>
                                            <td className="px-4 py-3 text-gray-900">
                                                {aprendiz ? aprendiz.apellido : "—"}
                                            </td>
                                            <td className="px-4 py-3 text-gray-600">{registro.fecha}</td>
                                            <td className="px-4 py-3">
                                                <span className={
                                                    "px-2 py-1 rounded-full text-xs font-medium " +
                                                    (esAsistio
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700")
                                                }>
                                                    {esAsistio ? "Asistió" : "No asistió"}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}

                </div>
            )}

        </div>
    );
}