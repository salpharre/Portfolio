import React from "react";
import "./style.css";
import profile from "../../images/profile2.jpeg"

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
                                <p className="aboutText">My name is Sandra Arredondo, I have a bachelor's in Food Science and am currently
                                training as a
                                full-stack
                            web developer through a program at UC Davis Continuing and Professional Education.</p>
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
                                    <li>Beyond Vacation</li>
                                    <li>Employee Directory</li>
                                    <li>Weather Dashboard</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="list-group list-group-flush">
                                <h4 className="card-title">Education</h4>
                                <ul>
                                    <li>Full-Stack Web Development, UC Davis Bootcamp (2020)</li>
                                    <li>Bachelor of Science, Food Science, UC Davis (2014-2018)</li>
                                </ul>
                                <h5 className="card-title">Work Experience</h5>
                                <ul>
                                    <li>Quality Control and R&D in Food production, La Tourangelle (1.5 years)</li>
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