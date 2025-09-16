"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />

        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
          ✅ Votre demande a bien été prise en compte !
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Merci pour votre inscription. Notre équipe va analyser votre demande
          et vous contactera très prochainement pour finaliser la création de
          votre espace sur <strong>ChantierSync</strong>.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          ⬅️ Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
