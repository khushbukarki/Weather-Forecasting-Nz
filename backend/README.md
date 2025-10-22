Local:
```bash
cd backend
python -m venv .venv && . .venv/Scripts/activate
pip install -r requirements.txt
uvicorn app:app --host 127.0.0.1 --port 8010 --reload
```
Render:
- Build: `pip install -r backend/requirements.txt`
- Start: `cd backend && uvicorn app:app --host 0.0.0.0 --port $PORT`
- Env: `ALLOWED_ORIGINS=https://khushbukarki.github.io,https://khushbukarki.github.io/Weather-Forecasting-Nz/`
