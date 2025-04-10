import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types'; // ✅ типы

type IngredientsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Ingredients'>;

const IngredientsScreen = () => {
    const navigation = useNavigation<IngredientsScreenNavigationProp>();

    const [inputText, setInputText] = useState('');

    const handleFindRecipes = () => {
        const selectedIngredients = inputText
            .split(',')
            .map(item => item.trim())
            .filter(item => item.length > 0);

        navigation.navigate('Recipes', { selectedIngredients }); // ✅ передаём параметры
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Введите ингредиенты</Text>
            <TextInput
                style={styles.input}
                placeholder="например: курица, рис, чеснок"
                value={inputText}
                onChangeText={setInputText}
            />
            <TouchableOpacity style={styles.button} onPress={handleFindRecipes}>
                <Text style={styles.buttonText}>Найти рецепты</Text>
            </TouchableOpacity>
        </View>
    );
};

export default IngredientsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#FF7043',
        padding: 14,
        borderRadius: 14,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
