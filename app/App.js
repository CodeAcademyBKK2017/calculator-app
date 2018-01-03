/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import TabInput from './components/Button/tab';
import TextInANest from './components/Result/result';
import UselessTextInput from './components/Input/textinputone';
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
    'Shake or press menu button for dev menu'
});

export default class App extends Component<{}> {
  state = {
    one: 0,
    two: 0,
    ru: 0
  }
  // onBoak = () => {
  //   this.setState({
  //     ru: (this.state.one * 1) + (this.state.two * 1)
  //   });
  // }
  // onLob = () => {
  //   this.setState({
  //     ru: this.state.one - this.state.two
  //   });
  // }
  // onBKon = () => {
  //   this.setState({
  //     ru: this.state.one * this.state.two
  //   });
  // }
  // onBHarn = () => {
  //   this.setState({
  //     ru: this.state.one / this.state.two
  //   });
  // }
  onCal = (oper) => () => {
    let result;
    const one = this.state.one * 1;
    const two = this.state.two * 1;
    switch (oper) {
    case '+' :
      result = one + two;
      this.setState({
        ru: result
      });
      break;
    case '-' :
      result = one - two;
      this.setState({
        ru: result
      });
      break;
    case '*' : 
      result = one * two;
      this.setState({
        ru: result
      });
      break;
    case '/' : 
      result = one / two; 
      this.setState({
        ru: result
      });      
      break;
    default :  
      result = 0;
      this.setState({
        ru: result
      });
    }
  }
  onRe = () => {
    this.setState({
      one: 0,
      two: 0,
      ru: 0
    });
  }
  pim1 = (x) => {
    this.setState({one: x});
  }
  pim2 = (x) => {
    this.setState({two: x});
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.textInput}>
          <UselessTextInput in={this.state.one} out={this.pim1} />
          <UselessTextInput in={this.state.two} out={this.pim2} />
        </View>
        <View style={styles.companentS}>
          <TabInput nip='++' kod={this.onCal('+')}/>
          <TabInput nip='--' kod={this.onCal('-')}/>
          <TabInput nip='**' kod={this.onCal('*')}/>
          <TabInput nip='//' kod={this.onCal('/')}/>
        </View>
        <View style={styles.companentR}>
          <TextInANest pon={this.state.ru}/>
        </View>
        <View style={styles.companentNon}>
          <TabInput nip='Restart' kod={this.onRe}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  companentS: {
    flex: 0.1,
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  companentR: {
    flex: 0.1,
    marginTop: 16,
    width: '100%',
    alignItems: 'center'
  },
  companentNon: {
    flex: 0.7,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
