// src/components/CitySidebar.jsx
import React from "react";

export default function CitySidebar({ cities, current, onPick }) {
  const [q, setQ] = React.useState("");
  const filtered = cities.filter((c) =>
    c.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="card sticky top-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Cities</h3>
          <input
            className="mt-2 w-full rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-2 outline-none focus:border-sky-400"
            placeholder="Search…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div className="space-y-2 max-h-[60vh] overflow-auto pr-1">
          {filtered.map((c) => {
            const active = c.name === current.name;
            return (
              <button
                key={c.name}
                onClick={() => onPick(c)}
                className={
                  "w-full flex items-center gap-3 rounded-xl border px-2 py-2 text-left transition " +
                  (active
                    ? "bg-slate-800 border-slate-700"
                    : "border-slate-800 hover:border-slate-600")
                }
              >
                <img
                  src={c.thumb}
                  alt={c.name}
                  className="h-8 w-8 rounded-lg object-cover"
                  loading="lazy"
                />
                <span className="truncate">{c.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
