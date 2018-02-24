import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo';

import NumberPad from './NumberPad';
import goldenStyles from './styles/goldenRatioCalcStyles';
import styles from './styles/backViewStyles';

class BackViewCalc extends Component {
  state = {
    inside: '',
    realize: '',
    active: null,
    result: 0,
    gifHidden: true,
    decimals: 5
  }

  pressInput = (name) => {
    this.setState({ active: name });
  }

  buttonPress = (text) => {
    const { active } = this.state;
    const newText = this.state[active] + text;

    this.setState({ [active]: newText });
  }

  deleteButton = () => {
    const { active } = this.state;
    const newText = this.state[active].substring(0, this.state[active].length - 1);

    this.setState({ [active]: newText });
  }

  clearButton = () => {
    this.setState({ active: null, gifHidden: true });
    this.setAllToEmptyString();
  }

  updateDecimals = () => {
    const decimals = this.state.decimals === 10
      ? 0
      : this.state.decimals + 1;

    console.log(typeof this.state.result)

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

  renderView = () => {
    if (this.state.gifHidden) {
      return (
        <View>
          <TouchableOpacity onPress={() => this.pressInput('inside')}>
            <View>
              <Text>Time it takes to look inside</Text>
              <View>
                <Text>{this.state.inside}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.pressInput('realize')}>
            <View>
              <Text>Time it takes to realize</Text>
              <View>
                <Text>{this.state.realize}</Text>
              </View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={this.divide} style={styles.divideButton}>
            <Text>DIVIDE</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View>
        <View>
          <Text>
            {this.state.result} seconds to realize real guys go for real down to Mars girls.
          </Text>
        </View>

        <Image
          style={{ width: 100, height: 50 }}
          source={{ uri: 'https://i.redd.it/jdqgzohp4dh01.gif' }}
        />

        <Video
          // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          source={{ uri: 'http://techslides.com/demos/sample-videos/small.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 100, height: 50 }}
        />
      </View>
    );
  }

  render() {
    return (
      <View>

        <View style={goldenStyles.rectContainer}>
          <View style={goldenStyles.constRect}>
            {this.renderView()}
          </View>
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
