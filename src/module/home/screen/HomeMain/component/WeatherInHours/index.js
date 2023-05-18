import {View, Image} from 'react-native';
import React from 'react';
import style from './style';
import {Icon} from '../../../../../../config/Image';
import {Text} from '../../../../../../component';
import {Color} from '../../../../../../config/Color';
import {FlatList} from 'react-native-gesture-handler';
import moment from 'moment';
import {icon_uri} from '../../../../../../util/config';

function WeatherInHours(props) {
  const {colorScheme, hookData} = props;
  const {weathers} = hookData;

  const renderTime = time => {
    const getData = moment(time).format('MMM D HH:mm');
    const splitData = getData?.split(' ');
    const splitTimeData = splitData?.[2]?.split(':');

    const getToday = moment(new Date()).format('MMM D HH:mm');
    const splitToday = getToday?.split(' ');

    if (
      splitData[1] !== splitToday[1] &&
      (splitTimeData[0] === '00' ||
        splitTimeData[0] === '01' ||
        splitTimeData[0] === '02')
    ) {
      return moment(time).format('MMM D');
    }
    return moment(time).format('HH:mm');
  };

  const renderItem = item => {
    return (
      <View style={style.container}>
        <Text size={12} color={Color.neutral[colorScheme]}>
          {renderTime(item?.date)}
        </Text>
        <Image
          source={{uri: icon_uri + item?.icon + '@2x.png'}}
          style={style.image}
        />
        <Text size={14} color={Color.black[colorScheme]}>
          {item?.temp?.toFixed(0)}° C
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      data={weathers}
      renderItem={
        ({item}) => {
          return renderItem(item);
        }
        // <Item date={item.date} icon={item.icon} temp={item.temp} />
      }
      keyExtractor={item => item.id}
    />
  );
}

export default WeatherInHours;
