"use client";

export default function DashboardTable() {
  const projets = [
    {
      nom: "Projet A",
      responsable: "Mme Diop",
      avancement: 80,
      jalon: "Pose des fondations",
      deadline: "30/09/2025",
    },
    {
      nom: "Projet B",
      responsable: "M. Kameni",
      avancement: 55,
      jalon: "Coulage dalle RDC",
      deadline: "15/10/2025",
    },
    {
      nom: "Projet C",
      responsable: "Mme Kouassi",
      avancement: 35,
      jalon: "Livraison matériaux",
      deadline: "28/09/2025",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Projet
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Responsable
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Avancement
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prochain jalon
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Échéance
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {projets.map((p, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <td className="px-4 py-3 whitespace-nowrap font-semibold">
                {p.nom}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">{p.responsable}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className={`h-2.5 rounded-full ${
                      p.avancement < 50
                        ? "bg-red-500"
                        : p.avancement < 75
                        ? "bg-yellow-400"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${p.avancement}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500">{p.avancement}%</span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">{p.jalon}</td>
              <td className="px-4 py-3 whitespace-nowrap">{p.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
