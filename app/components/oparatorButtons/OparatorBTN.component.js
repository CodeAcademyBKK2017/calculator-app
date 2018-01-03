/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import noop from 'lodash/noop';
import ProptTypes from 'prop-types';
import React, {Component} from 'react';
import Styles from './OparatorBTN.style';
import {Text, TouchableOpacity} from 'react-native';

export default class OPBTN extends Component {
  render () {
    const {oprStr, oparate} = this.props;
    return (
      <TouchableOpacity style={Styles.btn} onPress={oparate(oprStr)}>
        <Text>{oprStr}</Text>
      </TouchableOpacity>
    );
  }
}

OPBTN.propTypes = {
  oprStr: ProptTypes.string.isRequired,
  oparate: ProptTypes.func.isRequired
};
  
OPBTN.defaultProps = {
  oprStr: '',
  oparate: noop
};
  