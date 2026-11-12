import { Component } from "react";

interface Props {
  steps: string[];
}

export default class CookingSteps extends Component<Props> {
  render() {
    return (
      <section>
        <h2>Приготування</h2>
        <ol>
          {this.props.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    );
  }
}