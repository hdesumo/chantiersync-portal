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
        `${process.env.NEXT_PUBLIC_API_URL}/api/trials`, // ✅ endpoint correct
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 201 || res.status === 200) {
        setSuccess(true);

        // ✅ Redirection flash success après un court délai
        setTimeout(() => {
          router.push("/?flash=success");
        }, 1000);
      }
    } catch (err) {
      console.error(err);

      // ❌ Redirection flash error
      router.push("/?flash=error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
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
        disabled={loading || success}
        className={`w-full flex items-center justify-center py-2 rounded text-white font-medium transition-colors duration-300
          ${success ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700 disabled:opacity-50"}
        `}
      >
        {loading && !success && (
          <div className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Envoi en cours...
          </div>
        )}

        {success && (
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Envoyé !
          </div>
        )}

        {!loading && !success && "Demander un essai"}
      </button>
    </form>
  );
}
