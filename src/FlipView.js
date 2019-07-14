import React, { Component } from 'react'
import { Animated, View } from 'react-native'

import GoldenRatioCalc from './GoldenRatioCalc'
import BackViewCalc from './BackViewCalc'
import styles from './styles/flipViewStyles'
// import title from '../assets/title.png';

class FlipView extends Component {
  state = {
    front: true
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
    this.value = 0
    this.animatedValue.addListener(({ value }) => {
      this.value = value
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }

  flipCard() {
    this.setState({ front: !this.state.front })
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start()
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start()
    }
  }

  render() {
    let frontzIndex = 1
    let backzIndex = 2

    if (this.state.front === true) {
      frontzIndex = 2
      backzIndex = 1
    } else {
      frontzIndex = 1
      backzIndex = 2
    }

    const frontAnimatedStyle = {
      zIndex: frontzIndex,
      transform: [{ rotateY: this.frontInterpolate }]
    }
    const backAnimatedStyle = {
      zIndex: backzIndex,
      transform: [{ rotateY: this.backInterpolate }]
    }

    return (
      <View style={styles.container}>
        {/* <View style={styles.titleView}>
					<Image source={title} style={styles.title} resizeMode="contain" />
				</View> */}
        <View>
          <Animated.View
            style={[styles.flipCard, frontAnimatedStyle, styles.calc]}
          >
            <GoldenRatioCalc flipCard={() => this.flipCard()} />
          </Animated.View>
          <Animated.View
            style={[
              backAnimatedStyle,
              styles.flipCard,
              styles.flipCardBack,
              styles.calc
            ]}
          >
            <BackViewCalc flipCard={() => this.flipCard()} />
          </Animated.View>
        </View>
      </View>
    )
  }
}

export default FlipView
