"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AffiliateForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [flash, setFlash] = useState<{ type: "error" | "success"; message: string } | null>(null);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/merci-partenariat");
      } else {
        setFlash({ type: "error", message: "Une erreur est survenue." });
      }
    } catch (error) {
      setFlash({ type: "error", message: "Erreur de connexion au serveur." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <input
        name="name"
        placeholder="Votre nom"
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        name="company"
        placeholder="Entreprise"
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        name="phone"
        placeholder="Téléphone"
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        {loading ? "Envoi..." : "Rejoindre le Programme Partenaires"}
      </button>
      {flash && (
        <p className={`text-sm mt-2 ${flash.type === "error" ? "text-red-600" : "text-green-600"}`}>
          {flash.message}
        </p>
      )}
    </form>
  );
}
