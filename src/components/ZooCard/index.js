import React from "react";
import "./style.css";

function ZooCard(props) {

  return (
    <div className="card" onClick={props.click}>
      <div className="img-container">
        <img alt={props.name} key src={props.image} data-id={props.id}/>
      </div>
    </div>
  );
}

export default ZooCard;