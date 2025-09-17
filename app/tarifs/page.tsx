// app/tarifs/page.tsx
"use client";
import { useState } from "react";

const rates = {
  EUR: 1,
  USD: 1.08,
  XOF: 655.96,
  XAF: 655.96,
  GBP: 0.85,
};

const formatPrice = (base: number, currency: string) => {
  const price = base * (rates as any)[currency];
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
};

export default function TarifsPage() {
  const [currency, setCurrency] = useState("EUR");

  const plans = [
    {
      title: "Mensuel",
      base: 25,
      desc: "Facturation chaque mois.",
      cta: "Commencer l’essai",
      link: "/essai-gratuit",
    },
    {
      title: "Semestriel",
      base: 25 * 6 * 0.85,
      desc: "15% de réduction sur 6 mois.",
      cta: "S’abonner",
      link: "/abonnement",
    },
    {
      title: "Annuel",
      base: 25 * 12 * 0.75,
      desc: "25% de réduction sur 12 mois.",
      cta: "S’abonner",
      link: "/abonnement",
    },
    {
      title: "Entreprise",
      base: 0,
      desc: "Solutions sur mesure pour votre société.",
      cta: "Nous contacter",
      link: "/contact",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Titre + Sélecteur devise */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Nos Tarifs</h1>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border px-3 py-2 rounded-md text-sm"
        >
          {Object.keys(rates).map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>

      {/* Grille responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="border rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              {plan.base > 0 ? (
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  {formatPrice(plan.base, currency)}
                  <span className="text-base font-normal text-gray-500">
                    {" "}
                    / {plan.title === "Mensuel"
                      ? "mois"
                      : plan.title === "Semestriel"
                      ? "6 mois"
                      : "an"}
                  </span>
                </p>
              ) : (
                <p className="text-2xl font-semibold text-green-600 mb-4">
                  Sur devis
                </p>
              )}
            </div>

            <a
              href={plan.link}
              className="block mt-4 w-full text-center bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
