import React from 'react';
import { ScrollView } from 'react-native';

import LaunchDetailsView from '../../components/LaunchDetailsView';

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

  // eslint-disable-next-line no-console
  console.log('params', navigation.state.params);

  const {
    // missionPatch,
    wikipedia: wikipediaUrl,
    flickrImages,
    videoLink,
  } = links;

  const unixDateConverter = unixDate => {
    if (unixDate === null) return null;

    const date = new Date(unixDate * 1000);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const successfulOrNot = (upcomingArg, launchSuccessArg) => {
    if (upcomingArg) return 'Future mission on';
    if (upcomingArg === false && launchSuccessArg === false) {
      return 'Failed mission on';
    }
    return 'Successfully completed mission on';
  };

  const randomNumber = max => Math.floor(Math.random() * max);

  const successfulOrNotCall = successfulOrNot(upcoming, launchSuccess);
  const convertedLaunchDateUnix = unixDateConverter(launchDateUnix);
  const convertedStaticFireDateUnix = unixDateConverter(staticFireDateUnix);
  const randomFlickerImage = flickrImages[randomNumber(flickrImages.length)];

  // eslint-disable-next-line global-require
  const wikipediaLogo = require('../../assets/wikipedia-logo.png');

  return (
    <ScrollView style={styles.launchDetailsContainer}>
      <LaunchDetailsView
        flightNumber={flightNumber}
        successfulOrNotCall={successfulOrNotCall}
        convertedLaunchDateUnix={convertedLaunchDateUnix}
        missionName={missionName}
        staticFireDateUnix={staticFireDateUnix}
        convertedStaticFireDateUnix={convertedStaticFireDateUnix}
        launchSite={launchSite}
        details={details}
        flickrImages={flickrImages}
        randomFlickerImage={randomFlickerImage}
        videoLink={videoLink}
        wikipediaUrl={wikipediaUrl}
        wikipediaLogo={wikipediaLogo}
        rocket={rocket}
        navigation={navigation}
      />
    </ScrollView>
  );
}
