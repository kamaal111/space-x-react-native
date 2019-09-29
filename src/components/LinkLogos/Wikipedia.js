import React from 'react';
import { TouchableOpacity, Image, Linking } from 'react-native';

export default function Wikipedia({ styles, wikipediaUrl, wikipediaLogo }) {
  return (
    <TouchableOpacity
      style={styles.linkLogoContainer}
      onPressIn={() => Linking.openURL(wikipediaUrl)}
    >
      <Image style={styles.linkLogo} source={wikipediaLogo} />
    </TouchableOpacity>
  );
}
