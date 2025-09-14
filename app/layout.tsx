import type { Metadata } from "next";
import "../styles/globals.css"; // ✅ Corrigé pour pointer sur ton dossier styles
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "ChantierSync",
  description:
    "Suivez et contrôlez vos chantiers à distance en toute tranquillité.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
