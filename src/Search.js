import React, { useState } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";
import "./Search.css";
import Results from "./Results";
import Photos from "./Photos";

// All requests made with the client will be authenticated

export default function Search(props) {
  let [results, setResults] = useState(null);
  let [word, setWord] = useState(props.defaultWord);
  let [hasLoaded, setHasLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  //note:  if use null as default for word, the looks up the definition for the word "null"
  // when use "", API returns
  //  {
  //     message: "Word not found",
  //     status: "not_found"
  //  }

  function handleDictionaryError() {
    setResults(null);
    setPhotos(null);
  }

  function handleImageError() {
    setPhotos(null);
  }

  function getResults() {
    //   API documentation: https://www.shecodes.io/learn/apis/dictionary
    const apiKeyDictionary = "cf14b4c0f0c0d7a973ee3b4e430t2bo5";
    let apiUrlDictionary = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKeyDictionary}`;
    axios.get(apiUrlDictionary).then(handleDictionaryResponse);

    // API documentation: https://pixabay.com/api/docs/

    const apiKeyImages = "43718622-0685ffb1ae2349b6dd606a73e";
    let apiUrlImages = `https://pixabay.com/api/?key=${apiKeyImages}&q=${word}&image_type=photo&per_page=6&orientation=horizontal`;
    axios.get(apiUrlImages).then(handleImageResponse);

    // API documentation: https://www.pexels.com/api/documentation/
    // const apiKeyPexels =
    //   "cRIibDGHhjFTw1CKTM7xfIqULvs2uFjVC8y9O2oSTyhLWoxqm8IbPhZx";
    // // https://stackoverflow.com/questions/43462367/how-to-overcome-the-cors-issue-in-reactjs
    // let apiUrlPexels = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;
    // https://stackoverflow.com/questions/44245588/how-to-send-authorization-header-with-axios
    // let headers = { Authorization: `Bearer ${apiKeyPexels}` };
    // axios.get(apiUrlPexels, { headers: headers }).then(handlePexelsResponse);
  }

  function handleDictionaryResponse(response) {
    if (response.data.status === "not_found") {
      return handleDictionaryError();
    }
    setResults(response.data);
  }

  function handleImageResponse(response) {
    if (response.status !== 200) {
      return handleImageError();
    } else if (!response.data) {
      return handleImageError();
    }
    setPhotos(response.data);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    //displays a watch themed spinner while loading
    return (
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}
