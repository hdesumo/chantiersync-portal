"use client";

import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Image from "next/image";
import { Button } from "../components/ui/button";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <HeroSection />

      {/* SECTION ÉQUIPE */}
      <section className="bg-gray-900 text-white py-12 md:py-16 px-4 md:px-6 grid md:grid-cols-2 items-center gap-8">
        <Image
          src="/chantier_team.jpeg"
          alt="Equipe de chantier"
          width={600}
          height={400}
          className="rounded-2xl shadow-xl mx-auto"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Collaborez en temps réel
          </h2>
          <p className="mb-6 text-gray-300 leading-relaxed">
            Vos équipes sur le terrain et au bureau restent connectées en temps
            réel. Recevez les rapports d’avancement instantanément, améliorez la
            communication et anticipez les imprévus.
          </p>
          <Button>Découvrir le tableau de bord</Button>
        </div>
      </section>

      {/* SECTION SUPERVISION */}
      <section className="bg-gray-800 text-white py-12 md:py-16 px-4 md:px-6 grid md:grid-cols-2 items-center gap-8">
        <Image
          src="/agent_chantier.jpeg"
          alt="Supervision de chantier à distance"
          width={600}
          height={400}
          className="rounded-2xl shadow-xl mx-auto"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Suivez votre projet depuis l’étranger
          </h2>
          <p className="mb-6 text-gray-300 leading-relaxed">
            Vous financez un projet de construction en Afrique depuis la
            diaspora ? Avec ChantierSync, vous recevez des rapports fiables,
            illustrés de photos, vidéos et commentaires en temps réel.
          </p>
          <Button>Commencez dès aujourd'hui</Button>
        </div>
      </section>

      {/* SECTION PORTRAIT */}
      <section className="bg-gray-900 text-white py-12 md:py-16 px-4 md:px-6 grid md:grid-cols-2 items-center gap-8">
        <Image
          src="/agent_1chantier.jpg"
          alt="Ouvrier sur le chantier"
          width={600}
          height={400}
          className="rounded-2xl shadow-xl mx-auto"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Mettez vos équipes en confiance
          </h2>
          <p className="mb-6 text-gray-300 leading-relaxed">
            Donnez à vos ouvriers et chefs de chantier les bons outils pour
            communiquer avec vous efficacement, même à distance.
          </p>
          <Button variant="outline">Découvrir les fonctionnalités</Button>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
