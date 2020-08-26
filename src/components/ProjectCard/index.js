import React from "react";
import "./style.css";
import img from "../../images/compressed/beyondvacation.jpg";

//make sure buttons are responsive!
function ProjectCard() {
    return (
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
    );
};

export default ProjectCard;