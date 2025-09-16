"use client";

import AffiliateForm from "@/components/AffiliateForm";

export default function PartenariatPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Programme Partenaires</h1>
        <p className="text-lg text-gray-600 mb-8">
          Rejoignez notre Programme Partenaires et profitez d’avantages exclusifs
          en recommandant ChantierSync. Complétez le formulaire ci-dessous pour
          soumettre votre demande de partenariat.
        </p>
        <AffiliateForm />
      </div>
    </section>
  );
}
