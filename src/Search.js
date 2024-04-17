import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [word, setWord] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for definition of ${word}`);
  }
  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Search">
      <div className="definition-container border rounded">
        <h2 className="text-center">Look up a word</h2>
        <form className="definition-form" onSubmit={handleSubmit}>
          <div className="input-group justify-content-center">
            <input
              type="search"
              className="word-input"
              placeholder="Enter a word"
              onChange={updateWord}
            />
            <button className="search-btn">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}
