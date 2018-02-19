import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import { Button, IconButton } from './components/Button';
import styles from './styles/numberPadStyles';

class NumberPad extends Component {

  render() {
    const {
      buttonPress,
      deleteButton,
      clearButton,
      updateDecimals,
      decimals,
      flipCard
    } = this.props;

    return (
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button onPress={() => buttonPress('7')}>7</Button>
          <Button onPress={() => buttonPress('8')}>8</Button>
          <Button onPress={() => buttonPress('9')}>9</Button>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button onPress={() => buttonPress('4')}>4</Button>
          <Button onPress={() => buttonPress('5')}>5</Button>
          <Button onPress={() => buttonPress('6')}>6</Button>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button onPress={() => buttonPress('1')}>1</Button>
          <Button onPress={() => buttonPress('2')}>2</Button>
          <Button onPress={() => buttonPress('3')}>3</Button>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <IconButton onPress={() => buttonPress('.')}>
            <Icon
              name='dot-single'
              type='entypo'
              color='white'
            />
          </IconButton>
          <Button onPress={() => buttonPress('0')}>0</Button>
          <IconButton onPress={() => deleteButton()}>
            <Icon
              name='delete'
              type='feather'
              color='white'
            />
          </IconButton>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <IconButton onPress={() => updateDecimals()}>
            <Text style={{ color: 'white' }}>Decimals:</Text>
            <Text style={{ color: 'white' }}>{decimals}</Text>
          </IconButton>
          <Button onPress={() => clearButton()}>Clear</Button>
          <Button onPress={() => flipCard()}>Flip</Button>

        </View>

      </View>
    );
  }
}

export default NumberPad;
