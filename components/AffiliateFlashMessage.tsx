"use client";

import { useEffect, useState } from "react";

interface AffiliateFlashMessageProps {
  type: "success" | "error";
}

export default function AffiliateFlashMessage({ type }: AffiliateFlashMessageProps) {
  const [showFlash, setShowFlash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showFlash) return null;

  let style = "bg-gray-100 text-gray-700";
  let content = "";

  switch (type) {
    case "success":
      style = "bg-green-100 text-green-700";
      content =
        "✅ Votre inscription au programme d’affiliation a bien été prise en compte. Vous recevrez vos identifiants d’accès de la part de l’administrateur.";
      break;
    case "error":
      style = "bg-red-100 text-red-700";
      content = "❌ Une erreur est survenue lors de l’envoi de votre demande.";
      break;
  }

  return (
    <div className={`${style} px-6 py-3 text-center font-medium transition-opacity duration-500`}>
      {content}
    </div>
  );
}
