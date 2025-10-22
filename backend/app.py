import os, json
from typing import List
import numpy as np
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

APP_NAME = "NZ Weather Forecasting ML API"
MODEL_DIR = os.path.join(os.path.dirname(__file__), "model")
WEIGHTS_PATH = os.path.join(MODEL_DIR, "weights.json")

app = FastAPI(title=APP_NAME, version="1.0.0", docs_url="/docs", redoc_url="/redoc")

origins = os.environ.get("ALLOWED_ORIGINS", "*").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Features(BaseModel):
    temp: float
    humidity: float
    wind: float
    pressure: float

def _sigmoid(x: float) -> float:
    import math
    return 1.0 / (1.0 + math.exp(-x))

def load_weights():
    with open(WEIGHTS_PATH, "r", encoding="utf-8") as f:
        w = json.load(f)
    mu = [w["mu"]["temp"], w["mu"]["humidity"], w["mu"]["wind"], w["mu"]["pressure"]]
    sigma = [w["sigma"]["temp"], w["sigma"]["humidity"], w["sigma"]["wind"], w["sigma"]["pressure"]]
    coef = w["coef"]
    bias = w["bias"]
    return mu, sigma, coef, bias

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/predict")
def predict(temp: float, humidity: float, wind: float, pressure: float):
    mu, sigma, coef, bias = load_weights()
    z = [
        (temp - mu[0]) / sigma[0],
        (humidity - mu[1]) / sigma[1],
        (wind - mu[2]) / sigma[2],
        (pressure - mu[3]) / sigma[3],
    ]
    linear = bias + sum(c*v for c, v in zip(coef, z))
    p = _sigmoid(linear)
    return {"rain_probability": p}

OPEN_METEO = "https://api.open-meteo.com/v1/forecast"

@app.get("/forecast")
def forecast(lat: float, lon: float, hours: int = 24):
    params = {
        "latitude": lat,
        "longitude": lon,
        "hourly": "temperature_2m,relative_humidity_2m,pressure_msl,wind_speed_10m,precipitation_probability",
        "forecast_days": 2
    }
    r = requests.get(OPEN_METEO, params=params, timeout=20)
    r.raise_for_status()
    data = r.json()
    hourly = data.get("hourly", {})
    out = {
        "time": hourly.get("time", [])[:hours],
        "temperature_2m": hourly.get("temperature_2m", [])[:hours],
        "relative_humidity_2m": hourly.get("relative_humidity_2m", [])[:hours],
        "pressure_msl": hourly.get("pressure_msl", [])[:hours],
        "wind_speed_10m": hourly.get("wind_speed_10m", [])[:hours],
        "precipitation_probability": hourly.get("precipitation_probability", [])[:hours],
    }
    mu, sigma, coef, bias = load_weights()
    if out["temperature_2m"]:
        z = [
            (out["temperature_2m"][0] - mu[0]) / sigma[0],
            (out["relative_humidity_2m"][0] - mu[1]) / sigma[1],
            (out["wind_speed_10m"][0] - mu[2]) / sigma[2],
            (out["pressure_msl"][0] - mu[3]) / sigma[3],
        ]
        linear = bias + sum(c*v for c, v in zip(coef, z))
        p = _sigmoid(linear)
    else:
        p = None
    return {"hourly": out, "ml_prob_now": p}
