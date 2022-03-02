import API_KEY from './api.js';

const getLatLon = async () => {
  const cityInput = document.getElementById('city-input');
  const cityName = cityInput.value.toLowerCase().trim();

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`;
  const res = await fetch(url);
  const [{lat, lon}] = await res.json();

  const coOrds = [lat, lon];

  return coOrds;
}

const searchWeather = async () => {
  const coOrds = await getLatLon();
  const [lat, lon] = coOrds;
};

document.getElementById('btn-search').addEventListener('click', searchWeather)