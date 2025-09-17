export default function MerciEssaiPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl text-center bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-4">
          🎉 Merci d’avoir demandé votre essai gratuit !
        </h1>

        <p className="text-gray-700 mb-6">
          Votre demande a été enregistrée avec succès.  
          Profitez de <strong>15 jours d’accès gratuit</strong> à notre plateforme pour découvrir toutes ses fonctionnalités.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6 text-left">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            ✅ Étapes suivantes :
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Un email de confirmation vous sera envoyé sous peu.</li>
            <li>Vous recevrez vos identifiants d’accès par notre équipe.</li>
            <li>Explorez toutes les fonctionnalités sans engagement.</li>
          </ul>
        </div>

        <a
          href="/"
          className="inline-block bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Retour à l’accueil
        </a>
      </div>
    </main>
  );
}
