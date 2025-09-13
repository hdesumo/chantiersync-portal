"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo + Slogan */}
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
              Suivez et contrôlez vos chantiers à distance, en toute tranquillité !
            </span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Accueil
          </Link>
          <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Fonctionnalités
          </Link>
          <Link href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Tarifs
          </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Button className="rounded-2xl px-5 py-2">
            Demander une démo
          </Button>
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
          <Link href="/" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <Link href="#features" onClick={() => setIsOpen(false)}>
            Fonctionnalités
          </Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)}>
            Tarifs
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Button className="mt-2 rounded-2xl">
            Demander une démo
          </Button>
        </div>
      )}
    </header>
  );
}
