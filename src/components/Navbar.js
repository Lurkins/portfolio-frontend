import React from 'react';
import ScrollspyNav from 'react-scrollspy-nav';
import './Navbar.css'

const Navbar = () => (
    <ScrollspyNav
    scrollTargetIds={["section_1", "section_2", "section_3", "section_4", "section_5"]}
    activeNavClass="is-active"
    scrollDuration="400"
    headerBackground="false"
  >  
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="nav">
      <a className="navbar-brand border border-light font-weight-bold py-2 pl-1 pr-3" href="#section_1">P2</a>
      <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#section_2">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section_3">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section_4">RESUME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section_5">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  </ScrollspyNav>
);

export default Navbar;