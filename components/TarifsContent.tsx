"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const currencySymbols = { EUR: "€", USD: "$", XOF: "F CFA", XAF: "F CFA" };

const plans = [
  {
    title: "Essai gratuit",
    priceEUR: 0,
    period: "15 jours",
    features: ["Accès complet", "Support email"],
    cta: { href: "/essai", label: "Commencer l’essai" },
    highlight: true,
  },
  {
    title: "Mensuel",
    priceEUR: 19,
    period: "/mois",
    features: ["Tous les modules", "Mises à jour", "Support standard"],
    cta: { href: "/abonnement/mensuel", label: "S’abonner" },
  },
  {
    title: "Semestriel",
    priceEUR: 99,
    period: "/6 mois",
    features: ["Réduction 15%", "Tous les modules", "Support prioritaire"],
    cta: { href: "/abonnement/semestriel", label: "S’abonner" },
  },
  {
    title: "Annuel",
    priceEUR: 179,
    period: "/an",
    features: ["Réduction 25%", "Tous les modules", "Support prioritaire"],
    cta: { href: "/abonnement/annuel", label: "S’abonner" },
  },
  {
    title: "Entreprise",
    priceEUR: 0,
    period: "",
    features: ["SLA dédié", "SSO & conformité", "Intégrations personnalisées"],
    cta: { href: "/contact", label: "Demander un devis" },
  },
];

export default function TarifsContent() {
  const [currency, setCurrency] = useState<"EUR" | "USD" | "XOF" | "XAF">("EUR");
  const [rates, setRates] = useState<Record<string, number>>({ EUR: 1 });

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch(
          "https://api.exchangerate.host/latest?base=EUR&symbols=USD,XOF,XAF"
        );
        const data = await res.json();
        if (data?.rates) setRates({ ...data.rates, EUR: 1 });
      } catch (e) {
        console.warn("Impossible de récupérer les taux, utilisation EUR par défaut");
      }
    }
    fetchRates();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Tarifs</h1>
          {/* Sélecteur de devise */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as any)}
            className="rounded-lg border px-3 py-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
          >
            <option value="EUR">EUR (€)</option>
            <option value="USD">USD ($)</option>
            <option value="XOF">XOF (CFA)</option>
            <option value="XAF">XAF (CFA)</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plans.map((p) => {
            const convertedPrice = p.priceEUR * (rates[currency] ?? 1);
            return (
              <div
                key={p.title}
                className={`rounded-2xl shadow p-6 bg-white dark:bg-gray-800 ${
                  p.highlight ? "ring-2 ring-primary" : ""
                }`}
              >
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <p suppressHydrationWarning className="text-3xl font-extrabold mt-2">
                  {p.priceEUR === 0
                    ? p.title === "Entreprise"
                      ? "Sur devis"
                      : "Gratuit"
                    : `${convertedPrice.toFixed(2)} ${
                        currencySymbols[currency]
                      } ${p.period}`}
                </p>
                <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={p.cta.href}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2 font-semibold text-white hover:bg-primary-light"
                  >
                    {p.cta.label}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          Les conversions sont basées sur les taux en temps réel. Les prix peuvent varier légèrement selon votre banque.
        </p>
      </div>
    </section>
  );
}
