"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getSession, clearSession } from "@/lib/session";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/fonctionnalites", label: "Fonctionnalités" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/affiliation", label: "Affiliation" },
    { href: "/faq", label: "FAQ" },
  ];

  const buttonClasses =
    "inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-2 text-sm font-medium text-white shadow hover:bg-primary-light transition-colors";

  useEffect(() => {
    // Gestion du thème
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }

    // Vérifier la session
    setIsLoggedIn(!!getSession());
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    clearSession();
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ChantierSync"
            width={40}
            height={40}
            priority
            className="rounded"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ChantierSync
          </span>
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

          {/* Connexion / Déconnexion */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-red-600 font-semibold hover:underline"
            >
              Déconnexion
            </button>
          ) : (
            <Link href="/connexion" className="text-blue-600 font-semibold hover:underline">
              Connexion
            </Link>
          )}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Link href="/essai" className={buttonClasses}>
            15 jours d’essai gratuit
          </Link>
        </div>

        {/* Burger Menu */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
          onClick={() => setIsOpen(true)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-gray-900 fixed right-0 top-0 bottom-0 w-3/4 max-w-sm p-6 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()} // Empêche de fermer si clic à l'intérieur
            >
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 dark:text-gray-300"
                  aria-label="Fermer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* ✅ Classe unique pour les tests */}
              <nav className="mobile-menu flex flex-col gap-6 text-lg">
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

                <Link
                  href="/essai"
                  className={buttonClasses}
                  onClick={() => setIsOpen(false)}
                >
                  15 jours d’essai gratuit
                </Link>

                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="text-red-600 font-semibold"
                  >
                    Déconnexion
                  </button>
                ) : (
                  <Link
                    href="/connexion"
                    onClick={() => setIsOpen(false)}
                    className="text-blue-600 font-semibold"
                  >
                    Connexion
                  </Link>
                )}

                <button
                  onClick={() => {
                    toggleTheme();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 mt-4"
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
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
