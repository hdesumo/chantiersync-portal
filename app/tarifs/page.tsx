"use client";
import { useEffect, useState } from "react";

// Fonction pour récupérer les taux de change
async function getRates(base: string = "EUR") {
  const res = await fetch(`https://api.exchangerate.host/latest?base=${base}`);
  if (!res.ok) throw new Error("Impossible de récupérer les taux de change");
  return res.json();
}

const currencies = ["EUR", "USD", "XOF"];

export default function PricingPage() {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [currency, setCurrency] = useState("EUR");

  useEffect(() => {
    async function loadRates() {
      try {
        const data = await getRates("EUR");
        setRates(data.rates);
      } catch (err) {
        console.error(err);
      }
    }
    loadRates();
  }, []);

  // Prix de référence (en EUR)
  const baseMonthly = 25;
  const baseSemester = baseMonthly * 6 * 0.85; // -15%
  const baseAnnual = baseMonthly * 12 * 0.75; // -25%

  // Conversion
  function convert(price: number) {
    if (currency === "EUR") return price.toFixed(2);
    return rates[currency] ? (price * rates[currency]).toFixed(0) : "...";
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10">
          Nos Tarifs
        </h1>

        {/* Sélecteur de devise */}
        <div className="mb-8">
          <label htmlFor="currency" className="mr-2 font-medium">
            Devise :
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border rounded p-2"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Essai gratuit */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Essai gratuit</h3>
            <p className="text-3xl font-extrabold text-green-600 mb-4">
              Gratuit
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>Accès complet</li>
              <li>Support email</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Commencer l’essai
            </button>
          </div>

          {/* Mensuel */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Mensuel</h3>
            <p className="text-3xl font-extrabold text-green-600 mb-4">
              {convert(baseMonthly)} {currency} /mois
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>Tous les modules</li>
              <li>Mises à jour</li>
              <li>Support standard</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              S’abonner
            </button>
          </div>

          {/* Semestre */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Semestriel</h3>
            <p className="text-3xl font-extrabold text-green-600 mb-4">
              {convert(baseSemester)} {currency} /6 mois
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>Réduction 15%</li>
              <li>Tous les modules</li>
              <li>Support prioritaire</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              S’abonner
            </button>
          </div>

          {/* Annuel */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Annuel</h3>
            <p className="text-3xl font-extrabold text-green-600 mb-4">
              {convert(baseAnnual)} {currency} /an
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>Réduction 25%</li>
              <li>Tous les modules</li>
              <li>Support prioritaire</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              S’abonner
            </button>
          </div>

          {/* Entreprise */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 md:col-span-4">
            <h3 className="text-xl font-bold mb-2">Entreprise</h3>
            <p className="text-2xl font-extrabold text-gray-800 mb-4">
              Sur devis
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>SLA dédié</li>
              <li>SSO & conformité</li>
              <li>Intégrations personnalisées</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Contacter l’équipe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
