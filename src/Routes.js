import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Form2 } from './pages/Form2';
import { Read } from './pages/Read';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ Home } options={{ headerShown: false }} />
            <Stack.Screen name="Form2" component={ Form2 } options={{ headerShown: false }} />
            <Stack.Screen name="Read" component={ Read } options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};