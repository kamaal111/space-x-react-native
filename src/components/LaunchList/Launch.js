import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Launch({
  flightNumber,
  missionName,
  details,
  launchDateUnix,
  launchSite,
  launchSuccess,
  links,
  rocket,
  upcoming,
  staticFireDateUnix,
  styles,
  navigate,
}) {
  const launchData = {
    flightNumber,
    missionName,
    details,
    launchDateUnix,
    launchSite,
    launchSuccess,
    links,
    rocket,
    upcoming,
    staticFireDateUnix,
  };

  return (
    <TouchableOpacity
      style={styles.launchContainer}
      onPressIn={() => navigate('LaunchDetailsScreen', launchData)}>
      <Text style={styles.launchText}>{missionName}</Text>
      <Text style={styles.launchText}>{`Flight Number: ${flightNumber}`}</Text>
    </TouchableOpacity>
  );
}
