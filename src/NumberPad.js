import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import math from 'mathjs';

class NumberPad extends Component {

  buttonPress = (text) => {
    this.props.buttonPress(text);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            title='7'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('7')}
            raised
          />
          <Button
            title='8'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('8')}
            raised
          />
          <Button
            title='9'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('9')}
            raised
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            title='4'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('4')}
            raised
          />
          <Button
            title='5'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('5')}
            raised
          />
          <Button
            title='6'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('6')}
            raised
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            title='1'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('1')}
            raised
          />
          <Button
            title='2'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('2')}
            raised
          />
          <Button
            title='3'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('3')}
            raised
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            title='.'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('.')}
            raised
          />
          <Button
            title='0'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.buttonPress('0')}
            raised
            TouchableComponent='TouchableOpacity'
          />
          <Button
            title='<-'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.props.deleteButton()}
            raised
          />
        </View>

        <View>
          <Button
            title='Clear'
            onPress={this.props.clearButton}
            buttonStyle={styles.buttonStyle}
            raised
          />
        </View>

      </View>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const RECT_CONTAINER_WIDTH = (SCREEN_WIDTH * 0.9) - 20;
const BUTTON_WIDTH = (RECT_CONTAINER_WIDTH * 0.7) / 3;
const BUTTON_HEIGHT = BUTTON_WIDTH / math.phi;

const styles = {
  container: {
    height: 270,
    width: RECT_CONTAINER_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
  },
  buttonStyle: {
    backgroundColor: 'black',
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT
  }
};

export default NumberPad;
