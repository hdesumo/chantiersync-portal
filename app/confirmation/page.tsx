"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ConfirmationPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000); // redirection après 5 secondes

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-md text-center">
        <div className="text-5xl mb-4">✅</div>

        <h1 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
          Votre demande a bien été prise en compte !
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Merci pour votre inscription. Vous serez recontacté rapidement.
          <br />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Redirection automatique vers l’accueil dans 5 secondes...
          </span>
        </p>

        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
