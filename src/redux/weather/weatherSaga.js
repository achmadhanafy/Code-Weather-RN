import {call, put, takeLatest} from 'redux-saga/effects';
import {getCurrentWeatherApi, getHourWeatherApi} from './weatherApi';
import {
  getCurrentWeatherError,
  getCurrentWeatherSucess,
  getHourWeatherError,
  getHourWeatherSucess,
} from './weatherAction';
import * as CONST from './weatherConstant';

function* getCurrentWeather(params) {
  try {
    const response = yield call(getCurrentWeatherApi, params.payload);
    yield put(getCurrentWeatherSucess(response?.data));
  } catch (error) {
    yield put(getCurrentWeatherError(error?.response?.data));
  }
}

function* getHourWeather(params) {
  try {
    const response = yield call(getHourWeatherApi, params.payload);
    yield put(getHourWeatherSucess(response?.data));
  } catch (error) {
    yield put(getHourWeatherError(error?.response?.data));
  }
}

const weatherSaga = [
  takeLatest(CONST.GET_CURRENT_WEATHER, getCurrentWeather),
  takeLatest(CONST.GET_HOUR_WEATHER, getHourWeather),
];

export default weatherSaga;
