// src/utils.js
export const B = import.meta.env.BASE_URL || "/";

// All photos come from the internet (Unsplash) — no local files needed.
export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo:
      "https://unsplash.com/photos/city-skyline-across-body-of-water-during-daytime-CSCoasDuU2U?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://unsplash.com/photos/city-skyline-across-body-of-water-during-daytime-CSCoasDuU2U?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo:
      "https://images.unsplash.com/photo-1557401623-1fb38b9b39e3?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1557401623-1fb38b9b39e3?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo:
      "https://images.unsplash.com/photo-1575550959106-5c5b1f7480c4?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1575550959106-5c5b1f7480c4?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo:
      "https://images.unsplash.com/photo-1606289939866-41e95bafc0b1?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1606289939866-41e95bafc0b1?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo:
      "https://images.unsplash.com/photo-1581818433441-248b3cccbdbd?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1581818433441-248b3cccbdbd?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Tauranga",
    lat: -37.686,
    lon: 176.167,
    photo:
      "https://images.unsplash.com/photo-1623790165532-1f3197ddcb24?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1623790165532-1f3197ddcb24?auto=format&fit=crop&w=80&q=40",
  },
];

// Keep apiBase for your backend URL (Render)
export const apiBase = () => import.meta.env.VITE_BACKEND_URL || "";
