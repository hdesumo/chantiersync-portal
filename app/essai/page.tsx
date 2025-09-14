"use client";

import { useState } from "react";
import Link from "next/link";

// Liste fictive d'emails qui ont déjà utilisé un essai gratuit
const existingTrials = ["client@chantier.com", "demo@exemple.com"];

export default function EssaiPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow max-w-lg text-center space-y-6">
          <h1 className="text-2xl font-bold text-green-700 dark:text-green-300">
            ✅ Votre essai gratuit est activé !
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Merci pour votre inscription ! Vous pouvez dès maintenant accéder à votre tableau de bord
            pour découvrir toutes les fonctionnalités de ChantierSync.
          </p>

          <a
            href="https://admin.chantiersync.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light transition"
          >
            🚀 Accéder à mon tableau de bord
          </a>

          <Link href="/" className="block mt-4 text-sm text-blue-600 hover:underline">
            ← Retour à l’accueil
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">15 jours d’essai gratuit</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Remplissez le formulaire ci-dessous pour activer votre essai gratuit et accéder à l’intégralité
          des fonctionnalités de ChantierSync pendant 15 jours.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (existingTrials.includes(email.trim().toLowerCase())) {
              setError(
                "Cette adresse email a déjà bénéficié d’un essai gratuit. Veuillez vous connecter à votre compte."
              );
              return;
            }

            setError(null);
            setSubmitted(true);
          }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 space-y-5"
        >
          {error && (
            <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-3 rounded-lg">
              {error}{" "}
              <a
                href="https://admin.chantiersync.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                Se connecter
              </a>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Nom complet</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Téléphone</label>
            <input
              type="tel"
              className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light"
            >
              Activer mon essai gratuit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
