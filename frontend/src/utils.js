// src/utils.js
export const B = import.meta.env.BASE_URL || "/";

// All photos come from the internet (Unsplash) — no local files needed.
export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo:
      "https://www.istockphoto.com/photo/auckland-on-sunset-gm1288497138-384434070?utm_source=unsplash&utm_medium=affiliate&utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Fphotos%2Fa-view-of-a-city-and-a-body-of-water-v9FIx0J-KAA&utm_term=city%3A%3Alayout-below-fold-units-2%3Acontrol",
    thumb:
      "https://www.istockphoto.com/photo/auckland-on-sunset-gm1288497138-384434070?utm_source=unsplash&utm_medium=affiliate&utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Fphotos%2Fa-view-of-a-city-and-a-body-of-water-v9FIx0J-KAA&utm_term=city%3A%3Alayout-below-fold-units-2%3Acontrol",
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
