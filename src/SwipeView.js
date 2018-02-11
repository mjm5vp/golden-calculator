import React, { Component } from 'react';
import { Animated, View, Text, Dimensions, PanResponder, TouchableOpacity } from 'react-native';
import GoldenRatioCalc from './GoldenRatioCalc';
// import styles from './styles/goldenRatioCalcStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class SwipeView extends Component {

  constructor(props) {
    super(props);

    const position = new Animated.Value();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          console.log('over threshold');
          this.flipCard();
        } else {
          console.log('reset position');
          this.resetPosition();
        }
      }
    });

    this.state = { panResponder, position, index: 0 };
  }

  flipCard() {
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    });
  }

  resetPosition() {
  Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate}
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }
    return (
      <View>
        <View style={styles.container}>
          <Animated.View
            style={[frontAnimatedStyle, styles.flipCard, { zIndex: 99 }]}
            {...this.state.panResponder.panHandlers}
          >
            <GoldenRatioCalc />
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Text>Flip!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  flipCard: {
    // width: 200,
    // height: 200,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'blue',
    width: SCREEN_WIDTH - 50,
    height: '80%',
    backgroundColor: 'gold',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 5,
    marginTop: 50,
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    backgroundColor: 'red',
    // position: 'absolute',
    // top: 0,
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
};

export default SwipeView;
