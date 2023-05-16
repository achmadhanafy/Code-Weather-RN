import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import {Color} from '../../config/Color';

function Container(props) {
  const {children, colorScheme, statusBarStyle, statusBarColor} = props;
  return (
    <SafeAreaView
      edges={['top']}
      style={[
        style.container,
        {
          backgroundColor: Color.white[colorScheme],
        },
      ]}>
      <StatusBar
        translucent
        barStyle={statusBarStyle || 'dark-content'}
        backgroundColor={statusBarColor || 'transparent'}
      />
      <View>{children}</View>
    </SafeAreaView>
  );
}

export default Container;
