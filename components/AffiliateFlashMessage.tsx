// components/AffiliateFlashMessage.tsx
"use client";

interface AffiliateFlashMessageProps {
  type: "success" | "error";
  message: string; // 👈 ajouté
}

export default function AffiliateFlashMessage({ type, message }: AffiliateFlashMessageProps) {
  return (
    <div
      className={`p-4 rounded-md text-sm mb-4 ${
        type === "success"
          ? "bg-green-100 text-green-700 border border-green-300"
          : "bg-red-100 text-red-700 border border-red-300"
      }`}
    >
      {type === "success" ? "✅" : "❌"} {message}
    </div>
  );
}
