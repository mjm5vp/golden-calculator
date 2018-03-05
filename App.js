import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

// import GoldenRatioCalc from './src/GoldenRatioCalc';
import FlipView from './src/FlipView';
import styles from './src/styles/appStyles';

// Image.prefetch('https://i.redd.it/jdqgzohp4dh01.gif');

const cacheImages = (images) => {
    return images.map(image => {
      if (typeof image === 'string') {
        const pre = Image.prefetch(image);
        return pre;
      }

    return Asset.fromModule(image).downloadAsync();
    });
  };

  function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
  }

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentWillMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/goldenImage.png'),
      'https://s3.amazonaws.com/golden-calculator-video/golden-calculator.png'
    ]);

    const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
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
