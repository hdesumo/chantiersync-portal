"use client";

import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "../../components/ui/button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Veuillez valider le reCAPTCHA avant d’envoyer.");
      return;
    }

    try {
      await axios.post("/api/contact", { name, email, message, captchaValue });
      alert("Votre message a été envoyé avec succès !");
      setName("");
      setEmail("");
      setMessage("");
      setCaptchaValue(null);
    } catch (error) {
      alert("Erreur lors de l’envoi du message. Veuillez réessayer.");
    }
  };

  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full border rounded-lg p-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Votre email"
          className="w-full border rounded-lg p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Votre message"
          className="w-full border rounded-lg p-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        ></textarea>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={setCaptchaValue}
        />
        <Button type="submit">Envoyer</Button>
      </form>
    </section>
  );
}
