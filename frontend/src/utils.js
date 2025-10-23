// src/utils.js
export const B = import.meta.env.BASE_URL || "/";

// All photos from open and reliable CDNs — no Unsplash.
export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/AucklandHarbourBridge.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/AucklandHarbourBridge.jpg",
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Wellington_skyline_seen_from_Kelburn.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Wellington_skyline_seen_from_Kelburn.jpg",
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Christchurch_city_skyline.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Christchurch_city_skyline.jpg",
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Dunedin_city_skyline.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Dunedin_city_skyline.jpg",
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Hamilton_New_Zealand_Skyline.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Hamilton_New_Zealand_Skyline.jpg",
  },
  {
    name: "Tauranga",
    lat: -37.686,
    lon: 176.167,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mount_Maunganui_beach_Tauranga.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mount_Maunganui_beach_Tauranga.jpg",
  },
];

// Backend API base (Render or your FastAPI server)
export const apiBase = () => import.meta.env.VITE_BACKEND_URL || "";
