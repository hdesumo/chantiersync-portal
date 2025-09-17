export default function MerciPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl text-center bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-extrabold text-green-700 mb-4">
          🎉 Merci d’avoir rejoint notre Programme Partenaires !
        </h1>

        <p className="text-gray-700 mb-6">
          Votre demande a été enregistrée avec succès.  
          Dans les prochaines heures, un membre de notre équipe vous contactera
          pour vous transmettre vos informations d’accès.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 text-left">
          <h2 className="text-xl font-semibold text-green-700 mb-3">
            🚀 Vos avantages en tant que Partenaire :
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Accès privilégié à <strong>l’Espace Partenaires</strong> dédié.</li>
            <li>Possibilité de générer des revenus grâce à vos recommandations.</li>
            <li>Contrat de partenariat <strong>flexible et résiliable à tout moment</strong>.</li>
            <li>Accompagnement personnalisé par notre équipe support.</li>
          </ul>
        </div>

        <a
          href="/"
          className="inline-block bg-green-600 text-white py-2 px-8 rounded-lg hover:bg-green-700 transition font-medium"
        >
          Retour à l’accueil
        </a>
      </div>
    </main>
  );
}
