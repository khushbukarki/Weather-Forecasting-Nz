# Weather-Forecasting-Nz — Full Stack (Pages + Render)
Frontend: React + Vite + Tailwind (premium UI). Backend: FastAPI (NumPy ML).

## Quick start
1) Backend on Render
   - Build: `pip install -r backend/requirements.txt`
   - Start: `cd backend && uvicorn app:app --host 0.0.0.0 --port $PORT`
   - Env: `ALLOWED_ORIGINS=https://khushbukarki.github.io,https://khushbukarki.github.io/Weather-Forecasting-Nz/`

2) Frontend local
```bash
cd frontend
npm install
npm run dev
```
(Already set: `VITE_BACKEND_URL=https://weather-forecasting-crrj.onrender.com`)

3) GitHub Pages
- Settings → Pages → Source = GitHub Actions
- Push to main. Workflow publishes `frontend/dist`.
