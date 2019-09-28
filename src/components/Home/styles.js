import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
  borderRadius,
  mediumFontSize,
} from '../../theme';

export default StyleSheet.create({
  /**  Home Styles 🎨 */
  navigationListContainer: { flex: 1 },
  navigationContainer: {
    alignItems: 'center',
    margin: screenHeight / 100,
    backgroundColor: primaryColor,
    borderColor: tertiaryColor,
    borderWidth: 1,
    borderRadius,
    padding: screenWidth / 50,
  },
  navigationText: {
    color: secondaryColor,
    fontSize: mediumFontSize,
    fontWeight: '500',
  },
  /** End Home Styles 🎨 */
});
