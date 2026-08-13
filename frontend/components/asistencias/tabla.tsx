const asistenciasEjemplo = [
    { id: 1, nombres: "Laura", apellidos: "Gómez Pérez", fecha: "2026-08-08", estado: "Asistió" },
    { id: 2, nombres: "Andrés", apellidos: "Ramírez Torres", fecha: "2026-08-08", estado: "No asistió" },
    { id: 3, nombres: "Camila", apellidos: "Rojas Díaz", fecha: "2026-08-08", estado: "Asistió" },
];

export default function ConsultarAsistenciasPage() {

    return (
        <div>

            <h1 className="text-xl font-semibold text-gray-900 mb-1">
                Consultar asistencias
            </h1>
            <p className="text-sm text-gray-500 mb-6">
                Historial de asistencias registradas
            </p>

            <div className="bg-white border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Nombres</th>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Apellidos</th>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Fecha</th>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {asistenciasEjemplo.map(function (registro) {

                            const esAsistio = registro.estado === "Asistió";

                            return (
                                <tr key={registro.id} className="border-b last:border-0 hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-900">{registro.nombres}</td>
                                    <td className="px-4 py-3 text-gray-900">{registro.apellidos}</td>
                                    <td className="px-4 py-3 text-gray-600">{registro.fecha}</td>
                                    <td className="px-4 py-3">
                                        <span className={
                                            "px-2 py-1 rounded-full text-xs font-medium " +
                                            (esAsistio
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700")
                                        }>
                                            {registro.estado}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    );
}