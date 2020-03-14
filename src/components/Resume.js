import React from 'react';
import './Resume.css';
import resume from '../resume/dummy.pdf';
import ParticleField from './aux/ParticleField';
import { FaRegFilePdf } from 'react-icons/fa';

const Resume = () => (
    <div id="section_4" className="vh-100">
        <ParticleField />
        <div className="h-100 w-100 resume-container">
            <a href={resume} 
                target="_blank" 
                rel="noopener noreferrer" 
                id="resume-link"
                className="btn-lg text-center font-weight-bold
                resume-link d-flex align-items-center justify-content-center"
            >
                <span className="pr-2 pb-2"><FaRegFilePdf /></span>
                Download Resume
            </a>
        </div>
    </div>
);

export default Resume;
