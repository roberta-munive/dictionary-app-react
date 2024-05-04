import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";

// All requests made with the client will be authenticated

export default function Search(props) {
  let [results, setResults] = useState(null);
  let [word, setWord] = useState(props.defaultWord);
  let [hasLoaded, setHasLoaded] = useState(false);

  //note:  if use null as default for word, the looks up the definition for the word "null"
  // when use "", API returns
  //  {
  //     message: "Word not found",
  //     status: "not_found"
  //  }

  function handleError() {
    setResults(null);
  }

  function getResults() {
    //   API documentation: https://www.shecodes.io/learn/apis/dictionary
    const apiKeyDictionary = "cf14b4c0f0c0d7a973ee3b4e430t2bo5";
    let apiUrlDictionary = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKeyDictionary}`;
    axios.get(apiUrlDictionary).then(handleDictionaryResponse);

    // API documentation: https://www.pexels.com/api/documentation/
    const apiKeyPexels =
      "cRIibDGHhjFTw1CKTM7xfIqULvs2uFjVC8y9O2oSTyhLWoxqm8IbPhZx";
    // https://stackoverflow.com/questions/43462367/how-to-overcome-the-cors-issue-in-reactjs
    let apiUrlPexels = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;
    // https://stackoverflow.com/questions/44245588/how-to-send-authorization-header-with-axios
    let headers = { Authorization: `Bearer ${apiKeyPexels}` };
    axios.get(apiUrlPexels, { headers: headers }).then(handlePexelsResponse);
  }

  function handleDictionaryResponse(response) {
    if (response.data.status === "not_found") {
      return handleError();
    }
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    console.log("In handlePexelsResponse()");
    console.log(response.status);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getResults();
  }

  function load() {
    setHasLoaded(true);
    getResults();
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  if (hasLoaded) {
    return (
      <div className="Search">
        <div className="section searchbar-container">
          <p className="text-center fs-4 fw-medium text-body-secondary">
            Look up a word
          </p>
          <form className="definition-form" onSubmit={handleSubmit}>
            <div className="input-group justify-content-center">
              <input
                type="search"
                className="word-input form-control"
                placeholder="Enter a word"
                onChange={updateWord}
              />
              <button className="search-btn btn btn-outline-secondary">
                Search
              </button>
            </div>
          </form>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading....";
  }
}
