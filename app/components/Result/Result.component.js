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
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

Result.propTypes = {
  title: PropTypes.string.isRequired
};

Result.defaultProps = {
  title: ''
};
