/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import noop from 'lodash/noop';
import ProptTypes from 'prop-types';
import React, {Component} from 'react';
import Styles from './Result.style';
import {Text, TouchableOpacity, View} from 'react-native';

export default class RESULT extends Component {
  render () {
    const {result, clear} = this.props;
    return (
      <View style={Styles.resultView}>
        <Text style={Styles.text}>RESULT:</Text>
        <Text style={Styles.text}>{result}</Text>
        <TouchableOpacity onPress={clear}>
          <Text style={Styles.textClear}>Clear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
RESULT.propTypes = {
  result: ProptTypes.number.isRequired,
  clear: ProptTypes.func.isRequired
};
    
RESULT.defaultProps = {
  result: 0,
  clear: noop
};
    