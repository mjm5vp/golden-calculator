import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Picker
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import math from 'mathjs';
// import DismissKeyboard from 'dismissKeyboard';

import NumberPad from './NumberPad';
import styles from './styles/goldenRatioCalcStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const RECT_WIDTH = SCREEN_WIDTH * 0.8;
const RECT_HEIGHT = RECT_WIDTH / math.phi;

class GoldenRatioCalc extends Component {
  state = {
    short: '',
    long: '',
    total: '',
    decimals: 5,
    inputField: null,
    lastChanged: 'short'
  }

  onChangeShortText = (short) => {
    if (short === '') {
      return this.setAllToEmptyString();
    }

    const shortNum = Number(short);
    const long = this.formatInput(shortNum * math.phi);
    const total = this.formatInput((shortNum * 2) + (long * 2));

    this.setState({ short, long, total, lastChanged: 'short' });
  }

  onChangeLongText = (long) => {
    if (long === '') {
      return this.setAllToEmptyString();
    }

    const longNum = Number(long);
    const short = this.formatInput(longNum / math.phi);
    const total = this.formatInput((short * 2) + (longNum * 2));

    this.setState({ short, long, total, lastChanged: 'short' });
  }

  onChangeTotalText = (total) => {
    if (total === '') {
      return this.setAllToEmptyString();
    }

    const totalNum = Number(total);
    const short = this.formatInput((totalNum / (1 + math.phi)));
    const long = this.formatInput(short * math.phi);

    this.setState({ short, long, total, lastChanged: 'short' });
  }

  updateDecimals = (decimals) => {
    this.setState({ decimals },
      this.state.short === ''
        ? this.setAllToEmptyString
        : this.selectUpdateOnLastChanged
    //   () => {
    //   this.state.short === ''
    //   ? this.setAllToEmptyString()
    //   : this.selectUpdateOnLastChanged();
    // }
    );
  }

  selectUpdateOnLastChanged = () => {
    const { short, long, total, lastChanged } = this.state;

    switch (lastChanged) {
      case 'short':
        return this.onChangeShortText(short);
      case 'long':
        return this.onChangeLongText(long);
      case 'total':
        return this.onChangeTotalText(total);
      default:
        return this.setAllToEmptyString();
    }
  }

  formatInput = (number) => {
    const { decimals } = this.state;

    return String(number.toFixed(decimals));
  }

  setAllToEmptyString = () => {
    this.setState({ short: '', long: '', total: '' });
  }

  setShortSideBorder = () => {
    this.clearBorders();
    this.addShortSideBorder();
  }

  setLongSideBorder = () => {
    this.clearBorders();
    this.addLongSideBorder();
  }

  setTotalBorder = () => {
    this.clearBorders();
    this.addTotalBorder();
  }

  clearBorders = () => {
    this.setState({
      borderTopColor: 'black',
      borderRightColor: 'black',
      borderLeftColor: 'black',
      borderBottomColor: 'black'
    });
  }

  addShortSideBorder = () => {
    this.setState({
      borderRightColor: 'blue'
    });
  }

  addLongSideBorder = () => {
    this.setState({
      borderTopColor: 'blue'
    });
  }

  addTotalBorder = () => {
    this.setState({
      borderTopColor: 'blue',
      borderRightColor: 'blue',
      borderLeftColor: 'blue',
      borderBottomColor: 'blue'
    });
  }

  pressShortView = () => {
    this.setState({ inputField: 'short' });
    this.addShortSideBorder();
  }

  pressLongView = () => {
    this.setState({ inputField: 'long' });
    this.addLongSideBorder();
  }

  pressTotalView = () => {
    this.setState({ inputField: 'total' });
    this.addTotalBorder();
  }

  buttonPress = (text) => {
    const { short, long, total, inputField } = this.state;
    let newText = '';

    switch (inputField) {
      case 'short':
        newText = short + text;
        return this.onChangeShortText(newText);
      case 'long':
        newText = long + text;
        return this.onChangeLongText(newText);
      case 'total':
        newText = total + text;
        return this.onChangeTotalText(newText);
      default:
        return;
    }
  }

  deleteButton = () => {
    console.log('delete');
  }

  render() {
    const { borderTopColor, borderRightColor, borderLeftColor, borderBottomColor } = this.state;
    const borderStyles = {
      borderTopColor,
      borderRightColor,
      borderLeftColor,
      borderBottomColor
    };

    return (
      <View onPress={() => console.log('press view')}>

        <View style={[constStyles.rectContainer]}>
          <View style={[constStyles.constRect, borderStyles]}>

          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

          <View>
            <Text>Short Side</Text>
            <TouchableOpacity onPress={() => this.pressShortView()}>
              <View>
                <Text>
                  {this.state.short}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text>Long Side</Text>
            <TouchableOpacity onPress={() => this.pressLongView()}>
              <View>
                <Text>
                  {this.state.long}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text>Total</Text>
            <TouchableOpacity onPress={() => this.pressTotalView()}>
              <View>
                <Text>
                  {this.state.total}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>

        <NumberPad
          buttonPress={(text) => this.buttonPress(text)}
          clearButton={() => this.setAllToEmptyString()}
        />

        <TouchableOpacity>
          <View>
            <Text>{this.state.decimals}</Text>
          </View>
        </TouchableOpacity>

        <Picker
          style={{ width: 50 }}
          // style={{ transform: [{ rotate: '90deg' }] }}
          // itemStyle={{ color: 'blue', transform: [{ rotate: '180deg' }] }}
          selectedValue={this.state.decimals}
          onValueChange={decimals => this.updateDecimals(decimals)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="0" />
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

const RECT_CONTAINER_WIDTH = (SCREEN_WIDTH * 0.9) - 20;
const BUTTON_WIDTH = (RECT_CONTAINER_WIDTH * 0.8) / 3;

const constStyles = {
  rectContainer: {
    height: RECT_HEIGHT + 50,
    width: RECT_CONTAINER_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'red',
  },
  constRect: {
    borderWidth: 5,
    width: RECT_WIDTH,
    height: RECT_HEIGHT
  }
};

export default GoldenRatioCalc;
