import * as constants from './constants';
import colors from './colors';

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	flipCard: {
		backfaceVisibility: 'hidden'
	},
	flipCardBack: {
		position: 'absolute',
		top: 0
	},
	flipText: {
		width: 90,
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold'
	},
	calc: {
		width: constants.CALC_WIDTH,
		height: constants.CALC_HEIGHT,
		backgroundColor: colors.t4k.c,
		borderColor: colors.gb.black,
		borderWidth: 4,
		borderRadius: 10,
		marginTop: 10,
		// marginTop: constants.CALC_SCREEN_DIFF_HEIGHT / 2,
		shadowColor: colors.gb.black,
		shadowOffset: { height: 10 },
		shadowOpacity: 0.6,
		shadowRadius: 2,
		elevation: 10
	},
	titleView: {
		width: constants.CALC_WIDTH,
		height: constants.CALC_SCREEN_DIFF_HEIGHT / 2
	},
	title: {
		width: constants.CALC_WIDTH,
		height: constants.CALC_SCREEN_DIFF_HEIGHT / 2
		// fontSize: 100,
		// flex: 1
		// color: 'gold',
		// fontFamily: 'zaio',
		// textAlign: 'center',
		// textShadowColor: 'black',
		// textShadowOffset: { width: -1, height: 1 },
		// textShadowRadius: 10
		// fontSize: constants.CALC_SCREEN_DIFF_HEIGHT / 2
	}
};

export default styles;
