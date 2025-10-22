// src/utils.js
export const CITIES = [
  {
    name: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
    photo:
      "https://stock.adobe.com/search?k=aucklandq=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://stock.adobe.com/search?k=aucklandq=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Wellington",
    lat: -41.2866,
    lon: 174.7756,
    photo:
      "https://www.istockphoto.com/photos/wellington-new-zealandq=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://www.istockphoto.com/photos/wellington-new-zealandq=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Christchurch",
    lat: -43.532,
    lon: 172.6306,
    photo:
      "https://www.britannica.com/place/Christchurch-New-Zealandq=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://www.britannica.com/place/Christchurch-New-Zealandq=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Dunedin",
    lat: -45.8788,
    lon: 170.5028,
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Ftravel%2Farticle%2F20230730-six-of-the-best-ways-to-immerse-yourself-in-nature-around-dunedin&psig=AOvVaw1HXxwZfoQ3p_pT2dx4gQva&ust=1761262789778000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKjg-Kr9uJADFQAAAAAdAAAAABAEq=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Ftravel%2Farticle%2F20230730-six-of-the-best-ways-to-immerse-yourself-in-nature-around-dunedin&psig=AOvVaw1HXxwZfoQ3p_pT2dx4gQva&ust=1761262789778000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKjg-Kr9uJADFQAAAAAdAAAAABAEq=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Hamilton",
    lat: -37.787,
    lon: 175.2793,
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.co.nz%2FTourism-g255108-Hamilton_Waikato_Region_North_Island-Vacations.html&psig=AOvVaw3ws0UuCIB0on0UhRVbjH2u&ust=1761262840117000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICsj8v9uJADFQAAAAAdAAAAABAEq=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.co.nz%2FTourism-g255108-Hamilton_Waikato_Region_North_Island-Vacations.html&psig=AOvVaw3ws0UuCIB0on0UhRVbjH2u&ust=1761262840117000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICsj8v9uJADFQAAAAAdAAAAABAEq=40&w=80&auto=format&fit=crop",
  },
  {
    name: "Tauranga",
    lat: -37.6878,
    lon: 176.1651,
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mpamag.com%2Fnz%2Fnews%2Fgeneral%2Ftravel-site-names-tauranga-as-one-of-the-worlds-most-beautiful-cities%2F520130&psig=AOvVaw0aOvlYBTXU_8Op6InW50_Z&ust=1761262894804000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjlzd79uJADFQAAAAAdAAAAABAEq=80&w=1600&auto=format&fit=crop",
    thumb:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mpamag.com%2Fnz%2Fnews%2Fgeneral%2Ftravel-site-names-tauranga-as-one-of-the-worlds-most-beautiful-cities%2F520130&psig=AOvVaw0aOvlYBTXU_8Op6InW50_Z&ust=1761262894804000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjlzd79uJADFQAAAAAdAAAAABAEq=40&w=80&auto=format&fit=crop",
  },
];

export function apiBase() {
  return import.meta.env.VITE_BACKEND_URL || "";
}
