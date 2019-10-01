import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function YouTubeWebView({ styles, videoLink }) {
  return (
    <View style={styles.youtubeVideoContainer}>
      <Text style={styles.title}>YouTube Video</Text>
      <WebView
        style={styles.youtubeVideo}
        source={{ uri: videoLink }}
        mediaPlaybackRequiresUserAction
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
}
