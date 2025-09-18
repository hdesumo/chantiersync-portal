import SubscriptionForm from "@/components/SubscriptionForm";

export default function AbonnementPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Demande d’abonnement</h1>
        <p className="text-gray-600">
          Remplissez ce formulaire pour souscrire à l’un de nos abonnements (mensuel, semestriel ou annuel).
        </p>
      </div>

      <SubscriptionForm />
    </section>
  );
}
