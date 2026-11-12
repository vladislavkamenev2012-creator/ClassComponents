import { Component } from "react";

interface Props {
  title: string;
}

export default class RecipeTitle extends Component<Props> {
  render() {
    return <h1 className="recipe-title">{this.props.title}</h1>;
  }
}