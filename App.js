import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';

// Images
import goldenImage from './assets/goldenImage.png';
import title from './assets/title.png';

// Fonts
import zaio from './assets/fonts/Zaio.ttf';
import orbitron from './assets/fonts/Orbitron-Regular.ttf';
import goldenFont from './assets/fonts/Golden-Ratio-Font.ttf';

import FlipView from './src/FlipView';
import styles from './src/styles/appStyles';

// Image.prefetch('https://i.redd.it/jdqgzohp4dh01.gif');

const cacheImages = images => {
	return images.map(image => {
		if (typeof image === 'string') {
			const pre = Image.prefetch(image);
			return pre;
		}

		return Asset.fromModule(image).downloadAsync();
	});
};

const cacheFonts = fonts => {
	return fonts.map(font => Font.loadAsync(font));
};

export default class App extends React.Component {
	state = {
		isReady: false
	};

	componentWillMount() {
		this.loadAssetsAsync();
	}

	async loadAssetsAsync() {
		const imageAssets = cacheImages([
			goldenImage,
			title,
			'https://s3.amazonaws.com/golden-calculator-video/golden-calculator.png'
		]);

		const fontAssets = cacheFonts([{ zaio, orbitron, goldenFont }]);

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
				<View style={styles.container}>
					<FlipView />
				</View>
			</TouchableWithoutFeedback>
		);
	}
}
