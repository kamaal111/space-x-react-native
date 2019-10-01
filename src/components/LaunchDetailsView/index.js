import React from 'react';
import { View, Text } from 'react-native';

import FlickrImage from './FlickrImage';
import YouTubeWebView from './YouTubeWebView';
import LinkLogos from '../LinkLogos';
import LaunchRocket from '../LaunchRocket';

import styles from './styles';

export default function LaunchDetailsView({
  flightNumber,
  successfulOrNotCall,
  convertedLaunchDateUnix,
  missionName,
  staticFireDateUnix,
  convertedStaticFireDateUnix,
  launchSite,
  details,
  flickrImages,
  randomFlickerImage,
  videoLink,
  wikipediaUrl,
  wikipediaLogo,
  rocket,
  navigation,
}) {
  const flickrImageStyles = {
    flickerImageContainer: styles.flickerImageContainer,
    flickerImage: styles.flickerImage,
  };

  const youTubeVideoStyles = {
    youtubeVideoContainer: styles.youtubeVideoContainer,
    youtubeVideo: styles.youtubeVideo,
    title: styles.title,
  };

  const linkLogoStyles = {
    linkLogosContainer: styles.linkLogosContainer,
    linkLogoContainer: styles.linkLogoContainer,
    linkLogo: styles.linkLogo,
  };

  const launchRocketStyles = {
    launchDetailsText: styles.launchDetailsText,
    title: styles.title,
    rocketNameContainer: styles.rocketNameContainer,
    rocketName: styles.rocketName,
    coresText: styles.coresText,
    coresContainer: styles.coresContainer,
  };

  return (
    <View>
      <Text style={styles.title}>{`Flight number: ${flightNumber}`}</Text>
      <Text style={styles.launchDetailsText}>
        {`${successfulOrNotCall} ${convertedLaunchDateUnix}`}
      </Text>
      <Text style={styles.launchDetailsText}>
        {`Mission name: ${missionName}`}
      </Text>
      {staticFireDateUnix === null ? (
        <></>
      ) : (
        <Text style={styles.launchDetailsText}>
          {`Static fire date: ${convertedStaticFireDateUnix}`}
        </Text>
      )}
      <Text style={styles.launchDetailsText}>
        {`Launch site: ${launchSite.siteNameLong}`}
      </Text>
      <Text style={styles.launchDetailsText}>
        {details === null ? 'No details yet!' : details}
      </Text>
      {flickrImages.length < 1 ? (
        <></>
      ) : (
        <FlickrImage
          styles={flickrImageStyles}
          randomFlickerImage={randomFlickerImage}
        />
      )}

      <LaunchRocket
        styles={launchRocketStyles}
        rocket={rocket}
        navigation={navigation}
      />

      {videoLink === null ? (
        <></>
      ) : (
        <YouTubeWebView styles={youTubeVideoStyles} videoLink={videoLink} />
      )}

      <LinkLogos
        styles={linkLogoStyles}
        wikipediaUrl={wikipediaUrl}
        wikipediaLogo={wikipediaLogo}
      />
    </View>
  );
}
