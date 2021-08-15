import React, {useState} from 'react';
import { View, Text, Keyboard } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { MyInput } from '../components/MyInput';
import { MyButton } from '../components/MyButton';

export function Home({ navigation }){

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    function nextPage() {
        if (nome && cpf && email) {
            
            setNome('');
            setCpf('');
            setEmail('');
            Keyboard.dismiss();

            navigation.navigate('Form2');
        }
    }

    return (
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.tema}>CADASTRO COM CONTEXT</Text>
            <Text style={GlobalStyle.titulo}>DADOS PESSOAIS</Text>

            <MyInput placeholder="Nome" value={nome} onChangeText={setNome} />
            <MyInput placeholder="CPF" value={cpf} onChangeText={setCpf} />
            <MyInput placeholder="E-mail" value={email} onChangeText={setEmail} />

            <MyButton onPress={ () => nextPage() } placeholder="Proximo" />
        </View>
    );
};