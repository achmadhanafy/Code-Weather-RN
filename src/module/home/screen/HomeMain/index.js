import {connect} from 'react-redux';
import View from './View';
import {getCurrentWeather} from '../../../../redux/weather/weatherAction';

const mapStateToProps = state => ({
  getCurrentWeatherResponse: state.weather.getCurrentWeatherResponse,
});

const mapDispatchToProps = {
  getCurrentWeather: payload => getCurrentWeather(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
