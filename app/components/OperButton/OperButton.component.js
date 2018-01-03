
import noop from 'lodash/noop';
import operButtonStyles from './OperButton.style';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class OperButton extends Component {

  render () {
    return (
      <View style={operButtonStyles.container}>
        <TouchableOpacity onPress={this.props.operatorButton}>
          <Text style={operButtonStyles.operatorBox}>
            {this.props.operatorTitle}
          </Text>
        </TouchableOpacity>
      </View>
        
    );
  }
}

OperButton.propTypes = {
  operatorButton: PropTypes.func.isRequired,
  operatorTitle: PropTypes.string.isRequired
};

OperButton.defaultProps = {
  operatorButton: noop,
  operatorTitle: ''
};

export default OperButton;

