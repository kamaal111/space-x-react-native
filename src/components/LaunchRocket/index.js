import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LaunchRocket({ styles, rocket, navigation }) {
  const { rocketName, fairings } = rocket;

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
    </View>
  );
}
