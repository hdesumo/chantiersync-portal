"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function EssaiPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/trials`, // ✅ corrigé ici
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 201 || res.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/?flash=success");
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      router.push("/?flash=error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Demande d’essai gratuit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="text"
          name="company"
          placeholder="Société (optionnel)"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Téléphone (optionnel)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <button
          type="submit"
          disabled={loading || success}
          className={`w-full flex items-center justify-center py-2 rounded text-white font-medium transition-colors duration-300
            ${success ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700 disabled:opacity-50"}
          `}
        >
          {loading && !success && "Envoi en cours..."}
          {success && "Envoyé !"}
          {!loading && !success && "Demander un essai"}
        </button>
      </form>
    </div>
  );
}
