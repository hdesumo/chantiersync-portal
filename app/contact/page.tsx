export const metadata = {
  title: "Contact – ChantierSync",
  description: "Coordonnées et contact de la plateforme",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact</h1>

        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6 space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Adresse</h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Apps 1 Global</strong><br />
              Jaxxay, Extension 23, Villa 243<br />
              Région de Dakar (Sénégal)
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Téléphone & Email</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Téléphone : <span className="font-medium">(+221) 78 481 98 00 (WhatsApp)</span><br />
              Email : <a className="text-blue-500 hover:underline" href="mailto:contact@chantiersync.com">contact@chantiersync.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Support</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Pour toute demande de support, écrivez-nous :{" "}
              <a className="text-blue-500 hover:underline" href="mailto:support@chantiersync.com">support@chantiersync.com</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
