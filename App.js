import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GoldenRatioCalc from './src/GoldenRatioCalc';
import styles from './src/styles/appStyles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GoldenRatioCalc />
      </View>
    );
  }
}
