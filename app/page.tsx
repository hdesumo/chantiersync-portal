// app/page.tsx

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [features, setFeatures] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featuresRes, testimonialsRes] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/features`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/testimonials`),
        ]);
        setFeatures(featuresRes.data || []);
        setTestimonials(testimonialsRes.data || []);
      } catch (error) {
        console.error("Erreur de récupération des données", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Digitalisez vos chantiers en toute simplicité
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Suivez vos projets en temps réel, recevez les rapports sur votre iPad
              et gardez toute votre équipe alignée – où que vous soyez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-2xl px-6 py-4 text-lg shadow-lg">
                Demander une démo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl px-6 py-4 text-lg border-2 hover:bg-blue-50"
              >
                Voir les fonctionnalités
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/hero-illustration.png"
              alt="Illustration chantier"
              width={500}
              height={400}
              priority
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {features.length > 0 ? (
          features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            Chargement des fonctionnalités...
          </p>
        )}
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Ce que disent nos clients
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.length > 0 ? (
              testimonials.map((t) => (
                <motion.div
                  key={t.id}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                    “{t.quote}”
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </motion.div>
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">
                Chargement des témoignages...
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} ChantierSync. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/politique-confidentialite" className="hover:underline">
              Politique de confidentialité
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
