import React, { Component } from 'react';
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
const styles = StyleSheet.create({
    viewText:{
        flexDirection:'row'
    },
    boderInput:{
        marginTop:30,
        marginLeft:5,
        marginRight:5,
        height: 50,
        flex:1,
        backgroundColor:'#dddddd',
        fontSize:40,
        fontWeight: '700',
    },
  });