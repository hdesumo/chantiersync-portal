"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FlashMessage() {
  const searchParams = useSearchParams();
  const flash = searchParams.get("flash");

  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    if (flash) {
      setShowFlash(true);
      const timer = setTimeout(() => setShowFlash(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [flash]);

  if (!showFlash) return null;

  let style = "bg-gray-100 text-gray-700"; // fallback
  let message = flash;

  switch (flash) {
    case "success":
      style = "bg-green-100 text-green-700";
      message = "✅ Merci ! Votre demande d’essai a bien été envoyée.";
      break;
    case "error":
      style = "bg-red-100 text-red-700";
      message = "❌ Une erreur est survenue. Merci de réessayer.";
      break;
    case "info":
      style = "bg-blue-100 text-blue-700";
      message = "ℹ️ Information : veuillez vérifier vos données.";
      break;
    default:
      // Affiche la valeur brute de ?flash si ce n’est pas un cas connu
      style = "bg-yellow-100 text-yellow-700";
      message = flash;
  }

  return (
    <div
      className={`${style} px-6 py-3 text-center font-medium transition-opacity duration-500`}
    >
      {message}
    </div>
  );
}
