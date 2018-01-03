import React, { Component } from 'react';
import styles from './OperInput.style';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

export default class OperInput extends Component{
    render() {
        return (
            <View style={styles.viewText}>
                    <TextInput 
                        onChangeText={this.props.input1Fn} 
                        value={this.props.input1}
                        style={styles.boderInput}
                        editable = {true}
                        maxLength = {40}
                    />
                    <TextInput
                        onChangeText={this.props.input2Fn} 
                        value={this.props.input2}
                        style={styles.boderInput}
                        editable = {true}
                        maxLength = {40}
                    />
            </View>
        )
    }
}
