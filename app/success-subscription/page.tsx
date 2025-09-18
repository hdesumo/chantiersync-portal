export default function SuccessSubscriptionPage() {
  return (
    <section className="py-16 px-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Demande envoyée avec succès</h1>
      <p className="text-gray-700 mb-6">
        Votre demande d’abonnement a été reçue. Notre équipe vous contactera très bientôt.
      </p>
      <a
        href="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Retour à l’accueil
      </a>
    </section>
  );
}
