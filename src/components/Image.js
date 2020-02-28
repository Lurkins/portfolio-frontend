import React from 'react';
import './Image.css';

const Image = (props) => (
    <img className="me rounded img-fluid" src={props.src} alt="Paul"/>
);

export default Image;
