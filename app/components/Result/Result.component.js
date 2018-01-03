import PropTypes from 'prop-types';
import React, {Component} from 'react';
import resultStyles from './Result.style';
import {
  Text,
  View
} from 'react-native';

class Result extends Component {
  render () {
    return (
      <View>
        <View style={resultStyles.container}>
          <Text style={resultStyles.result}>
          Result
          </Text>
          <Text style={resultStyles.result}>
            {this.props.result}
          </Text>
        </View>
        
      </View>
    );
  }
}

Result.propTypes = {
  result: PropTypes.number.isRequired
};

Result.defaultProps = {
  result: 0
};

export default Result;

