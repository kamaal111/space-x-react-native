import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Home() {
  return (
    <View>
      <View style={styles.navigationContainer}>
        <Text>Launches</Text>
      </View>
    </View>
  );
}
