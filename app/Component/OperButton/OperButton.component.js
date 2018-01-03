import React , { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Text,
	TouchableOpacity 
} from 'react-native';
import StylesOperButton from './OperButton.style';

export default class OperButton extends Component {
	render() {
		const props = this.props;
		return (
			<View style={StylesOperButton.container}>
				<TouchableOpacity 
					style={StylesOperButton.btnStyle}
					onPress={props.valuePlus}>
					<Text style={StylesOperButton.btnFuncStyle}>+</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={StylesOperButton.btnStyle} 
					onPress={props.valueMinus}>
					<Text style={StylesOperButton.btnFuncStyle}>-</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={StylesOperButton.btnStyle}
					onPress={props.valueMultiply}>
					<Text style={StylesOperButton.btnFuncStyle}>x</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={StylesOperButton.btnStyle}
					onPress={props.valueDivide}>
					<Text style={StylesOperButton.btnFuncStyle}>÷</Text>
				</TouchableOpacity>
			</View>
		);
	}
}