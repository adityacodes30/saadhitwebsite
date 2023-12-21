import React from "react";

import stl from "./styles/card.module.css";
const Card2 = (props) => {
  return (
    // <div className={stl.card2}>
    //   <img src={props.source}></img>
    //   <h3>{props.text}</h3>
    // </div>
    <div className={stl.card}>
      <div className={stl.content}>
        <div className={stl.front}>Front</div>
        <div className={stl.back}>Back!</div>
      </div>
    </div>
  );
};

export default Card2;
