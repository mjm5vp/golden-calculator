import { Dimensions } from 'react-native';
import math from 'mathjs';

const SCREEN_WIDTH = Dimensions.get('window').width;
const calcWidth = SCREEN_WIDTH * 0.9;
const calcHeight = calcWidth * math.phi;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCard: {
    // zIndex: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    // zIndex: 3,
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
    width: calcWidth,
    height: calcHeight,
    backgroundColor: '#D4AF37',
    // borderRadius: 10,
    borderColor: 'black',
    borderWidth: 10,
    // borderTopWidth: 10,
    // borderTopColor: 'blue',
    marginTop: 50
  }
};

export default styles;
