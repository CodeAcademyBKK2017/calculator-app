/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import OperButton from './components/OperButton/OperButton.component';
import OperInput from './components/OperInput/OperInput.component';
import React, {Component} from 'react';
import Result from './components/Result/Result.component';
import styles from './index.style';
import {
  KeyboardAvoidingView,
  Platform,
  View
} from 'react-native';

export default class App extends Component {
  WrapperView = Platform.select({
    ios: KeyboardAvoidingView,
    android: View
  });

  Operator = {
    Add: '+',
    Subtract: '-',
    Multiple: '*',
    Divide: '/'
  };

  TextInputId = {
    Operand1: 'Operand 1',
    Operand2: 'Operand 2'
  };

  // ----------
  
  state = {
    operInputValue1: '0',
    operInputValue2: '0',
    resultTitle: '0'
  };

  // ----------
  
  receiveNumberInput = (id, text) => {
    const result = text.replace(/[^0-9]/g, '');
    switch (id) {
    case this.TextInputId.Operand1:
      this.setState({
        operInputValue1: result
      });
      break;

    case this.TextInputId.Operand2:
      this.setState({
        operInputValue2: result
      });
      break;
    
    default:
      break;
    }
  }

  calculate = (operator) => () => {
    let result = null;
    const value1 = parseFloat(this.state.operInputValue1);
    const value2 = parseFloat(this.state.operInputValue2);

    switch (operator) {
    case this.Operator.Add:
      result = value1 + value2;
      break;

    case this.Operator.Subtract:
      result = value1 - value2;
      break;

    case this.Operator.Multiple:
      result = value1 * value2;
      break;

    case this.Operator.Divide:
      result = value1 / value2;
      break;
    
    default:
      break;
    }

    if (result) {
      this.setState({
        resultTitle: result.toString()
      });
    }
  }

  // ----------
  
  onOperInput1ChangeText = (text) => {
    this.receiveNumberInput(this.TextInputId.Operand1, text);
  }

  onOperInput2ChangeText = (text) => {
    this.receiveNumberInput(this.TextInputId.Operand2, text);
  }

  // ----------

  render () {
    return (
      <this.WrapperView
        style={styles.container}
        behavior='padding'>
        <View style={styles.operInputContainer}>
          <OperInput title={this.TextInputId.Operand1} value={this.state.operInputValue1} onChangeText={this.onOperInput1ChangeText}/>
          <OperInput title={this.TextInputId.Operand2} value={this.state.operInputValue2} onChangeText={this.onOperInput2ChangeText}/>
        </View>
        <View style={styles.operButtonContainer}>
          <OperButton title={this.Operator.Add} onButtonPress={this.calculate(this.Operator.Add)}/>
          <OperButton title={this.Operator.Subtract} onButtonPress={this.calculate(this.Operator.Subtract)}/>
          <OperButton title={this.Operator.Multiple} onButtonPress={this.calculate(this.Operator.Multiple)}/>
          <OperButton title={this.Operator.Divide} onButtonPress={this.calculate(this.Operator.Divide)}/>
        </View>
        <View style={styles.resultContainer}>
          <Result title={this.state.resultTitle}/>
        </View>
      </this.WrapperView>
    );
  }
}
