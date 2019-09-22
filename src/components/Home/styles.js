import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';

export default StyleSheet.create({
  /**  Home Styles 🎨 */
  navigationListContainer: { flex: 1 },
  navigationContainer: {
    alignItems: 'center',
    margin: screenHeight / 100,
    backgroundColor: '#181c1f',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: screenWidth / 50,
  },
  navigationText: {
    color: '#ffffff',
    fontSize: screenWidth / 25,
    fontWeight: '500',
  },
  /** End Home Styles 🎨 */
});
