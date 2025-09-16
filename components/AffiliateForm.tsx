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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      await res.json();
      setFlash({
        type: "success",
        message:
          "Votre demande de partenariat a bien été envoyée. Vous recevrez vos identifiants d’accès à l’Espace Partenaires après validation par notre équipe.",
      });
      setFormData({ name: "", email: "", company: "", phone: "" });
    } catch (err) {
      setFlash({
        type: "error",
        message: "Une erreur est survenue lors de l’envoi de votre demande.",
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
          placeholder="Nom complet"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="company"
          placeholder="Entreprise (facultatif)"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="phone"
          placeholder="Téléphone (facultatif)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Envoi en cours..." : "Demander un partenariat"}
        </button>
      </form>
    </div>
  );
}
