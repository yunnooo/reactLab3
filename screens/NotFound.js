// screens/NotFound.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotFound = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Не найдено</Text>
            <Text>Извините, страница не найдена!</Text>
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

export default NotFound;
