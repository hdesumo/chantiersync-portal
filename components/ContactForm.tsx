"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button"; // ✅ chemin relatif corrigé

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/contact", { name, email, message });
      alert("Votre message a été envoyé !");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Erreur lors de l’envoi du message. Veuillez réessayer.");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded-lg p-3 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded-lg p-3 w-full"
          />
          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="border rounded-lg p-3 w-full"
          />
          <Button type="submit">Envoyer</Button>
        </form>
      </div>
    </section>
  );
}
