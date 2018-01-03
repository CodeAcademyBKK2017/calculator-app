import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class OperButton extends Component {
  render () {
    return (
      <View
        style={styles.operBox}>
        <TouchableOpacity
          style={styles.bt}
          onPress={this.props.onPlus}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.bt}
          onPress={this.props.onMinus}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.bt}
          onPress={this.props.onMultiply}>
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.bt}
          onPress={this.props.onDivide}>
          <Text>/</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  operBox: {
    flexDirection: 'row',
    margin: 10
  },
  bt: {
    padding: 10,
    margin: 3,
    backgroundColor: '#eee',
    borderRadius: 5
  }
});
OperButton.propTypes = {
  onPlus: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
  onMultiply: PropTypes.func.isRequired,
  onDivide: PropTypes.func.isRequired
};