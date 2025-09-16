import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Section 1 */}
        <div>
          <h3 className="text-white font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/fonctionnalites">Fonctionnalités</Link></li>
            <li><Link href="/tarifs">Tarifs</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-white font-semibold mb-2">Espaces</h3>
          <ul className="space-y-1">
            <li><a href="https://admin.chantiersync.com" target="_blank" rel="noopener noreferrer">Espace Admin</a></li>
            <li><a href="https://partners.chantiersync.com" target="_blank" rel="noopener noreferrer">Espace Partenaires</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-white font-semibold mb-2">Programme</h3>
          <ul className="space-y-1">
            <li><Link href="/affiliation">Programme Partenaires</Link></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="text-white font-semibold mb-2">Légal</h3>
          <ul className="space-y-1">
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ChantierSync. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
