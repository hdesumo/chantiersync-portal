export const metadata = {
  title: "Programme d’affiliation – ChantierSync",
  description: "Rejoignez le programme d’affiliation ChantierSync",
};

export default function AffiliationPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Programme d’affiliation</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Recommandez ChantierSync et recevez des récompenses pour chaque inscription confirmée provenant de vos recommandations.
          Processus : inscription → validation → lien d’affilié → suivi → récompense.
        </p>

        <form className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Nom complet</label>
              <input required className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" required className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Société / Activité</label>
              <input className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Pays</label>
              <input className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Motivation</label>
            <textarea rows={4} required className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700" />
          </div>

          <div className="pt-2">
            <button className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
              Demander à rejoindre le programme
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
