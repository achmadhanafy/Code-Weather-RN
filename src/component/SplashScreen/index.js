import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SCREEN, SIZE} from '../../util/constant';
import Container from '../Container';
import {Color} from '../../config/Color';
import {Icon} from '../../config/Image';

function SplashScreen(props) {
  const {navigation} = props;
  const colorScheme = 'light';

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(SCREEN.Home.HomeMain);
    }, 2000);
  }, []);

  return (
    <Container colorScheme={colorScheme}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: SIZE.screen.height,
        }}>
        <Image source={Icon} style={{width: 80, height: 80, marginBottom: 16}} />
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
