import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as constants from '../styles/constants';
import colors from '../styles/colors';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const IconButton = ({ onPress, children }) => {
	const { buttonStyle, viewStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<View style={viewStyle}>{children}</View>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		backgroundColor: colors.gb.black,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: colors.gb.white,
		width: constants.BUTTON_WIDTH,
		height: constants.BUTTON_HEIGHT,
		marginLeft: 5,
		marginRight: 5,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: colors.gb.black,
		shadowOffset: { height: 10 },
		shadowOpacity: 0.6,
		shadowRadius: 2
	},
	textStyle: {
		color: colors.gb.white,
		fontSize: constants.BUTTON_HEIGHT / 3,
		fontFamily: 'orbitron'
	},
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { Button, IconButton };
