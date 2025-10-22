import React from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import ThemeToggle from './components/ThemeToggle.jsx'
import StatCard from './components/StatCard.jsx'
import CityPicker from './components/CityPicker.jsx'
import { SkeletonCard } from './components/Loading.jsx'
import { CITIES, apiBase } from './utils.js'

function Ring({ p }){
  const pct=Math.max(0,Math.min(1,p||0))
  const style={'--p':pct*100,'--ring-color':'rgb(56 189 248)'}
  const label=`${(pct*100).toFixed(0)}%`
  return <div className="ring relative" style={style}><div className="ring-label">{label}</div></div>
}

async function fetchForecast(lat,lon){
  const url=new URL(apiBase()+'/forecast')
  url.searchParams.set('lat',lat);url.searchParams.set('lon',lon);url.searchParams.set('hours',24)
  const res=await fetch(url); if(!res.ok) throw new Error('Backend fetch failed'); return res.json()
}

export default function App(){
  const [city,setCity]=React.useState(CITIES[0])
  const [data,setData]=React.useState(null)
  const [loading,setLoading]=React.useState(false)
  const [error,setError]=React.useState(null)

  React.useEffect(()=>{setLoading(true);setError(null);fetchForecast(city.lat,city.lon).then(setData).catch(e=>setError(e.message)).finally(()=>setLoading(false))},[city])

  const hourly=data?.hourly
  const features=hourly?{temp:hourly.temperature_2m[0],humidity:hourly.relative_humidity_2m[0],wind:hourly.wind_speed_10m[0],pressure:hourly.pressure_msl[0]}:null
  const chartData=hourly?hourly.time.map((t,i)=>({time:t.slice(11,16),temp:hourly.temperature_2m[i]})):[]

  return(<div className="relative min-h-screen">
    <div className="pointer-events-none absolute inset-0 bg-radial-fade"></div>
    <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:40px_40px]"></div>

    <header className="relative max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-sky-400/20 grid place-items-center border border-sky-400/30">🌦️</div>
        <div><h1 className="text-2xl md:text-3xl font-semibold">NZ Weather ML — <span className="text-sky-400">Pro</span></h1>
        <p className="text-slate-400 text-sm">GitHub Pages frontend • FastAPI backend (Render)</p></div>
      </div>
      <ThemeToggle/>
    </header>

    <main className="relative max-w-7xl mx-auto px-6 pb-16">
      <section className="grid lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div><h2 className="text-xl font-semibold">City & Forecast</h2><p className="text-slate-400 text-sm">Choose a city and view the next 24 hours.</p></div>
            {data&&<div className="hidden md:block"><Ring p={data.ml_prob_now}/></div>}
          </div>
          <div className="mt-5"><CityPicker cities={CITIES} value={city} onChange={setCity}/></div>
          <div className="mt-6">
            {loading&&<SkeletonCard/>}
            {error&&<div className="rounded-xl border border-red-700 bg-red-900/30 p-4 text-red-200">Backend error: {error}</div>}
            {hourly&&(<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><div className="h-60">
              <ResponsiveContainer width="100%" height="100%"><LineChart data={chartData.slice(0,24)} margin={{top:5,right:20,bottom:5,left:0}}>
                <Line type="monotone" dataKey="temp" strokeWidth={3} dot={false}/>
                <CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="time"/><YAxis/><Tooltip/>
              </LineChart></ResponsiveContainer></div></div>)}
          </div>
        </div>
        <div className="lg:col-span-1 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
          <h3 className="text-lg font-semibold">ML: Rain Probability</h3>
          <p className="text-slate-400 text-sm">Estimated chance of rain over ~24 hours.</p>
          <div className="mt-4 grid place-items-center"><Ring p={data?.ml_prob_now??0}/></div>
          {features&&(<div className="mt-6 grid grid-cols-2 gap-3">
            <StatCard label="Temp" value={features.temp.toFixed(1)} unit="°C"/>
            <StatCard label="Humidity" value={features.humidity.toFixed(0)} unit="%"/>
            <StatCard label="Wind" value={features.wind.toFixed(1)} unit="km/h"/>
            <StatCard label="Pressure" value={features.pressure.toFixed(0)} unit="hPa"/>
          </div>)}
        </div>
      </section>
      <footer className="mt-10 text-center text-xs text-slate-400">© Khushbu — {new Date().getFullYear()}</footer>
    </main>
  </div>)
}
