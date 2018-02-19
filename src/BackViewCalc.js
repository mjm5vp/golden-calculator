import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';

import NumberPad from './NumberPad';

class BackViewCalc extends Component {
  state = {
    inside: '',
    realize: ''
  }

  buttonPress = (text) => {
    console.log('buttonPress');
  }

  clearButton = () => {
    console.log('clearButton');
  }

  deleteButton = () => {
    console.log('deleteButton');
  }

  render() {
    return (
      <View>

        <View>
          <Text>Time it takes to look inside</Text>
          <View>
            <Text>{this.state.inside}</Text>
          </View>
        </View>

        <View>
          <Text>Time it takes to realize</Text>
          <View>
            <Text>{this.state.realize}</Text>
          </View>
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
