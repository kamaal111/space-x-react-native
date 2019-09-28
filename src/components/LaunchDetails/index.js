import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import styles from './styles';

export default function LaunchDetails({ navigation }) {
  const {
    details,
    flightNumber,
    launchDateUnix,
    launchSuccess,
    links,
    missionName,
    rocket,
    launchSite,
    upcoming,
  } = navigation.state.params;
  console.log('params', navigation.state.params);

  const date = new Date(launchDateUnix * 1000);
  const formatedDate = `${date.getDate()}/${date.getMonth() +
    1}/${date.getFullYear()}`;

  const successfulOrNot = (upcoming, launchSuccess) => {
    if (upcoming) return 'Future mission on';
    if (upcoming === false && launchSuccess === false) {
      return 'Failed mission on';
    }
    return 'Successfully completed mission on';
  };

  return (
    <ScrollView style={styles.launchDetailsContainer}>
      <View>
        <Text style={styles.launchDetailsText}>
          {`Flight number: ${flightNumber}`}
        </Text>
        <Text style={styles.launchDetailsText}>
          {`${successfulOrNot(upcoming, launchSuccess)} ${formatedDate}`}
        </Text>
        <Text style={styles.launchDetailsText}>{missionName}</Text>
        <Text style={styles.launchDetailsText}>{launchSite.siteNameLong}</Text>
        <Text style={styles.launchDetailsText}>
          {details ? details : 'No details yet!'}
        </Text>
      </View>
    </ScrollView>
  );
}
