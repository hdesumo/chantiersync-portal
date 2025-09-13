"use client";

import { useEffect, useState } from "react";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
        {/* Colonne 1 */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            ChantierSync
          </h3>
          <p className="text-sm">
            Suivez et contrôlez vos chantiers à distance, en toute tranquillité !
          </p>
        </div>

        {/* Colonne 2 */}
        <div>
          <h4 className="text-md font-semibold mb-3">Liens utiles</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:underline">Fonctionnalités</a></li>
            <li><a href="#pricing" className="hover:underline">Tarifs</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div>
          <h4 className="text-md font-semibold mb-3">Contact</h4>
          <p className="flex items-center gap-2 text-sm">
            <Mail size={16}/> contact@chantiersync.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Phone size={16}/> +221 77 481 98 00 (Whatsapp)
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook"><Facebook size={18}/></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18}/></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-8">
        © {year ?? "…"} Apps 1 Global. Tous droits réservés.
      </div>
    </footer>
  );
}
