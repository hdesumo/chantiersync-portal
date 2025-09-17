"use client";

import { useState } from "react";
import AffiliateFlashMessage from "./AffiliateFlashMessage";

export default function AffiliateForm() {
  const [flash, setFlash] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    };

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/affiliates`;
      console.log("🔍 [DEBUG] URL appelée par AffiliateForm:", url);
      console.log("🔍 [DEBUG] Données envoyées:", formData);

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("❌ [DEBUG] Erreur API:", res.status, errorText);
        setFlash({
          type: "error",
          message: `Erreur API (${res.status}) : ${errorText}`,
        });
        return;
      }

      const data = await res.json();
      console.log("✅ [DEBUG] Réponse API:", data);

      setFlash({
        type: "success",
        message:
          "Votre demande de partenariat a bien été enregistrée. Vous serez recontacté par notre équipe.",
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (err) {
      console.error("❌ [DEBUG] Exception dans handleSubmit:", err);
      setFlash({
        type: "error",
        message: "Une erreur est survenue lors de l’envoi de votre demande.",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {flash && <AffiliateFlashMessage type={flash.type} message={flash.message} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Nom complet"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="company"
          type="text"
          placeholder="Entreprise"
          className="w-full p-2 border rounded"
        />
        <input
          name="phone"
          type="text"
          placeholder="Téléphone"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Envoyer la demande
        </button>
      </form>
    </div>
  );
}
