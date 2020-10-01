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
                                <p className="aboutText">My name is Sandra Arredondo, I am a Full-Stack Web Developer applying my previous experience in quality assurance to create polished, optimized mobile-first applications, aiming for a position as a Front-End or Back-End Developer. Certified through UC Davis, my language of choice is JavaScript and I am skilled in React, Nodejs, Express and MongoDB. Over the course of each project I strive to code efficiently and create an optimal user experience, using my past experience in quality control to ensure the best result possible. In an effort to improve user experience while researching social movement organizations, in a group of five, we created a MERN stack app, that uses back-end and front-end authentication to protect specific pages from entry unless a user is logged in. As I move further in my career, I aspire to continue to use and learn new technologies to improve upon user experience.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col aboutText">
                                <h2 className="aboutCss">Skills</h2>
                                <ul>
                                    <li>HTML/CSS</li>
                                    <li>JavaScript</li>
                                    <li>MySQL/MongoDB</li>
                                    <li>React</li>
                                </ul>
                            </div>
                            <div className="col aboutText">
                                <h3 className="aboutCss">Projects</h3>
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