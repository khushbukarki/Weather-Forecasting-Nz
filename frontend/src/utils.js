// src/utils.js
const B = import.meta.env.BASE_URL || "/";

export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo: `${B}images/auckland.jpg`,
    thumb: `${B}images/auckland.jpg`,
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo: `${B}images/wellington.jpg`,
    thumb: `${B}images/wellington.jpg`,
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo: `${B}images/christchurch.jpg`,
    thumb: `${B}images/christchurch.jpg`,
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo: `${B}images/dunedin.jpg`,
    thumb: `${B}images/dunedin.jpg`,
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo: `${B}images/hamilton.jpg`,
    thumb: `${B}images/hamilton.jpg`,
  },
  {
    name: "Tauranga",
    lat: -37.686,
    lon: 176.167,
    photo: `${B}images/taurnaga.jpg`,
    thumb: `${B}images/taurnaga.jpg`,
  },
];
