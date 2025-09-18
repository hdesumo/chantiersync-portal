"use client";

import React, { useState } from "react";

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "mensuel",
    company: "",
    phone: "",
  });

  const [flash, setFlash] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFlash(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subscriptions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l’envoi de la demande");
      }

      setFlash({
        type: "success",
        message: "Votre demande d’abonnement a bien été envoyée. Vous serez contacté sous peu.",
      });

      setFormData({
        name: "",
        email: "",
        plan: "mensuel",
        company: "",
        phone: "",
      });

      setTimeout(() => {
        window.location.href = "/success-subscription"; // page succès
      }, 2000);
    } catch (error) {
      console.error(error);
      setFlash({
        type: "error",
        message: "Une erreur est survenue lors de l’envoi de la demande.",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {flash && (
        <div
          className={`p-3 mb-4 rounded text-white ${
            flash.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {flash.message}
        </div>
      )}

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

        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="mensuel">Mensuel</option>
          <option value="semestriel">Semestriel (-15%)</option>
          <option value="annuel">Annuel (-25%)</option>
        </select>

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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          Envoyer la demande
        </button>
      </form>
    </div>
  );
}
