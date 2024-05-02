import React from "react";
import "./Meaning.css";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meanings.map(function (definition, index) {
        return (
          <div className="definition section" key={index}>
            <h3 className="mb-3">{definition.partOfSpeech}</h3>
            <p>
              <span className="text-secondary me-2">Definition: </span>
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
