// src/utils.js
const B = import.meta.env.BASE_URL || "";

export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo:
      "https://images.unsplash.com/photo-2165501891?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-2165501891?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo:
      "https://images.unsplash.com/photo-464378599?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-464378599?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo:
      "https://images.unsplash.com/photo-1131435823?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1131435823?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo:
      "https://images.unsplash.com/photo-922705954?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-922705954?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo:
      "https://images.unsplash.com/photo-1149987475?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1149987475?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Tauranga",
    lat: -37.6878,
    lon: 176.1651,
    photo:
      "https://images.unsplash.com/photo-647477982?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-647477982?auto=format&fit=crop&w=80&q=40",
  },
];

export function apiBase() {
  return import.meta.env.VITE_BACKEND_URL || "";
}
