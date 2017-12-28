import React , { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Text,
	TouchableOpacity
} from 'react-native';
import OperInput from './Component/OperInput/OperInput.component';
import OperButton from './Component//OperButton/OperButton.component';
import Result from './Component/Result/Result.component';

export default class App extends Component {

	state = {
		value1 : 0,
		value2 : 0,
		result : 0
	}

	setValue1 = (value) => this.setState({value1 : value})

	setValue2 = (value)  => this.setState({value2 : value})

	// plus minus multiply divide
	valuePlus = () => this.setState({result : parseInt(this.state.value1) + parseInt(this.state.value2)})

	valueMinus = () => this.setState({result : parseInt(this.state.value1) - parseInt(this.state.value2)})

	valueMultiply = () => this.setState({result : parseInt(this.state.value1) * parseInt(this.state.value2)})

	valueDivide = () => this.setState({result : parseInt(this.state.value1) / parseInt(this.state.value2)})

	clearValue = () => this.setState({
		value1 : '0',
		value2 : '0',
		result : 0
	})

	render() {
		return (
			<View style = {styles.container}>

				<View style = {styles.boxInput}>
					<OperInput value = {this.state.value1} setValue = {this.setValue1}/>
					<OperInput value = {this.state.value2} setValue = {this.setValue2}/>
				</View>

				<OperButton
					valuePlus = {this.valuePlus} 
					valueMinus = {this.valueMinus} 
					valueMultiply = {this.valueMultiply} 
					valueDivide = {this.valueDivide}/>

				<View style = {styles.boxResult}>
					<Result result = {this.state.result}/>
					<TouchableOpacity 
						style = {styles.btnClearStyle}
						onPress = {this.clearValue}>
						<Text style = {styles.btnTextClearStyle}>clear</Text>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	boxInput: {
		flex: 3.5,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	boxResult:{
		flex: 5.5,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: 25
	},
	btnClearStyle:{
		width : 120,
		height: 40,
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50
	},
	btnTextClearStyle: {
		color: 'white',
	}
});
