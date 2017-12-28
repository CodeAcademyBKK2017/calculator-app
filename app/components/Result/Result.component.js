import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Result.style';
import {Text, View} from 'react-native';

export default class Result extends Component {
  render () {
    return (
      <View style={styles.display}>
        <Text style={styles.text}>{this.props.result}</Text>
      </View>
    );
  }
}
Result.propTypes = {
  result: PropTypes.number
};