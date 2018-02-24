import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

// import GoldenRatioCalc from './src/GoldenRatioCalc';
import FlipView from './src/FlipView';
import styles from './src/styles/appStyles';

// Image.prefetch('https://i.redd.it/jdqgzohp4dh01.gif');

function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
  }

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      'https://i.redd.it/jdqgzohp4dh01.gif'
    ]);

    const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <TouchableWithoutFeedback>
        <View style={styles.container} >
          <FlipView />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
