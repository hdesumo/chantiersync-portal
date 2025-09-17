"use client";

interface AffiliateFlashMessageProps {
  type: "success" | "error";
  text: string;
}

export default function AffiliateFlashMessage({ type, text }: AffiliateFlashMessageProps) {
  return (
    <div
      className={`p-3 mb-4 rounded text-sm font-medium ${
        type === "success"
          ? "bg-green-100 text-green-800 border border-green-300"
          : "bg-red-100 text-red-800 border border-red-300"
      }`}
      role="alert"
    >
      {text}
    </div>
  );
}
