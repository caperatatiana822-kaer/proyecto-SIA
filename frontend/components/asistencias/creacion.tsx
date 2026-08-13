"use client";

import { useState } from "react";

const aprendicesEjemplo = [
    { id: 1, nombres: "Laura", apellidos: "Gómez Pérez" },
    { id: 2, nombres: "Andrés", apellidos: "Ramírez Torres" },
    { id: 3, nombres: "Camila", apellidos: "Rojas Díaz" },
];

export default function RegistrarAsistenciaPage() {

    const [asistencias, setAsistencias] = useState<Record<number, string>>({});

    function handleMarcar(idAprendiz: number, estado: string) {
        setAsistencias({
            ...asistencias,
            [idAprendiz]: estado,
        });
    }

    function handleGuardar() {
        console.log("Asistencias registradas:", asistencias);

        alert("Asistencias guardadas (modo prueba, sin backend todavía)");
    }

    return (
        <div>

            <h1 className="text-xl font-semibold text-gray-900 mb-1">
                Registrar asistencia
            </h1>
            <p className="text-sm text-gray-500 mb-6">
                Marca la asistencia del día para cada aprendiz
            </p>

            <div className="bg-white border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Nombres</th>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Apellidos</th>
                            <th className="text-center px-4 py-3 font-medium text-gray-600">Asistió</th>
                            <th className="text-center px-4 py-3 font-medium text-gray-600">No asistió</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aprendicesEjemplo.map(function (aprendiz) {

                            const estadoActual = asistencias[aprendiz.id];

                            return (
                                <tr key={aprendiz.id} className="border-b last:border-0 hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-900">{aprendiz.nombres}</td>
                                    <td className="px-4 py-3 text-gray-900">{aprendiz.apellidos}</td>

                                    <td className="px-4 py-3 text-center">
                                        <input
                                            type="radio"
                                            name={"asistencia-" + aprendiz.id}
                                            checked={estadoActual === "asistio"}
                                            onChange={function () {
                                                handleMarcar(aprendiz.id, "asistio");
                                            }}
                                            className="h-4 w-4 accent-green-600"
                                        />
                                    </td>

                                    <td className="px-4 py-3 text-center">
                                        <input
                                            type="radio"
                                            name={"asistencia-" + aprendiz.id}
                                            checked={estadoActual === "no_asistio"}
                                            onChange={function () {
                                                handleMarcar(aprendiz.id, "no_asistio");
                                            }}
                                            className="h-4 w-4 accent-red-600"
                                        />
                                    </td>
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
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    Guardar asistencia
                </button>
            </div>

        </div>
    );
}