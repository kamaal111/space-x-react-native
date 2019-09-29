import React from 'react';
import { View } from 'react-native';

import Wikipedia from './Wikipedia';

export default function LinkLogos({ styles, wikipediaUrl, wikipediaLogo }) {
  const wikipediaStyles = {
    linkLogoContainer: styles.linkLogoContainer,
    linkLogo: styles.linkLogo,
  };

  return (
    <View style={styles.linkLogosContainer}>
      {wikipediaUrl === null ? (
        <></>
      ) : (
        <Wikipedia
          styles={wikipediaStyles}
          wikipediaUrl={wikipediaUrl}
          wikipediaLogo={wikipediaLogo}
        />
      )}
    </View>
  );
}
