import React from 'react';
import { View, Text } from 'react-native';

export default function Core({
  styles,
  flight,
  coreSerial,
  landSuccess,
  landingIntent,
}) {
  return (
    <View style={styles.coresContainer}>
      <Text style={styles.title}>{`Flight ${flight}`}</Text>
      <Text style={styles.coresText}>{`Core serial: ${coreSerial}`}</Text>
      <Text style={styles.coresText}>
        {landSuccess === false
          ? 'Land success: Unsuccessful'
          : 'Land success: Successful'}
      </Text>
      <Text style={styles.coresText}>
        {landingIntent === false
          ? 'Landing intent: False'
          : 'Landing intent: True'}
      </Text>
    </View>
  );
}
