import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutMe from './screens/AboutMe';
import MyLanguages from './screens/MyLanguages';
import NotFound from './screens/NotFound';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="О Себе" component={AboutMe} />
                <Tab.Screen name="Мои языки программирования" component={MyLanguages} />
                <Tab.Screen name="Не найдено" component={NotFound} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


