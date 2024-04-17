import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";

export default function Search() {
  let [results, setResults] = useState(null);
  let [word, setWord] = useState("");
  //note:  if use null as default for word, the looks up the definition for the word "null"
  // when use "", API returns
  //  {
  //     message: "Word not found",
  //     status: "not_found"
  //  }

  function getResults() {
    let apiKey = "cf14b4c0f0c0d7a973ee3b4e430t2bo5";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //   API documentation: https://www.shecodes.io/learn/apis/dictionary
    getResults();
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Search">
      <div className="searchbar-container border rounded">
        <p className="text-center">Look up a word</p>
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
      <Results results={results} />
    </div>
  );
}
