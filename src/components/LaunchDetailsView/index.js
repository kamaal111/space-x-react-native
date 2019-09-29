import React from 'react';
import { View, Text } from 'react-native';

import FlickrImage from './FlickrImage';
import YouTubeWebView from './YouTubeWebView';
import LinkLogos from '../LinkLogos';

export default function LaunchDetailsView({
  styles,
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
}) {
  const flickrImageStyles = {
    flickerImageContainer: styles.flickerImageContainer,
    flickerImage: styles.flickerImage,
  };

  const youTubeVideoStyles = {
    youtubeVideoContainer: styles.youtubeVideoContainer,
    youtubeVideo: styles.youtubeVideo,
  };

  const linkLogoStyles = {
    linkLogosContainer: styles.linkLogosContainer,
    linkLogoContainer: styles.linkLogoContainer,
    linkLogo: styles.linkLogo,
  };

  return (
    <View>
      <Text style={styles.flightNumber}>
        {`Flight number: ${flightNumber}`}
      </Text>
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
