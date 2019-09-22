import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';

export default StyleSheet.create({
  /**  Launch Styles 🎨 */
  launchContainer: {
    margin: screenHeight / 100,
    backgroundColor: '#181c1f',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: screenWidth / 50,
  },
  launchText: {
    color: '#ffffff',
    fontSize: screenWidth / 25,
    fontWeight: '500',
  },
  /** End Launch Styles 🎨 */
});
