apikey = "626a19cc17761d1bf7bb5a397901d836";
export const fetchLocationId = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/find?q=${city}&appid=${apikey}
`
  );
  const data = await response.json();
  return data.list[0].id;
};
export const fetchWeather = async (woeid) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${woeid}&appid=${apikey}`
  );
  const data = await response.json();

  const {
    name: location,
    weather,
    main: { temp: temperature },
  } = data;

  return {
    location,
    weather: weather[0].main,
    temperature: temperature - 273.15, // Convert temperature from Kelvin to Celsius
  };
};
