/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
//   Platform,
  StyleSheet,
  Text,  
  View
} from 'react-native';

export default class Result extends Component {
  render () {
    return (
      <View style={styles.container}>
        
        <Text>Result</Text>
        <Text style={styles.text}>{this.props.result}</Text>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 30
  },
  text: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10
  }
});
