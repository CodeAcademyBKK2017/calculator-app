import React, {Component} from 'react';
import {AppRegistry, TextInput} from 'react-native';

export default class UselessTextInput extends Component {
  constructor (props) {
    super(props);
    this.state = {text: ''};
  }

  render () {
    return (
      <TextInput
        style={{margin: 0, height: 50, width: '50%', fontSize: 40, textAlign: 'center', borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.props.out} value={this.props.in}
      />
    );
  }
}
