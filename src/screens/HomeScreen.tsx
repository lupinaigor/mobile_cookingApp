import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleSelectIngredients = () => {
        navigation.navigate('Ingredients');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Вітаю! 👋</Text>
            <Text style={styles.subtitle}>Що бажаєте приготувати сьогодні?</Text>

            <TouchableOpacity style={styles.button} onPress={handleSelectIngredients}>
                <Text style={styles.buttonText}>Вибрати інгредієнти</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Популярні рецепти</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.cardTitle}>Паста з соусом</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://www.themealdb.com/images/media/meals/1529444830.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.cardTitle}>Салат Цезарь</Text>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 4,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF7043',
        padding: 14,
        borderRadius: 14,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
    },
    card: {
        width: 150,
        marginRight: 16,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 12,
    },
    cardTitle: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '500',
    },
});

