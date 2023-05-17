import {View, Text} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import {Container} from '../../../../component';
import HeaderSection from './component/HeaderSection';
import HeaderSummary from './component/HeaderSummary';
import WeatherInDays from './component/WeatherInDays';
import WeatherInHours from './component/WeatherInHours';
import useHeaderSummary from './component/HeaderSummary/useHeaderSummary';
import useWeatherInHours from './component/WeatherInHours/useWeatherInHours';
import useHeaderSection from './component/HeaderSection/useHeaderSection';
import {capitalizeFirstLetter} from '../../../../util/function';

function HomeMain(props) {
  const {getCurrentWeatherResponse, getCurrentWeather} = props;
  const colorScheme = 'light';
  const headerSection = useHeaderSection();
  const headerSummary = useHeaderSummary();
  const weatherInHours = useWeatherInHours();

  useEffect(() => {
    getCurrentWeather({
      lat: '-6.473816',
      lon: '106.754887',
      units: 'metric',
    });
  }, []);

  // Store data current weather to hooks
  useEffect(() => {
    if (getCurrentWeatherResponse?.weather) {
      const headerSummarykey = {
        wind: getCurrentWeatherResponse.wind?.speed?.toFixed(1),
        humadity: getCurrentWeatherResponse.main?.humidity,
        pressure: getCurrentWeatherResponse.main?.pressure,
        uv: '0.0',
        visibility: (getCurrentWeatherResponse.visibility / 1000)?.toFixed(1),
        dew: 20,
      };
      const headerSectionData = {
        desc: capitalizeFirstLetter(
          getCurrentWeatherResponse.weather[0]?.description,
        ),
        subDesc: 'Light air',
        icon: getCurrentWeatherResponse.weather[0]?.icon,
        temp: getCurrentWeatherResponse.main?.temp?.toFixed(0),
        feels: getCurrentWeatherResponse.main?.feels_like?.toFixed(0),
      };

      setHeaderSection(headerSectionData);
      setHeaderSummary(headerSummarykey);
    }
  }, [getCurrentWeatherResponse, setHeaderSection, setHeaderSummary]);

  const setHeaderSummary = useCallback(
    key => {
      const data = headerSummary.summaryData.map(element => {
        return {
          label: element.label,
          value: key[element.key],
          unit: element.unit,
          key: element.key,
        };
      });
      headerSummary.setSummaryData(data);
    },
    [headerSummary],
  );

  const setHeaderSection = useCallback(
    data => {
      headerSection.setHeaderData(data);
    },
    [headerSection],
  );
  console.log(headerSection);
  return (
    <Container colorScheme={colorScheme}>
      <View style={{paddingHorizontal: 16}}>
        <HeaderSection hookData={headerSection} colorScheme={colorScheme} />
        <HeaderSummary hookData={headerSummary} colorScheme={colorScheme} />
        <WeatherInHours hookData={weatherInHours} colorScheme={colorScheme} />
        <WeatherInDays colorScheme={colorScheme} />
      </View>
    </Container>
  );
}

export default HomeMain;
