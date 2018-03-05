import * as constants from './constants';

const color1 = '#f2ead5';

const styles = {
  shortStyles: {
    inputField: 'short',
    borderRightColor: color1,
    shortHighlight: color1
  },
  longStyles: {
    inputField: 'long',
    borderTopColor: color1,
    longHighlight: color1
  },
  totalStyles: {
    inputField: 'total',
    borderTopColor: color1,
    borderRightColor: color1,
    borderLeftColor: color1,
    borderBottomColor: color1,
    totalHighlight: color1
  },
  clearBorders: {
    borderTopColor: 'black',
    borderRightColor: 'black',
    borderLeftColor: 'black',
    borderBottomColor: 'black'
  },
  clearHighlights: {
    shortHighlight: 'gray',
    longHighlight: 'gray',
    totalHighlight: 'gray'
  },
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formInputContainer: {
    backgroundColor: 'blue',
    width: '50%'
  },
  formInputInput: {
    color: 'red'
  },
  rectContainer: {
    height: constants.RECT_HEIGHT,
    width: constants.RECT_CONTAINER_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  constRect: {
    justifyContent: 'space-around',
    borderWidth: 5,
    width: constants.RECT_WIDTH,
    height: constants.RECT_HEIGHT
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
    width: constants.TEXT_INPUT_WIDTH,
    height: constants.TEXT_INPUT_HEIGHT,
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
    fontSize: (constants.TEXT_INPUT_HEIGHT / 3) - 2
  }
};

export default styles;
