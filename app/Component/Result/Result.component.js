import React , { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Text 
} from 'react-native';
import StylesResult from './Result.style';

export default class Result extends Component {
	render() {
		const props = this.props;
		return (
			<View style={StylesResult.container}>
				<Text>Result</Text>
				<Text style={StylesResult.resultStyle}>{this.props.result}</Text>
			</View>
		);
	}
}