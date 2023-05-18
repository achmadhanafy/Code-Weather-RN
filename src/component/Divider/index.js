import {View, Text} from 'react-native';
import React from 'react';
import {Color} from '../../config/Color';

function Divider({
  color = Color.neutral.light,
  height = 2,
  marginDisabled = false,
}) {
  const style = {
    horizontalLine: {
      height,
      backgroundColor: color,
      marginVertical: marginDisabled ? 0 : 6,
    },
  };
  return <View style={style.horizontalLine} />;
}

export default Divider;
