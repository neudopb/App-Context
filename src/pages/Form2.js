import React, {useState} from 'react';
import { View, Text, Keyboard } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { MyInput } from '../components/MyInput';
import { MyButton } from '../components/MyButton';

export function Form2({ navigation }) {

    const[escolaridade, setEscolaridade] = useState('');
    const[idioma, setIdioma] = useState('');
    const[experiencia, setExperiencia] = useState('');

    function nextPage() {
        if (escolaridade && idioma && experiencia) {
            
            setEscolaridade('');
            setIdioma('');
            setExperiencia('');
            Keyboard.dismiss();

            navigation.navigate('Read');
        }
    }

    return (
        <View style={GlobalStyle.container}>
            <MyInput placeholder="Informe sua Escolaridade" value={escolaridade} onChangeText={setEscolaridade} />
            <MyInput placeholder="Informe seus Idiomas" value={idioma} onChangeText={setIdioma} />
            <MyInput placeholder="Informe sua Experiência" value={experiencia} onChangeText={setExperiencia} />

            <MyButton onPress={ () => nextPage() } placeholder="Salvar" />
        </View>
    );
};