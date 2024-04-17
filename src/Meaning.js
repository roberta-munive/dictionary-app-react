import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meanings);

  return (
    <div className="Meaning">
      {props.meanings.map(function (definition, index) {
        return (
          <div className="definition" key={index}>
            <h3>{definition.partOfSpeech}</h3>
            <p>{definition.definition}</p>
            <p>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
