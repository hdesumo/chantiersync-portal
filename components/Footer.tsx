import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Colonne 1 : Logo et slogan */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">ChantierSync</h3>
          <p className="text-sm">
            Digitalisez vos chantiers et suivez vos projets en toute confiance,
            où que vous soyez.
          </p>
        </div>

        {/* Colonne 2 : Navigation rapide */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Navigation
          </h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Accueil</Link></li>
            <li><Link href="/fonctionnalites" className="hover:text-white">Fonctionnalités</Link></li>
            <li><Link href="/tarifs" className="hover:text-white">Tarifs</Link></li>
            <li><Link href="/affiliation" className="hover:text-white">Programme d’affiliation</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Contact
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="mailto:contact@chantiersync.com" className="hover:text-white">
                contact@chantiersync.com
              </a>
            </li>
            <li>
              <a href="mailto:partenaires@chantiersync.com" className="hover:text-white">
                partenaires@chantiersync.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> ChantierSync. Tous droits réservés.
      </div>
    </footer>
  );
}
