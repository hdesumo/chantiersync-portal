"use client";

import { useState } from "react";

const qs = [
  { q: "Comment fonctionne l’essai gratuit ?", a: "Vous remplissez le formulaire, nous activons votre accès 15 jours avec les modules complets et un support par email." },
  { q: "Puis-je ajouter plusieurs chantiers ?", a: "Oui, vous pouvez suivre plusieurs chantiers et filtrer les rapports par projet." },
  { q: "Mes données sont-elles sécurisées ?", a: "Nous appliquons de bonnes pratiques de sécurité, chiffrement des données en transit et accès par rôle." },
  { q: "Puis-je annuler mon abonnement ?", a: "À tout moment, depuis votre compte. Les abonnements semestriels/annuels suivent leurs périodes d’engagement." },
  { q: "Fonctionne-t-il sans connexion Internet ?", a: "Les formulaires mobiles peuvent fonctionner en mode hors-ligne, puis se synchroniser dès que le réseau revient." },
];

export default function FAQContent() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">FAQ</h1>

        <div className="space-y-3">
          {qs.map((item, i) => (
            <div key={i} className="rounded-xl bg-white dark:bg-gray-800 shadow">
              <button
                className="w-full text-left px-5 py-4 font-semibold"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-700 dark:text-gray-300">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
