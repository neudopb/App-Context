import React, { useContext } from 'react';
import { View, Keyboard } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { MyInput } from '../components/MyInput';
import { MyButton } from '../components/MyButton';
import SimplesContext from '../contexts/SimplesProvider';

export function Home({ navigation }){

    const { nome, setNome, cpf, setCpf, email, setEmail } = useContext(SimplesContext);

    function nextPage() {
        if (nome && cpf && email) {
            Keyboard.dismiss();
            navigation.navigate('Form2');
        }
    }

    return (
        <View style={ GlobalStyle.container }>
            <MyInput placeholder="Informe seu Nome" value={ nome } onChangeText={ setNome } />
            <MyInput placeholder="Informe seu CPF" value={ cpf } onChangeText={ setCpf } keyboardType="numeric" />
            <MyInput placeholder="Informe seu E-mail" value={ email } onChangeText={ setEmail } />

            <MyButton onPress={ () => nextPage() } placeholder="Proximo" />
        </View>
    );
};