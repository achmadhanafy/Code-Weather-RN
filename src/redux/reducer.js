import {combineReducers} from 'redux';
import {weatherReducer} from './weather/weatherReducer';

export const reducer = combineReducers({
  weather: weatherReducer,
});
