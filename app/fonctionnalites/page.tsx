export const metadata = {
  title: "Fonctionnalités – ChantierSync",
  description: "Tout ce que ChantierSync apporte aux chantiers et aux équipes",
};

const items = [
  {
    problem: "Retards & absence de reporting",
    solution: "Rapports photo/vidéo datés et géolocalisés, envoyés en temps réel.",
  },
  {
    problem: "Communication terrain ↔ bureau inefficace",
    solution: "Flux unifié : commentaires, check-lists et notifications automatiques.",
  },
  {
    problem: "Surcoûts & fraudes difficiles à détecter",
    solution: "Historique centralisé, traçabilité des livrables, alertes de dérives.",
  },
  {
    problem: "Investisseurs de la diaspora mal informés",
    solution: "Tableaux de bord partagés, progression visuelle, accès sécurisé.",
  },
  {
    problem: "Documents & médias dispersés",
    solution: "Stockage organisé, tags, recherche et partage par lien sécurisé.",
  },
];

export default function FonctionnalitesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Fonctionnalités</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          ChantierSync résout les problèmes récurrents des chantiers grâce à des outils simples et efficaces.
        </p>

        <div className="grid gap-6">
          {items.map((x, i) => (
            <div key={i} className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6 grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Problème</h3>
                <p className="text-gray-700 dark:text-gray-300">{x.problem}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-500">Solution</h3>
                <p className="text-gray-700 dark:text-gray-300">{x.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
