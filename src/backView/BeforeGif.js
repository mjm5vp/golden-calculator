import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../styles/backViewStyles';
import goldenStyles from '../styles/goldenRatioCalcStyles';

class BeforeGif extends Component {
  componentWillMount() {
    this.clearHighlights();
  }

  pressInside = () => {
    const { insideHighlight } = styles;

    this.clearHighlights();
    this.props.pressInput('inside');
    this.setState({ insideHighlight });
  }

  pressRealize = () => {
    const { realizeHighlight } = styles;

    this.clearHighlights();
    this.props.pressInput('realize');
    this.setState({ realizeHighlight });
  }

  clearHighlights = () => {
    const { clearHighlights } = styles;

    this.setState({
      insideHighlight: clearHighlights,
      realizeHighlight: clearHighlights
    });
  }

  render() {
    const { inside, realize, divide } = this.props;
    const { insideHighlight, realizeHighlight } = this.state;

    return (
      <View style={styles.constRect}>
        <View style={[styles.sideInputContainer]}>
          <Text numberOfLines={2} style={styles.text}>Time it took to look inside (seconds)</Text>
          <TouchableOpacity onPress={this.pressInside}>
            <View style={[goldenStyles.textInput, insideHighlight]}>
              <Text
                allowFontScaling
                style={goldenStyles.text}
                numberOfLines={3}
              >{inside}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.sideInputContainer}>
          <Text numberOfLines={2} style={styles.text}>Time it took to realize (seconds)</Text>
          <TouchableOpacity onPress={this.pressRealize}>
            <View style={[goldenStyles.textInput, realizeHighlight]}>
              <Text
                allowFontScaling
                style={goldenStyles.text}
                numberOfLines={3}
              >{realize}</Text>
            </View>
        </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={divide} style={styles.divideButton}>
          <Text>DIVIDE</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export { BeforeGif };
