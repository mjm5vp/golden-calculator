import * as constants from './constants';

const color1 = '#f2ead5';

const styles = {
	shortStyles: {
		inputField: 'short',
		borderRightColor: color1,
		shortHighlight: color1
	},
	longStyles: {
		inputField: 'long',
		borderTopColor: color1,
		longHighlight: color1
	},
	totalStyles: {
		inputField: 'total',
		borderTopColor: color1,
		borderRightColor: color1,
		borderLeftColor: color1,
		borderBottomColor: color1,
		totalHighlight: color1
	},
	clearBorders: {
		borderTopColor: 'black',
		borderRightColor: 'black',
		borderLeftColor: 'black',
		borderBottomColor: 'black'
	},
	clearHighlights: {
		shortHighlight: 'black',
		longHighlight: 'black',
		totalHighlight: 'black'
	},
	containerView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	formInputContainer: {
		backgroundColor: 'blue',
		width: '50%'
	},
	formInputInput: {
		color: 'red'
	},
	rectContainer: {
		height: constants.RECT_HEIGHT,
		width: constants.RECT_CONTAINER_WIDTH,
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10
	},
	constRect: {
		justifyContent: 'space-around',
		borderWidth: 5,
		width: constants.RECT_WIDTH,
		height: constants.RECT_HEIGHT,
		backgroundColor: 'gray'
	},
	sideInputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 30,
		marginRight: 30
	},
	textInputOpacity: {},
	textInput: {
		width: constants.TEXT_INPUT_WIDTH,
		height: constants.TEXT_INPUT_HEIGHT,
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: 'gray',
		borderRadius: 2
	},
	labelText: {
		fontSize: constants.TEXT_INPUT_HEIGHT / 3 - 2,
		fontWeight: '800',
		fontFamily: 'goldenFont',
		color: 'black'
	},
	text: {
		fontSize: constants.TEXT_INPUT_HEIGHT / 3 - 2,
		fontWeight: '800',
		fontFamily: 'orbitron',
		color: 'green'
	}
};

export default styles;
