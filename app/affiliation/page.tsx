"use client";

import { useState } from "react";
import Link from "next/link";

const existingAffiliates = ["test@exemple.com", "partner@chantier.com"];

export default function AffiliationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [societe, setSociete] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Fonction de validation
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!nom.trim()) newErrors.nom = "Veuillez entrer votre nom complet.";
    if (!email.trim()) {
      newErrors.email = "Veuillez entrer votre email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Veuillez entrer un email valide.";
    }
    if (existingAffiliates.includes(email.trim().toLowerCase())) {
      newErrors.email =
        "Cette adresse email est déjà affiliée. Veuillez vous connecter à votre espace partenaire.";
    }
    if (telephone && !/^\+?[0-9]{6,15}$/.test(telephone)) {
      newErrors.telephone = "Numéro de téléphone invalide (6-15 chiffres).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow max-w-lg text-center space-y-6">
          <h1 className="text-2xl font-bold text-green-700 dark:text-green-300">
            🎉 Demande envoyée !
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Merci pour votre intérêt dans notre programme d’affiliation !  
            Notre équipe étudiera votre demande et vous enverra un lien d’affilié sous 48 heures.
          </p>
          <a
            href="https://partners.chantiersync.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light transition"
          >
            🚀 Accéder à l’espace partenaire
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Programme d’affiliation</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Recommandez ChantierSync et recevez des récompenses pour chaque inscription confirmée.
          Processus : inscription → validation → lien d’affilié → suivi → commission.
        </p>

        <p className="mb-8">
          Vous avez déjà un compte partenaire ?{" "}
          <a
            href="https://partners.chantiersync.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Accédez directement à votre espace partenaire
          </a>
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Nom complet</label>
              <input
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
                className={`w-full rounded-lg border px-3 py-2 ${
                  errors.nom ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } bg-white/90 dark:bg-gray-900`}
              />
              {errors.nom && <p className="text-red-600 text-sm">{errors.nom}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full rounded-lg border px-3 py-2 ${
                  errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } bg-white/90 dark:bg-gray-900`}
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Société / Activité</label>
              <input
                value={societe}
                onChange={(e) => setSociete(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Téléphone</label>
              <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className={`w-full rounded-lg border px-3 py-2 ${
                  errors.telephone ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } bg-white/90 dark:bg-gray-900`}
              />
              {errors.telephone && <p className="text-red-600 text-sm">{errors.telephone}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Message (optionnel)</label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 bg-white/90 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light"
            >
              Envoyer ma demande
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
