"use client";
import { useEffect, useState } from "react";

// Fonction pour récupérer les taux en partant de l'Euro
async function getRates(base: string = "EUR") {
  const res = await fetch(`https://api.exchangerate.host/latest?base=${base}`);
  if (!res.ok) throw new Error("Impossible de récupérer les taux de change");
  const data = await res.json();
  return data.rates;
}

const currencies = ["EUR", "USD", "XOF"]; // on peut en rajouter si besoin

export default function Pricing() {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [currency, setCurrency] = useState("EUR");

  useEffect(() => {
    async function loadRates() {
      try {
        const fetchedRates = await getRates("EUR");
        setRates(fetchedRates);
      } catch (err) {
        console.error("Erreur API taux de change :", err);
      }
    }
    loadRates();
  }, []);

  // Prix de référence en EUR
  const baseMonthly = 25;
  const baseSemester = baseMonthly * 6 * 0.85; // -15%
  const baseAnnual = baseMonthly * 12 * 0.75; // -25%

  // Conversion dynamique
  function convert(price: number) {
    if (currency === "EUR") return price.toFixed(2);
    return rates[currency] ? (price * rates[currency]).toFixed(0) : "...";
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Nos Tarifs
        </h2>

        <div className="mb-6">
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

        <div className="grid md:grid-cols-3 gap-6">
          {/* Mensuel */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Mensuel</h3>
            <p className="text-3xl font-extrabold text-green-600 mb-4">
              {convert(baseMonthly)} {currency}
            </p>
            <p className="text-gray-600">par mois</p>
          </div>

          {/* Semestre */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Semestre</h3>
            <p className="text-3xl font-extrabold text-green-600 mb-4">
              {convert(baseSemester)} {currency}
            </p>
            <p className="text-gray-600">
              pour 6 mois <br />
              <span className="text-sm text-green-700">-15% de réduction</span>
            </p>
          </div>

          {/* Annuel */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Annuel</h3>
            <p className="text-3xl font-extrabold text-green-600 mb-4">
              {convert(baseAnnual)} {currency}
            </p>
            <p className="text-gray-600">
              pour 12 mois <br />
              <span className="text-sm text-green-700">-25% de réduction</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
