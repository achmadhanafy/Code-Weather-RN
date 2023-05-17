import {View, Text} from 'react-native';
import React from 'react';
import {Container} from '../../../../component';
import HeaderSection from './component/HeaderSection';
import HeaderSummary from './component/HeaderSummary';
import WeatherInDays from './component/WeatherInDays';
import WeatherInHours from './component/WeatherInHours';
import useHeaderSummary from './component/HeaderSummary/useHeaderSummary';

function HomeMain() {
  const colorScheme = 'light';
  const headerSummary = useHeaderSummary();
  return (
    <Container colorScheme={colorScheme}>
      <View style={{paddingHorizontal: 16}}>
        <HeaderSection colorScheme={colorScheme} />
        <HeaderSummary hookData={headerSummary} colorScheme={colorScheme} />
        <WeatherInDays colorScheme={colorScheme} />
        <WeatherInHours colorScheme={colorScheme} />
      </View>
    </Container>
  );
}

export default HomeMain;
