import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import math from 'mathjs';
// import DismissKeyboard from 'dismissKeyboard';

import NumberPad from './NumberPad';
import styles from './styles/goldenRatioCalcStyles';

class GoldenRatioCalc extends Component {
  state = {
    short: '',
    long: '',
    total: '',
    decimals: 5,
    inputField: null,
  }

  componentWillMount() {
    this.clearHighlights();
    this.clearBorders();
  }

  pressView = (sideStyles) => {
    this.clearHighlights();
    this.clearBorders();
    this.setState(styles[sideStyles]);
  } 

  clearBorders = () => {
    this.setState(styles.clearBorders);
  }

  clearHighlights = () => {
    this.setState(styles.clearHighlights);
  }

  buttonPress = (text) => {
    const { inputField } = this.state;
    const func = `${inputField}TextChange`;
    const newText = this.state[inputField] + text;

    this[func](newText);
  }

  deleteButton = () => {
    const { inputField } = this.state;
    const func = `${inputField}TextChange`;
    const side = this.state[inputField];
    const newText = side.substring(0, side.length - 1);

    this[func](newText);
  }

  shortTextChange = (short) => {
    if (short === '') {
      return this.setAllToEmptyString();
    }

    const shortNum = Number(short);
    const long = this.formatInput(shortNum * math.phi);
    const total = this.formatInput((shortNum * 2) + (long * 2));

    this.setState({ short, long, total });
  }

  longTextChange = (long) => {
    if (long === '') {
      return this.setAllToEmptyString();
    }

    const longNum = Number(long);
    const short = this.formatInput(longNum / math.phi);
    const total = this.formatInput((short * 2) + (longNum * 2));

    this.setState({ short, long, total });
  }

  totalTextChange = (total) => {
    if (total === '') {
      return this.setAllToEmptyString();
    }

    const totalNum = Number(total);
    const short = this.formatInput((totalNum / (1 + math.phi)));
    const long = this.formatInput(short * math.phi);

    this.setState({ short, long, total });
  }

  updateDecimals = () => {
    const decimals = this.state.decimals === 10
      ? 0
      : this.state.decimals + 1;

    this.setState({ decimals },
      this.state.short === ''
        ? this.setAllToEmptyString
        : this.selectUpdateOninputField
    );
  }

  selectUpdateOninputField = () => {
    const { inputField } = this.state;
    const func = `${inputField}TextChange`;
    const text = this.state[inputField];

    this[func](text);
  }

  formatInput = (number) => {
    return isNaN(number) ? 'ERROR' : String(number.toFixed(this.state.decimals));
  }

  clearButton = () => {
    this.setState({ inputField: null });
    this.setAllToEmptyString();
    this.clearHighlights();
    this.clearBorders();
  }

  setAllToEmptyString = () => {
    this.setState({ short: '', long: '', total: '' });
  }

  render() {
    const {
      borderTopColor,
      borderRightColor,
      borderLeftColor,
      borderBottomColor
    } = this.state;

    const borderStyles = {
      borderTopColor,
      borderRightColor,
      borderLeftColor,
      borderBottomColor
    };

    const shortHighlight = { backgroundColor: this.state.shortHighlight };
    const longHighlight = { backgroundColor: this.state.longHighlight };
    const totalHighlight = { backgroundColor: this.state.totalHighlight };

    return (
      <View>

        <View style={[styles.rectContainer]}>
          <View style={[styles.constRect, borderStyles]}>

            <View style={styles.sideInputContainer}>
              <Text style={styles.text}>Short Side</Text>
              <TouchableOpacity onPress={() => this.pressView('shortStyles')}>
                <View style={[styles.textInput, shortHighlight]}>
                  <Text
                    allowFontScaling
                    style={styles.text}
                    numberOfLines={3}
                  >{this.state.short}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.sideInputContainer}>
              <Text style={styles.text}>Long Side</Text>
              <TouchableOpacity onPress={() => this.pressView('longStyles')}>
                <View style={[styles.textInput, longHighlight]}>
                  <Text
                    allowFontScaling
                    style={styles.text}
                    numberOfLines={3}
                  >{this.state.long}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.sideInputContainer}>
              <Text style={styles.text}>Total</Text>
              <TouchableOpacity onPress={() => this.pressView('totalStyles')}>
                <View style={[styles.textInput, totalHighlight]}>
                  <Text
                    allowFontScaling
                    style={styles.text}
                    numberOfLines={3}
                  >{this.state.total}</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <NumberPad
          buttonPress={(text) => this.buttonPress(text)}
          clearButton={() => this.clearButton()}
          deleteButton={() => this.deleteButton()}
          flipCard={this.props.flipCard}
          updateDecimals={() => this.updateDecimals()}
          decimals={this.state.decimals}
        />

      </View>
    );
  }
}


export default GoldenRatioCalc;
