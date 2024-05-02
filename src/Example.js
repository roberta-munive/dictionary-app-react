import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <p>
          <span className="text-secondary me-2">Usage Example: </span>

          <em className="fw-medium">"{props.example}"</em>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
