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
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Cityscape_of_Wellington.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Cityscape_of_Wellington.jpg",
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Christchurch_City.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Christchurch_City.jpg",
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dunedin_cbd_skyline.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dunedin_cbd_skyline.jpg",
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/Hamilton_Gardens_-_Hamilton%2C_NZ_-_DSC06658.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/Hamilton_Gardens_-_Hamilton%2C_NZ_-_DSC06658.jpg",
  },
  {
    name: "Tauranga",
    lat: -37.686,
    lon: 176.167,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/New_Zealand%2C_Bay_of_Plenty%2C_Tauranga.jpg",
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/New_Zealand%2C_Bay_of_Plenty%2C_Tauranga.jpg",
  },
];

// Backend API base (Render or your FastAPI server)
export const apiBase = () => import.meta.env.VITE_BACKEND_URL || "";
