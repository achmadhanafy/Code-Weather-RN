import {View, Text} from 'react-native';
import React from 'react';
import {Container} from '../../../../component';

function HomeMain() {
  const colorScheme = 'light';
  return (
    <Container colorScheme={colorScheme}>
      <View>
        <Text>HomeMain</Text>
      </View>
    </Container>
  );
}

export default HomeMain;
