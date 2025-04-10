/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import IngredientsScreen from './src/screens/IngredientsScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import RecipeListScreen from './src/screens/RecipeListScreen.tsx';
import { enableScreens } from 'react-native-screens';
enableScreens(); // оптимизация производительности и устранение ошибки

export type RootStackParamList = {
    Home: undefined;
    Ingredients: undefined;
    Recipes: { ingredients: string[] };
    RecipeDetail: { recipe: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Кулинарный помощник' }} />
                <Stack.Screen name="Ingredients" component={IngredientsScreen} options={{ title: 'Ингредиенты' }} />
                <Stack.Screen name="Recipes" component={RecipeListScreen} options={{ title: 'Рецепты' }} />
                <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: 'Детали рецепта' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
