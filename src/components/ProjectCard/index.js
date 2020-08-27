import React from "react";
import "./style.css";

//it works!! it flexs well!!
function ProjectCard(props) {
    return (
        // <div className="col-md">
            <div className="card cardParent">
                <img src={props.image} className="card-img img-fluid" alt={props.title}></img>
                <div className="card-body">
                    {/* <div className="row"> */}
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-wrap">{props.description}</p>
                    <p className="card-text"><small className="text-muted">
                        <a href={props.github} target="_blank" rel="noopener noreferrer" className="github">Github</a>
                    </small></p>
                    {/* </div> */}
                </div>
                <div className="card-footer">
                    <p className="card-text"><small className="text-muted">{props.tech}</small></p>
                </div>
            </div>
        // </div>
    );
};

export default ProjectCard;