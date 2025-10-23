// src/utils.js
const B = import.meta.env.BASE_URL || "";

export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo:
      "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06e77?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06e77?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo:
      "https://images.unsplash.com/photo-1600729429730-9f3bdfd26d18?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1600729429730-9f3bdfd26d18?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=80&q=40",
  },
  {
    name: "Tauranga",
    lat: -37.6878,
    lon: 176.1651,
    photo:
      "https://images.unsplash.com/photo-1602178994314-7e3a98a76a6e?auto=format&fit=crop&w=1600&q=80",
    thumb:
      "https://images.unsplash.com/photo-1602178994314-7e3a98a76a6e?auto=format&fit=crop&w=80&q=40",
  },
];

export function apiBase() {
  return import.meta.env.VITE_BACKEND_URL || "";
}
