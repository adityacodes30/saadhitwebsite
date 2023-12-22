import React from 'react';

import stl from './styles/stepcard.module.css';

const Stepcard = (props) => {
  return (
    <div
          style={{
            width: "85%",
            backgroundColor: props.color,
            height: "70vh",
            position: "sticky",
            top: props.top,
            borderRadius: "80px",
            marginBottom: "50px",
            overflow: "hidden",
            color: props.fontcolor,
          }}

        >   <span className={stl.num}>{props.no}</span> </div>
  );
};

export default Stepcard;
