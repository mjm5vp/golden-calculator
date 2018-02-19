import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import math from 'mathjs';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>

  );
};

const IconButton = ({ onPress, children }) => {
  const { buttonStyle, viewStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={viewStyle}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

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
  },
  buttonStyle: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'gray',
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Button, IconButton };
