import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import DismissKeyboard from 'dismissKeyboard';


// import GoldenRatioCalc from './src/GoldenRatioCalc';
import SwipeView from './src/SwipeView';
import styles from './src/styles/appStyles';

export default class App extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.container} >
          <SwipeView />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
