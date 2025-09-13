import "../styles/globals.css";

export const metadata = {
  title: "ChantierSync",
  description: "Suivez et contrôlez vos chantiers à distance, en toute tranquillité",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
