import React from "react";
import "./style.css";
import ContactMeFirstTab from "../ContactMeFirstTab";
import ContactMeForm from "../ContactMeForm";

function ContactMe(props) {
    return (
        <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
                        aria-selected="true">Contact</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="form-tab" data-toggle="tab" href="#form" role="tab" aria-controls="form"
                        aria-selected="false">Form</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <ContactMeFirstTab />
                <ContactMeForm {...props}/>
            </div>
        </div>
    );
};

export default ContactMe;

