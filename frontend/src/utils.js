// src/utils.js
export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo:
      "https://images.unsplash.com/photo-1496302596873-123d35781a9b?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1496302596873-123d35781a9b?q=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo:
      "https://images.unsplash.com/photo-1502784444185-1a174b8c47f9?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1502784444185-1a174b8c47f9?q=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo:
      "https://images.unsplash.com/photo-1599626122731-4f1f3b96c645?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1599626122731-4f1f3b96c645?q=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo:
      "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Tauranga",
    lat: -37.6878,
    lon: 176.1651,
    photo:
      "https://images.unsplash.com/photo-1528132321533-1621fbc87c54?q=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1528132321533-1621fbc87c54?q=40&w=80&auto=format&fit=crop",
  },
];

export function apiBase() {
  return import.meta.env.VITE_BACKEND_URL || "";
}
