"use client";

import { useState } from "react";
import AffiliateFlashMessage from "./AffiliateFlashMessage";

export default function AffiliateForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "" });
  const [flash, setFlash] = useState<{ type: "success" | "error" } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFlash(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/affiliates`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erreur d’envoi");

      setFlash({ type: "success" });

      // ✅ Redirection vers la page d’accueil après 2 secondes
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      setFlash({ type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {flash && <AffiliateFlashMessage type={flash.type} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Nom complet"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="company"
          placeholder="Entreprise"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="phone"
          placeholder="Téléphone"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {loading ? "Envoi..." : "Demander l’accès partenaire"}
        </button>
      </form>
    </div>
  );
}
