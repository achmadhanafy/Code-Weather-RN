import * as CONST from './weatherConstant';
import {
  getCurrentWeatherInitialState,
  getHourWeatherInitialState,
  locationInitialState,
} from './weatherInitialState';

const weatherInitialState = {
  ...getCurrentWeatherInitialState,
  ...getHourWeatherInitialState,
  ...locationInitialState,
  action: '',
};

export const weatherReducer = (state = weatherInitialState, action) => {
  const {payload, type} = action;
  const actions = {
    [CONST.GET_CURRENT_WEATHER]: () => ({
      ...state,
      getCurrentWeatherParam: payload,
      action: type,
    }),
    [CONST.GET_CURRENT_WEATHER_SUCCESS]: () => ({
      ...state,
      getCurrentWeatherResponse: payload,
      getCurrentWeatherError:
        getCurrentWeatherInitialState.getCurrentWeatherError,
      action: type,
    }),
    [CONST.GET_CURRENT_WEATHER_ERROR]: () => ({
      ...state,
      getCurrentWeatherError: payload,
      getCurrentWeatherResponse:
        getCurrentWeatherInitialState.getCurrentWeatherResponse,
      action: type,
    }),
    [CONST.GET_CURRENT_WEATHER_CLEAR]: () => ({
      ...state,
      ...getCurrentWeatherInitialState,
      action: type,
    }),

    [CONST.GET_HOUR_WEATHER]: () => ({
      ...state,
      getHourWeatherParam: payload,
      action: type,
    }),
    [CONST.GET_HOUR_WEATHER_SUCCESS]: () => ({
      ...state,
      getHourWeatherResponse: payload,
      getHourWeatherError: getHourWeatherInitialState.getHourWeatherError,
      action: type,
    }),
    [CONST.GET_HOUR_WEATHER_ERROR]: () => ({
      ...state,
      getHourWeatherError: payload,
      getHourWeatherResponse: getHourWeatherInitialState.getHourWeatherResponse,
      action: type,
    }),
    [CONST.GET_HOUR_WEATHER_CLEAR]: () => ({
      ...state,
      ...getHourWeatherInitialState,
      action: type,
    }),

    [CONST.SET_LOCATION]: () => ({
      ...state,
      location: {
        latitude: payload.latitude,
        longitude: payload.longitude,
      },
      action: type,
    }),

    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
