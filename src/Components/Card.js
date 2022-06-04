import React from "react";
import "./card.css";

function Cards(props) {
  return (
    <div className="bloque">
      <img className="pokeCard" src={props.image} alt={props.alt}></img>
      <div className="main-text">
        <img
          alt=""
          className="cerrar"
          onClick={props.action}
          src="https://cdn.iconscout.com/icon/free/png-256/close-1912235-1617704.png"
        ></img>{" "}
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <br></br>
        <div className="characteristics">
          <h5>Tipo {props.type}</h5>
          <h5>Nombre original: {props.nombreO}</h5>
          <h5>Habilidad: {props.skill}</h5>
        </div>
      </div>
      <div className="texto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        pariatur consectetur qui hic dignissimos magni mollitia id, voluptas
        nulla quo nihil facere architecto eos esse quod! Molestias provident
        optio fuga!
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur et
        laborum inventore, eos non reiciendis, earum saepe omnis recusandae sit
        error corrupti voluptate asperiores aliquam
        <br></br>
        <br></br>
        <button className="enviar">Choose</button>
      </div>
    </div>
  );
}

export default Cards;
