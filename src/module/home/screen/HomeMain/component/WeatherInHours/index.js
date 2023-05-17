import {View, Image} from 'react-native';
import React from 'react';
import style from './style';
import {Icon} from '../../../../../../config/Image';
import {Text} from '../../../../../../component';
import {Color} from '../../../../../../config/Color';
import {FlatList} from 'react-native-gesture-handler';

function WeatherInHours(props) {
  const {colorScheme, hookData} = props;

  const Item = () => {
    return (
      <View
        style={{
          flexDirection: 'column',
          width: 70,
          alignItems: 'center',
          marginVertical: 16,
        }}>
        <Text size={12} color={Color.neutral[colorScheme]}>
          May 18
        </Text>
        <Image
          source={Icon}
          style={{width: 25, height: 25, marginVertical: 5}}
        />
        <Text size={12} color={Color.black[colorScheme]}>
          27° C
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      data={hookData.weathers}
      renderItem={({item}) => (
        <Item date={item.date} icon={item.icon} temp={item.temp} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default WeatherInHours;
