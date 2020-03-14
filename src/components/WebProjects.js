import React from 'react';
import './WebProjects.css';
import Thumbnail from './Thumbnail';
import inspoThumbnail from '../img/inspothumb.jpg';
import guessdogThumbnail from '../img/guessDogThumb.jpg';
import craftcellarThumbnail from '../img/craftThumb.jpg';
import colorclockThumbnail from '../img/colorClockThumb.jpg';

const projects = [
    {"title": "INSPO App", "img": inspoThumbnail},
    {"title": "MyCraftCellar", "img": craftcellarThumbnail},
    {"title": "Color Clock", "img": colorclockThumbnail},
    {"title": "Guess Dog", "img": guessdogThumbnail},
]

const WebProjects = (props) => (
    <div className="text-light h-auto pb-5">
        <div className="container">
            <div className="row">
            {projects.map((project, index) => {
                return (
                    <div className="col-12 col-md-6" key={index}>
                            <Thumbnail index={index} title={project.title} img={project.img} onOpenModal={props.onOpenModal} />
                    </div>
                )
            })}
            </div>
        </div>
    </div>
);

export default WebProjects;
