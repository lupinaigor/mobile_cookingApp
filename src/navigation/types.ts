export type RootStackParamList = {
    Home: undefined;
    Ingredients: undefined;
    Recipes: { selectedIngredients: string[] };
    RecipeDetail: { recipeId: number };
};
