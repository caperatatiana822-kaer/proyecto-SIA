"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CrearAprendizPage() {

    const router = useRouter();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [tipoDocumento, setTipoDocumento] = useState("CC");
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [error, setError] = useState("");
    const [guardando, setGuardando] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setGuardando(true);

        try {
          const response = await fetch("http://localhost:3001/api/aprendiz/CreateAprendiz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre,
                    apellido,
                    tipoDocumento,
                    numeroDocumento,
                }),
            });

            const datos = await response.json();
            console.log("Respuesta del backend:", datos);

            if (!response.ok) {
                throw new Error(datos.message || "Error al registrar el aprendiz");
            }

            router.push("/dashboard/aprendices/table");
            alert("Aprendiz registrado correctamente");

        } catch (error: any) {
            console.error("Error al registrar aprendiz:", error);
            setError(error.message || "No se pudo registrar el aprendiz");
        } finally {
            setGuardando(false);
        }
    }

    return (
        <div className="max-w-lg mx-auto">

            <h1 className="text-xl font-semibold text-gray-900 mb-1">
                Registrar aprendiz
            </h1>
            <p className="text-sm text-gray-500 mb-6">
                Completa los datos del aprendiz
            </p>

            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                    <p className="text-red-600 text-sm">{error}</p>
                </div>
            )}

            <div className="bg-white border rounded-xl p-6">
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre
                        </label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={function (e) {
                                setNombre(e.target.value);
                            }}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Apellido
                        </label>
                        <input
                            type="text"
                            value={apellido}
                            onChange={function (e) {
                                setApellido(e.target.value);
                            }}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tipo de documento
                        </label>
                        <select
                            value={tipoDocumento}
                            onChange={function (e) {
                                setTipoDocumento(e.target.value);
                            }}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        >
                            <option value="CC">Cédula de ciudadanía</option>
                            <option value="TI">Tarjeta de identidad</option>
                            <option value="CE">Cédula de extranjería</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Número de documento
                        </label>
                        <input
                            type="text"
                            value={numeroDocumento}
                            onChange={function (e) {
                                setNumeroDocumento(e.target.value);
                            }}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={guardando}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                    >
                        {guardando ? "Guardando..." : "Registrar aprendiz"}
                    </button>

                </form>
            </div>

        </div>
    );
}