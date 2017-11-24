import React, { Component } from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    return(
            <View style={styles.containerStyle}>
                {props.children}
            </View>
        );
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#add',
        position: 'relative'
    }
};

export {CardSection};