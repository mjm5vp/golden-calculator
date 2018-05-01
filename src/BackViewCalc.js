import React, { Component } from 'react';
import { View } from 'react-native';

import BeforeVideo from './backView/BeforeVideo';
import ShowVideo from './backView/ShowVideo';
import NumberPad from './NumberPad';
import goldenStyles from './styles/goldenRatioCalcStyles';

class BackViewCalc extends Component {
	state = {
		inside: '',
		realize: '',
		inputField: null,
		result: 0,
		showVideo: true,
		showResult: false,
		decimals: 5
	};

	pressInput = inputField => {
		this.setState({ inputField });
	};

	buttonPress = text => {
		const { inputField } = this.state;
		const newText = this.state[inputField] + text;

		this.setState({ [inputField]: newText });
	};

	deleteButton = () => {
		const { inputField } = this.state;
		const newText = this.state[inputField].substring(
			0,
			this.state[inputField].length - 1
		);

		this.setState({ [inputField]: newText });
	};

	clearButton = () => {
		this.setState({ showVideo: false });
		this.setAllToEmptyString();
	};

	updateDecimals = () => {
		const decimals = this.state.decimals === 10 ? 0 : this.state.decimals + 1;

		this.setState({ decimals }, this.state.showVideo ? this.divide : null);

		const result = Number(Number(this.state.result).toFixed(decimals));

		this.setState({ decimals, result });
	};

	divide = () => {
		const { inside, realize, decimals } = this.state;
		const result = Number((Number(inside) / Number(realize)).toFixed(decimals));

		if (isNaN(result)) return;

		this.setState({ result, showResult: true, showVideo: true });
	};

	pressBottomButton = () => {
		this.setState({ showVideo: false });
	};

	setAllToEmptyString = () => {
		this.setState({ inside: '', realize: '', result: 0 });
	};

	render() {
		const { result, inside, realize, showVideo, showResult } = this.state;

		const gifView = () => {
			return showVideo ? (
				<ShowVideo
					result={result}
					showResult={showResult}
					pressBottomButton={this.pressBottomButton}
				/>
			) : (
				<BeforeVideo
					pressInput={inputField => this.pressInput(inputField)}
					inside={inside}
					realize={realize}
					divide={this.divide}
				/>
			);
		};

		return (
			<View>
				<View style={goldenStyles.rectContainer}>{gifView()}</View>

				<View>
					<NumberPad
						buttonPress={text => this.buttonPress(text)}
						clearButton={() => this.clearButton()}
						deleteButton={() => this.deleteButton()}
						flipCard={this.props.flipCard}
						updateDecimals={() => this.updateDecimals()}
						decimals={this.state.decimals}
					/>
				</View>
			</View>
		);
	}
}

export default BackViewCalc;
