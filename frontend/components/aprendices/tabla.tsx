"use client";

import { useEffect, useState } from "react";

export default function ConsultarAprendicesPage() {

    const [aprendices, setAprendices] = useState<any[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const obtenerAprendices = async () => {
            try {
                setCargando(true);
                setError("");

                const response = await fetch("http://localhost:3001/api/aprendiz/AprendizAll")
                const datos = await response.json();
                console.log("Respuesta del backend:", datos);

                if (!response.ok) {
                    throw new Error(datos.message || "Error al consultar aprendices");
                }

                setAprendices(datos.data || []);

            } catch (error: any) {
                console.error("Error al consultar aprendices:", error);
                setError(error.message || "No se pudieron consultar los aprendices");
                setAprendices([]);
            } finally {
                setCargando(false);
            }
        };

        obtenerAprendices();
    }, []);

    return (
        <div >

            <h1 className="text-xl font-semibold text-gray-900 mb-1">
                Consultar aprendices
            </h1>
            <p className="text-sm text-gray-500 mb-6">
                Listado de aprendices registrados
            </p>

            {cargando && (
                <div className="bg-white border rounded-xl p-6">
                    <p className="text-gray-500">Cargando aprendices...</p>
                </div>
            )}

            {error && !cargando && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <p className="text-red-600">Error: {error}</p>
                </div>
            )}

            {!cargando && !error && (
                <div className="bg-white border rounded-xl overflow-hidden">

                    {aprendices.length === 0 ? (
                        <div className="p-6 text-center text-gray-500">
                            No hay aprendices registrados.
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="text-left px-4 py-3 font-medium text-gray-600">Nombres</th>
                                    <th className="text-left px-4 py-3 font-medium text-gray-600">Apellidos</th>
                                    <th className="text-left px-4 py-3 font-medium text-gray-600">Documento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aprendices.map(function (aprendiz) {
                                    return (
                                        <tr key={aprendiz.id} className="border-b last:border-0 hover:bg-gray-50">
                                            <td className="px-4 py-3 text-gray-900">{aprendiz.nombre}</td>
                                            <td className="px-4 py-3 text-gray-900">{aprendiz.apellido}</td>
                                            <td className="px-4 py-3 text-gray-600">{aprendiz.tipoDocumento} {aprendiz.numeroDocumento}</td>
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