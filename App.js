/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import OperInput from './app/components/OperInput';
import OperButton from './app/components/OperButton';
import Result from './app/components/Result';
import styles from './App.style';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    input1:'',
    input2:'',
    output:0
  }
  input1 =(t)=>{
    this.setState({input1:t})
  }
  input2 =(t)=>{
    this.setState({input2:t})
  }
  onPlus = ()=>{
    const total = parseFloat(this.state.input1) + parseFloat(this.state.input2);
    this.setState({output:total})
  }
  onMinus =()=>{
    const total = parseFloat(this.state.input1) - parseFloat(this.state.input2);
    this.setState({output:total})
  }
  OnMultiply =()=>{
    const total = parseFloat(this.state.input1) * parseFloat(this.state.input2);
    this.setState({output:total})
  }
  OnDivide =()=>{
    const total = parseFloat(this.state.input1) / parseFloat(this.state.input2);
    this.setState({output:total})
  }
  render() {
    return (
      <View style={styles.container}>
        <OperInput 
          input1={this.state.input1}
          input2={this.state.input2}
          input1Fn={this.input1}
          input2Fn={this.input2}
        />
        <OperButton onPlus={this.onPlus} onMinus={this.onMinus} OnMultiply={this.OnMultiply} OnDivide={this.OnDivide}/>
        <Result output={this.state.output}/>
      </View>
    );
  }
}


