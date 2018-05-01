import * as constants from './constants';
import colors from './colors';

const inputColor = colors.myGold.grey;
const highlight = colors.t4k.e;

const styles = {
	constRect: {
		justifyContent: 'space-around',
		alignItems: 'center',
		borderWidth: 5,
		backgroundColor: colors.rectBackground,
		width: constants.RECT_WIDTH,
		height: constants.RECT_HEIGHT
	},
	sideInputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	labelText: {
		width: constants.RECT_WIDTH / 2,
		fontSize: constants.TEXT_INPUT_HEIGHT / 3.5 - 5,
		fontFamily: 'goldenFont'
	},
	text: {
		// width: constants.RECT_WIDTH / 2,
		// fontSize: constants.TEXT_INPUT_HEIGHT / 3 - 5,
		fontSize: constants.TEXT_INPUT_HEIGHT - 10,
		fontWeight: '800',
		fontFamily: 'zaio',
		color: colors.gb.darkestGold
	},
	inputView: {
		backgroundColor: inputColor,
		borderWidth: 2,
		borderColor: colors.gb.white,
		borderRadius: 2,
		alignItems: 'center',
		width: constants.TEXT_INPUT_WIDTH,
		height: constants.TEXT_INPUT_HEIGHT,
		justifyContent: 'center',
		shadowOffset: { height: 1 },
		shadowColor: colors.gb.black,
		shadowOpacity: 1.0
	},
	insideHighlight: {
		backgroundColor: colors.t4k.e
	},
	realizeHighlight: {
		backgroundColor: colors.t4k.e
	},
	clearHighlights: {
		backgroundColor: inputColor
	},
	divideButtonDisabled: {
		backgroundColor: 'white',
		opacity: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 4,
		shadowOffset: { height: 1 },
		shadowColor: colors.gb.black,
		shadowOpacity: 1.0,
		height: constants.TEXT_INPUT_HEIGHT,
		width: constants.TEXT_INPUT_WIDTH
	},
	divideButton: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.t4k.c,
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 4,
		height: constants.TEXT_INPUT_HEIGHT,
		width: constants.TEXT_INPUT_WIDTH,
		shadowOffset: { height: 1 },
		shadowColor: colors.gb.black,
		shadowOpacity: 1.0
	},
	divideButtonText: {
		fontSize: constants.TEXT_INPUT_HEIGHT / 3 - 5,
		fontFamily: 'goldenFont'
	},
	mediaView: {
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 2
	},
	iconView: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		marginLeft: 10,
		marginRight: 10
	},
	video: {
		width: constants.VIDEO_WIDTH,
		height: constants.VIDEO_HEIGHT
	},
	videoButton: {
		// height: 10,
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: { height: 1, width: 1 },
		shadowColor: colors.gb.black,
		shadowOpacity: 1.0
	},
	image: {
		width: constants.VIDEO_WIDTH,
		height: constants.VIDEO_HEIGHT
	}
};

export default styles;
