import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

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
    staticFireDateUnix,
  } = navigation.state.params;
  console.log('params', navigation.state.params);

  const {
    missionPatch,
    wikipedia: wikipediaUrl,
    flickrImages,
    videoLink,
  } = links;
  const wikipediaLogo = require('../../assets/wikipedia-logo.png');

  const unixDateConverter = unixDate => {
    const date = new Date(unixDate * 1000);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const successfulOrNot = (upcoming, launchSuccess) => {
    if (upcoming) return 'Future mission on';
    if (upcoming === false && launchSuccess === false) {
      return 'Failed mission on';
    }
    return 'Successfully completed mission on';
  };

  const randomNumber = max => Math.floor(Math.random() * max);

  return (
    <ScrollView style={styles.launchDetailsContainer}>
      <View>
        <Text style={styles.flightNumber}>
          {`Flight number: ${flightNumber}`}
        </Text>
        <Text style={styles.launchDetailsText}>
          {`${successfulOrNot(upcoming, launchSuccess)} ${unixDateConverter(
            launchDateUnix,
          )}`}
        </Text>
        <Text style={styles.launchDetailsText}>
          {`Mission name: ${missionName}`}
        </Text>
        {staticFireDateUnix === null ? (
          <></>
        ) : (
          <Text style={styles.launchDetailsText}>
            {`Static fire date: ${unixDateConverter(staticFireDateUnix)}`}
          </Text>
        )}
        <Text style={styles.launchDetailsText}>
          {`Launch site: ${launchSite.siteNameLong}`}
        </Text>
        <Text style={styles.launchDetailsText}>
          {details ? details : 'No details yet!'}
        </Text>
        {flickrImages.length < 1 ? (
          <></>
        ) : (
          <View style={styles.flickerImageContainer}>
            <Image
              style={styles.flickerImage}
              source={{ uri: flickrImages[randomNumber(flickrImages.length)] }}
            />
          </View>
        )}
        <View style={styles.linkLogosContainer}>
          {wikipediaUrl === null ? (
            <></>
          ) : (
            <TouchableOpacity
              style={styles.linkLogoContainer}
              onPressIn={() => Linking.openURL(wikipediaUrl)}>
              <Image style={styles.linkLogo} source={wikipediaLogo} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
