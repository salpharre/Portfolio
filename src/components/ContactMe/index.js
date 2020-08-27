import React from "react";
import "./style.css";

function ContactMe(props) {
    return (
        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title contactText">Contact</h5>
                        <div className="row">
                            <div className="col-6">
                                <a href="https://github.com/salpharre" target="_blank" rel="noopener noreferrer">Github Profile</a>
                            </div>
                            <div className="col-6">
                                <a href="mailto:sandra.alpha2010@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <h2 className="text-break">sandra.alpha2010@gmail.com</h2>
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
        </div>
    );
};

export default ContactMe;

