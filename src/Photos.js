import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos section">
        <div className="row">
          {props.photos.hits.map(function (photo, index) {
            return (
              <div className="photo col-4" key={index}>
                <img src={photo.webformatURL} alt="" className="img-fluid" />
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
