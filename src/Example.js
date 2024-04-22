import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <p>
          <strong>Usage Example: </strong>
          <em>{props.example}</em>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
