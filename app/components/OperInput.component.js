import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './OperInput.style.js';
import {
  TextInput,
  View
} from 'react-native';

export default class OperInput extends Component {
  render () {
    return (
      <View
        style={styles.operBox}>
        <TextInput
          style={styles.operInput}
          onChangeText={this.props.Firstfn}
          underlineColorAndroid='transparent'
          value={this.props.FirstText}
        />
        <TextInput
          style={styles.operInput}
          onChangeText={this.props.Lastfn}
          value={this.props.LastText}
        />
      </View>
    );
  }
}
OperInput.propTypes = {
  Firstfn: PropTypes.func.isRequired,
  Lastfn: PropTypes.func.isRequired,
  FirstText: PropTypes.string.isRequired,
  LastText: PropTypes.string.isRequired
};