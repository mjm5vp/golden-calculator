import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';

import NumberPad from './NumberPad';

class BackViewCalc extends Component {
  state = {
    inside: '',
    realize: ''
  }

  

  render() {
    return (
      <View>

        <View>
          <FormLabel>Time it takes to look inside</FormLabel>
          <FormInput
            value={this.state.inside}
            keyboardType='numeric'
            onChangeText={text => this.onChangeInsideText(text)}
          />
        </View>

        <View>
          <FormLabel>Time it takes to realize</FormLabel>
          <FormInput
            value={this.state.realize}
            keyboardType='numeric'
            onChangeText={text => this.onChangeRealizeText(text)}
          />
        </View>

        <View>
          <NumberPad
            buttonPress={(text) => this.buttonPress(text)}
            clearButton={() => this.setAllToEmptyString()}
            deleteButton={() => this.deleteButton()}
          />
        </View>

      </View>
    );
  }
}

export default BackViewCalc;
