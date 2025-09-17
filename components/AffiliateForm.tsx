"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AffiliateFlashMessage from "./AffiliateFlashMessage";

export default function AffiliateForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const [flash, setFlash] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  // Gérer le changement des inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Soumission formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFlash(null);

    try {
      console.debug("🔍 [DEBUG] URL appelée par AffiliateForm:", `${process.env.NEXT_PUBLIC_API_URL}/api/affiliates`);
      console.debug("🔍 [DEBUG] Données envoyées:", form);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/affiliates`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("❌ [DEBUG] Erreur API:", res.status, errorData);
        throw new Error(errorData.error || `Erreur API (${res.status})`);
      }

      const data = await res.json();
      console.log("✅ [DEBUG] Réponse API:", data);

      setFlash({
        type: "success",
        message: "Votre demande de partenariat a bien été enregistrée ✅. Vous serez recontacté sous peu.",
      });

      // Redirection après 2s
      setTimeout(() => {
        router.push("/");
      }, 5000);

    } catch (err: any) {
      console.error("❌ [DEBUG] Exception formulaire:", err.message);
      setFlash({ type: "error", message: err.message || "Erreur serveur" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {flash && <AffiliateFlashMessage type={flash.type} text={flash.message} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Nom complet"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="company"
          type="text"
          placeholder="Entreprise"
          value={form.company}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="phone"
          type="text"
          placeholder="Téléphone"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Envoi en cours..." : "Envoyer la demande"}
        </button>
      </form>
    </div>
  );
}
