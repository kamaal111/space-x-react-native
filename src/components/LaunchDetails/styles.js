import { StyleSheet } from 'react-native';

const launchDetailsTextStyle = {
  color: secondaryColor,
  marginTop: screenHeight / 50,
  marginLeft: screenWidth / 50,
  marginRight: screenWidth / 50,
};

import {
  primaryColor,
  borderRadius,
  tertiaryColor,
  secondaryColor,
  mediumFontSize,
} from '../../theme';
import { screenWidth, screenHeight } from '../../dimensions';

export default StyleSheet.create({
  launchDetailsContainer: {
    flex: 1,
    marginLeft: screenWidth / 50,
    marginRight: screenWidth / 50,
    marginBottom: screenHeight / 50,
    marginTop: screenHeight / 75,
    borderRadius,
    borderColor: tertiaryColor,
    borderWidth: 1,
    backgroundColor: primaryColor,
  },
  launchDetailsText: {
    ...launchDetailsTextStyle,
    fontSize: mediumFontSize,
    fontWeight: '300',
  },
  flightNumber: {
    ...launchDetailsTextStyle,
    fontSize: mediumFontSize,
    fontWeight: '600',
    textAlign: 'center',
  },
  flickerImageContainer: {
    alignItems: 'center',
    marginTop: screenHeight / 50,
  },
  flickerImage: {
    height: screenHeight / 3,
    width: screenWidth / 1.2,
    borderRadius,
  },
  linkLogosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  linkLogoContainer: {
    marginTop: screenHeight / 50,
    marginBottom: screenHeight / 50,
  },
  youtubeVideoContainer: {
    alignItems: 'center',
    marginTop: screenHeight / 50,
  },
  youtubeVideo: {
    height: screenHeight / 3,
    width: screenWidth / 1.2,
  },
  linkLogo: {
    height: screenHeight / 12.5,
    width: screenWidth / 7.5,
  },
});
