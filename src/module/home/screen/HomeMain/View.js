import {View} from 'react-native';
import React, {useEffect} from 'react';
import {Container} from '../../../../component';
import HeaderSection from './component/HeaderSection';
import HeaderSummary from './component/HeaderSummary';
import WeatherInDays from './component/WeatherInDays';
import WeatherInHours from './component/WeatherInHours';
import useHeaderSummary from './component/HeaderSummary/useHeaderSummary';
import useWeatherInHours from './component/WeatherInHours/useWeatherInHours';
import useHeaderSection from './component/HeaderSection/useHeaderSection';

function HomeMain(props) {
  const {
    getCurrentWeatherResponse,
    getCurrentWeather,
    getHourWeather,
    getHourWeatherResponse,
  } = props;
  const colorScheme = 'light';
  const headerSection = useHeaderSection();
  const headerSummary = useHeaderSummary();
  const weatherInHours = useWeatherInHours();

  // Fetch current weather
  useEffect(() => {
    getCurrentWeather({
      lat: '-6.473816',
      lon: '106.754887',
      units: 'metric',
    });
    getHourWeather({
      lat: '-6.473816',
      lon: '106.754887',
      units: 'metric',
    });
  }, []);

  // Store data current weather to hooks
  useEffect(() => {
    if (getCurrentWeatherResponse?.weather) {
      headerSummary.callbackSummaryData(getCurrentWeatherResponse);
      headerSection.callbackHeaderData(getCurrentWeatherResponse);
    }
  }, [getCurrentWeatherResponse]);

  // Store data 3 hour weather to hooks
  useEffect(() => {
    if (getHourWeatherResponse?.list) {
      weatherInHours.callbackWeathers(getHourWeatherResponse);
    }
  }, [getHourWeatherResponse]);

  return (
    <Container colorScheme={colorScheme}>
      <View style={{paddingHorizontal: 16}}>
        <HeaderSection hookData={headerSection} colorScheme={colorScheme} />
        <HeaderSummary hookData={headerSummary} colorScheme={colorScheme} />
        <WeatherInHours hookData={weatherInHours} colorScheme={colorScheme} />
        <WeatherInDays hookData={weatherInHours} colorScheme={colorScheme} />
      </View>
    </Container>
  );
}

export default HomeMain;
