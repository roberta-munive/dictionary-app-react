import React from "react";
import "./Meaning.css";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
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
            <Example example={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
