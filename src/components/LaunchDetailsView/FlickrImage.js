import React from 'react';
import { View, Image } from 'react-native';

export default function FlickrImage({ styles, randomFlickerImage }) {
  return (
    <View style={styles.flickerImageContainer}>
      <Image style={styles.flickerImage} source={{ uri: randomFlickerImage }} />
    </View>
  );
}
