/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", 
        secondary: "#1e293b",
        accent: "#06b6d4",
        purple: "#8b5cf6", // لون إضافي للـ Skills
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], // للعناوين
        body: ['Outfit', 'sans-serif'],       // للنصوص
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite', // دوران بطيء للأيقونات
      }
    },
  },
  plugins: [],
}