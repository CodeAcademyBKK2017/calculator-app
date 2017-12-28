import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './OperInput.style';
import {TextInput} from 'react-native';

export default class OperInput extends Component {
  render () {
    const {onInputChange, display} = this.props;
    return (
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={onInputChange} value={display}/>
    );
  }
} 
OperInput.propTypes = {
  onInputChange: PropTypes.func,
  display: PropTypes.number
};