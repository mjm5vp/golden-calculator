import * as constants from './constants';
import colors from './colors';

const styles = {
	container: {
		height: constants.NUMBER_PAD_HEIGHT,
		width: constants.RECT_CONTAINER_WIDTH,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	rowContainer: {
		width: constants.RECT_CONTAINER_WIDTH,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	decimalsText: {
		fontSize: constants.BUTTON_HEIGHT / 4,
		// fontSize: 10,
		fontFamily: 'orbitron',
		color: colors.gb.white
	}
};

export default styles;
