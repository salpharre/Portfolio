import React from "react";
import "./style.css";
//takes in props from project page
function ProjectCard(props) {
    return (
            <div className="card cardParent">
                {(props.deploy ? (
                <a href={props.deploy} target="_blank" rel="noopener noreferrer" className="deploy">
                <img src={props.image} className="card-img img-fluid" alt={props.title}></img>
                </a>) 
                : (<img src={props.image} className="card-img img-fluid" alt={props.title}></img>))}
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-wrap">{props.description}</p>
                    {(props.deploy ? (<p></p>) : (<p><i>Image does not link to product, refer to the Demo</i></p>))}
                    <p className="card-text btnParent">
                        <a href={props.github} role="button" target="_blank" rel="noopener noreferrer" className="btn github">Github</a>
                        <a href={props.demo} role="button" target="_blank" rel="noopener noreferrer" className="btn demo">Demo</a>
                    </p>
                </div>
                <div className="card-footer">
                    <p className="card-text">{props.tech}</p>
                </div>
            </div>
    );
};

export default ProjectCard;

//if deploy is true