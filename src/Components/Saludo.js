import React from "react";
import OpenCard from "./openCard";

class Saludo extends React.Component {
  state = {
    show: 1,
    card: false,
  };

  render() {
    const { props } = this;
    if (this.state.card === true) {
      return (
        <OpenCard
          image={props.image}
          nombreO={props.nombreO}
          alt={props.alt}
          skill={props.skill}
          type={props.type}
          action={() => this.setState({ card: false })}
          show={this.state.show}
          card={this.state.card}
        ></OpenCard>
      );
    }

    return (
      <div>
        <img
          onClick={() => this.setState({ card: true })}
          className="poke"
          alt={this.props.alt}
          src={this.props.image}
        ></img>
      </div>
    );
  }
}

export default Saludo;
