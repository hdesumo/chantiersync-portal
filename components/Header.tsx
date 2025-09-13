"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "#features", label: "Fonctionnalités" },
    { href: "#pricing", label: "Tarifs" },
    { href: "#contact", label: "Contact" },
    { href: "#affiliation", label: "Affiliation" },
  ];

  const buttonClasses =
    "inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

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
            className="rounded"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ChantierSync
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Suivez et contrôlez vos chantiers à distance
            </span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Link href="#demo" className={buttonClasses}>
            Demander une démo
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
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#demo" className={buttonClasses}>
            Demander une démo
          </Link>
        </div>
      )}
    </header>
  );
}
