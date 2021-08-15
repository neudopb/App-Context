import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function MyData(props) {
    return (
        <View style={ styles.viewTxt }>
            <Text style={ styles.txtLabel }>{ props.label }:</Text>
            <Text style={ styles.txtValue }>{ props.value }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewTxt: {
        width: '90%',
        padding: 3,
        margin: 15,
        borderWidth: 1,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: '#B2B2B2',
    },
    txtLabel: {
        fontSize: 20,
        marginRight: 10,
        marginLeft: 3,
        fontWeight: 'bold',
    },
    txtValue: {
        fontSize: 16,
        marginRight: 3,
        flex: 1,
        flexWrap: 'wrap'
    },
});