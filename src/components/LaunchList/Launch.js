import React from 'react';
import { View, Text } from 'react-native';

export default function Launch({ flightNumber, missionName, styles }) {
  return (
    <View style={styles.launchContainer}>
      <Text style={styles.launchText}>{missionName}</Text>
      <Text style={styles.launchText}>{`Flight Number: ${flightNumber}`}</Text>
    </View>
  );
}
