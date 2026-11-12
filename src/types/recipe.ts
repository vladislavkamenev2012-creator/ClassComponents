export interface Ingredient {
    name: string;
    amount: string;
}

export interface Recipe {
    title: string;
    photo: string;
    ingredients: Ingredient[];
    steps: string[];
}