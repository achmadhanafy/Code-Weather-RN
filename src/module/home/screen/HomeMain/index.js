import {connect} from 'react-redux';
import View from './View';
import {
  getCurrentWeather,
  getHourWeather,
  setLocation,
} from '../../../../redux/weather/weatherAction';

const mapStateToProps = state => ({
  getCurrentWeatherResponse: state.weather.getCurrentWeatherResponse,
  getHourWeatherResponse: state.weather.getHourWeatherResponse,
  location: state.weather.location,
});

const mapDispatchToProps = {
  getCurrentWeather: payload => getCurrentWeather(payload),
  getHourWeather: payload => getHourWeather(payload),
  setLocation: payload => setLocation(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
