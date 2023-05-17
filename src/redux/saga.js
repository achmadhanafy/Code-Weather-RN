import {all} from 'redux-saga/effects';
import weatherSaga from './weather/weatherSaga';

function* saga() {
  yield all([...weatherSaga]);
}

export default saga;
