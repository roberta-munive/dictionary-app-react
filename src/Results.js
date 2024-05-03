import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="word-container section">
          <h2 className="word">{props.results.word}</h2>
          <p className="phonetic">{props.results.phonetic}</p>
        </div>

        <Meaning meanings={props.results.meanings} />
      </div>
    );
  } else {
    return (
      <div className="error-message text-danger m-4">
        <h3>Word not found</h3>
      </div>
    );
  }
}
