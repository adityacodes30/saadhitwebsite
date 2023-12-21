import React from 'react';

import stl from './styles/card.module.css';
const Card1 = (props) => {
    return (
        <div className={stl.card1}>
          <img src={props.source}></img>
          <h3>{props.text}</h3>
        </div>
    );
};

export default Card1;
