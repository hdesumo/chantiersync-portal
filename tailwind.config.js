/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Bleu principal
          light: "#3B82F6",
          dark: "#1E40AF",
        },
        success: {
          DEFAULT: "#10B981", // Vert succès
          light: "#34D399",
          dark: "#065F46",
        },
        warning: {
          DEFAULT: "#FBBF24", // Jaune alerte
          light: "#FCD34D",
          dark: "#92400E",
        },
        danger: {
          DEFAULT: "#EF4444", // Rouge erreur
          light: "#F87171",
          dark: "#7F1D1D",
        },
        background: {
          light: "#F9FAFB",
          dark: "#111827",
        },
      },
    },
  },
  plugins: [],
};
