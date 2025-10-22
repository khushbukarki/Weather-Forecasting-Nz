/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI"] },
      boxShadow: { glow: "0 0 30px rgba(56, 189, 248, 0.3)" },
      backgroundImage: {
        'grid': "linear-gradient(to right, rgba(148,163,184,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.08) 1px, transparent 1px)",
        'radial-fade': "radial-gradient(1200px circle at 0% 0%, rgba(56,189,248,0.08), transparent 40%), radial-gradient(1200px circle at 100% 0%, rgba(99,102,241,0.08), transparent 40%)"
      }
    },
  },
  plugins: [],
};
