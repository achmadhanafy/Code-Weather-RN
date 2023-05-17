import {View, Image} from 'react-native';
import React from 'react';
import style from './style';
import {Icon} from '../../../../../../config/Image';
import {Color} from '../../../../../../config/Color';
import {Text} from '../../../../../../component';

function HeaderSection(props) {
  const {colorScheme} = props;
  return (
    <View style={style.container}>
      <View style={style.top}>
        <Image source={Icon} style={style.image} />
        <View>
          <Text size={14} color={Color.black[colorScheme]}>
            Broken clouds
          </Text>
          <Text size={12} color={Color.neutral[colorScheme]}>
            Light Air
          </Text>
        </View>
      </View>

      <Text weight="100" size={56}>
        29 C
      </Text>

      <Text size={12} color={Color.neutral[colorScheme]}>
        Feels like 34 C
      </Text>
    </View>
  );
}

export default HeaderSection;
