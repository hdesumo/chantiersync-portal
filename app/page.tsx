"use client";

import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  const buttonClasses =
    "inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

  const outlineButtonClasses =
    "inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-5 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400";

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* SECTION ÉQUIPE */}
      <section
        id="features"
        className="bg-gray-900 text-white py-12 md:py-16 px-4 md:px-6 grid md:grid-cols-2 items-center gap-8"
      >
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
          <Link href="#dashboard" className={buttonClasses}>
            Découvrir le tableau de bord
          </Link>
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
          <Link href="#demo" className={buttonClasses}>
            Commencez dès aujourd'hui
          </Link>
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
          <Link href="#features" className={outlineButtonClasses}>
            Découvrir les fonctionnalités
          </Link>
        </div>
      </section>

      {/* SECTION PRICING */}
      <section
        id="pricing"
        className="bg-gray-100 dark:bg-gray-800 py-16 px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Nos Tarifs</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Plans flexibles adaptés à vos besoins. (Section à compléter avec les
          offres et prix)
        </p>
      </section>

      {/* SECTION DEMO */}
      <section
        id="demo"
        className="bg-blue-50 dark:bg-blue-900 py-16 px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Demander une démo</h2>
        <p className="text-gray-700 dark:text-gray-200 max-w-xl mx-auto mb-6">
          Remplissez le formulaire ci-dessous pour planifier une démonstration
          personnalisée.
        </p>
        <Link href="mailto:demo@chantiersync.com" className={buttonClasses}>
          Envoyer une demande
        </Link>
      </section>

      {/* SECTION AFFILIATION */}
      <section
        id="affiliation"
        className="bg-gray-100 dark:bg-gray-800 py-16 px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Programme d’affiliation</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Devenez partenaire de ChantierSync et gagnez des récompenses en
          recommandant notre solution à vos collègues et clients. Ensemble,
          digitalisons les chantiers en Afrique !
        </p>
        <Link href="mailto:partenaires@chantiersync.com" className={buttonClasses}>
          Rejoindre le programme
        </Link>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
