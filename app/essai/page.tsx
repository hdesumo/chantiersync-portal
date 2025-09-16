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
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tenant-requests`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contactName: formData.nom,
            email: formData.email,
            companyName: formData.entreprise,
            phone: formData.telephone,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else if (res.status === 409) {
        setError("⚠️ Une demande existe déjà pour cet email.");
      } else {
        setError(data.message || "❌ Une erreur est survenue.");
      }
    } catch (err) {
      console.error("Erreur requête :", err);
      setError("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">
          🎉 Merci pour votre demande !
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Votre inscription à l’essai gratuit de 15 jours a bien été enregistrée.
          <br />
          Notre équipe vous contactera sous peu ✅
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Retour à l’accueil
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🎁 Essai gratuit 15 jours
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Remplissez le formulaire ci-dessous. Vous serez recontacté rapidement.
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Nom complet</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Entreprise</label>
          <input
            type="text"
            name="entreprise"
            value={formData.entreprise}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Téléphone</label>
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Envoi en cours..." : "Demander mon essai gratuit"}
        </button>
      </form>
    </div>
  );
}
