import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles/goldenRatioCalcStyles'

const SideInput = ({ labelText, pressView, highlightStyle, value }) => {
  return (
    <View style={styles.sideInputContainer}>
      <Text style={styles.labelText}>{labelText}</Text>
      <View style={styles.elevationInput}>
        <TouchableOpacity onPress={pressView}>
          <View style={[styles.textInput, highlightStyle]}>
            <Text allowFontScaling style={styles.text} numberOfLines={3}>
              {value}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SideInput
