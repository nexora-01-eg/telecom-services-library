const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const errorEl = document.getElementById("error");
const loadingEl = document.getElementById("loading");
const weatherEl = document.getElementById("weather");

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

const WEEKDAYS = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

const weatherCodeToDesc = {
  0: "صافي ☀️",
  1: "صافي غالباً 🌤️",
  2: "غائم جزئياً ⛅",
  3: "غائم ☁️",
  45: "ضباب 🌫️",
  48: "ضباب متجمد 🌫️",
  51: "رذاذ خفيف 🌦️",
  53: "رذاذ 🌦️",
  55: "رذاذ كثيف 🌧️",
  61: "مطر خفيف 🌧️",
  63: "مطر 🌧️",
  65: "مطر غزير ⛈️",
  71: "ثلج خفيف 🌨️",
  73: "ثلج 🌨️",
  75: "ثلج كثيف ❄️",
  80: "زخات مطر 🌧️",
  81: "زخات مطر 🌧️",
  82: "زخات عنيفة ⛈️",
  95: "عاصفة رعدية ⛈️",
};

function setError(msg) {
  errorEl.textContent = msg;
}

function showLoading(show) {
  loadingEl.hidden = !show;
}

function setField(id, value) {
  document.getElementById(id).textContent = value;
}

async function fetchWeather() {
  const query = cityInput.value.trim();
  if (!query) {
    setError("اكتب اسم المدينة الأول");
    return;
  }

  setError("");
  showLoading(true);
  weatherEl.hidden = true;

  try {
    const geoRes = await fetch(`${GEO_URL}?name=${encodeURIComponent(query)}&count=1&language=ar`);
    if (!geoRes.ok) throw new Error("network");
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("notfound");
    }

    const place = geoData.results[0];
    const { latitude, longitude, name, country } = place;

    const weatherRes = await fetch(
      `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}` +
      `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure,wind_speed_10m` +
      `&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset` +
      `&timezone=auto&forecast_days=5`
    );
    if (!weatherRes.ok) throw new Error("network");
    const data = await weatherRes.json();

    renderWeather(data, name, country);
  } catch (err) {
    if (err.message === "notfound") {
      setError("مفيش نتيجة للمدينة دي — جرّب اسم تاني");
    } else {
      setError("حصل خطأ في جلب البيانات — اتأكد إنك متصل بالإنترنت");
    }
  } finally {
    showLoading(false);
  }
}

function renderWeather(data, name, country) {
  const c = data.current;
  const desc = weatherCodeToDesc[c.weather_code] || "طقس غير معروف";

  setField("cityName", `${name}${country ? "، " + country : ""}`);

  const now = new Date();
  setField("date", now.toLocaleDateString("ar-EG", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  }));

  setField("temp", `${Math.round(c.temperature_2m)}°`);
  setField("desc", desc);
  setField("feelsLike", `${Math.round(c.apparent_temperature)}°`);
  setField("wind", `${Math.round(c.wind_speed_10m)} كم/س`);
  setField("humidity", `${c.relative_humidity_2m}%`);
  setField("pressure", `${Math.round(c.surface_pressure)} hPa`);

  const sunrise = new Date(data.daily.sunrise[0]);
  const sunset = new Date(data.daily.sunset[0]);
  setField("sunrise", sunrise.toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }));
  setField("sunset", sunset.toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }));

  const forecastEl = document.getElementById("forecast");
  forecastEl.innerHTML = "";
  for (let i = 0; i < data.daily.time.length; i++) {
    const day = new Date(data.daily.time[i]);
    const dayName = i === 0 ? "اليوم" : WEEKDAYS[day.getDay()];
    const icon = weatherCodeToDesc[data.daily.weather_code[i]]?.split(" ")[1] || "🌡️";

    const div = document.createElement("div");
    div.className = "forecast-day";
    div.innerHTML = `
      <div>${dayName}</div>
      <div class="f-temp">${icon}</div>
      <div>${Math.round(data.daily.temperature_2m_max[i])}° / ${Math.round(data.daily.temperature_2m_min[i])}°</div>
    `;
    forecastEl.appendChild(div);
  }

  weatherEl.hidden = false;
}

searchBtn.addEventListener("click", fetchWeather);
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") fetchWeather();
});

cityInput.value = "القاهرة";
fetchWeather();
