"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function TrialForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post(
        "https://api.chantiersync.com/api/trials",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 201 || res.status === 200) {
        // ✅ Succès → redirection avec message flash
        router.push("/?flash=success");
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "❌ Une erreur est survenue. Merci de réessayer." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Demande d’essai gratuit</h2>

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
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Envoi en cours..." : "Demander un essai gratuit"}
      </button>

      {message && (
        <p
          className={`mt-4 text-center font-medium ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
}
