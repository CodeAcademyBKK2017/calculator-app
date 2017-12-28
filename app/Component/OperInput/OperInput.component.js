import React , { Component } from 'react';
import { 
	StyleSheet,
	TextInput 
} from 'react-native';

export default class OpenInput extends Component {
	onChanged = (text) => {
		this.props.setValue(text.replace(/[^0-9\.]/g, ''));
	}

	render() {
		console.log(this.props.value)
		return (
			<TextInput
				style={styles.textInputStyle}
				onChangeText={this.onChanged}
				value={this.props.value}
				keyboardType='numeric'/>
		);
	}
}

const styles = StyleSheet.create({
	textInputStyle: {
		fontSize: 35,
		height: 100,
		width: 140,
		margin: 20,
		borderRadius: 10,
		borderColor: 'black',
		borderWidth: 1,
		textAlign: 'center',
		padding: 5
	}
});