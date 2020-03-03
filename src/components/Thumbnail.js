import React from 'react';
import './Thumbnail.css';

const Thumbnail = (props) => (
    <div className="thumbnail-card mb-4 bg-info card border-dark d-flex justify-content-center align-items-center" onClick={() => props.onOpenModal(props.index)}>
        <div>
            <img className="img-fluid" src={props.img} alt={props.title}/>
            <div className="overlay">
                <p className="font-weight-bold thumbnail-card-description">{props.title}</p>
            </div>
        </div>
    </div>
);

export default Thumbnail;