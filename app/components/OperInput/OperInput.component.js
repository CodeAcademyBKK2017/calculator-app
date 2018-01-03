import noop from 'lodash/noop';
import operInputStyles from './OperInput.style';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

class OperInput extends Component {
  render () {
    return (
      <View>
        <View>
          <Text style={operInputStyles.fontInput1}>
            {this.props.inputTitle}
          </Text>
        </View>
        <View>
          <TextInput style={operInputStyles.inputBox1} onChangeText={this.props.onChangeText}/>
        </View>
      </View>
    );
  }
}

OperInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  inputTitle: PropTypes.string.isRequired
};

OperInput.defaultProps = {
  onChangeText: noop,
  inputTitle: ''
};

export default OperInput;

