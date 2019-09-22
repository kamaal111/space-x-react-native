import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Launch({
  flightNumber,
  missionName,
  styles,
  navigate,
}) {
  return (
    <TouchableOpacity
      style={styles.launchContainer}
      onPressIn={() => navigate('LaunchDetailsScreen')}>
      <Text style={styles.launchText}>{missionName}</Text>
      <Text style={styles.launchText}>{`Flight Number: ${flightNumber}`}</Text>
    </TouchableOpacity>
  );
}
