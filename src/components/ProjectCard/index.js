import React from "react";
import "./style.css";
//takes in props from project page
function ProjectCard(props) {
    return (
            <div className="card cardParent">
                <img src={props.image} className="card-img img-fluid" alt={props.title}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-wrap">{props.description}</p>
                    <p className="card-text"><small className="text-muted">
                        <a href={props.github} target="_blank" rel="noopener noreferrer" className="github">Github</a>
                        {(props.deploy ? (<a href={props.deploy} target="_blank" rel="noopener noreferrer" className="deploy">Product</a>) 
                        : (props.demo ? (<a href={props.demo} target="_blank" rel="noopener noreferrer" className="demo">Demo</a>) 
                        : <a></a>))}
                    </small></p>
                </div>
                <div className="card-footer">
                    <p className="card-text"><small className="text-muted">{props.tech}</small></p>
                </div>
            </div>
    );
};

export default ProjectCard;

//if deploy is true