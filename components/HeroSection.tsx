"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const primary =
    "inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-blue-500 transition-colors";
  const secondary =
    "inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors";

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image à gauche */}
        <div className="relative h-64 md:h-96">
          <Image
            src="/hero-illustration.png"
            alt="Illustration ChantierSync"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Texte à droite */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Digitalisez vos chantiers dès aujourd&apos;hui
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            Suivez vos projets, coordonnez vos équipes et recevez des rapports
            fiables en temps réel, où que vous soyez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/fonctionnalites" className={primary}>
              Découvrir les fonctionnalités
            </Link>
            <Link href="/essai" className={secondary}>
              15 jours d’essai gratuit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
