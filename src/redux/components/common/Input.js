import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { InputStyle, labelStyle, containerStyle } = styles;

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{ label }</Text>
            <TextInput
                underlineColorAndroid='transparent'
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={InputStyle} 
                value={value}
                onChangeText={onChangeText}
                
            />
        </View>
    );
}

const styles = {
    InputStyle: {
        color: '#000',
        paddingRight: 5,
        fontSize: 20,
        lineHeight: 23,
        flex: 2
    },

    labelStyle: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 1
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };