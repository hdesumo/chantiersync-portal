"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-900 text-white">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        <span className="text-blue-400">CHANTIERSYNC</span>
      </Link>

      {/* Liens */}
      <div className="flex space-x-6">
        <Link href="/" className={pathname === "/" ? "font-bold text-blue-400" : ""}>
          Accueil
        </Link>
        <Link href="/fonctionnalites" className={pathname === "/fonctionnalites" ? "font-bold text-blue-400" : ""}>
          Fonctionnalités
        </Link>
        <Link href="/tarifs" className={pathname === "/tarifs" ? "font-bold text-blue-400" : ""}>
          Tarifs
        </Link>
        <Link href="/affiliation" className={pathname === "/affiliation" ? "font-bold text-blue-400" : ""}>
          Programme Partenaires
        </Link>
        <Link href="/faq" className={pathname === "/faq" ? "font-bold text-blue-400" : ""}>
          FAQ
        </Link>
      </div>

      {/* CTA */}
      <Link
        href="/essai"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        15 jours d’essai gratuit
      </Link>
    </nav>
  );
};

export default Navbar;
