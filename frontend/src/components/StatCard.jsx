import React from 'react'
export default function StatCard({label,value,unit}){
  return(<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 hover:shadow-glow transition-shadow">
    <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
    <div className="mt-1 text-3xl font-semibold">{value}<span className="text-lg ml-1 opacity-70">{unit}</span></div>
  </div>)
}
