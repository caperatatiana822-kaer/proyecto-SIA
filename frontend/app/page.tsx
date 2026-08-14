import { GraduationCap, ClipboardCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InicioPage() {
    return (
        <div>

            <h1 className="text-xl font-semibold text-gray-900 mb-1">
                Bienvenido al Sistema de Información de Asistencias
            </h1>
            <p className="text-sm text-gray-500 mb-8">
                Gestiona el registro de aprendices y controla su asistencia de forma centralizada
            </p>

            <div className="bg-white border rounded-xl p-6 mb-8">
                <h2 className="text-base font-semibold text-gray-900 mb-2">
                    ¿Qué es SIA?
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    SIA es una herramienta pensada para facilitar el control de asistencia
                    de los aprendices en formación. Permite registrar aprendices, llevar
                    un historial de asistencias día a día, y consultar de forma rápida
                    quién asistió y quién no, sin depender de listados en papel.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Link
                    href="/dashboard/aprendices"
                    className="bg-white border rounded-xl p-6 hover:border-blue-400 hover:shadow-sm transition group"
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-blue-600" />
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-blue-500 transition" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Aprendices
                    </h3>
                    <p className="text-sm text-gray-500">
                        Registra y consulta la información de los aprendices del programa.
                    </p>
                </Link>

                <Link
                    href="/dashboard/asistencias"
                    className="bg-white border rounded-xl p-6 hover:border-blue-400 hover:shadow-sm transition group"
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                            <ClipboardCheck className="h-5 w-5 text-blue-600" />
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-blue-500 transition" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Asistencias
                    </h3>
                    <p className="text-sm text-gray-500">
                        Marca la asistencia diaria y consulta el historial registrado.
                    </p>
                </Link>

            </div>

        </div>
    );
}