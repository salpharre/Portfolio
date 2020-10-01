import React from "react";
import "./style.css";
import profile from "../../images/profile2.jpeg"
//profile on about page
function AboutMe() {
    return (
        <div className="container mb-5 main">
            <div className="row d-flex">
                <div className="col-sm">
                    <div className="jumbotron about text-break">

                        <div className="row pb-3">
                            <div className="col-4">
                                <img src={profile} alt="Sandra's Face" className="img-fluid imgSelf"></img>
                            </div>

                            <div className="col">
                                <h1>About Me</h1>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="aboutText">My name is Sandra Arredondo, I have a bachelor's in Food Science from UC Davis and am currently
                                training as a full-stack web developer through a program at UC Davis Continuing and Professional Education.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col aboutText">
                                <h2>Skills</h2>
                                <ul>
                                    <li>HTML/CSS</li>
                                    <li>JavaScript</li>
                                    <li>MySQL/MongoDB</li>
                                    <li>React</li>
                                </ul>
                            </div>
                            <div className="col aboutText">
                                <h3>Projects</h3>
                                <ul>
                                    <li>Organize</li>
                                    <li>Beyond Vacation</li>
                                    <li>Employee Directory</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;