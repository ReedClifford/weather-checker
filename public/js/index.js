const url = "http://api.openweathermap.org/data/2.5/weather?";
const fetch = async (location) => {
  try {
    const res = await axios.get(url, {
      params: {
        q: location,
        APPID: "c609c182b6a439b9ec71edd61f9e3e12",
        units: "metric",
      },
    });
    const data = res.data;
    if (data.Error) {
      return [];
    }
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

const search = document.querySelector("#search");

const searchLocation = async (e) => {
  const weather = await fetch(e.target.value);
  console.log(weather.sys.country);
  document.querySelector("h1").innerText = `${weather.main.temp} \u00B0 `;
  document.querySelector("#country").innerText = `${weather.sys.country} `;
  document.querySelector("h2").textContent = `${weather.name}`;
  document.querySelector(
    "#desc"
  ).textContent = `${weather.weather[0].description}`;
  document.querySelector(
    "p"
  ).textContent = `Latitude: ${weather.coord.lat}, Longitude: ${weather.coord.lon} `;
  document.querySelector(
    "img"
  ).src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  if (weather.weather[0].main === "Rain") {
    document.querySelector("#weather").src = "/public/videos/rainy.mp4";
  } else if (weather.weather[0].main === "Clear") {
    document.querySelector("#weather").src = "/public/videos/sunny.mp4";
  } else if (weather.weather[0].main === "Thunderstorm") {
    document.querySelector("#weather").src = "/public/videos/stormy.mp4";
  } else if (weather.weather[0].main === "Snow") {
    document.querySelector("#weather").src = "/public/videos/snow.mp4";
  } else if (weather.weather[0].main === "Drizzle") {
    document.querySelector("#weather").src = "/public/videos/drizzle.mp4";
  } else if (weather.weather[0].main === "Clouds") {
    document.querySelector("#weather").src = "/public/videos/cloudy.mp4";
  } else if (weather.weather[0].main === "Mist") {
    document.querySelector("#weather").src = "/public/videos/mist.mp4";
  }
};

search.addEventListener("input", debounce(searchLocation));
