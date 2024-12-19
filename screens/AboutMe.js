// screens/AboutMe.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMe = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>О Себе</Text>
            <Text>Информация обо мне.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default AboutMe;
