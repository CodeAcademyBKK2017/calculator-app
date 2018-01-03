/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
//   Platform,
  StyleSheet,
  //   Text,
  TextInput,
  View
} from 'react-native';

export default class InputText extends Component {
  render () {
    return (
      <View style={styles.container}>
        
        <TextInput
          style={styles.InputText}
          numberOfLines = {1}
          editable = {true}
          onChangeText={this.props.onInputFirst}
          value={this.props.inputFirst}
        />
        
        <TextInput
          style={styles.InputText}
          numberOfLines = {1}
          editable = {true}
          onChangeText={this.props.onInputSecond}
          value={this.props.inputSecond}
        />
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
    marginTop: 30
  },
  InputText: {
    borderWidth: 1,
    borderColor: 'grey',
    minWidth: '50%',
    padding: 5
  }
});
