"use client";

import { useEffect, useState } from "react";

type Currency = "EUR" | "USD" | "XOF" | "XAF";

interface Prices {
  monthly: number;
  semiAnnual: number;
  annual: number;
}

const basePriceEUR = 25; // prix de base en EUR

export default function TarifsPage() {
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [rates, setRates] = useState<Record<string, number>>({});
  const [prices, setPrices] = useState<Prices | null>(null);

  // Récupérer les taux de conversion
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=EUR&symbols=USD,XOF,XAF")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          setRates(data.rates);
        }
      })
      .catch((err) => console.error("Erreur récupération taux:", err));
  }, []);

  // Recalcul des prix quand la devise change ou quand les taux arrivent
  useEffect(() => {
    let rate = 1;
    if (currency !== "EUR" && rates[currency]) {
      rate = rates[currency];
    }

    setPrices({
      monthly: basePriceEUR * rate,
      semiAnnual: basePriceEUR * 6 * 0.85 * rate, // -15% pour 6 mois
      annual: basePriceEUR * 12 * 0.75 * rate, // -25% pour 12 mois
    });
  }, [currency, rates]);

  // Helper pour formater les prix selon la devise
  const formatPrice = (value: number, curr: Currency) => {
    if (curr === "XOF" || curr === "XAF") {
      return `${Math.round(value)} ${curr}`;
    }
    return `${value.toFixed(2)} ${curr}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Nos Tarifs</h1>

        {/* Sélecteur de devise */}
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="EUR">EUR (€)</option>
          <option value="USD">USD ($)</option>
          <option value="XOF">XOF (CFA BCEAO)</option>
          <option value="XAF">XAF (CFA BEAC)</option>
        </select>
      </div>

      {!prices ? (
        <p className="text-center">Chargement des tarifs...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Gratuit */}
          <div className="border rounded-lg p-6 shadow text-center">
            <h2 className="text-xl font-bold mb-2">Essai gratuit</h2>
            <p className="text-2xl font-bold mb-4">Gratuit</p>
            <ul className="mb-6 space-y-2">
              <li>Accès complet</li>
              <li>Support email</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Commencer l’essai
            </button>
          </div>

          {/* Mensuel */}
          <div className="border rounded-lg p-6 shadow text-center">
            <h2 className="text-xl font-bold mb-2">Mensuel</h2>
            <p className="text-2xl font-bold mb-4">
              {formatPrice(prices.monthly, currency)} / mois
            </p>
            <ul className="mb-6 space-y-2">
              <li>Tous les modules</li>
              <li>Mises à jour</li>
              <li>Support standard</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              S’abonner
            </button>
          </div>

          {/* Semestriel */}
          <div className="border rounded-lg p-6 shadow text-center">
            <h2 className="text-xl font-bold mb-2">Semestriel</h2>
            <p className="text-2xl font-bold mb-4">
              {formatPrice(prices.semiAnnual, currency)} / 6 mois
            </p>
            <ul className="mb-6 space-y-2">
              <li>Réduction 15%</li>
              <li>Tous les modules</li>
              <li>Support prioritaire</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              S’abonner
            </button>
          </div>

          {/* Annuel */}
          <div className="border rounded-lg p-6 shadow text-center">
            <h2 className="text-xl font-bold mb-2">Annuel</h2>
            <p className="text-2xl font-bold mb-4">
              {formatPrice(prices.annual, currency)} / an
            </p>
            <ul className="mb-6 space-y-2">
              <li>Réduction 25%</li>
              <li>Tous les modules</li>
              <li>Support prioritaire</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              S’abonner
            </button>
          </div>
        </div>
      )}

      {/* Bloc entreprise */}
      <div className="mt-8 border rounded-lg p-6 shadow text-center">
        <h2 className="text-xl font-bold mb-2">Entreprise</h2>
        <p className="text-2xl font-bold mb-4">Sur devis</p>
        <ul className="mb-6 space-y-2">
          <li>SLA dédié</li>
          <li>SSO & conformité</li>
          <li>Intégrations personnalisées</li>
        </ul>
        <button className="bg-gray-600 text-white px-4 py-2 rounded">
          Nous contacter
        </button>
      </div>
    </div>
  );
}
