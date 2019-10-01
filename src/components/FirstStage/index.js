/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Text, View } from 'react-native';

export default function FirstStage({ styles, cores }) {
  return (
    <>
      <Text style={styles.title}>First Stage</Text>
      <Text style={styles.title}>Cores</Text>
      {cores.map(({ coreSerial }, i) => (
        <View key={i} style={styles.coresContainer}>
          <Text style={styles.title}>{`Core ${i + 1}`}</Text>
          <Text style={styles.coresText}>
            {coreSerial === null
              ? 'Core serial: Unavailable'
              : `Core serial: ${coreSerial}`}
          </Text>
        </View>
      ))}
    </>
  );
}
