import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Coded by &nbsp;
        <a
          href="https://github.com/roberta-munive"
          target="_blank"
          rel="noreferrer">
          Roberta
        </a>
        &nbsp; on &nbsp;
        <a
          href="https://github.com/roberta-munive/dictionary-app-react"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
        &nbsp; and &nbsp;
        <a
          href="https://discover-dictionary-react.netlify.app/"
          target="_blank"
          rel="noreferrer">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
