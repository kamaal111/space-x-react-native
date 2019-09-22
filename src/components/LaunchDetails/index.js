import React from 'react';
import { Text, View } from 'react-native';

export default function LaunchDetails() {
  return (
    <View onPressIn={() => navigation.navigate('HomeScreen')}>
      <Text>Hello</Text>
      <Text>Hello Hello</Text>
    </View>
  );
}
