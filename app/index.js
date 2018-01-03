/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import InputText from './components/InputText/InputText.component';
import Operator from './components/Operator/Operator.component';
import React, {Component} from 'react';
import Result from './components/Result/Result.component';
import {
  View
} from 'react-native';

export default class Index extends Component {
    state = {
      inputFirst: '',
      inputSecond: 0,
      result: 0
    }
    onInputFirst = (value) => {
      if (this.isNumeric(value) || value === '') {
        this.setState({inputFirst: value});
      } else {
        this.setState({inputFirst: this.state.inputFirst});
      }
      
    }
    onInputSecond = (value) => {
      if (this.isNumeric(value) || value === '') {
        this.setState({inputSecond: value});
      } else {
        this.setState({inputSecond: this.state.inputSecond});
      }
      
    }

    isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n)
    calResult = (oper) => () => {
      if (this.isNumeric(this.state.inputFirst) && this.isNumeric(this.state.inputSecond)) {
        let result = 0;
        switch (oper) {
        case '+':
          result = (parseFloat(this.state.inputFirst) + parseFloat(this.state.inputSecond));
          this.setState({result: result});
          break;
        case '-':
          result = (parseFloat(this.state.inputFirst) - parseFloat(this.state.inputSecond));
          this.setState({result: result});
          break;
        case '/':
          result = (parseFloat(this.state.inputFirst) / parseFloat(this.state.inputSecond));
          this.setState({result: result});
          break;
        case '*':
          result = (parseFloat(this.state.inputFirst) * parseFloat(this.state.inputSecond));
          this.setState({result: result});
          break;
        default:
          this.setState({inputFirst: 0, inputSecond: 0, result: 0});
        }
      } else {
        this.setState({
          inputFirst: 0,
          inputSecond: 0,
          result: 0
        });
      }
    //   if (this.isNumeric(this.state.inputFirst) && this.isNumeric(this.state.inputSecond)) {
    //     if (oper === '+') {
    //       const result = (parseFloat(this.state.inputFirst) + parseFloat(this.state.inputSecond));
    //       this.setState({result: result});
    //     } else if (oper === '-') {
    //       const result = (parseFloat(this.state.inputFirst) - parseFloat(this.state.inputSecond));
    //       this.setState({result: result});
    //     } else if (oper === '*') {
    //       const result = (parseFloat(this.state.inputFirst) * parseFloat(this.state.inputSecond));
    //       this.setState({result: result});
    //     } else if (oper === '/') {
    //       const result = (parseFloat(this.state.inputFirst) / parseFloat(this.state.inputSecond));
    //       this.setState({result: result});
    //     } else {
    //       console.log('Operator Error');
    //     }
    //   } else {
    //     this.setState({
    //       inputFirst: 0,
    //       inputSecond: 0,
    //       result: 0
    //     });
    //   }
    }
    render () {
      return (
        <View>
          <InputText 
            inputFirst={this.state.inputFirst} 
            inputSecond={this.state.inputSecond}
            onInputFirst={this.onInputFirst}
            onInputSecond={this.onInputSecond}
          />
          <Operator calResult={this.calResult}/>
          <Result result={this.state.result}/>
        </View>
      );
    }
}

