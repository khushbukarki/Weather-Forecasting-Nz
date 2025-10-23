// src/utils.js
export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo:
      "auckland.jpg?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "auckland.jpg?q=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo:
      "wellington.jpg?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "wellington.jpg?q=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo:
      "christchurch.jpg?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "christchurch.jpg?q=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo:
      "dunedin.jpg?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "dunedin.jpg?q=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo:
      "hamilton.jpg?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "hamilton.jpg?q=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Tauranga",
    lat: -37.6878,
    lon: 176.1651,
    photo:
      "taurnaga.jpg?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "taurnaga.jpg?q=40&w=80&auto=format&fit=crop",
  },
];

export function apiBase() {
  return import.meta.env.VITE_BACKEND_URL || "";
}
