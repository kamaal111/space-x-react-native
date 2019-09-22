import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.navigationListContainer}>
      <TouchableOpacity
        style={styles.navigationContainer}
        onPressIn={() => navigation.navigate('LaunchListScreen')}>
        <Text style={styles.navigationText}>Launches</Text>
      </TouchableOpacity>
    </View>
  );
}
