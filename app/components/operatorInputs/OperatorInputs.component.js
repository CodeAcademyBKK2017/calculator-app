/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import noop from 'lodash/noop';
import ProptTypes from 'prop-types';
import React, {Component} from 'react';
import Styles from './OparatorInput.style';
import {TextInput} from 'react-native';

export default class OPINPUT extends Component {
  render () {
    const {changeState, val} = this.props;
    return (
      <TextInput 
        value={val} 
        style={Styles.input} 
        onChangeText={changeState} 
        keyboardType='numeric'/>
    );
  }
}

OPINPUT.propTypes = {
  changeState: ProptTypes.func.isRequired,
  val: ProptTypes.string.isRequired
};
  
OPINPUT.defaultProps = {
  changeState: noop,
  val: ''
};
