"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FlashMessage() {
  const searchParams = useSearchParams();
  const flash = searchParams.get("flash");

  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    if (flash === "success") {
      setShowFlash(true);
      const timer = setTimeout(() => setShowFlash(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [flash]);

  if (!showFlash) return null;

  return (
    <div className="bg-green-100 text-green-700 px-6 py-3 text-center font-medium transition-opacity duration-500">
      ✅ Merci ! Votre demande d’essai a bien été envoyée.
    </div>
  );
}
