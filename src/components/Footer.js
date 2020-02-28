import React from 'react';
import './Footer.css';
import testImage from '../logo.svg'
// import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
// import ParallaxImage from './ParalaxImage';

const Footer = () => (
    <div id="section_3" className="bg-info vh-50">
        <h1 className="text-center display-4 pt-5">Footer</h1>
        <img className="w-50" src={testImage} alt=""/>
    </div>
);

export default Footer;
