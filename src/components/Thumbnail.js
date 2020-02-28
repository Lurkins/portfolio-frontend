import React from 'react';
import './Thumbnail.css';
// const projectThumbnail = 'http://placekitten.com/g/500/500';

const Thumbnail = (props) => (
    <div className="thumbnail-card pb-4 mb-4 card border-dark d-flex justify-content-center align-items-center" onClick={() => props.onOpenModal(props.index)}>
        <div>
            <img className="w-100 h-auto mt-2" src={props.img} alt={props.title}/>
            <div className="overlay">
                <p className="font-weight-bold thumbnail-card-description">{props.title}</p>
            </div>
        </div>
    </div>
);

export default Thumbnail;