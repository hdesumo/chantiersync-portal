"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const buttonClasses =
    "inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texte à gauche */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Digitalisez vos chantiers dès aujourd'hui
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            ChantierSync vous permet de suivre vos projets, superviser vos équipes et
            recevoir des rapports fiables en temps réel, où que vous soyez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#features" className={buttonClasses}>
              Découvrir les fonctionnalités
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-transparent px-6 py-3 text-lg font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              Demander une démo
            </Link>
          </div>
        </div>

        {/* Illustration à droite */}
        <div className="relative h-64 md:h-96">
          <Image
            src="/hero-illustration.png"
            alt="Illustration ChantierSync"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
