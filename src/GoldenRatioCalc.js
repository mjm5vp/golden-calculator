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

const color1 = '#f2ead5';

class GoldenRatioCalc extends Component {
  state = {
    short: '',
    long: '',
    total: '',
    decimals: 5,
    inputField: null,
    // borderTopColor: 'black',
    // borderRightColor: 'black',
    // borderLeftColor: 'black',
    // borderBottomColor: 'black',
    // shortHighlight: 'gray',
    // longHighlight: 'gray',
    // totalHighlight: 'gray'
  }

  componentWillMount() {
    this.clearHighlights();
    this.clearBorders();
  }


  pressShortView = () => {
    this.clearHighlights();
    this.clearBorders();
    this.addShortSideBorder();
  }

  pressLongView = () => {
    this.clearHighlights();
    this.clearBorders();
    this.addLongSideBorder();
  }

  pressTotalView = () => {
    this.clearHighlights();
    this.clearBorders();
    this.addTotalBorder();
  }

  addShortSideBorder = () => {
    this.setState({
      inputField: 'short',
      borderRightColor: color1,
      shortHighlight: color1
    });
  }

  addLongSideBorder = () => {
    this.setState({
      inputField: 'long',
      borderTopColor: color1,
      longHighlight: color1
    });
  }

  addTotalBorder = () => {
    this.setState({
      inputField: 'total',
      borderTopColor: color1,
      borderRightColor: color1,
      borderLeftColor: color1,
      borderBottomColor: color1,
      totalHighlight: color1
    });
  }

  clearBorders = () => {
    this.setState({
      borderTopColor: 'black',
      borderRightColor: 'black',
      borderLeftColor: 'black',
      borderBottomColor: 'black'
    });
  }

  clearHighlights = () => {
    this.setState({
      shortHighlight: 'gray',
      longHighlight: 'gray',
      totalHighlight: 'gray'
    });
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
    const { short, long, total, inputField } = this.state;
    let newText = '';

    switch (inputField) {
      case 'short':
        newText = short.substring(0, short.length - 1);
        return this.onChangeShortText(newText);
      case 'long':
        newText = long.substring(0, long.length - 1);
        return this.onChangeLongText(newText);
      case 'total':
        newText = total.substring(0, total.length - 1);
        return this.onChangeTotalText(newText);
      default:
        return;
    }
  }

  onChangeShortText = (short) => {
    if (short === '') {
      return this.setAllToEmptyString();
    }

    const shortNum = Number(short);
    const long = this.formatInput(shortNum * math.phi);
    const total = this.formatInput((shortNum * 2) + (long * 2));

    this.setState({ short, long, total });
  }

  onChangeLongText = (long) => {
    if (long === '') {
      return this.setAllToEmptyString();
    }

    const longNum = Number(long);
    const short = this.formatInput(longNum / math.phi);
    const total = this.formatInput((short * 2) + (longNum * 2));

    this.setState({ short, long, total });
  }

  onChangeTotalText = (total) => {
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
    const { short, long, total, inputField } = this.state;

    switch (inputField) {
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

    return isNaN(number) ? 'ERROR' : String(number.toFixed(decimals));
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
              <TouchableOpacity onPress={() => this.pressShortView()}>
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
              <TouchableOpacity onPress={() => this.pressLongView()}>
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
              <TouchableOpacity onPress={() => this.pressTotalView()}>
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
