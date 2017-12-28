import React , { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Text 
} from 'react-native';

export default class Result extends Component {
	render() {
		const props = this.props;
		return (
			<View style={styles.container}>
				<Text>Result</Text>
				<Text style={styles.resultStyle}>{this.props.result}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	resultStyle: {
		fontSize: 60,
		marginTop: 20,
		marginBottom: 20
	},
});