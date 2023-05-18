import {View, Image} from 'react-native';
import React from 'react';
import style from './style';
import {Icon} from '../../../../../../config/Image';
import {Color} from '../../../../../../config/Color';
import {Text} from '../../../../../../component';
import {icon_uri} from '../../../../../../util/config';

function HeaderSection(props) {
  const {colorScheme, hookData} = props;
  const {headerData} = hookData;
  return (
    <View>
      <Text style={{marginTop: 24}} size={18} weight="bold">
        {headerData?.location}
      </Text>
      <View style={style.container}>
        <View style={style.top}>
          <Image
            source={{
              uri: icon_uri + headerData?.icon + '@2x.png',
            }}
            style={style.image}
          />
          <View>
            <Text size={14} color={Color.black[colorScheme]}>
              {headerData?.desc}
            </Text>
            <Text size={12} color={Color.neutral[colorScheme]}>
              {headerData?.subDesc}
            </Text>
          </View>
        </View>

        <Text weight="100" size={56}>
          {hookData?.headerData?.temp}°C
        </Text>

        <Text size={12} color={Color.neutral[colorScheme]}>
          Feels like {hookData?.headerData?.feels}°C
        </Text>
      </View>
    </View>
  );
}

export default HeaderSection;
