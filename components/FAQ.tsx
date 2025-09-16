"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Comment fonctionne la période d’essai gratuit de 15 jours ?",
    answer:
      "Vous pouvez tester gratuitement toutes les fonctionnalités de ChantierSync pendant 15 jours. Aucune carte bancaire n’est requise. À la fin de la période, vous pourrez choisir de souscrire ou non.",
  },
  {
    question: "Qu’est-ce que le Programme Partenaires ?",
    answer:
      "Le Programme Partenaires vous permet de recommander ChantierSync et de bénéficier d’avantages exclusifs. Chaque partenaire dispose d’un accès dédié à l’Espace Partenaires (partners.chantiersync.com) pour suivre ses performances et ses commissions. Un contrat de partenariat encadre la collaboration et peut être résilié à tout moment par le partenaire.",
  },
  {
    question: "Quels sont les avantages liés au partenariat ?",
    answer:
      "En devenant partenaire, vous bénéficiez d’une rémunération sur chaque client apporté, d’un accompagnement personnalisé et d’un espace dédié pour le suivi de vos résultats. C’est une opportunité de générer des revenus supplémentaires tout en soutenant la digitalisation du secteur.",
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer:
      "Oui, vous pouvez résilier votre abonnement quand vous le souhaitez, sans frais cachés.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Questions fréquentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
