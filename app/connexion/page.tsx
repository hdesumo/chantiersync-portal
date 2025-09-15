"use client";

import { useState } from "react";
import { setSession } from "@/lib/session";

export default function ConnexionPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔑 Stocke un token fictif
    setSession("fake-token-" + Date.now());
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow max-w-md w-full text-center space-y-4">
          <h1 className="text-2xl font-bold text-green-700 dark:text-green-300">
            ✅ Connecté avec succès
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Vous êtes maintenant connecté. Cliquez ci-dessous pour accéder à votre tableau de bord.
          </p>
          <a
            href="https://admin.chantiersync.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light transition"
          >
            🚀 Accéder à mon tableau de bord
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-14 px-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Connexion</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 space-y-5">
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
            placeholder="Votre email"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light"
          >
            Continuer
          </button>
        </form>
      </div>
    </main>
  );
}
