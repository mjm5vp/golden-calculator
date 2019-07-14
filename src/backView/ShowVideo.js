import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { Video } from 'expo'
import goldenImage from '../../assets/goldenImage.png'

import styles from '../styles/backViewStyles'

class ShowVideo extends Component {
  state = {
    playPressed: false,
    muted: false
  }

  onPressMute = () => {
    // this.vid.setIsMutedAsync(true);
    this.setState({ muted: !this.state.muted })
  }

  onPressPlay = () => {
    // this.vid.playAsync();
    this.setState({ playPressed: true })
  }

  renderImageOrVideo = () => {
    const { muted, playPressed } = this.state
    if (playPressed) {
      return (
        <Video
          source={{
            uri:
              'https://s3.amazonaws.com/golden-calculator-video/OutKast-Roses.mp4'
          }}
          rate={1.0}
          useNativeControls
          volume={1.0}
          isMuted={this.state.muted}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
      )
    }

    const iconName = muted ? 'volume-mute' : 'volume-high'

    return (
      <ImageBackground source={goldenImage} style={styles.image}>
        <View style={styles.iconView}>
          <Icon
            name={iconName}
            type="material-community"
            color="white"
            iconStyle={styles.icon}
            size={100}
            onPress={this.onPressMute}
          />
          <Icon
            name="play"
            type="material-community"
            color="white"
            size={100}
            iconStyle={styles.icon}
            onPress={this.onPressPlay}
          />
        </View>
      </ImageBackground>
    )
  }

  render() {
    const { result, showResult, pressBottomButton } = this.props

    const resultView = showResult ? (
      <View>
        <Text style={styles.resultText}>
          {result} seconds to realize real guys go for real down to Mars girls.
        </Text>
      </View>
    ) : null

    const buttonView = !showResult ? (
      <TouchableOpacity onPress={pressBottomButton} style={styles.videoButton}>
        <View style={styles.elevationButton}>
          <Text style={styles.divideButtonText}>
            You need a Golden Calculator to divide...
          </Text>
        </View>
      </TouchableOpacity>
    ) : null

    return (
      <View style={styles.constRect}>
        {resultView}
        <View style={styles.mediaView}>{this.renderImageOrVideo()}</View>
        {buttonView}
      </View>
    )
  }
}

export default ShowVideo
