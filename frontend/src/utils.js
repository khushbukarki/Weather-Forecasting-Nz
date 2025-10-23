// src/utils.js
const B = import.meta.env.BASE_URL || "/";

export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo: `${B}frontend/auckland.jpg`,
    thumb: `${B}frontend/auckland.jpg`,
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo: `${B}frontend/wellington.jpg`,
    thumb: `${B}frontend/wellington.jpg`,
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo: `${B}frontend/christchurch.jpg`,
    thumb: `${B}frontend/christchurch.jpg`,
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo: `${B}frontend/dunedin.jpg`,
    thumb: `${B}frontend/dunedin.jpg`,
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo: `${B}frontend/hamilton.jpg`,
    thumb: `${B}frontend/hamilton.jpg`,
  },
  {
    name: "Tauranga",
    lat: -37.686,
    lon: 176.167,
    photo: `${B}frontend/taurnaga.jpg`,
    thumb: `${B}frontend/taurnaga.jpg`,
  },
];
