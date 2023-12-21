import React from 'react';

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
          }}
        ></div>
  );
};

export default Stepcard;
