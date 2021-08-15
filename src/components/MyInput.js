import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export function MyInput(props) {
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            placeholderTextColor={'#B2B2B2'}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 60,
        borderRadius: 10,
        margin: 10,
        paddingLeft: 20,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#00ffff',
        backgroundColor: '#FFFFFF',
    },
});