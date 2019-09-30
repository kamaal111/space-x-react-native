import { StyleSheet } from 'react-native';
import { borderRadius, secondaryColor, mediumFontSize } from '../../theme';
import { screenWidth, screenHeight } from '../../dimensions';

const launchDetailsTextStyle = {
  color: secondaryColor,
  marginTop: screenHeight / 50,
  marginLeft: screenWidth / 50,
  marginRight: screenWidth / 50,
};

export default StyleSheet.create({
  launchDetailsText: {
    ...launchDetailsTextStyle,
    fontSize: mediumFontSize,
    fontWeight: '300',
  },
  title: {
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
    marginBottom: screenHeight / 50,
  },
  youtubeVideo: {
    height: screenHeight / 3,
    width: screenWidth / 1.2,
  },
  linkLogo: {
    height: screenHeight / 12.5,
    width: screenWidth / 7.5,
  },
  rocketNameContainer: {
    marginTop: screenHeight / 50,
    marginLeft: screenWidth / 50,
    marginRight: screenWidth / 50,
    borderRadius,
    borderColor: secondaryColor,
    borderWidth: 1,
  },
  rocketName: {
    paddingBottom: screenHeight / 50,
    ...launchDetailsTextStyle,
    fontSize: mediumFontSize,
    fontWeight: '300',
  },
});
