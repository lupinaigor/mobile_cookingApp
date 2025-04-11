import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { mockRecipes } from '../utils/mockData';

type RecipeDetailRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;

const RecipeDetailScreen = () => {
    const route = useRoute<RecipeDetailRouteProp>();
    const { recipeId } = route.params;

    const recipe = mockRecipes.find((r) => r.id === recipeId);

    if (!recipe) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Рецепт не знайдено</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <Text style={styles.title}>{recipe.title}</Text>
            <Text style={styles.time}>⏱ {recipe.time} хвилин</Text>

            <Text style={styles.sectionTitle}>Інгредієнти</Text>
            {recipe.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.ingredient}>• {ingredient}</Text>
            ))}

            <Text style={styles.sectionTitle}>Опис</Text>
            <Text style={styles.description}>
                Треба підключати API
            </Text>

            <TouchableOpacity style={styles.favoriteButton}>
                <Text style={styles.favoriteText}>❤️ В обране</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    image: {
        width: '100%',
        height: 220,
        borderRadius: 12,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 6,
    },
    time: {
        fontSize: 14,
        color: '#777',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
    },
    ingredient: {
        fontSize: 16,
        color: '#555',
        marginBottom: 4,
    },
    description: {
        fontSize: 15,
        lineHeight: 22,
        color: '#444',
    },
    favoriteButton: {
        backgroundColor: '#FF7043',
        padding: 14,
        borderRadius: 14,
        alignItems: 'center',
        marginTop: 30,
    },
    favoriteText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    errorText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 100,
        color: '#f00',
    },
});

