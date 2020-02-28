import React from 'react';
import './Home.css';
// import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
// import ParallaxImage from './ParalaxImage';
import ParticleField from './aux/ParticleField';

const Home = () => (
  <div id="section_1" className="vh-100 pt-5">
    <ParticleField />
    <div className="heading">
      <div>
        <h1 className="heading-1 text-center mt-5 pt-5">Frontend Developer,<br/>Full Stack Attitude.</h1>
        <p className="text-center text-warning banner-tagline font-weight-light">Paul Perkins</p>
      </div>
    </div>
  </div>
);

export default Home;
