import React from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo';

import styles from '../styles/backViewStyles';

const ShowGif = ({ result }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text style={{ textAlign: 'center' }}>
          {result} seconds to realize real guys go for real down to Mars girls.
        </Text>
      </View>

      <Video
        // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        source={{ uri: 'https://s3.amazonaws.com/golden-calculator-video/OutKast-Roses.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
      />
    </View>
  );
};

export { ShowGif };
