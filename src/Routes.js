import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Form2 } from './pages/Form2';
import { Read } from './pages/Read';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ Home } 
                options={{ 
                    title: "DADOS PESSOAIS", headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="Form2" component={ Form2 } 
                options={{ 
                    title: "DADOS PROFISSIONAIS", headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="Read" component={ Read } 
                options={{
                    title: "RESUMO DOS DADOS", headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                }} />
        </Stack.Navigator>
    );
};