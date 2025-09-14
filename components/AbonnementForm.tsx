"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  plan: string;
  priceEUR?: number;
  period?: string;
};

const currencySymbols = { EUR: "€", USD: "$", XOF: "F CFA", XAF: "F CFA" };

// Génère une clé de licence simple
function generateLicenseKey(plan: string): string {
  const prefix = plan.slice(0, 3).toUpperCase(); // MEN / SEM / ANN
  const unique = Math.random().toString(36).substring(2, 8).toUpperCase();
  const year = new Date().getFullYear();
  return `${prefix}-${year}-${unique}`;
}

export default function AbonnementForm({ plan, priceEUR, period }: Props) {
  const [formData, setFormData] = useState({ nom: "", email: "", telephone: "" });
  const [currency, setCurrency] = useState<"EUR" | "USD" | "XOF" | "XAF">("EUR");
  const [rates, setRates] = useState<Record<string, number>>({ EUR: 1 });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [licenseKey, setLicenseKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Récup des taux (client only)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://api.exchangerate.host/latest?base=EUR&symbols=USD,XOF,XAF"
        );
        const data = await res.json();
        if (data?.rates) setRates({ ...data.rates, EUR: 1 });
      } catch {
        // On reste en EUR si échec
        console.warn("Taux indisponibles, fallback EUR");
      }
    })();
  }, []);

  const convertedPrice = priceEUR ? (priceEUR * (rates[currency] ?? 1)).toFixed(2) : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // ✅ Empêche le reload
    setError(null);
    setSubmitting(true);
    try {
      // Simulation d’appel API
      await new Promise((r) => setTimeout(r, 300));
      const newKey = generateLicenseKey(plan);
      setLicenseKey(newKey);
      console.log("[Abonnement] Payload:", {
        ...formData,
        plan,
        currency,
        price: convertedPrice,
        licenseKey: newKey,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  // Vue succès
  if (submitted) {
    return (
      <div className="p-6 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-50 rounded-2xl shadow space-y-4 max-w-md mx-auto">
        <h2 className="text-2xl font-bold">Demande envoyée ✅</h2>
        <p>Merci <strong>{formData.nom}</strong>, votre abonnement est presque activé.</p>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow space-y-2">
          <h3 className="text-lg font-bold">Récapitulatif</h3>
          <p><strong>Plan :</strong> {plan}</p>
          {priceEUR ? (
            <p><strong>Prix :</strong> {convertedPrice} {currencySymbols[currency]} {period}</p>
          ) : (
            <p><strong>Prix :</strong> Sur devis</p>
          )}
          <p><strong>Email :</strong> {formData.email}</p>
          <p><strong>Téléphone :</strong> {formData.telephone}</p>
          {licenseKey && (
            <p className="font-mono text-blue-700 dark:text-blue-300">
              <strong>Clé de licence :</strong> {licenseKey}
            </p>
          )}
        </div>

        <Link
          href="/tarifs"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2 font-semibold text-white hover:bg-primary-light"
        >
          ← Retour aux tarifs
        </Link>
      </div>
    );
  }

  // Vue formulaire
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"
    >
      {/* Encart plan */}
      <div className="mb-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-700">
        <h2 className="text-xl font-bold mb-2">Abonnement {plan}</h2>
        {priceEUR ? (
          <>
            <p className="text-gray-700 dark:text-gray-200">
              Prix : <strong>{convertedPrice} {currencySymbols[currency]}</strong> {period}
            </p>
            <div className="mt-2">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm"
              >
                <option value="EUR">EUR (€)</option>
                <option value="USD">USD ($)</option>
                <option value="XOF">XOF (CFA)</option>
                <option value="XAF">XAF (CFA)</option>
              </select>
            </div>
          </>
        ) : (
          <p className="text-gray-700 dark:text-gray-200">Sur devis — un conseiller vous contactera.</p>
        )}
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-100 text-red-700">{error}</div>
      )}

      <input
        type="text"
        name="nom"
        placeholder="Votre nom"
        value={formData.nom}
        onChange={handleChange}
        required
        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3"
      />
      <input
        type="tel"
        name="telephone"
        placeholder="Votre numéro de téléphone"
        value={formData.telephone}
        onChange={handleChange}
        required
        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3"
      />

      <button
        type="submit"
        disabled={submitting}
        aria-disabled={submitting}
        className={`w-full rounded-lg px-4 py-3 font-semibold text-white transition 
        ${submitting ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-light"}`}
      >
        {submitting ? "Traitement..." : "Générer ma licence"}
      </button>
    </form>
  );
}
