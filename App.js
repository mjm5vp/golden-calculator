import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';


// import GoldenRatioCalc from './src/GoldenRatioCalc';
import FlipView from './src/FlipView';
import styles from './src/styles/appStyles';

export default class App extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.container} >
          <FlipView />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
