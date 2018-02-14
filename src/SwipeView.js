import React, { Component } from 'react';
import { Animated, View, Text, Dimensions, PanResponder, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import GoldenRatioCalc from './GoldenRatioCalc';
// import styles from './styles/goldenRatioCalcStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class SwipeView extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }
  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }

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
      <View style={styles.container}>
        <View style={styles.container}>
          <Animated.View style={[styles.flipCard, styles.calc, frontAnimatedStyle]}>
            <View style={styles.container}>
              <GoldenRatioCalc />
            </View>
          </Animated.View>
          <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack, styles.calc]}>
            <Text style={styles.flipText}>
              This text is flipping on the back.
            </Text>
          </Animated.View>
        </View>
        <Button
          style={{ marginTop: 50 }}
          onPress={() => this.flipCard()}
          title='Flip'
        />

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flipCard: {
    zIndex: 2,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    zIndex: 1,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  calc: {
    height: '80%',
    backgroundColor: 'gold',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 5,
    marginTop: 50
  }

};

export default SwipeView;
