import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/goldenRatioCalcStyles';

class GoldenRatioCalc extends Component {
  render() {
    return (
      <View style={styles.calc}>
        <Text>Golden Ratio Calc</Text>
      </View>
    );
  }
}

export default GoldenRatioCalc;
