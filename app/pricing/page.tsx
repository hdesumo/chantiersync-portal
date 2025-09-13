"use client";

import React from "react";
import { Button } from "../../components/ui/button";

export default function PricingPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      {/* Bandeau explicatif */}
      <div className="bg-blue-50 border border-blue-200 text-blue-900 p-4 rounded-lg mb-8 text-center">
        <p className="text-sm md:text-base">
          💡 <strong>Tarifs en euros</strong> pour faciliter les paiements de la diaspora.
          Paiement sécurisé en ligne par Carte Bancaire ou Mobile Money.
        </p>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">
        Nos offres d’abonnement
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Offre gratuite */}
        <div className="border rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Essentiel</h2>
          <p className="mb-4">Suivi de chantier de base</p>
          <p className="text-2xl font-bold mb-4">Gratuit</p>
          <Button>Commencer</Button>
        </div>

        {/* Offre Pro */}
        <div className="border rounded-lg p-6 text-center shadow-xl bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Pro</h2>
          <p className="mb-4">Rapports avancés + support prioritaire</p>
          <p className="text-2xl font-bold mb-4">79 € / mois</p>
          <Button>Choisir Pro</Button>
        </div>

        {/* Offre Entreprise */}
        <div className="border rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Entreprise</h2>
          <p className="mb-4">Solutions sur mesure pour grands projets</p>
          <p className="text-2xl font-bold mb-4">Sur devis</p>
          <Button>Contactez-nous</Button>
        </div>
      </div>
    </section>
  );
}
