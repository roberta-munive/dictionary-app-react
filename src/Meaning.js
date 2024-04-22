import React from "react";
import "./Meaning.css";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meanings);

  return (
    <div className="Meaning">
      {props.meanings.map(function (definition, index) {
        return (
          <div className="definition" key={index}>
            <h3>{definition.partOfSpeech}</h3>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <p>
              <Example example={definition.example} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
