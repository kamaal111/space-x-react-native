import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import FirstStage from '../FirstStage';

export default function LaunchRocket({ styles, rocket, navigation }) {
  const { rocketName, fairings, firstStage } = rocket;

  const firstStageStyles = {
    coresText: styles.coresText,
    title: styles.title,
    coresContainer: styles.coresContainer,
  };

  const fairingRecovery = (recoveryAttempt, recovered) => {
    if (recoveryAttempt === null && recovered === null) {
      return <></>;
    }

    if (recoveryAttempt === false) {
      return (
        <Text style={styles.launchDetailsText}>
          No attempt to recover the fairings.
        </Text>
      );
    }

    if (recoveryAttempt && recovered === false) {
      return (
        <Text style={styles.launchDetailsText}>
          There has been a recovery attempt, but could not recover the fairings.
        </Text>
      );
    }

    return (
      <Text style={styles.launchDetailsText}>
        {
          '🎊 There has been a recovery attempt and fairings have been recovered.🎊'
        }
      </Text>
    );
  };

  return (
    <View>
      <Text style={styles.title}>🚀 Rocket 🚀</Text>
      <TouchableOpacity
        style={styles.rocketNameContainer}
        onPressIn={() => navigation.navigate('RocketScreen')}
      >
        <Text style={styles.rocketName}>{`Rocket name: ${rocketName}`}</Text>
      </TouchableOpacity>
      {fairings === null ? (
        <></>
      ) : (
        <>
          <Text style={styles.title}>Fairings</Text>
          <Text style={styles.launchDetailsText}>
            {fairings.reused === false
              ? 'Fairings were not reused'
              : 'Fairings were reused'}
          </Text>
          {fairingRecovery(fairings.recoveryAttempt, fairings.recovered)}
        </>
      )}

      <FirstStage styles={firstStageStyles} cores={firstStage.cores} />
    </View>
  );
}
