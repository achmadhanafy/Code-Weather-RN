import * as CONST from './weatherConstant';
import {
  getPokemonDetailInitialState,
  getCurrentWeatherInitialState,
} from './weatherInitialState';

const weatherInitialState = {
  ...getCurrentWeatherInitialState,
  ...getPokemonDetailInitialState,
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

    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
