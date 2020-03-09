import React from 'react';
import './About.css';
import Image from "./Image";
import me from '../img/me/me.png';
import { FaNode, FaReact, FaVuejs } from 'react-icons/fa';
import { DiPhotoshop, DiIllustrator, DiPostgresql, DiMongodb, DiJqueryLogo } from "react-icons/di";

const About = () => (
    <div id="section_2" className="vh-auto pt-5">
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <div className="d-flex justify-content-center">
                        <Image src={me} />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center text-light font-weight-bold about-intro">Hi, I'm Paul.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="text-left text-light about-bio mb-5">
                                I build full stack applications in Austin, Texas. I graduated from the University of Texas and I work at Apple where I build internal websites and write technical documentation.
                                I do most of my magic with React (such as this site) and Vue but I also love writing APIs for MongoDB and PostgreSQL.
                                I also have graphic design experience.
                                When I'm not firing functions, pushing pixels, or wrangling words, I make electronic music and DJ. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-7 offset-lg-1 text-light tech-info">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center font-weight-bold tech-info-heading pb-5 my-5">SKILLS</h3>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12 col-md-5 mb-5">
                            <h3 className="text-center tech-info-subheading font-weight-bold">Frontend</h3>
                            <hr className="bg-light" />
                            <div className="row">
                                <div className="col-4">
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <FaReact />
                                        </div>
                                        <p className="tech-info-label text-center">React.js</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <FaVuejs />
                                        </div>
                                        <p className="tech-info-label text-center">Vue.js</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <DiJqueryLogo />
                                        </div>
                                        <p className="tech-info-label text-center">jQuery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 offset-md-2">
                            <h3 className="text-center tech-info-subheading font-weight-bold">Backend</h3>
                            <hr className="bg-light" />
                            <div className="row">
                                <div className="col-4">
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <FaNode />
                                        </div>
                                        <p className="tech-info-label text-center">Node.js</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <DiMongodb />
                                        </div>
                                        <p className="tech-info-label text-center">MongoDB</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <DiPostgresql />
                                        </div>
                                        <p className="tech-info-label text-center">PostGreSQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 offset-md-4 mb-5">
                            <h3 className="text-center tech-info-subheading font-weight-bolder">Design</h3>
                            <hr className="bg-light" />
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <DiPhotoshop />
                                        </div>
                                        <p className="tech-info-label text-center">Photoshop</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <DiIllustrator />
                                        </div>
                                        <p className="tech-info-label text-center">Illustrator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;
