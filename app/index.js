import OperButton from './components/OperButton/OperButton.component';
import OperInput from './components/OperInput/OperInput.component';
import React, {Component} from 'react';
import Result from './components/Result/Result.component';
import styles from './index.style';
import {View} from 'react-native';

export default class App extends Component {
  initialstate = {
    value1: 0,
    value2: 0,
    result: 0
  }
  state = this.initialstate
  changeInput1 = (text) => {
    this.setState({value1: text.replace(/[^0-9\.]/g, '')});
  }
  changeInput2 = (text) => {
    this.setState({value2: text.replace(/[^0-9\.]/g, '')});
  }
  reset=() => {
    this.setState(this.initialstate);
  }
  add = () => {
    let sum = 0;
    sum = parseInt(this.state.value1) + parseInt(this.state.value2);
    this.setState({result: sum});
  }
  subtract = () => {
    let sum = 0;
    sum = parseInt(this.state.value1) - parseInt(this.state.value2);
    this.setState({result: sum});
  }
  operation =(oper) => () => {
    let result;
    const value1 = parseFloat(this.state.value1);
    const value2 = parseFloat(this.state.value2);
    switch (oper) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 + value2;
      break;
    case '*':
      result = value1 + value2;
      break;
    case '÷':
      result = value1 + value2;
      break;
    default:
      break;
    }
    this.setState({result: result});
  }
  // Please use
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <OperInput onInputChange={this.changeInput1} display={this.state.value1} />
          <OperInput onInputChange={this.changeInput2} display={this.state.value2}/>
        </View>
        <View style={styles.resultBox} >   
          {this.state.result > 0 ?  <Result result={this.state.result} /> : null}
        </View>
        <View style={styles.operatorBox} >
          <OperButton name={'+'} onClick={this.operation('+')}/>
          <OperButton name={'-'} onClick={this.operation('-')}/>
          <OperButton name={'*'} />
          <OperButton name={'÷'} />
        </View>
        <View style={styles.reset}>
          <OperButton name={'Reset'} onClick={this.reset}/>
        </View>
      </View>
    );
  }
}

