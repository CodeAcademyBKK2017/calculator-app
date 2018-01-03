import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Result.style';
import {
  Text,
  View
} from 'react-native';

export default class Result extends Component {
  render () {
    return (
      <View
        style={styles.operBox}>
        <Text>
            Result
        </Text>
        <Text>
          {this.props.total}
        </Text>
      </View>
    );
  }
}
Result.propTypes = {
  total: PropTypes.number.isRequired
};