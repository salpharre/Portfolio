import React from "react";
import "./style.css";
import img from "../../images/compressed/beyondvacation.jpg";

//make sure buttons are responsive!
//now it's horizontal and flexes correctly, but it's not centered at minimized window
//decided to go mobile first then up to larger screens, replaced d-flex with flex-row only(works in smaller screens now) -- might need to do media query with flex box to get it to do what i want in larger screens
//
function ProjectCard() {
    return (
        <div className="col-md">
            <div className="card mb-3 cardParent">
                <img src={img} className="card-img img-fluid" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">buttons here?</small></p>
                </div>
                <div className="card-footer">
                    <p className="card-text"><small className="text-muted">Card footer - put the tech here maybe</small></p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;