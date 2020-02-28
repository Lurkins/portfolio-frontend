import React from 'react';
import './Portfolio.css';
import WebProjects from './WebProjects';
// import Design from './Design';

const Portfolio = (props) => (
    <div id="section_3" className="text-light py-5 vh-auto">
        <h2 className="text-center font-weight-bold p-5 projects-heading">Selected Projects</h2>
        <WebProjects onOpenModal={props.onOpenModal}/>
        {/* <Design /> */}
    </div>
);

export default Portfolio;
