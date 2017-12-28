import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './OperButton.style';
import Touchable from 'react-native-platform-touchable';
import {Text} from 'react-native';

export default class OperButton extends Component {
  render () {
    const {name, onClick} = this.props;
    return (
      <Touchable style={styles.touchable} onPress={onClick} >
        <Text>{name}</Text>
      </Touchable>
    );
  }
}
OperButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
};