// src/utils.js
export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo:
      "auckland.jpgq=80&w=1600&auto=format&fit=crop",
    thumb:
      "auckland.jpgq=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo:
      "wellington.jpgq=80&w=1600&auto=format&fit=crop",
    thumb:
      "wellington.jpgq=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo:
      "christchurch.jpgq=80&w=1600&auto=format&fit=crop",
    thumb:
      "christchurch.jpgq=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo:
      "dunedin.jpgq=80&w=1600&auto=format&fit=crop",
    thumb:
      "dunedin.jpgq=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo:
      "hamilton.jpgq=80&w=1600&auto=format&fit=crop",
    thumb:
      "hamiltonq=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Tauranga",
    lat: -37.6878,
    lon: 176.1651,
    photo:
      "taurnaga.jpgq=80&w=1600&auto=format&fit=crop",
    thumb:
      "taurnaga.jpgq=40&w=80&auto=format&fit=crop",
  },
];

export function apiBase() {
  return import.meta.env.VITE_BACKEND_URL || "";
}
