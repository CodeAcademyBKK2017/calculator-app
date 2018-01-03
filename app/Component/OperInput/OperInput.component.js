import React , { Component } from 'react';
import { 
	StyleSheet,
	TextInput 
} from 'react-native';
import StylesOperInput from './OperInput.style';

export default class OpenInput extends Component {
	onChanged = (text) => {
		this.props.setValue(text.replace(/[^0-9\.]/g, ''));
	}

	render() {
		console.log(this.props.value)
		return (
			<TextInput
				style={StylesOperInput.textInputStyle}
				onChangeText={this.onChanged}
				value={this.props.value}
				keyboardType='numeric'/>
		);
	}
}
