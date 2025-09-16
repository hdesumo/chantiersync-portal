"use client";

import { useState } from "react";
import AffiliateFlashMessage from "./AffiliateFlashMessage";

export default function AffiliateForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const [flash, setFlash] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFlash(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/affiliates`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFlash({
          type: "success",
          message: "Votre demande a bien été prise en compte. Vous serez contacté sous 48h.",
        });
        setFormData({ name: "", email: "", company: "", phone: "" });
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error("Erreur backend :", errorData);
        setFlash({
          type: "error",
          message: "Une erreur est survenue lors de l'envoi de votre demande.",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      setFlash({
        type: "error",
        message: "Impossible de joindre le serveur. Vérifiez votre connexion.",
      });
    } finally {
      setLoading(false);
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
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="company"
          type="text"
          placeholder="Entreprise"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="phone"
          type="text"
          placeholder="Téléphone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? "Envoi en cours..." : "Demander l'accès partenaire"}
        </button>
      </form>
    </div>
  );
}
