import React, { useContext } from 'react';
import { View, Keyboard } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { MyInput } from '../components/MyInput';
import { MyButton } from '../components/MyButton';
import SimplesContext from '../contexts/SimplesProvider';

export function Form2({ navigation }) {

    const { escolaridade, setEscolaridade, idioma, setIdioma, experiencia, setExperiencia } = useContext(SimplesContext);

    function nextPage() {
        if (escolaridade && idioma && experiencia) {
            Keyboard.dismiss();
            navigation.navigate('Read');
        }
    }

    return (
        <View style={GlobalStyle.container}>
            <MyInput placeholder="Informe sua Escolaridade" value={ escolaridade } onChangeText={ setEscolaridade } />
            <MyInput placeholder="Informe seus Idiomas" value={ idioma } onChangeText={ setIdioma } />
            <MyInput placeholder="Informe sua Experiência" value={ experiencia } onChangeText={ setExperiencia } />

            <MyButton onPress={ () => nextPage() } placeholder="Salvar" />
        </View>
    );
};