/* eslint-disable react/no-array-index-key */

import React from 'react';
import { Text } from 'react-native';

import Core from './Core';

export default function FirstStage({ styles, cores }) {
  const coreStyles = {
    coresContainer: styles.coresContainer,
    title: styles.title,
    coresText: styles.coresText,
  };

  return (
    <>
      <Text style={styles.title}>First Stage</Text>
      <Text style={styles.title}>Cores</Text>
      {cores.map(({ coreSerial, flight, landSuccess, landingIntent }, i) =>
        coreSerial === null ? (
          <></>
        ) : (
          <Core
            key={i}
            styles={coreStyles}
            flight={flight}
            coreSerial={coreSerial}
            landSuccess={landSuccess}
            landingIntent={landingIntent}
          />
        ),
      )}
    </>
  );
}
