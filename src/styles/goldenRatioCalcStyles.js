import { Dimensions } from 'react-native';
import math from 'mathjs';

const SCREEN_WIDTH = Dimensions.get('window').width;
const RECT_WIDTH = SCREEN_WIDTH * 0.8;
const RECT_HEIGHT = RECT_WIDTH / math.phi;
const RECT_CONTAINER_WIDTH = (SCREEN_WIDTH * 0.9) - 20;
const TEXT_INPUT_HEIGHT = (RECT_HEIGHT / 3) - 10;
const TEXT_INPUT_WIDTH = TEXT_INPUT_HEIGHT * math.phi;

const styles = {
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calc: {
    height: '80%',
    backgroundColor: 'gold',
    // borderRadius: 10,
    borderColor: 'black',
    borderWidth: 5,
    marginTop: 50,
    borderTopWidth: 50
  },
  formInputContainer: {
    backgroundColor: 'blue',
    width: '50%'
  },
  formInputInput: {
    color: 'red'
  },
  rectContainer: {
    height: RECT_HEIGHT + 50,
    width: RECT_CONTAINER_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
  },
  constRect: {
    justifyContent: 'space-around',
    // alignItems: 'center',
    borderWidth: 5,
    width: RECT_WIDTH,
    height: RECT_HEIGHT
  },
  sideInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  textInputOpacity: {

  },
  textInput: {
    width: TEXT_INPUT_WIDTH,
    height: TEXT_INPUT_HEIGHT,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 2,
    // width: 100,
    // height: 50,
    // marginTop: 10,
    backgroundColor: 'green'
  },
  text: {
    fontSize: (TEXT_INPUT_HEIGHT / 3) - 2
  }
};

export default styles;
