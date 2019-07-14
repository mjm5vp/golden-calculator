import React, { Component } from 'react'
import { View } from 'react-native'
import math from 'mathjs'

import SideInput from './components/SideInput'
import NumberPad from './NumberPad'
import styles from './styles/goldenRatioCalcStyles'

class GoldenRatioCalc extends Component {
  state = {
    short: '',
    long: '',
    total: '',
    decimals: 5,
    inputField: null
  }

  componentWillMount() {
    this.clearHighlights()
    this.clearBorders()
    this.pressView('shortStyles')
  }

  pressView = sideStyles => {
    this.clearHighlights()
    this.clearBorders()
    this.setState(styles[sideStyles])
  }

  clearBorders = () => {
    this.setState(styles.clearBorders)
  }

  clearHighlights = () => {
    this.setState(styles.clearHighlights)
  }

  buttonPress = text => {
    const { inputField } = this.state

    return inputField ? this.buttonFunction({ inputField, text }) : null
  }

  buttonFunction = ({ inputField, text }) => {
    const func = `${inputField}TextChange`
    const newText = this.state[inputField] + text

    return newText !== '' ? this[func](newText) : this.setAllToEmptyString()
  }

  deleteButton = () => {
    const { inputField } = this.state

    return inputField ? this.deleteFunction(inputField) : null
  }

  deleteFunction = inputField => {
    const func = `${inputField}TextChange`
    const side = this.state[inputField]
    const newText = side.substring(0, side.length - 1)

    return newText !== '' ? this[func](newText) : this.setAllToEmptyString()
  }

  shortTextChange = short => {
    const shortNum = Number(short)
    const long = this.formatInput(shortNum * math.phi)
    const total = this.formatInput(shortNum * 2 + long * 2)

    this.setState({ short, long, total })
  }

  longTextChange = long => {
    const longNum = Number(long)
    const short = this.formatInput(longNum / math.phi)
    const total = this.formatInput(short * 2 + longNum * 2)

    this.setState({ short, long, total })
  }

  totalTextChange = total => {
    const totalNum = Number(total)
    const short = this.formatInput(totalNum / (1 + math.phi))
    const long = this.formatInput(short * math.phi)

    this.setState({ short, long, total })
  }

  updateDecimals = () => {
    const decimals = this.state.decimals === 10 ? 0 : this.state.decimals + 1

    this.setState(
      { decimals },
      this.state.short === ''
        ? this.setAllToEmptyString
        : this.selectUpdateOninputField
    )
  }

  selectUpdateOninputField = () => {
    const { inputField } = this.state
    const func = `${inputField}TextChange`
    const text = this.state[inputField]

    return inputField ? this[func](text) : null
  }

  formatInput = number => {
    return isNaN(number) ? 'ERROR' : String(number.toFixed(this.state.decimals))
  }

  clearButton = () => {
    this.setState({ inputField: null })
    this.setAllToEmptyString()
    this.clearHighlights()
    this.clearBorders()
  }

  setAllToEmptyString = () => {
    this.setState({ short: '', long: '', total: '' })
  }

  render() {
    const {
      borderTopColor,
      borderRightColor,
      borderLeftColor,
      borderBottomColor
    } = this.state
    const borderStyles = {
      borderTopColor,
      borderRightColor,
      borderLeftColor,
      borderBottomColor
    }

    const shortHighlight = { backgroundColor: this.state.shortHighlight }
    const longHighlight = { backgroundColor: this.state.longHighlight }
    const totalHighlight = { backgroundColor: this.state.totalHighlight }

    return (
      <View>
        <View style={[styles.rectContainer]}>
          <View style={[styles.constRect, borderStyles]}>
            <SideInput
              pressView={() => this.pressView('shortStyles')}
              highlightStyle={shortHighlight}
              labelText="Short Side"
              value={this.state.short}
            />
            <SideInput
              pressView={() => this.pressView('longStyles')}
              highlightStyle={longHighlight}
              labelText="Long Side"
              value={this.state.long}
            />
            <SideInput
              pressView={() => this.pressView('totalStyles')}
              highlightStyle={totalHighlight}
              labelText="Total"
              value={this.state.total}
            />
          </View>
        </View>

        <NumberPad
          buttonPress={text => this.buttonPress(text)}
          clearButton={() => this.clearButton()}
          deleteButton={() => this.deleteButton()}
          flipCard={this.props.flipCard}
          updateDecimals={() => this.updateDecimals()}
          decimals={this.state.decimals}
        />
      </View>
    )
  }
}

export default GoldenRatioCalc
