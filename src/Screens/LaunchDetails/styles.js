import { StyleSheet } from 'react-native';
import { primaryColor, borderRadius, tertiaryColor } from '../../theme';
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
});
