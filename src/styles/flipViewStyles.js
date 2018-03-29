import * as constants from './constants';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCard: {
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  calc: {
    width: constants.CALC_WIDTH,
    height: constants.CALC_HEIGHT,
    backgroundColor: constants.gold,
    borderColor: 'black',
    borderWidth: 10,
    marginTop: 10,
    // marginTop: constants.CALC_SCREEN_DIFF_HEIGHT / 2,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 10,
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: constants.CALC_WIDTH,
    height: constants.CALC_SCREEN_DIFF_HEIGHT / 2,
  },
  title: {
    width: constants.CALC_WIDTH,
    height: constants.CALC_SCREEN_DIFF_HEIGHT / 2,
    fontSize: 100,
    flex: 1,
    color: 'gold',
    fontFamily: 'zaio',
    textAlign: 'center'
    // fontSize: constants.CALC_SCREEN_DIFF_HEIGHT / 2
  }
};

export default styles;
