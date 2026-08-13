const aprendicesEjemplo = [
    {
        id: 1,
        nombres: "Laura",
        apellidos: "Gómez Pérez",
        tipoDocumento: "CC",
        numeroDocumento: "1102345678",
    },
    {
        id: 2,
        nombres: "Andrés",
        apellidos: "Ramírez Torres",
        tipoDocumento: "TI",
        numeroDocumento: "1004567890",
    },
    {
        id: 3,
        nombres: "Camila",
        apellidos: "Rojas Díaz",
        tipoDocumento: "CC",
        numeroDocumento: "1098765432",
    },
];

export default function ConsultarAprendicesPage() {

    return (
        <div>

            <h1 className="text-xl font-semibold text-gray-900 mb-1">
                Consultar aprendices
            </h1>
            <p className="text-sm text-gray-500 mb-6">
                Listado de aprendices registrados
            </p>

            <div className="bg-white border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Nombres</th>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Apellidos</th>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Documento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aprendicesEjemplo.map(function (aprendiz) {
                            return (
                                <tr key={aprendiz.id} className="border-b last:border-0 hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-900">{aprendiz.nombres}</td>
                                    <td className="px-4 py-3 text-gray-900">{aprendiz.apellidos}</td>
                                    <td className="px-4 py-3 text-gray-600">{aprendiz.tipoDocumento} {aprendiz.numeroDocumento}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    );
}