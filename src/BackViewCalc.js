import React, { Component } from 'react';
import { View } from 'react-native';

import { BeforeGif } from './backView/BeforeGif';
import { ShowGif } from './backView/ShowGif';
import NumberPad from './NumberPad';
import goldenStyles from './styles/goldenRatioCalcStyles';
import styles from './styles/backViewStyles';

class BackViewCalc extends Component {
  state = {
    inside: '',
    realize: '',
    inputField: null,
    result: 0,
    gifHidden: true,
    decimals: 5
  }

  pressInput = (inputField) => {
    this.setState({ inputField });
  }

  buttonPress = (text) => {
    const { inputField } = this.state;
    const newText = this.state[inputField] + text;

    this.setState({ [inputField]: newText });
  }

  deleteButton = () => {
    const { inputField } = this.state;
    const newText = this.state[inputField].substring(0, this.state[inputField].length - 1);

    this.setState({ [inputField]: newText });
  }

  clearButton = () => {
    this.setState({ inputField: null, gifHidden: true });
    this.setAllToEmptyString();
  }

  updateDecimals = () => {
    const decimals = this.state.decimals === 10
      ? 0
      : this.state.decimals + 1;

    this.setState({ decimals },
      this.state.gifHidden === true
        ? null
        : this.divide
    );

    const result = Number(Number((this.state.result)).toFixed(decimals));

    this.setState({ decimals, result });
  }

  divide = () => {
    const { inside, realize, decimals } = this.state;
    const result = Number((Number(inside) / Number(realize)).toFixed(decimals));

    if (isNaN(result)) {
      return;
    }

    this.setState({ result, gifHidden: false });
  }

  setAllToEmptyString = () => {
    this.setState({ inside: '', realize: '', result: 0 });
  }

  render() {
    const { gifHidden, result, inside, realize } = this.state;

    const gifView = () => {
      return gifHidden
        ? <BeforeGif
            pressInput={(inputField) => this.pressInput(inputField)}
            inside={inside}
            realize={realize}
            divide={this.divide}
        />
        : <ShowGif result={result} />;
    };

    return (
      <View>

        <View style={styles.rectContainer}>
          {gifView()}
        </View>

        <View>
          <NumberPad
            buttonPress={(text) => this.buttonPress(text)}
            clearButton={() => this.clearButton()}
            deleteButton={() => this.deleteButton()}
            flipCard={this.props.flipCard}
            updateDecimals={() => this.updateDecimals()}
            decimals={this.state.decimals}
          />
        </View>

      </View>
    );
  }
}

export default BackViewCalc;
