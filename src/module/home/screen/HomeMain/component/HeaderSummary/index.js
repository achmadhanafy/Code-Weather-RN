import {View} from 'react-native';
import React from 'react';
import style from './style';
import {Color} from '../../../../../../config/Color';
import {Text} from '../../../../../../component';

function HeaderSummary(props) {
  const {colorScheme, hookData} = props;
  const justifyContent = i => {
    return i % 3 === 0 ? 'flex-start' : 'flex-end';
  };

  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: Color.neutral20[colorScheme],
        },
      ]}>
      <View style={style.rowContainer}>
        {hookData.summaryData?.map((element, i) => (
          <View style={[style.item, {justifyContent: justifyContent(i)}]}>
            <Text size={12} weight="bold">
              {element.label}: {element.value}
              {element.unit}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default HeaderSummary;
