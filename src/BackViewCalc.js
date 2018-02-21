import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
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

        <Image
          style={{ width: 100, height: 50 }}
          source={{ uri: 'https://i.redd.it/jdqgzohp4dh01.gif' }}
        />

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
