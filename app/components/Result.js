import React, { Component } from 'react';
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
const styles = StyleSheet.create({
    viewText:{
        flexDirection:'column',
        alignItems:'center',
        marginTop:30
    },
    boderInput:{
        marginTop:30,
        marginLeft:5,
        marginRight:5,
        borderWidth: 1,
        height: 40,
    },
    TextOut:{
        fontWeight: '800',
        fontSize:30,
        color:'#3c3939'
    },
    Textprint:{
        fontWeight: '800',
        fontSize:40,
        color:'#5a5555'
    }
});