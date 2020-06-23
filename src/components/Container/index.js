import React from "react";
import "./style.css";

function Container(props) {
  return(
  <>
    <p class="score"> SCORE: </p>
  <div className={`container${props.fluid ? "-fluid" : ""}`}{...props} />
  </>
  )
}

export default Container;