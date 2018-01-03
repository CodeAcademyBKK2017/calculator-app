import React, { Component } from 'react';
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
const styles = StyleSheet.create({
    viewText:{
        flexDirection:'row',
        marginTop:30
    },
    plus1:{
        backgroundColor: '#f1950a',
        padding:5,
        fontSize:30,
        color:'#ff0',
        fontWeight: '800',
        borderRadius:10,
        
    },
    plus2:{
        backgroundColor: '#f10a6a',
        padding:5,
        fontSize:30,
        color:'#fff',
        fontWeight: '800'
    },
    plus3:{
        backgroundColor: '#05a5d1',
        padding:5,
        fontSize:30,
        color:'#fff',
        fontWeight: '800'
    },
    plus4:{
        backgroundColor: '#65ab09',
        padding:5,
        fontSize:30,
        color:'#fff',
        fontWeight: '800',
        
    },
    Touchable:{
        margin:5,
        borderRadius:5,
        overflow: 'hidden'
    }
});