import React, { Component } from 'react';
import styles from './OperButton.style';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

export default class OperButton extends Component{
    render() {
        return (
            <View style={styles.viewText}>
                <TouchableOpacity style={styles.Touchable}
                onPress={this.props.onPlus}>
                <Text style={styles.plus1}> + </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Touchable}
                onPress={this.props.onMinus}>
                <Text style={styles.plus2}> - </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Touchable}
                onPress={this.props.OnMultiply}>
                <Text style={styles.plus3}> X </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Touchable}
                onPress={this.props.OnDivide}>
                <Text style={styles.plus4}> / </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
