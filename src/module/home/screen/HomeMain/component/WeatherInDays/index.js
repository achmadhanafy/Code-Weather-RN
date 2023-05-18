import {View, Image} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import style from './style';
import {Color} from '../../../../../../config/Color';
import {Divider, Text} from '../../../../../../component';
import {SIZE} from '../../../../../../util/constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icon_uri} from '../../../../../../util/config';
import {BarSolid, ChevronRight} from '../../../../../../config/Svg';
import {
  capitalizeFirstLetter,
  getWindScale,
} from '../../../../../../util/function';

function WeatherInDays(props) {
  const {colorScheme, hookData} = props;
  const {weatherInDay, detailWeather, showDetailData, setShowDetailData} =
    hookData;
  const [showDetail, setShowDetail] = useState(false);

  const renderDayList = () => {
    if (!showDetail) {
      return weatherInDay?.map(element => (
        <TouchableOpacity
          onPress={() => {
            setShowDetailData(element);
            setShowDetail(!showDetail);
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
              alignItems: 'center',
            }}>
            <View style={{width: (SIZE.screen.width - 32) / 2}}>
              <Text size={14} color={Color.black[colorScheme]}>
                {moment(element?.date).format('ddd MMM D')}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text size={14} color={Color.black[colorScheme]}>
                {element?.tempMax?.toFixed(0)} / {element?.tempMin?.toFixed(0)}
                °C
              </Text>
              <Image
                source={{
                  uri: icon_uri + element?.icon + '@2x.png',
                }}
                style={{width: 25, height: 25, marginHorizontal: 5}}
              />
              <ChevronRight
                width={15}
                height={15}
                fill={Color.neutral[colorScheme]}
              />
            </View>
          </View>
          <Divider color={Color.neutral20[colorScheme]} height={1} />
        </TouchableOpacity>
      ));
    }
  };
console.log(showDetailData)
  const renderDetail = () => {
    if (showDetail) {
      return (
        <View>
          <TouchableOpacity
            style={{marginBottom: 16}}
            onPress={() => setShowDetail(!showDetail)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                alignItems: 'center',
              }}>
              <View style={{width: (SIZE.screen.width - 32) / 2}}>
                <Text weight="bold" size={14} color={Color.black[colorScheme]}>
                  {capitalizeFirstLetter(
                    showDetailData?.weather?.[0]?.description,
                  )}
                </Text>
                <Text size={12} color={Color.neutral[colorScheme]}>
                  {getWindScale(showDetailData?.wind?.toFixed(0))}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text size={13} color={Color.black[colorScheme]}>
                  {showDetailData?.tempMax?.toFixed(0)} /{' '}
                  {showDetailData?.tempMin?.toFixed(0)}°C
                </Text>
                <Image
                  source={{
                    uri: icon_uri + showDetailData?.icon + '@2x.png',
                  }}
                  style={{width: 25, height: 25, marginHorizontal: 5}}
                />
                <BarSolid
                  width={15}
                  height={15}
                  fill={Color.neutral[colorScheme]}
                />
              </View>
            </View>
          </TouchableOpacity>
          {detailWeather?.map(element => (
            <View key={element?.id} style={{marginTop: 16}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 16,
                }}>
                <Text>{element?.label}</Text>
                <Text>
                  {element?.value}
                  {element?.unit}
                </Text>
              </View>
              <Divider color={Color.neutral20[colorScheme]} height={1} />
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <View style={{marginTop: 16}}>
      {renderDayList()}
      {renderDetail()}
    </View>
  );
}

export default WeatherInDays;
