import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './OperButton.style';
import {
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
OperButton.propTypes = {
  onPlus: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
  onMultiply: PropTypes.func.isRequired,
  onDivide: PropTypes.func.isRequired
};