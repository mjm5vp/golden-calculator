import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const RECT_CONTAINER_WIDTH = (SCREEN_WIDTH * 0.9) - 20;

const styles = {
  container: {
    height: 270,
    width: RECT_CONTAINER_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  }
};

export default styles;
