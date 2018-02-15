import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  Picker
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import math from 'mathjs';

import styles from './styles/goldenRatioCalcStyles';

class GoldenRatioCalc extends Component {
  state = {
    short: '',
    long: '',
    total: '',
    decimals: 5
  }

  onChangeShortText = (short) => {
    if (short === '') {
      return this.setAllToEmptyString();
    }

    const shortNum = Number(short);
    const long = shortNum * math.phi;
    const total = (shortNum * 2) + (long * 2);

    this.updateFields(shortNum, long, total);
  }

  onChangeLongText = (long) => {
    if (long === '') {
      return this.setAllToEmptyString();
    }

    const longNum = Number(long);
    const short = longNum / math.phi;
    const total = (short * 2) + (longNum * 2);

    this.updateFields(short, longNum, total);
  }

  onChangeTotalText = (total) => {
    if (total === '') {
      return this.setAllToEmptyString();
    }

    const totalNum = Number(total);
    const short = ((totalNum / (1 + math.phi)));
    const long = (short * math.phi);

    this.updateFields(short, long, totalNum);
  }

  updateDecimals = (decimals) => {

  }

  updateFields = (shortNum, longNum, totalNum) => {
    const { decimals } = this.state;

    const short = String(shortNum.toFixed(decimals));
    const long = String(longNum.toFixed(decimals));
    const total = String(totalNum.toFixed(decimals));

    this.setState({ short, long, total });
  }

  setAllToEmptyString = () => {
    this.setState({ short: '', long: '', total: '' });
  }

  render() {
    return (
      <View onPress={() => console.log('press view')}>

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
            onFocus={() => console.log('total focus')}
            onBlur={() => console.log('total blur')}
            containerStyle={styles.formInputContainer}
            inputStyle={styles.formInputInput}
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

        <TouchableOpacity>
          <View>
            <Text>{this.state.decimals}</Text>
          </View>
        </TouchableOpacity>

        <Picker
          selectedValue={this.state.decimals}
          onValueChange={decimals => this.updateDecimals(decimals)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />

        </Picker>


      </View>
    );
  }
}

export default GoldenRatioCalc;
