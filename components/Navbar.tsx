import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          ChantierSync
        </Link>
        <nav className="space-x-6">
          <Link href="/features">Fonctionnalités</Link>
          <Link href="/pricing">Tarifs</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}