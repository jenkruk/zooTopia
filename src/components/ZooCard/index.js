import React from "react";
import "./style.css";

function ZooCard(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} key src={props.image} />
      </div>
    </div>
  );
}

export default ZooCard;