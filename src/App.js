// import { render } from '@testing-library/react';
import React from "react";
import "./App.css";
import data from "./data.json";
import Saludo from "./Components/Saludo";
import AddButton from "./Components/AddButton";
import data2 from "./data2.json";
import data3 from "./data3.json";

class App extends React.Component {
  state = {
    data: data,
    data2: data2,
    data3: data3,
  };

  addpoke = (valor) => {
    const hola = valor.gen;
    if (hola === "1") {
      this.setState({
        data: [...this.state.data, valor],
      });
    } else if (hola === "2") {
      this.setState({
        data2: [...this.state.data2, valor],
      });
    } else if (hola === "3") {
      this.setState({
        data3: [...this.state.data3, valor],
      });
    }
  };
  render() {
    return (
      <div>
        <Poke data={this.state.data} />
        <Poke data={this.state.data2} />
        <Poke data={this.state.data3} />
        <AddButton addpoke={this.addpoke} />
      </div>
    );
  }
}

class Poke extends React.Component {
  state = {
    data: this.props.data,
    act: 0,
  };

  render() {
    const ruta = this.props.data[this.state.act];
    return (
      <div>
        <div className="main">
          <div className="contenedor">
            <button
              className="boton"
              onClick={() => {
                if (this.state.act < 1) {
                  this.setState({ act: this.props.data.length - 1 });
                } else {
                  this.setState({ act: this.state.act - 1 });
                }
              }}
            ></button>

            <button
              className="boton2"
              onClick={() => {
                if (this.state.act > this.props.data.length - 2) {
                  this.setState({ act: 0 });
                } else {
                  this.setState({ act: this.state.act + 1 });
                }
              }}
            ></button>

            <Saludo
              image={ruta.image}
              nombreO={ruta.NombreO}
              key={ruta.alt}
              alt={ruta.alt}
              skill={ruta.skill}
              type={ruta.type}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
