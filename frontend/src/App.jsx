// src/App.jsx
import React from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { CITIES, apiBase } from "./utils";
import CitySidebar from "./components/CitySidebar";
import WeatherIcon from "./components/WeatherIcon";
import "./styles.css";

function Ring({ p = 0 }) {
  const pct = Math.max(0, Math.min(1, p || 0));
  const style = { "--p": pct * 100, "--ring-color": "rgb(56 189 248)" };
  return (
    <div className="ring relative">
      <div className="ring-label" style={style}>
        <span style={{ position: "absolute" }}></span>
        {(pct * 100).toFixed(0)}%
      </div>
      <div className="absolute inset-0" style={style}></div>
    </div>
  );
}

async function getForecast(lat, lon) {
  const u = new URL(apiBase() + "/forecast");
  u.searchParams.set("lat", lat);
  u.searchParams.set("lon", lon);
  u.searchParams.set("hours", 24);
  const res = await fetch(u);
  if (!res.ok) throw new Error("Backend fetch failed");
  return res.json();
}

function pickIcon(hourly) {
  if (!hourly) return "sun";
  const p = hourly.precipitation_probability?.[0] ?? 0;
  if (p >= 50) return "rain";
  // quick heuristic: “cloud” when prob 20..49
  if (p >= 20) return "cloud";
  return "sun";
}

export default function App() {
  const [city, setCity] = React.useState(CITIES[0]);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState(null);
  const [photoKey, setPhotoKey] = React.useState(0); // for re-triggering fade

  React.useEffect(() => {
    setLoading(true);
    setErr(null);
    getForecast(city.lat, city.lon)
      .then((d) => {
        setData(d);
        setPhotoKey((k) => k + 1);
      })
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, [city]);

  const hourly = data?.hourly;
  const icon = pickIcon(hourly);
  const features = hourly && {
    temp: hourly.temperature_2m[0],
    humidity: hourly.relative_humidity_2m[0],
    wind: hourly.wind_speed_10m[0],
    pressure: hourly.pressure_msl[0],
  };
  const chartData = hourly
    ? hourly.time.map((t, i) => ({
        time: t.slice(11, 16),
        temp: hourly.temperature_2m[i],
      }))
    : [];

  return (
    <div className="app">
      <div className="stage absolute inset-0" />

      {/* Header */}
      <header className="relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-sky-400/20 grid place-items-center border border-sky-400/30">🌤️</div>
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">Weather Forecasting — <span className="text-sky-400">Interactive</span></h1>
            <p className="text-slate-400 text-sm">GitHub Pages frontend • FastAPI backend (Render)</p>
          </div>
        </div>
      </header>

      {/* Layout */}
      <main className="relative max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-[16rem_1fr_22rem] gap-6 items-start">
          {/* Sidebar */}
          <CitySidebar cities={CITIES} current={city} onPick={setCity} />

          {/* Center column: Hero + Chart */}
          <section className="space-y-6">
            {/* Hero with city photo */}
            <div className="card overflow-hidden relative">
              <div className="absolute inset-0">
                <img
                  key={photoKey}
                  src={city.photo}
                  alt={city.name}
                  className="w-full h-full object-cover opacity-60 photo-enter"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/70" />
              </div>

              <div className="relative flex items-center gap-6">
                <div className="float">
                  <WeatherIcon kind={icon} size={104} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{city.name}</h2>
                  <p className="text-slate-300">
                    {icon === "rain" ? "Likely rain" : icon === "cloud" ? "Partly cloudy" : "Sunny/clear"}
                  </p>
                </div>
                <div className="ml-auto hidden md:block">
                  <Ring p={data?.ml_prob_now ?? 0} />
                </div>
              </div>

              {/* KPIs */}
              {features && (
                <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                  <div className="tile fade-in">
                    <div className="text-xs uppercase text-slate-400">Temp</div>
                    <div className="text-3xl font-semibold">{features.temp.toFixed(1)}<span className="text-lg opacity-70 ml-1">°C</span></div>
                  </div>
                  <div className="tile fade-in">
                    <div className="text-xs uppercase text-slate-400">Humidity</div>
                    <div className="text-3xl font-semibold">{features.humidity.toFixed(0)}<span className="text-lg opacity-70 ml-1">%</span></div>
                  </div>
                  <div className="tile fade-in">
                    <div className="text-xs uppercase text-slate-400">Wind</div>
                    <div className="text-3xl font-semibold">{features.wind.toFixed(1)}<span className="text-lg opacity-70 ml-1">km/h</span></div>
                  </div>
                  <div className="tile fade-in">
                    <div className="text-xs uppercase text-slate-400">Pressure</div>
                    <div className="text-3xl font-semibold">{features.pressure.toFixed(0)}<span className="text-lg opacity-70 ml-1">hPa</span></div>
                  </div>
                </div>
              )}
            </div>

            {/* Chart card */}
            <div className="card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Temperature — next 24 hours</h3>
                <div className="text-slate-400 text-sm">{city.name}</div>
              </div>
              {err && <div className="rounded-xl border border-red-700 bg-red-900/30 p-3 text-red-200">Backend error: {err}</div>}
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData.slice(0, 24)} margin={{ top: 10, right: 10, bottom: 0, left: -15 }}>
                    <Line type="monotone" dataKey="temp" strokeWidth={3} dot={false} isAnimationActive />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* Right column: Ring + quick list */}
          <aside className="space-y-6">
            <div className="card text-center">
              <h4 className="text-lg font-semibold">ML: Rain Probability</h4>
              <p className="text-slate-400 text-sm">Estimated chance of rain over ~24h</p>
              <div className="mt-4 grid place-items-center">
                <div className="float"><Ring p={data?.ml_prob_now ?? 0} /></div>
              </div>
            </div>

            {hourly && (
              <div className="card">
                <h4 className="text-lg font-semibold mb-3">Snapshot</h4>
                <div className="space-y-2 max-h-[40vh] overflow-auto pr-1">
                  {hourly.time.slice(0, 12).map((t, i) => {
                    const prob = hourly.precipitation_probability[i];
                    const kind = prob >= 50 ? "rain" : prob >= 20 ? "cloud" : "sun";
                    return (
                      <div key={t} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 px-3 py-2">
                        <span className="text-slate-300">{t.slice(11, 16)}</span>
                        <span className="font-semibold">{hourly.temperature_2m[i].toFixed(1)}°C</span>
                        <span className="text-slate-400">{prob ?? 0}%</span>
                        <div className="opacity-80">
                          <WeatherIcon kind={kind} size={28} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
