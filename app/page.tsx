"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FlashMessage from "@/components/FlashMessage";

export default function HomePage() {
  const primary =
    "inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-500";
  const outline =
    "inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800";

  return (
    <>
      {/* ✅ FlashMessage encapsulé dans Suspense */}
      <Suspense fallback={null}>
        <FlashMessage />
      </Suspense>

      {/* 1) HERO */}
      <HeroSection />

      {/* 2) Découvrir le tableau de bord */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Découvrez votre futur tableau de bord
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          KPIs, rapports, alertes et graphiques en temps réel pour piloter vos
          chantiers en toute sérénité.
        </p>
        <Link href="/dashboard" className={primary}>
          Découvrir le tableau de bord
        </Link>
      </section>

      {/* 3) Section visuelle #2 */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 md:h-80">
            <Image
              src="/chantier_team.jpeg"
              alt="Équipe chantier connectée"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Collaborez en temps réel
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Reliez terrain et bureau : rapports photo/vidéo datés,
              commentaires, check-lists et notifications pour éviter les
              imprévus.
            </p>
            <Link href="/fonctionnalites" className={outline}>
              Voir comment ça marche
            </Link>
          </div>
        </div>
      </section>

      {/* 4) TARIFS */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Des tarifs adaptés</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Choisissez la formule qui vous convient. Tarifs en EUR avec sélecteur
          multi-devises (USD, XOF, XAF) sur la page dédiée.
        </p>
        <Link href="/tarifs" className={primary}>
          Voir les tarifs
        </Link>
      </section>

      {/* 5) Section visuelle #3 */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 md:h-80">
            <Image
              src="/agent_chantier.jpeg"
              alt="Supervision de chantier à distance"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Supervisez vos projets depuis l’étranger
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Pensé pour la diaspora : suivez la progression, recevez les
              rapports et partagez une vue d’ensemble avec vos proches.
            </p>
            <Link href="/essai" className={outline}>
              15 jours d&apos;essai gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* 6) Section visuelle #4 */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 md:h-80">
            <Image
              src="/agent_1chantier.jpg"
              alt="Ouvriers confiants et outillés"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Mettez vos équipes en confiance
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Donnez aux chefs de chantier des outils simples pour remonter des
              preuves et débloquer rapidement les décisions.
            </p>
            <Link href="/partenariat" className={outline}>
              Rejoignez notre programme Partenaires
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
