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
