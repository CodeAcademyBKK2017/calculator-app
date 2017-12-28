import React , { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Text,
	TouchableOpacity 
} from 'react-native';

export default class OperButton extends Component {


	render() {
		const props = this.props;
		return (
			<View style={styles.container}>
				<TouchableOpacity 
					style={styles.btnStyle}
					onPress={props.valuePlus}>
					<Text style={styles.btnFuncStyle}>+</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.btnStyle} 
					onPress={props.valueMinus}>
					<Text style={styles.btnFuncStyle}>-</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.btnStyle}
					onPress={props.valueMultiply}>
					<Text style={styles.btnFuncStyle}>x</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.btnStyle}
					onPress={props.valueDivide}>
					<Text style={styles.btnFuncStyle}>÷</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnStyle: {
		width: 30,
		height: 30,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: 'black',
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnFuncStyle: {
		color: 'white'
	}
});