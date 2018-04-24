import * as constants from './constants';

const styles = {
  constRect: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    width: constants.RECT_WIDTH,
    height: constants.RECT_HEIGHT
  },
  sideInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelText: {
    width: constants.RECT_WIDTH / 2,
    fontSize: (constants.TEXT_INPUT_HEIGHT / 3.5) - 5,
    fontFamily: 'goldenFont'
  },
  text: {
    width: constants.RECT_WIDTH / 2,
    fontSize: (constants.TEXT_INPUT_HEIGHT / 3) - 5
  },
  inputView: {
    height: constants.TEXT_INPUT_HEIGHT,
    width: constants.TEXT_INPUT_WIDTH,
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 2
  },
  insideHighlight: {
    backgroundColor: 'white'
  },
  realizeHighlight: {
    backgroundColor: 'white'
  },
  clearHighlights: {
    backgroundColor: 'gray',
  },
  divideButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 2,
    height: constants.TEXT_INPUT_HEIGHT,
    width: constants.TEXT_INPUT_WIDTH
  },
  divideButtonText: {
    fontSize: (constants.TEXT_INPUT_HEIGHT / 3) - 5,
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
    marginRight: 10,
  },
  video: {
    width: constants.VIDEO_WIDTH,
    height: constants.VIDEO_HEIGHT
  },
  image: {
    width: constants.VIDEO_WIDTH,
    height: constants.VIDEO_HEIGHT
  }
};

export default styles;
