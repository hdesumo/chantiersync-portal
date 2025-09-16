"use client";

import { useState } from "react";

export default function EssaiPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    telephone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis.";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "L'email n'est pas valide.";
    }
    if (!formData.entreprise.trim()) {
      newErrors.entreprise = "Le nom de l'entreprise est requis.";
    }
    if (!formData.telephone.match(/^[0-9]{6,15}$/)) {
      newErrors.telephone =
        "Le téléphone doit contenir uniquement des chiffres (6 à 15).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tenant-requests`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setMessage(
          "✅ Votre demande a bien été prise en compte. Vous serez contacté rapidement."
        );
        setFormData({ nom: "", email: "", entreprise: "", telephone: "" });
        setErrors({});
      } else if (res.status === 409) {
        setMessage("⚠️ Une demande existe déjà avec cet email.");
      } else {
        setMessage("❌ Une erreur est survenue. Merci de réessayer.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Impossible d’envoyer votre demande.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🚀 Essai gratuit 15 jours
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow"
      >
        <div>
          <label className="block mb-1 font-medium">Nom complet</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          {errors.nom && (
            <p className="text-red-600 text-sm">{errors.nom}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Entreprise</label>
          <input
            type="text"
            name="entreprise"
            value={formData.entreprise}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          {errors.entreprise && (
            <p className="text-red-600 text-sm">{errors.entreprise}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Téléphone</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          {errors.telephone && (
            <p className="text-red-600 text-sm">{errors.telephone}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Envoi en cours..." : "Demander un essai"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
}
