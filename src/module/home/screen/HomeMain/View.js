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
import useWeatherInDays from './component/WeatherInDays/useWeatherInDays';
import {ScrollView} from 'react-native-gesture-handler';

function HomeMain(props) {
  const {
    getCurrentWeatherResponse,
    getCurrentWeather,
    getHourWeather,
    getHourWeatherResponse,
    location,
  } = props;
  const colorScheme = 'light';
  const headerSection = useHeaderSection();
  const headerSummary = useHeaderSummary();
  const weatherInHours = useWeatherInHours();
  const weatherInDay = useWeatherInDays();

  // Fetch current weather
  useEffect(() => {
    getCurrentWeather({
      lat: location?.latitude,
      lon: location?.longitude,
      units: 'metric',
    });
    getHourWeather({
      lat: location?.latitude,
      lon: location?.longitude,
      units: 'metric',
    });
  }, [location]);

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
      weatherInDay.callbackWeatherInDay(getHourWeatherResponse);
    }
  }, [getHourWeatherResponse]);

  return (
    <Container colorScheme={colorScheme}>
      <ScrollView>
        <View style={{paddingHorizontal: 16}}>
          <HeaderSection hookData={headerSection} colorScheme={colorScheme} />
          <HeaderSummary hookData={headerSummary} colorScheme={colorScheme} />
          <WeatherInHours hookData={weatherInHours} colorScheme={colorScheme} />
          <WeatherInDays hookData={weatherInDay} colorScheme={colorScheme} />
        </View>
      </ScrollView>
    </Container>
  );
}

export default HomeMain;
