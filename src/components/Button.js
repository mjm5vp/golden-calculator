import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as constants from '../styles/constants';

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

const styles = {
  buttonStyle: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'gray',
    width: constants.BUTTON_WIDTH,
    height: constants.BUTTON_HEIGHT,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: constants.BUTTON_HEIGHT / 3
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Button, IconButton };
