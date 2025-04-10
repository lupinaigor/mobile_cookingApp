import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { mockRecipes } from '../utils/mockData';

type RecipeListScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Recipes'>;
type RecipeListRouteProp = RouteProp<RootStackParamList, 'Recipes'>;

const RecipeListScreen = () => {
    const navigation = useNavigation<RecipeListScreenNavigationProp>();
    const route = useRoute<RecipeListRouteProp>();

    const { selectedIngredients } = route.params;

    const filteredRecipes = mockRecipes.filter(recipe =>
        selectedIngredients.every(ingredient =>
            recipe.ingredients.some(i =>
                i.toLowerCase().includes(ingredient.toLowerCase())
            )
        )
    );

    const handleRecipePress = (recipeId: number) => {
        navigation.navigate('RecipeDetail', { recipeId });
    };

    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.card} onPress={() => handleRecipePress(item.id)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time} хвилин</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Знайдені рецепти</Text>
            <FlatList
                data={filteredRecipes}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    header: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 12,
    },
    list: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 14,
        padding: 12,
        marginBottom: 12,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 12,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    time: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },
});



