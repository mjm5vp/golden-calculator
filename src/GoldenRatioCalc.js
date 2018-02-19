import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
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
    lastChanged: 'short',
    borderTopColor: 'black',
    borderRightColor: 'black',
    borderLeftColor: 'black',
    borderBottomColor: 'black',
    shortHighlight: 'gray',
    longHighlight: 'gray',
    totalHighlight: 'gray'
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

    this.setState({ short, long, total, lastChanged: 'long' });
  }

  onChangeTotalText = (total) => {
    if (total === '') {
      return this.setAllToEmptyString();
    }

    const totalNum = Number(total);
    const short = this.formatInput((totalNum / (1 + math.phi)));
    const long = this.formatInput(short * math.phi);

    this.setState({ short, long, total, lastChanged: 'total' });
  }

  updateDecimals = () => {
    const decimals = this.state.decimals === 10
      ? 0
      : this.state.decimals + 1;

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

    return isNaN(number) ? 'ERROR' : String(number.toFixed(decimals));
  }

  setAllToEmptyString = () => {
    this.setState({ short: '', long: '', total: '' });
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

  addShortSideBorder = () => {
    this.setState({
      borderRightColor: 'blue',
      inputField: 'short',
      shortHighlight: 'blue',
      lastChanged: 'short',
    });
  }

  addLongSideBorder = () => {
    this.setState({
      borderTopColor: 'blue',
      inputField: 'long',
      longHighlight: 'blue',
      lastChanged: 'long',
    });
  }

  addTotalBorder = () => {
    this.setState({
      borderTopColor: 'blue',
      borderRightColor: 'blue',
      borderLeftColor: 'blue',
      borderBottomColor: 'blue',
      inputField: 'total',
      totalHighlight: 'blue',
      lastChanged: 'total',
    });
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
      <View onPress={() => console.log('press view')}>

        <View style={[constStyles.rectContainer]}>
          <View style={[constStyles.constRect, borderStyles]}>

            <View style={constStyles.sideInputContainer}>
              <Text style={constStyles.text}>Short Side</Text>
              <TouchableOpacity
                // style={styles.textInputOpacity}
                onPress={() => this.pressShortView()}
              >
                <View style={[constStyles.textInput, shortHighlight]}>
                  <Text
                    // adjustsFontSizeToFit
                    allowFontScaling
                    style={constStyles.text}
                    numberOfLines={3}
                  >{this.state.short}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={constStyles.sideInputContainer}>
              <Text style={constStyles.text}>Long Side</Text>
              <TouchableOpacity onPress={() => this.pressLongView()}>
                <View style={[constStyles.textInput, longHighlight]}>
                  <Text
                    // adjustsFontSizeToFit
                    allowFontScaling
                    style={constStyles.text}
                    numberOfLines={3}
                  >{this.state.long}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={constStyles.sideInputContainer}>
              <Text style={constStyles.text}>Total</Text>
              <TouchableOpacity onPress={() => this.pressTotalView()}>
                <View style={[constStyles.textInput, totalHighlight]}>
                  <Text
                    // adjustsFontSizeToFit
                    allowFontScaling
                    style={constStyles.text}
                    numberOfLines={3}
                  >{this.state.total}</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <NumberPad
          buttonPress={(text) => this.buttonPress(text)}
          clearButton={() => this.setAllToEmptyString()}
          deleteButton={() => this.deleteButton()}
          flipCard={this.props.flipCard}
          updateDecimals={() => this.updateDecimals()}
          decimals={this.state.decimals}

        />

      </View>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const RECT_WIDTH = SCREEN_WIDTH * 0.8;
const RECT_HEIGHT = RECT_WIDTH / math.phi;
const RECT_CONTAINER_WIDTH = (SCREEN_WIDTH * 0.9) - 20;
const TEXT_INPUT_HEIGHT = (RECT_HEIGHT / 3) - 10;
const TEXT_INPUT_WIDTH = TEXT_INPUT_HEIGHT * math.phi;

console.log(TEXT_INPUT_HEIGHT)
console.log(TEXT_INPUT_WIDTH)

const constStyles = {
  rectContainer: {
    height: RECT_HEIGHT + 50,
    width: RECT_CONTAINER_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
  },
  constRect: {
    justifyContent: 'space-around',
    // alignItems: 'center',
    borderWidth: 5,
    width: RECT_WIDTH,
    height: RECT_HEIGHT
  },
  sideInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  textInputOpacity: {

  },
  textInput: {
    width: TEXT_INPUT_WIDTH,
    height: TEXT_INPUT_HEIGHT,
    justifyContent: 'center',
    // width: 100,
    // height: 50,
    // marginTop: 10,
    backgroundColor: 'green'
  },
  text: {
    fontSize: (TEXT_INPUT_HEIGHT / 3) - 2
  }
};

export default GoldenRatioCalc;
