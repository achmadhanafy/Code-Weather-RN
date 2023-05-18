import * as CONST from './weatherConstant';

export const getCurrentWeather = payload => ({
  type: CONST.GET_CURRENT_WEATHER,
  payload,
});
export const getCurrentWeatherSucess = payload => ({
  type: CONST.GET_CURRENT_WEATHER_SUCCESS,
  payload,
});
export const getCurrentWeatherError = payload => ({
  type: CONST.GET_CURRENT_WEATHER_ERROR,
  payload,
});
export const getCurrentWeatherClear = payload => ({
  type: CONST.GET_CURRENT_WEATHER_CLEAR,
  payload,
});

export const getHourWeather = payload => ({
  type: CONST.GET_HOUR_WEATHER,
  payload,
});
export const getHourWeatherSucess = payload => ({
  type: CONST.GET_HOUR_WEATHER_SUCCESS,
  payload,
});
export const getHourWeatherError = payload => ({
  type: CONST.GET_HOUR_WEATHER_ERROR,
  payload,
});
export const getHourWeatherClear = payload => ({
  type: CONST.GET_HOUR_WEATHER_CLEAR,
  payload,
});

export const setLocation = payload => ({
  type: CONST.SET_LOCATION,
  payload,
});
