import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';
import {
  primaryColor,
  tertiaryColor,
  secondaryColor,
  mediumFontSize,
  borderRadius,
} from '../../theme';

export default StyleSheet.create({
  /**  Launch Styles 🎨 */
  launchContainer: {
    margin: screenHeight / 100,
    backgroundColor: primaryColor,
    borderColor: tertiaryColor,
    borderWidth: 1,
    borderRadius,
    padding: screenWidth / 50,
  },
  launchText: {
    color: secondaryColor,
    fontSize: mediumFontSize,
    fontWeight: '500',
  },
  /** End Launch Styles 🎨 */
});
