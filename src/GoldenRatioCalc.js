import React, { Component } from 'react';
import { Text, View, Button, Dimensions, TextInput, TextLabel } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import math from 'mathjs';

import styles from './styles/goldenRatioCalcStyles';

class GoldenRatioCalc extends Component {
  state = {
    short: '',
    long: '',
    total: ''
  }

  onChangeShortText = (short) => {
    if (short === '') {
      return this.setAllToEmptyString();
    }

    const shortNum = Number(short);
    const long = String(shortNum * math.phi);
    const total = String((shortNum * 2) + (long * 2));

    this.setState({ short, long, total });
  }

  onChangeLongText = (long) => {
    if (long === '') {
      return this.setAllToEmptyString();
    }

    const longNum = Number(long);
    const short = String(longNum / math.phi);
    const total = String((short * 2) + (longNum * 2));

    this.setState({ short, long, total });
  }

  onChangeTotalText = (total) => {
    if (total === '') {
      return this.setAllToEmptyString();
    }

    const totalNum = Number(total);
    const short = String((totalNum / (1 + math.phi)));
    const long = String(short * math.phi);

    this.setState({ short, long, total });
  }

  setAllToEmptyString = () => {
    this.setState({ short: '', long: '', total: '' });
  }

  render() {
    return (
      <View
        onPress={() => console.log('press view')}
        style={styles.containerView}
      >

        <View>
          <FormLabel>Short Side</FormLabel>
          <FormInput
            value={this.state.short}
            keyboardType='numeric'
            onChangeText={text => this.onChangeShortText(text)}
          />
        </View>

        <View>
          <FormLabel>Long Side</FormLabel>
          <FormInput
            value={this.state.long}
            keyboardType='numeric'
            onChangeText={text => this.onChangeLongText(text)}
          />
        </View>

        <View>
          <FormLabel>Total</FormLabel>
          <FormInput
            value={this.state.total}
            keyboardType='numeric'
            onChangeText={text => this.onChangeTotalText(text)}
          />
        </View>

        <View>
          <Button
            title='Clear'
            onPress={this.setAllToEmptyString}
          />
        </View>

      </View>
    );
  }
}

export default GoldenRatioCalc;
