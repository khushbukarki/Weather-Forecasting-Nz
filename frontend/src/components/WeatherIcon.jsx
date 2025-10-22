// src/components/WeatherIcon.jsx
import React from "react";

export default function WeatherIcon({ kind = "sun", size = 96 }) {
  const common = "drop-shadow-[0_8px_24px_rgba(2,8,23,0.35)]";
  const s = { width: size, height: size };
  if (kind === "rain") {
    return (
      <svg viewBox="0 0 128 128" style={s} className={common}>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx="68" cy="56" r="28" fill="#94a3b8" />
        <ellipse cx="44" cy="64" rx="24" ry="18" fill="#64748b" />
        <g fill="url(#g1)" opacity="0.9">
          <rect x="40" y="86" rx="2" width="6" height="18" />
          <rect x="58" y="90" rx="2" width="6" height="22" />
          <rect x="76" y="86" rx="2" width="6" height="18" />
        </g>
      </svg>
    );
  }
  if (kind === "cloud") {
    return (
      <svg viewBox="0 0 128 128" style={s} className={common}>
        <circle cx="68" cy="56" r="28" fill="#94a3b8" />
        <ellipse cx="44" cy="64" rx="24" ry="18" fill="#64748b" />
      </svg>
    );
  }
  // sun
  return (
    <svg viewBox="0 0 128 128" style={s} className={common}>
      <defs>
        <radialGradient id="sun" r="65%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
      </defs>
      <circle cx="64" cy="64" r="26" fill="url(#sun)" />
      {[...Array(12)].map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 64 + Math.cos(a) * 36;
        const y1 = 64 + Math.sin(a) * 36;
        const x2 = 64 + Math.cos(a) * 48;
        const y2 = 64 + Math.sin(a) * 48;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#fbbf24"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
