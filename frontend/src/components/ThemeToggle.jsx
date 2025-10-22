import React from 'react'
export default function ThemeToggle(){
  const [dark,setDark]=React.useState(()=>localStorage.getItem('theme')!=='light')
  React.useEffect(()=>{document.documentElement.classList.toggle('dark',dark);localStorage.setItem('theme',dark?'dark':'light')},[dark])
  return <button aria-label="Toggle theme" onClick={()=>setDark(d=>!d)} className="px-3 py-2 rounded-xl border border-slate-700/70 hover:border-slate-500">{dark?'🌙':'☀️'}</button>
}
