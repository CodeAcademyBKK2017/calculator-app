import indexStyle from './index.style';
import OperButton from './components/OperButton/OperButton.component';
import OperInput from './components/OperInput/OperInput.component';
import React, {Component} from 'react';
import Result from './components/Result/Result.component';
import {
  View
} from 'react-native';

export default class App extends Component {
  state = {
    input1: '',
    input2: '',
    result: 0
  }

  onPlus = () => {
    this.setState({result: parseInt(this.state.input1) + parseInt(this.state.input2)});
  }
  onMinus = () => {
    this.setState({result: parseInt(this.state.input1) - parseInt(this.state.input2)});
  }
  onMultiply = () => {
    this.setState({result: parseInt(this.state.input1) * parseInt(this.state.input2)});
  }
  onDivide = () => {
    this.setState({result: parseInt(this.state.input1) / parseInt(this.state.input2)});
  }
  onText1Change = (input1) => {
    this.setState({input1});
  }
  onText2Change = (input2) => {
    this.setState({input2});
  }

  render () {
    return (
      <View>
        <View style={indexStyle.containerInput}>
          <OperInput inputTitle='Input 1' onChangeText={this.onText1Change}/>
          <OperInput inputTitle='Input 2' onChangeText={this.onText2Change}/>
        </View>
        <View style={indexStyle.containerOperator}>
          <OperButton operatorButton={this.onPlus} operatorTitle='+'/>
          <OperButton operatorButton={this.onMinus} operatorTitle='-'/>
          <OperButton operatorButton={this.onMultiply} operatorTitle='*'/>
          <OperButton operatorButton={this.onDivide} operatorTitle='/'/>
        </View>
        <Result result={this.state.result}/>
      </View>
    );
  }
}
