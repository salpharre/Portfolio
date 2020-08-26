import React from "react";
import "./style.css";

//make sure buttons are responsive!
function ProjectCard() {
    return (
        <div className="card mb-3 cardParent">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="..." className="card-img img-fluid" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">buttons here?</small></p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
            <p className="card-text"><small className="text-muted">Card footer - put the tech here maybe</small></p>
            </div>
        </div>
    );
};

export default ProjectCard;