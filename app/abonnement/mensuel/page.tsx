import AbonnementForm from "@/components/AbonnementForm";

export const metadata = {
  title: "Abonnement Mensuel – ChantierSync",
  description: "Souscrivez à l'abonnement mensuel de ChantierSync.",
};

export default function MensuelPage() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <AbonnementForm plan="Mensuel" priceEUR={19} period="/mois" />
      </div>
    </section>
  );
}
