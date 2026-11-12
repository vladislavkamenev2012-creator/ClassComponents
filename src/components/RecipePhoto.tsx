import { Component } from "react";

interface Props {
  src: string;
  alt: string;
}

export default class RecipePhoto extends Component<Props> {
  render() {
    const { src, alt } = this.props;
    return <img className="recipe-photo" src={src} alt={alt} />;
  }
}