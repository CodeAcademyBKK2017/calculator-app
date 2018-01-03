import React, { Component } from 'react';
import styles from './Result.style';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

export default class Result extends Component{
    render() {
        return (
            <View style={styles.viewText}>
                <Text style={styles.TextOut}>Result</Text>
                <Text style={styles.Textprint}>{this.props.output}</Text>
                    
            </View>
        )
    }
}
