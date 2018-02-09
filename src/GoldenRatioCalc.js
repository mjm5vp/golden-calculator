import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
    const shortNum = Number(short);
    const long = String(shortNum * math.phi);
    const total = String((shortNum * 2) + (long * 2));

    this.setState({ short, long, total });
  }

  onChangeLongText = (long) => {
    const longNum = Number(long);
    const short = String(longNum / math.phi);
    const total = String((short * 2) + (longNum * 2));

    this.setState({ short, long, total });
  }

  onChangeTotalText = (total) => {
    const totalNum = Number(total);
    const short = String((totalNum / 2));
    const long = String(short * math.phi);

    this.setState({ short, long, total });
  }

  render() {
    return (
      <View style={styles.calc}>

        <View>
          <FormLabel>Short Side</FormLabel>
          <FormInput
            value={this.state.short}
            keyboardType='number-pad'
            onChangeText={text => this.onChangeShortText(text)}
          />
        </View>

        <View>
          <FormLabel>Long Side</FormLabel>
          <FormInput
            value={this.state.long}
            keyboardType='number-pad'
            onChangeText={text => this.onChangeLongText(text)}
          />
        </View>

        <View>
          <FormLabel>Total</FormLabel>
          <FormInput
            value={this.state.total}
            keyboardType='number-pad'
            onChangeText={text => this.onChangeTotalText(text)}
          />
        </View>

      </View>
    );
  }
}

export default GoldenRatioCalc;
