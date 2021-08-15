import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function MyButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.btn}>
            <Text style={styles.txt}>{props.placeholder}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: '75%',
        margin: 20,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#33ffba',
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});