"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function RegistrarAprendizPage() {

    const [formulario, setFormulario] = useState({
        nombres: "",
        apellidos: "",
        tipoDocumento: "CC",
        numeroDocumento: "",
        correo: "",
        telefono: "",
        ficha: "",
    });

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value,
        });
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Datos del formulario:", formulario);

    }

    return (
        <div className="max-w-2xl justify-center mx-auto p-6">

            <h1 className="text-xl font-semibold text-gray-900 mb-1">
                Registrar aprendiz
            </h1>
            <p className="text-sm text-gray-500 mb-6">
                Completa los datos del nuevo aprendiz
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white border rounded-xl p-6">

                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Nombres
                        </label>
                        <input
                            type="text"
                            name="nombres"
                            value={formulario.nombres}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Apellidos
                        </label>
                        <input
                            type="text"
                            name="apellidos"
                            value={formulario.apellidos}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        />
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Tipo de documento
                        </label>
                        <select
                            name="tipoDocumento"
                            value={formulario.tipoDocumento}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        >
                            <option value="CC">Cédula de ciudadanía</option>
                            <option value="TI">Tarjeta de identidad</option>
                            <option value="CE">Cédula de extranjería</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Número de documento
                        </label>
                        <input
                            type="text"
                            name="numeroDocumento"
                            value={formulario.numeroDocumento}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        />
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-4">

                </div>
            
                <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    Registrar aprendiz
                </button>

            </form>

        </div>
    );
}