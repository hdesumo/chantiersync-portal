import AbonnementForm from "@/components/AbonnementForm";

export const metadata = {
  title: "Abonnement Annuel – ChantierSync",
  description: "Souscrivez à l'abonnement annuel de ChantierSync.",
};

export default function AnnuelPage() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <AbonnementForm plan="Annuel" priceEUR={179} period="/an" />
      </div>
    </section>
  );
}
