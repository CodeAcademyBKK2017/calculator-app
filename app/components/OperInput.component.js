import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  StyleSheet,
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
const styles = StyleSheet.create({
  operBox: {
    flexDirection: 'row',
    margin: 10
  },
  operInput: {
    height: 40,
    width: '40%',
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1
  }
});
OperInput.propTypes = {
  Firstfn: PropTypes.func.isRequired,
  Lastfn: PropTypes.func.isRequired,
  FirstText: PropTypes.string.isRequired,
  LastText: PropTypes.string.isRequired
};