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
import StylesApp from './App.style';

export default class App extends Component {

	state = {
		value1 : '0',
		value2 : '0',
		result : '0'
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
		result : '0'
	})

	render() {
		return (
			<View style = {StylesApp.container}>

				<View style = {StylesApp.boxInput}>
					<OperInput value = {this.state.value1} setValue = {this.setValue1}/>
					<OperInput value = {this.state.value2} setValue = {this.setValue2}/>
				</View>

				<OperButton
					valuePlus = {this.valuePlus} 
					valueMinus = {this.valueMinus} 
					valueMultiply = {this.valueMultiply} 
					valueDivide = {this.valueDivide}/>

				<View style = {StylesApp.boxResult}>
					<Result result = {this.state.result}/>
					<TouchableOpacity 
						style = {StylesApp.btnClearStyle}
						onPress = {this.clearValue}>
						<Text style = {StylesApp.btnTextClearStyle}>clear</Text>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}