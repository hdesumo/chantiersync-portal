export const metadata = {
  title: "Essai gratuit – ChantierSync",
  description: "Démarrez 15 jours d'essai gratuit sur ChantierSync",
};

export default function EssaiPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">15 jours d’essai gratuit</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Remplissez ce formulaire pour activer votre essai. Nous vous recontactons sous 24h ouvrées.
        </p>

        <form className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Nom complet</label>
              <input required className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Société / Projet</label>
              <input className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Email professionnel</label>
              <input type="email" required className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Téléphone</label>
              <input type="tel" required className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Pays / Région</label>
              <input placeholder="Ex. Sénégal / Dakar" className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Objectif de l’essai</label>
              <select className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700">
                <option>Suivi projet personnel</option>
                <option>Suivi chantier entreprise</option>
                <option>Évaluation / Test comparatif</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Commentaire (facultatif)</label>
            <textarea rows={4} className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
          </div>

          <label className="flex items-start gap-3">
            <input type="checkbox" required className="mt-1" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              J’accepte d’être contacté par ChantierSync dans le cadre de mon essai gratuit (RGPD).
            </span>
          </label>

          <div className="pt-2">
            <button className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
              Démarrer mon essai gratuit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
