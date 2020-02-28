import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import Modal from 'react-responsive-modal';
import modalCraftCellar from './img/modal/craftcellar/craft1.jpg';
import modalInspo from './img/modal/inspo/inspo1.jpg';
import modalClock from './img/modal/colorclock/colorclock-modal.jpg';
import guessDog from './img/modal/guessdog/guessdog.jpg';
import inspoVid from './video/inspo.mp4'
import craftVid from './video/craftcellar.mp4';
import guessDogVid from './video/guessdog.mp4';
import colorclockVid from './video/colorclock.mp4';

const ProjectData = [
  {modalTitle: "INSPO App", description: "Built with ✌️Vue.js and used to capture, document, and share ideas.", img: modalInspo, vid: inspoVid, projectLink: "http://inspoapp.s3-website-us-west-2.amazonaws.com/", codeLink: "https://github.com/Lurkins/INSPO" },
  {modalTitle: "MyCraftCellar", description: "🍺This is an inventory application to keep track of my rare / cellared beers. Use it to email me about specific beers and maybe arrange a tasting. Built with 🥝Node.js,  🍃MongoDB, and 🌀jQuery", img: modalCraftCellar, vid: craftVid, projectLink: "https://mycraftcellar.herokuapp.com/", codeLink: "https://github.com/Lurkins/MyCraftCellar" },
  {modalTitle: "ColorClock", description: "A clock that changes color every second.", img: modalClock, vid: colorclockVid, projectLink: "https://lurkins.github.io/color-clock/", codeLink: "https://github.com/Lurkins/color-clock"},
  {modalTitle: "Guess Dog App", description: "Guess Dog is a memorization and recognition application to help you identify various dog breeds.", img: guessDog, vid: guessDogVid, projectLink: "https://lurkins.github.io/guess-dog-app/", codeLink: "https://github.com/Lurkins/guess-dog-app"},
]

class App extends Component {
  constructor(props){
    super(props);
		this.state = {
      open: false,
      project: {
        modalTitle: "",
        description: "",
        img: "",
        vid: "",
        projectLink: "",
        codeLink: "",
      },
		}
  }
  
  onOpenModal = (i) => {
    console.log('open', i);   
    this.setState({ 
      open: true,
      project: {
        modalTitle: ProjectData[i].modalTitle,
        description: ProjectData[i].description,
        img: ProjectData[i].img,
        vid: ProjectData[i].vid,
        projectLink: ProjectData[i].projectLink,
        codeLink: ProjectData[i].codeLink,
      }
    });
  };
 
  onCloseModal = () => {
    console.log('close');
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const modalStyles = {
      overlay: {
        zIndex: "1040"
      },
      closeIcon: {
        fill: "black"
      },
      modal: {
        minWidth: "70%",
        minHeight: "70%",
        background: "#f8f9fa"
      },
    }
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio onOpenModal={this.onOpenModal} />
        <Resume />
        <Contact />
        {/* <Footer /> */}
        <Modal open={open} onClose={this.onCloseModal} center animationDuration={500} styles={modalStyles}>
            <div className="text-dark">
              <div className="container">
                <div className="row text-left">
                  <div className="col-12 col-md-6">
                    <h1 className="font-weight-bold">{this.state.project.modalTitle}</h1>
                  </div>
                  <div className="col-12 col-md-6">
                    <a className="text-light btn btn-info btn-sm my-2 mr-3" target="_blank" rel="noopener noreferrer" href={this.state.project.projectLink}>See the Project</a>
                    <a className="text-light btn btn-primary btn-sm btn-outline my-2" target="_blank" rel="noopener noreferrer" href={this.state.project.codeLink}>See the Code</a>
                  </div>
                </div> 
                <div className="row w-100">
                  <div className="col-12 col-md-8">
                    <p className="text-left">{this.state.project.description}</p>
                  </div> 
                </div>             
                <div className="row bg-dark">
                  <div className="col-12">
                    
                  </div>
                  {/* <div className="col-12 bg-info"> */}
                    {/* <img className="w-100 img-fluid" src={this.state.project.img} alt="cat"/> */}
                  {/* </div> */}
                </div>
                <video src={this.state.project.vid} autoPlay type="video/mp4" controls loop />
                {/* <div className="row">
                  <div className="col-12 col-lg-6">
                    <img className="w-50 m-2" src={this.state.project.img} alt="cat"/>
                    <img className="w-50 m-2" src={this.state.project.img} alt="cat"/>
                  </div>
                </div> */}
              </div>
            </div>
        </Modal>
      </div> 
    )
  }
}

export default App;
