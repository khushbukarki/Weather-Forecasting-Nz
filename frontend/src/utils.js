export const CITIES=[
  {name:'Auckland',lat:-36.8485,lon:174.7633},
  {name:'Wellington',lat:-41.2866,lon:174.7756},
  {name:'Christchurch',lat:-43.5320,lon:172.6306},
  {name:'Dunedin',lat:-45.8788,lon:170.5028},
  {name:'Hamilton',lat:-37.7870,lon:175.2793},
  {name:'Tauranga',lat:-37.6878,lon:176.1651},
]
export function apiBase(){return import.meta.env.VITE_BACKEND_URL||""}
