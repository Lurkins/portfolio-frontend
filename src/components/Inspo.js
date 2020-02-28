import React from 'react';
import './Inspo.css';
import testImage from '../logo.svg'

const Inspo = () => (
    <div id="section_3" className="bg-danger vh-100">
        <h1 className="text-center display-4 pt-5">INSPO</h1>
        <img className="w-50" src={testImage} alt=""/>
    </div>
);

export default Inspo;
