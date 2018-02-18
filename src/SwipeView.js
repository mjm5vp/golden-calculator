import React, { Component } from 'react';
import { Animated, View, Text, Dimensions, PanResponder, TouchableOpacity } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';
import math from 'mathjs';

import GoldenRatioCalc from './GoldenRatioCalc';
import BackViewCalc from './BackViewCalc';
// import styles from './styles/goldenRatioCalcStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class SwipeView extends Component {
  state = {
    front: true,
    frontzIndex: 2,
    backzIndex: 1
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    });
  }
  flipCard() {
    this.setState({ front: !this.state.front });
    if (this.value >= 90) {
      this.setState({ frontzIndex: 1, backzIndex: 2 });
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      this.setState({ frontzIndex: 2, backzIndex: 1 });
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  render() {
    const { borderTopColor, borderRightColor, borderLeftColor, borderBottomColor } = this.state;

    let frontzIndex = 1;
    let backzIndex = 2;
    if (this.state.front === true) {
      frontzIndex = 2;
      backzIndex = 1;
    } else {
      frontzIndex = 1;
      backzIndex = 2;
    }
    const frontAnimatedStyle = {
      zIndex: frontzIndex,
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    };
    const backAnimatedStyle = {
      zIndex: backzIndex,
      transform: [
        { rotateY: this.backInterpolate }
      ]
    };

    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle, styles.calc]}>
            <GoldenRatioCalc
              onPressShort={this.setShortSideBorder}
              onPressLong={this.setLongSideBorder}
              onPressTotal={this.setTotalBorder}
              clearBorders={this.clearBorders}
            />
          </Animated.View>
          <Animated.View
            style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack, styles.calc]}
          >
            <BackViewCalc />
          </Animated.View>
        </View>
        <Button
          style={{ marginTop: 10 }}
          onPress={() => this.flipCard()}
          title='Flip'
        />

      </View>
    );
  }
}

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
    backgroundColor: 'gold',
    // borderRadius: 10,
    borderColor: 'black',
    borderWidth: 10,
    // borderTopWidth: 10,
    // borderTopColor: 'blue',
    marginTop: 50
  }

};

export default SwipeView;
