import React from 'react'
export default function CityPicker({cities,value,onChange}){
  const [q,setQ]=React.useState('')
  const filtered=cities.filter(c=>c.name.toLowerCase().includes(q.toLowerCase()))
  return(<div className="w-full md:max-w-sm">
    <label className="text-sm text-slate-300">City</label>
    <input className="mt-1 w-full rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-2 outline-none focus:border-sky-400" placeholder="Search cities…" value={q} onChange={e=>setQ(e.target.value)}/>
    <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
      {filtered.map(c=>(<button key={c.name} onClick={()=>onChange(c)} className={'px-3 py-2 rounded-xl border text-left '+(value.name===c.name?'bg-slate-800 border-slate-700':'border-slate-800 hover:border-slate-600')}>{c.name}</button>))}
    </div>
  </div>)
}
