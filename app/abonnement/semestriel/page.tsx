import AbonnementForm from "@/components/AbonnementForm";

export const metadata = {
  title: "Abonnement Semestriel – ChantierSync",
  description: "Souscrivez à l'abonnement semestriel de ChantierSync.",
};

export default function SemestrielPage() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <AbonnementForm plan="Semestriel" priceEUR={99} period="/6 mois" />
      </div>
    </section>
  );
}
