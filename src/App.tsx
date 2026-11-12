import { Component } from "react";
import "./App.css";
import { borscht } from "./data/borscht";
import RecipeTitle from "./components/RecipeTitle";
import RecipePhoto from "./components/RecipePhoto";
import IngredientsList from "./components/IngredientsList";
import CookingSteps from "./components/CookingSteps";

export default class App extends Component {
  render() {
    const recipe = borscht;
    return (
      <div className="recipe">
        <RecipeTitle title={recipe.title} />
        <RecipePhoto src={recipe.photo} alt={recipe.title} />
        <IngredientsList ingredients={recipe.ingredients} />
        <CookingSteps steps={recipe.steps} />
      </div>
    );
  }
}