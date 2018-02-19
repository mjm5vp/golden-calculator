import { Dimensions } from 'react-native';
import math from 'mathjs';

const SCREEN_WIDTH = Dimensions.get('window').width;
const RECT_CONTAINER_WIDTH = (SCREEN_WIDTH * 0.9) - 20;
const BUTTON_WIDTH = (RECT_CONTAINER_WIDTH * 0.7) / 3;
const BUTTON_HEIGHT = BUTTON_WIDTH / math.phi;

const styles = {
  container: {
    height: 270,
    width: RECT_CONTAINER_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
  },
  buttonStyle: {
    backgroundColor: 'black',
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT
  }
};

export default styles;
