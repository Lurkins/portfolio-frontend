import React, { Component } from 'react';
import './Contact.css';
import axios from 'axios';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

class Contact extends Component {
    constructor(props){
      super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            alert: 'none',
            isFormDisabled: false,
            isFormVisible: true,
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    handleSubmit = async e => {
        e.preventDefault();
        const { name, email, message } = this.state;
        
        try {
            const response = await axios.post('https://paulsapi.com/api/form', { name, email, message });
            console.log('👉 Returned data:', response);
            response.data.type === 'success' ? this.setState({ alert: response.data.type, isFormDisabled: true, isFormVisible: false }) : this.setState({ alert: response.data.type })
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
            this.setState({alert: 'danger'});
        }
    }
    render() {
        return(
            <div id="section_5" className="vh-auto min-vh-100 pt-5">
                <div className="container">
                    <h2 className="text-center font-weight-bold pt-5 message-heading">Send me a message</h2>
                    {
                        {
                        success: <div className="alert alert-success p-5 text-center" role="alert">Email sent! I look forward to connecting with you.</div>,
                        error: <div className="alert alert-danger p-5 text-center" role="alert">There was an error submitting the message.</div>,
                        none: null
                        }[this.state.alert]
                    }
                    <div className="row pb-5 mb-5">
                        <div className="col-12">
                        {this.state.isFormVisible ? 
                            <form className="text-light" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        name="name"
                                        aria-describedby="name" 
                                        placeholder="Enter your name" 
                                        onChange={this.handleChange}
                                        disabled={this.state.isFormDisabled}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email Address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name="email"
                                        aria-describedby="email" 
                                        placeholder="Enter your email"
                                        onChange={this.handleChange}
                                        disabled={this.state.isFormDisabled}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="textArea">Your Message</label>
                                    <textarea 
                                        className="form-control" 
                                        id="textArea"
                                        name="message" 
                                        rows="3"
                                        onChange={this.handleChange}
                                        disabled={this.state.isFormDisabled}
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn font-weight-bold contact-form-submit"
                                    disabled={this.state.isFormDisabled}
                                >Submit</button>
                            </form>
                            : null
                        }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex pb-5 justify-content-center social-icons">
                                <div className="pr-3">
                                    <a href="https://github.com/Lurkins" target="_blank" rel="noopener noreferrer"><FaGithub /></a> 
                                </div>
                                <div className="pl-3">
                                    <a href="https://www.linkedin.com/in/paul-perkins-92069017a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;