"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 : Logo + description */}
        <div>
          <h2 className="text-2xl font-bold text-white">ChantierSync</h2>
          <p className="mt-3 text-sm text-gray-400">
            Digitalisez vos chantiers : suivi en temps réel, rapports instantanés,
            collaboration simplifiée entre équipes terrain et bureau.
          </p>
        </div>

        {/* Colonne 2 : Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">Accueil</Link>
            </li>
            <li>
              <Link href="/fonctionnalites" className="hover:text-white">Fonctionnalités</Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:text-white">Tarifs</Link>
            </li>
            <li>
              <Link href="/affiliation" className="hover:text-white">Programme d’affiliation</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">FAQ</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
            {/* 🔗 Lien Admin dans la navigation */}
            <li>
              <Link href="https://admin.chantiersync.com/connexion" className="hover:text-white">
                Espace Admin
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm text-gray-400">Email : support@chantiersync.com</p>
          <p className="text-sm text-gray-400">Téléphone : +221 33 123 45 67</p>
          <p className="text-sm text-gray-400">Adresse : Dakar, Sénégal</p>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        {/* 🔗 Lien Admin discret juste au-dessus du copyright */}
        <div className="mb-2 md:mb-0">
          <a
            href="https://admin.chantiersync.com/connexion"
            className="text-sm text-gray-400 hover:text-white"
          >
            Espace Admin
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ChantierSync. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
