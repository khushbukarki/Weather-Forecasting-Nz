import React from 'react'
export default function StatCard({label,value,unit}){
  return(<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 hover:shadow-glow transition-shadow">
    <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
    <div className="mt-1 text-3xl font-semibold">{value}<span className="text-lg ml-1 opacity-70">{unit}</span></div>
  </div>)
}
import React, { useState } from "react";
import { getCityImage } from "../data/cityImages"; // or just use city.photo from utils

export default function WeatherCard({ city }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="city-image-wrapper rounded-2xl border border-white/10 shadow-lg">
      <img
        src={city.photo}
        alt={city.name}
        className={`fade-in ${loaded ? "loaded" : ""} h-40 w-full object-cover`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
      <div className="absolute bottom-3 left-4 text-white text-xl font-semibold drop-shadow">
        {city.name}
      </div>

      {/* existing weather details below */}
      <div className="p-4 text-white">
        {/* your rain probability / temp UI */}
      </div>
    </div>
  );
}
