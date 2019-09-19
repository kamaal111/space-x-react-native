import React from 'react';
import { View, Text } from 'react-native';

export default function Launch({ missionName, flightNumber }) {
  return (
    <View
      style={{
        margin: 10,
      }}>
      <Text>{`${missionName} ${flightNumber}`}</Text>
    </View>
  );
}
