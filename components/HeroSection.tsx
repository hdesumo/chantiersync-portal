"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Suivez et contrôlez vos chantiers à distance, en toute tranquillité !
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Recevez vos rapports d’avancement instantanément, améliorez la
            communication et anticipez les imprévus, où que vous soyez.
          </p>
          <Button size="lg" className="px-6 py-3 rounded-xl">
            Découvrir le tableau de bord
          </Button>
        </div>

        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/hero-illustration.png"
            alt="Illustration suivi de chantier"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
