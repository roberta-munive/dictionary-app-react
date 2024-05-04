import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos section">
        <div className="row">
          {props.photos.photos.map(function (photo, index) {
            return (
              <div className="photo col-4" key={index}>
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
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
