import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SCREEN, SIZE} from '../../util/constant';
import Container from '../Container';
import {Color} from '../../config/Color';
import {Icon} from '../../config/Image';
import useRequestLocation from '../../module/home/screen/HomeMain/useRequestLocation';
import {useDispatch} from 'react-redux';
import {setLocation} from '../../redux/weather/weatherAction';

function SplashScreen(props) {
  const {navigation} = props;
  const colorScheme = 'light';
  const dispatch = useDispatch();
  const requestLocation = useRequestLocation(position => {
    dispatch(
      setLocation({
        latitude: position?.coords?.latitude?.toString(),
        longitude: position?.coords?.longitude?.toString(),
      }),
    );
    navigation.replace(SCREEN.Home.HomeMain);
  });

  return (
    <Container colorScheme={colorScheme}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: SIZE.screen.height,
        }}>
        <Image
          source={Icon}
          style={{width: 80, height: 80, marginBottom: 16}}
        />
        <Text style={{color: Color.black[colorScheme]}}>
          Featching the weather...
        </Text>
        <View style={{position: 'absolute', bottom: 40}}>
          <Text style={{color: Color.black[colorScheme]}}>CodeWeather</Text>
        </View>
      </View>
    </Container>
  );
}

export default SplashScreen;
