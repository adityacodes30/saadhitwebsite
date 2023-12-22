import React from 'react';
import stl from './styles/casecard.module.css';
import Button from './Button';

const Casecard = (props) => {
  return (
    <div className={stl.casecard}>
    
    <div className={stl.casetext}>
        <h2 className={stl.head}>{props.title}</h2>
        <p className={stl.txt}>{props.text}</p>
      
        <div><Button text='Read More'></Button></div>
    </div>
    </div>
  );
};

export default Casecard;
