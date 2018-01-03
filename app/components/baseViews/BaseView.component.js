/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import BTN from '../oparatorButtons/OparatorBTN.component';
import Input from '../operatorInputs/OperatorInputs.component';
import React, {Component} from 'react';
import Result from '../results/Result.component';
import Styles from './BaseView.style';
import {View} from 'react-native';

export default class BaseApp extends Component {
  state = {
    Firstnum: '',
    Secondnum: '',
    result: 0
  }

  _setFirstnum = (num) => {
    const realNum = parseFloat(num);
    !(isNaN(realNum)) && this.setState({Firstnum: realNum});
  }
  _setSecondnum = (num) => {
    const realNum = parseFloat(num);
    !(isNaN(realNum)) && this.setState({Secondnum: realNum});
  }

  _clearResultFunc = () => {
    this.setState({
      Firstnum: '',
      Secondnum: '',
      result: 0
    });
  }

  _oparetionCalc = (opr) => () => {
    let rs;
    const val1 = this.state.Firstnum; 
    const val2 = this.state.Secondnum; 
    switch (opr) {
    case '+':
      rs = val1 + val2;
      break;
    case '-':
      rs = val1 - val2;  
      break;
    case 'x':
      rs = val1 * val2; 
      break;
    case '÷':
      rs = val1 / val2; 
      break;
    default:
      rs = val1 + val2;
      break;
    }
    this.setState({result: rs});
  }

  render () {
    return (
      <View style={Styles.container}>
        <View style={Styles.inputColoum}>
          <Input val={this.state.Firstnum.toString()}  changeState={this._setFirstnum}/>
          <Input val={this.state.Secondnum.toString()} changeState={this._setSecondnum}/>
        </View>
        <View style={Styles.btnColoum}>
          <BTN oprStr='+' oparate={this._oparetionCalc}/>
          <BTN oprStr='-' oparate={this._oparetionCalc}/>
          <BTN oprStr='x' oparate={this._oparetionCalc}/>
          <BTN oprStr='÷' oparate={this._oparetionCalc}/>
        </View>
        <View style={Styles.result}>
          <Result clear={this._clearResultFunc} result={this.state.result}/>
        </View>
      </View>
    );
  }
}
