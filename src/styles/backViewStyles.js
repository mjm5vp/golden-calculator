import { Dimensions } from 'react-native';
import math from 'mathjs';

const SCREEN_WIDTH = Dimensions.get('window').width;
const RECT_WIDTH = SCREEN_WIDTH * 0.8;
const RECT_HEIGHT = RECT_WIDTH / math.phi;
const RECT_CONTAINER_WIDTH = (SCREEN_WIDTH * 0.9) - 20;
const TEXT_INPUT_HEIGHT = (RECT_HEIGHT / 3) - 10;
const TEXT_INPUT_WIDTH = TEXT_INPUT_HEIGHT * math.phi;

const styles = {
  divideButton: {
    backgroundColor: 'white',
    height: TEXT_INPUT_HEIGHT,
    width: TEXT_INPUT_WIDTH
  }
};

export default styles;
