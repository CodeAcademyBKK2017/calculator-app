import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  StyleSheet,
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
const styles = StyleSheet.create({
  operBox: {
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center'
  }
});
Result.propTypes = {
  total: PropTypes.number.isRequired
};