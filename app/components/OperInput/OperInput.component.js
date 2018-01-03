import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './OperInput.style';
import {
  Text,
  TextInput,
  View
} from 'react-native';

export default class OperInput extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.title}
        </Text>
        <TextInput
          style={styles.operInput}
          underlineColorAndroid='transparent'
          value={this.props.value}
          onChangeText={this.props.onChangeText}/>
      </View>
    );
  }
}

OperInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
};

OperInput.defaultProps = {
  title: '',
  value: '',
  onChangeText: noop
};
