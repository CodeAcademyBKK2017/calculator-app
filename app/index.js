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

  state = {
    operInputValue1: '0',
    operInputValue2: '0',
    resultTitle: '0'
  };

  onOperInput1ChangeText = (text) => {
    this.setState({
      operInputValue1: text.replace(/[^0-9]/g, '')
    });
  }

  onOperInput2ChangeText = (text) => {
    this.setState({
      operInputValue2: text.replace(/[^0-9]/g, '')
    });
  }

  onAddButtonPress = () => {
    const result = parseFloat(this.state.operInputValue1) + parseFloat(this.state.operInputValue2);
    this.setState({
      resultTitle: result.toString()
    });
  }

  onSubtractButtonPress = () => {
    const result = parseFloat(this.state.operInputValue1) - parseFloat(this.state.operInputValue2);
    this.setState({
      resultTitle: result.toString()
    });
  }

  onMultipleButtonPress = () => {
    const result = parseFloat(this.state.operInputValue1) * parseFloat(this.state.operInputValue2);
    this.setState({
      resultTitle: result.toString()
    });
  }

  onDivideButtonPress = () => {
    const result = parseFloat(this.state.operInputValue1) / parseFloat(this.state.operInputValue2);
    this.setState({
      resultTitle: result.toString()
    });
  }

  render () {
    return (
      <this.WrapperView
        style={styles.container}
        behavior='padding'>
        <View style={styles.operInputContainer}>
          <OperInput title='Operand 1' value={this.state.operInputValue1} onChangeText={this.onOperInput1ChangeText}/>
          <OperInput title='Operand 2' value={this.state.operInputValue2} onChangeText={this.onOperInput2ChangeText}/>
        </View>
        <View style={styles.operButtonContainer}>
          <OperButton title='+' onButtonPress={this.onAddButtonPress}/>
          <OperButton title='-' onButtonPress={this.onSubtractButtonPress}/>
          <OperButton title='X' onButtonPress={this.onMultipleButtonPress}/>
          <OperButton title='/' onButtonPress={this.onDivideButtonPress}/>
        </View>
        <View style={styles.resultContainer}>
          <Result title={this.state.resultTitle}/>
        </View>
      </this.WrapperView>
    );
  }
}
