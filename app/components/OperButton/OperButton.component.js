import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './OperButton.style';
import Touchable from 'react-native-platform-touchable';
import {
  Text,
  View
} from 'react-native';

export default class OperButton extends Component {
  render () {
    return (
      <Touchable
        style={styles.containerTouch}
        background={Touchable.Ripple('orange')}
        onPress={this.props.onButtonPress}>
        <View style={styles.containerView}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
      </Touchable>
    );
  }
}

OperButton.propTypes = {
  title: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired
};

OperButton.defaultProps = {
  title: '',
  onButtonPress: noop
};
