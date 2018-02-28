import { Dimensions } from 'react-native';
import math from 'mathjs';

const SCREEN_WIDTH = Dimensions.get('window').width;
const RECT_WIDTH = SCREEN_WIDTH * 0.8;
const RECT_HEIGHT = RECT_WIDTH / math.phi;
const RECT_CONTAINER_WIDTH = (SCREEN_WIDTH * 0.9) - 20;
const TEXT_INPUT_HEIGHT = (RECT_HEIGHT / 3) - 10;
const TEXT_INPUT_WIDTH = TEXT_INPUT_HEIGHT * math.phi;
const VIDEO_WIDTH = RECT_WIDTH * 0.7;
const VIDEO_HEIGHT = VIDEO_WIDTH / math.phi;

const styles = {
  rectContainer: {
    height: RECT_HEIGHT + 50,
    width: RECT_CONTAINER_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  constRect: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    width: RECT_WIDTH,
    height: RECT_HEIGHT
  },
  sideInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginLeft: 30,
    // marginRight: 30
  },
  text: {
    width: RECT_WIDTH / 2,
    fontSize: (TEXT_INPUT_HEIGHT / 3) - 5
  },
  inputView: {
    height: TEXT_INPUT_HEIGHT,
    width: TEXT_INPUT_WIDTH,
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
    height: TEXT_INPUT_HEIGHT,
    width: TEXT_INPUT_WIDTH
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
    // flex: 1,
    marginLeft: 10,
    marginRight: 10,
    // size: 100
    // width: VIDEO_HEIGHT / 2,
    // height: VIDEO_HEIGHT / 2
  },
  video: {
    width: VIDEO_WIDTH,
    height: VIDEO_HEIGHT
  },
  image: {
    width: VIDEO_WIDTH,
    height: VIDEO_HEIGHT
  }
};

export default styles;
