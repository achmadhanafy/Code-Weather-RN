import {call, put, takeLatest} from 'redux-saga/effects';
import {getCurrentWeatherApi} from './weatherApi';
import {getCurrentWeatherError, getCurrentWeatherSucess} from './weatherAction';
import * as CONST from './weatherConstant';

function* getCurrentWeather(params) {
  try {
    const response = yield call(getCurrentWeatherApi, params.payload);
    yield put(getCurrentWeatherSucess(response?.data));
  } catch (error) {
    yield put(getCurrentWeatherError(error?.response?.data));
  }
}

const weatherSaga = [takeLatest(CONST.GET_CURRENT_WEATHER, getCurrentWeather)];

export default weatherSaga;
