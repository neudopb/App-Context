import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { MyData } from '../components/MyData';

export function Read() {
    return (
        <View style={GlobalStyle.container}>           
            <MyData label="NOME" value="" />
            <MyData label="CPF" value="" />
            <MyData label="EMAIL" value="" />
            <MyData label="ESCOLARIDADE" value="" />
            <MyData label="IDIOMAS" value="" />
            <MyData label="EXPERIÊNCIA" value="" />
        </View>
    );
};