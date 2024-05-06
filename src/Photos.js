import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos section">
        <div className="row">
          {props.photos.photos.map(function (photo, index) {
            return (
              <div className="photo col-12 col-sm-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
