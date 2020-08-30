import React from "react";
import "./style.css";
import ContactMeForm from "../ContactMeForm";
//contact page, takes in props to pass along to the contact form
function ContactMe(props) {
    return (
        <div className="container contactCon mb-5">
            <div className="jumbotron contactJumbo">
                <h5 className="contactText">Contact</h5>
                <div className="d-flex row">
                    <div className="col-md">
                        <div className="card contactLinks">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <a href="https://github.com/salpharre" target="_blank" rel="noopener noreferrer">Github Profile</a>
                                    </div>
                                    <div className="col-6">
                                        <a href="mailto:sandra.alpha2010@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <h2 className="text-wrap">sandra.alpha2010@gmail.com</h2>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <a href="https://www.linkedin.com/in/sandraaa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </div>
                                    <div className="col-6">
                                        <h3>(530) 902-8472</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <ContactMeForm {...props} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;

