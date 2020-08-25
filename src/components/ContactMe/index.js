import React from "react";
import "./style.css";

//put a warning, a toolkit maybe that shows the three are links
function ContactMe() {
    return (
        <div className="container">
            <div className="jumbotron contact">
                <div className="row page-header">
                    <div className="col-3 pb-4">
                        <h1 className="contactText">Contact</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <a href="https://github.com/salpharre" target="_blank" rel="noopener noreferrer">Github Profile</a>
                    </div>
                    <div className="col">
                        <a href="mailto:sandra.alpha2010@gmail.com" target="_blank" rel="noopener noreferrer">
                            <h2 className="text-break">sandra.alpha2010@gmail.com</h2>
                        </a >                    
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <a href="https://www.linkedin.com/in/sandraaa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className="col">
                        <h3>(530) 902-8472</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;

