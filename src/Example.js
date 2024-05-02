import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <p>
          <span className="text-secondary me-2S">Usage Example: </span>
          <em>{props.example}</em>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
