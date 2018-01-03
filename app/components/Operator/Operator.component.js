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
  TouchableOpacity,  
  View
} from 'react-native';

export default class Operator extends Component {
  render () {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.calResult('+')}
        >
          <Text> + </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.calResult('-')}
        >
          <Text> - </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.props.calResult('*')}
        >
          <Text> * </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.props.calResult('/')}
        >
          <Text> / </Text>
        </TouchableOpacity>
    
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
  button: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10
  }
});
