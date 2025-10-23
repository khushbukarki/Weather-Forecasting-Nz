// src/utils.js

const B = import.meta.env.BASE_URL || "";

// Stable Unsplash Source URLs (no API key, always load a photo of that city)
export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo:
      "https://source.unsplash.com/1600x900/?auckland,skyline,new-zealand",
    thumb:
      "https://source.unsplash.com/400x250/?auckland,skyline,new-zealand",
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo:
      "https://source.unsplash.com/1600x900/?wellington,harbour,new-zealand",
    thumb:
      "https://source.unsplash.com/400x250/?wellington,harbour,new-zealand",
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo:
      "https://source.unsplash.com/1600x900/?christchurch,city,new-zealand",
    thumb:
      "https://source.unsplash.com/400x250/?christchurch,city,new-zealand",
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo:
      "https://source.unsplash.com/1600x900/?dunedin,new-zealand,city",
    thumb:
      "https://source.unsplash.com/400x250/?dunedin,new-zealand,city",
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo:
      "https://source.unsplash.com/1600x900/?hamilton,waikato,new-zealand",
    thumb:
      "https://source.unsplash.com/400x250/?hamilton,waikato,new-zealand",
  },
  {
    name: "Tauranga",
    lat: -37.6878,
    lon: 176.1651,
    photo:
      "https://source.unsplash.com/1600x900/?tauranga,mount-maunganui,beach",
    thumb:
      "https://source.unsplash.com/400x250/?tauranga,mount-maunganui,beach",
  },
];

export function apiBase() {
  return import.meta.env.VITE_BACKEND_URL || "";
}
