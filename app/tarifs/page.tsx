"use client";
import { useEffect, useState } from "react";

// Fallback local (base EUR → autres devises)
const fallbackRates: Record<string, number> = {
  EUR: 1,
  USD: 1.1,
  XOF: 655.96,
  XAF: 655.96,
};

const basePrice = 25; // prix en EUR / mois

export default function TarifsPage() {
  const [rates, setRates] = useState<Record<string, number>>(fallbackRates);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch("https://api.exchangerate.host/latest?base=EUR&symbols=USD,XOF,XAF");
        if (!res.ok) throw new Error("API non disponible");
        const data = await res.json();
        if (data && data.rates) {
          setRates({ EUR: 1, ...data.rates });
        }
      } catch (err) {
        console.warn("⚠️ API indisponible, utilisation des fallback rates", err);
        setRates(fallbackRates);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const computePrice = (currency: string, months: number) => {
    const discount = months === 6 ? 0.85 : months === 12 ? 0.75 : 1;
    const monthlyPrice = basePrice * (rates[currency] || fallbackRates[currency]) * discount;
    return monthlyPrice.toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Nos Tarifs</h1>
      {loading && <p className="text-center text-gray-500">Chargement des taux de change...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {["EUR", "USD", "XOF", "XAF"].map((currency) => (
          <div key={currency} className="border rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Devise : {currency}</h2>
            <ul className="space-y-3">
              <li>
                <strong>Mensuel :</strong> {computePrice(currency, 1)} {currency}
              </li>
              <li>
                <strong>Semestriel (-15%) :</strong> {computePrice(currency, 6)} {currency}
              </li>
              <li>
                <strong>Annuel (-25%) :</strong> {computePrice(currency, 12)} {currency}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
