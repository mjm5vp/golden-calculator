import * as constants from './constants';
import colors from './colors';

const borderColor = colors.myGold.black;
const inputColor = colors.myGold.grey;
const borderHighlight = colors.t4k.e;
const highlight = colors.t4k.e;

const styles = {
	shortStyles: {
		inputField: 'short',
		borderRightColor: borderHighlight,
		shortHighlight: highlight
	},
	longStyles: {
		inputField: 'long',
		borderTopColor: borderHighlight,
		longHighlight: highlight
	},
	totalStyles: {
		inputField: 'total',
		borderTopColor: borderHighlight,
		borderRightColor: borderHighlight,
		borderLeftColor: borderHighlight,
		borderBottomColor: borderHighlight,
		totalHighlight: highlight
	},
	clearBorders: {
		borderTopColor: borderColor,
		borderRightColor: borderColor,
		borderLeftColor: borderColor,
		borderBottomColor: borderColor
	},
	clearHighlights: {
		shortHighlight: inputColor,
		longHighlight: inputColor,
		totalHighlight: inputColor
	},
	containerView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	formInputContainer: {
		width: '50%'
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
		borderWidth: 8,
		borderRadius: 5,
		borderColor: colors.myGold.black,
		shadowOffset: { height: 1 },
		shadowColor: 'black',
		shadowOpacity: 1.0,
		width: constants.RECT_WIDTH,
		height: constants.RECT_HEIGHT,
		backgroundColor: colors.rectBackground
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
		shadowOffset: { height: 1 },
		shadowColor: colors.gb.black,
		shadowOpacity: 1.0
		// borderWidth: 2,
		// borderColor: colors.t4k.c,
		// borderRadius: 2
	},
	labelText: {
		fontSize: constants.TEXT_INPUT_HEIGHT / 3 - 2,
		fontWeight: '900',
		fontFamily: 'goldenFont',
		color: colors.gb.black
		// textShadowOffset: { height: 1, width: 1 },
		// textShadowColor: colors.gb.white,
		// textShadowRadius: 2
	},
	text: {
		fontSize: constants.TEXT_INPUT_HEIGHT / 3 - 2,
		fontWeight: '800',
		fontFamily: 'zaio',
		color: colors.gb.darkestGold
	}
};

export default styles;
