import React from 'react';
import './Design.css';
import Thumbnail from './Thumbnail';
import { Parallax } from 'react-scroll-parallax';

const projects = [
    {"title": "INSPO App", "img": "http://placekitten.com/g/500/250"},
    {"title": "Guess Dog", "img": "http://placekitten.com/g/500/250"},
    {"title": "MyCraftCellar", "img": "http://placekitten.com/g/500/250"},
    {"title": "Color Clock", "img": "http://placekitten.com/g/500/250"},
]

const Design = () => (
    <div className="bg-dark text-light h-auto">
        <div className="container">
            <Parallax y={['50px', '-200px']} tagOuter="figure">
                <h3 className="text-center text-info pl-3">Design Work</h3>
            </Parallax>
            <div className="row">
            {projects.map((project, index) => {
                return (
                    <div key={index} className="col-12 col-md-6">
                        <Parallax y={['50px', '-200px']} tagOuter="figure">
                            <Thumbnail title={project.title} img={project.img}/>
                        </Parallax>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
);

export default Design;
