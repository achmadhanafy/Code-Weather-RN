import {connect} from 'react-redux';
import View from './View';
import {
  getCurrentWeather,
  getHourWeather,
} from '../../../../redux/weather/weatherAction';

const mapStateToProps = state => ({
  getCurrentWeatherResponse: state.weather.getCurrentWeatherResponse,
  getHourWeatherResponse: state.weather.getHourWeatherResponse,
});

const mapDispatchToProps = {
  getCurrentWeather: payload => getCurrentWeather(payload),
  getHourWeather: payload => getHourWeather(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
