"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    "Suivi en temps réel",
    "Rapports illustrés (photos/vidéos)",
    "Alertes et notifications",
    "Accès multi-utilisateurs",
    "Compatible mobile et tablette"
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Fonctionnalités principales
      </h1>
      <ul className="space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <CheckCircle className="text-green-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
