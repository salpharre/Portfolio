import React from "react";
import "../ContactMe/style.css";

//put a warning, a toolkit maybe that shows the three are links

function ContactMeFirstTab() {
    return (
        <div className="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="row">
                <div className="col">
                    <a href="https://github.com/salpharre" target="_blank" rel="noopener noreferrer">Github Profile</a>
                </div>
                <div className="col">
                    <h2 className="text-break">sandra.alpha2010@gmail.com</h2>
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
    );
};

export default ContactMeFirstTab;