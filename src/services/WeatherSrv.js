import axios from 'axios';

const formatWeather = ({ list }) => {
  return list.map(({ dt, wind, weather, main }) => ({
    date: dt,
    wind,
    weather: weather[0],
    temp: main.temp,
    humidity: main.humidity,
  }));
};

export const getWeatherSrv = async () => {
  const { data } = await axios.get(
    'http://api.openweathermap.org/data/2.5/forecast?q=paris&units=metric&appid=8610307215a830c3348a745617c7eed0&lang=fr'
  );
  console.log(data);
  return formatWeather(data);
};
