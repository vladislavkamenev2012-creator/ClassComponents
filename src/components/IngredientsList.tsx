import { Component } from "react";
import type { Ingredient } from "../types/recipe";

interface Props {
  ingredients: Ingredient[];
}

export default class IngredientsList extends Component<Props> {
  render() {
    return (
      <section>
        <h2>Інгредієнти</h2>
        <ul>
          {this.props.ingredients.map((item) => (
            <li key={item.name}>
              {item.name} — <strong>{item.amount}</strong>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}