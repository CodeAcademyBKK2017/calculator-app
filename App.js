/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import OperButton from './app/components/OperButton.component';
import OperInput from './app/components/OperInput.component';
import React, {Component} from 'react';
import Result from './app/components/Result.component';
import styles from './App.style';
import {
  View
} from 'react-native';

export default class App extends Component {
  state = {
    FirstText: '',
    LastText: '',
    total: 0
  }
  firstText = (t) => {
    this.setState({
      FirstText: t
    });
  }
  lastText = (t) => {
    this.setState({
      LastText: t
    });
  }
  onPlus = () => {
    const total = parseFloat(this.state.FirstText) + parseFloat(this.state.LastText);
    this.setState({
      total: total
    });
  }
  onMinus = () => {
    const total = parseFloat(this.state.FirstText) - parseFloat(this.state.LastText);
    this.setState({
      total: total
    });
  }
  onMultiply = () => {
    const total = parseFloat(this.state.FirstText) * parseFloat(this.state.LastText);
    this.setState({
      total: total
    });
  }
  onDivide = () => {
    const total = parseFloat(this.state.FirstText) / parseFloat(this.state.LastText);
    this.setState({
      total: total
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <OperInput FirstText={this.state.FirstText} LastText={this.state.LastText} 
          Firstfn={this.firstText} Lastfn={this.lastText} />
        <OperButton 
          onPlus={this.onPlus}
          onMinus={this.onMinus}
          onMultiply={this.onMultiply}
          onDivide={this.onDivide}/>
        <Result total={this.state.total}/>
      </View>
    );
  }
}

