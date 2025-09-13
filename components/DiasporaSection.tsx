// components/DiasporaSection.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DiasporaSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image à gauche */}
        <div className="flex-1">
          <Image
            src="/agent-supervision.jpeg"
            alt="Supervision de chantier à distance"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Texte à droite */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Suivez votre projet depuis l’étranger
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Vous financez un projet de construction en Afrique depuis la diaspora ?
            Avec Chantiersync, vous recevez des rapports fiables, illustrés de photos,
            vidéos et commentaires en temps réel. Restez informé et évitez les mauvaises
            surprises, où que vous soyez dans le monde.
          </p>
          <Button size="lg" className="rounded-2xl px-6 py-4 text-lg">
            Commencez dès aujourd'hui
          </Button>
        </div>
      </div>
    </section>
  );
}
