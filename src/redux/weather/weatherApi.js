import {API_KEY, api_25} from '../../util/config';

export const weatherApi = {
  getCurrentWeather: 'weather',
};

export const getCurrentWeatherApi = payload => {
  const {lat, lon, units} = payload;
  return api_25.get(
    `${weatherApi.getCurrentWeather}?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`,
  );
};
