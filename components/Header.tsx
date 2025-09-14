"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/fonctionnalites", label: "Fonctionnalités" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/contact", label: "Contact" },
    { href: "/affiliation", label: "Affiliation" },
    { href: "/faq", label: "FAQ" },
  ];

  const buttonClasses =
    "inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-2 text-sm font-medium text-white shadow hover:bg-primary-light transition-colors";

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo + titre */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ChantierSync"
            width={40}
            height={40}
            priority
            className="rounded"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ChantierSync
            </span>
            {/* Slogan visible seulement sur écrans moyens et plus */}
            {/* Supprimé totalement sur mobile */}
            {/* <span className="hidden md:block text-sm text-gray-500 dark:text-gray-400">
              Suivez et contrôlez vos chantiers à distance
            </span> */}
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Switch Dark/Light */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Changer le thème"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Link href="/essai" className={buttonClasses}>
            15 jours d’essai gratuit
          </Link>
        </div>

        {/* Burger Menu (Mobile) */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-3 flex flex-col gap-3 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <Link href="/essai" className={buttonClasses}>
            15 jours d’essai gratuit
          </Link>

          {/* Switch Dark/Light dans le menu mobile */}
          <button
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4 text-yellow-400" /> Mode clair
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-gray-600" /> Mode sombre
              </>
            )}
          </button>
        </div>
      )}
    </header>
  );
}
