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

  _plusOparateFunc = () => {
    const rs = this.state.Firstnum + this.state.Secondnum; 
    this.setState({result: rs});
  }

  _minusOparateFunc = () => {
    const rs = this.state.Firstnum - this.state.Secondnum; 
    this.setState({result: rs});
  }

  _multiplyOparateFunc = () => {
    const rs = this.state.Firstnum * this.state.Secondnum;
    this.setState({result: rs});
  }

  _divideOparateFunc = () => {
    const rs = this.state.Firstnum / this.state.Secondnum; 
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
          <BTN oprStr='+' oparate={this._plusOparateFunc}/>
          <BTN oprStr='-' oparate={this._minusOparateFunc}/>
          <BTN oprStr='x' oparate={this._multiplyOparateFunc}/>
          <BTN oprStr='÷' oparate={this._divideOparateFunc}/>
        </View>
        <View style={Styles.result}>
          <Result clear={this._clearResultFunc} result={this.state.result}/>
        </View>
      </View>
    );
  }
}
