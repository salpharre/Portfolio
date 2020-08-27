import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import db from "../projects";
import Search from "../components/Search";
import "../components/ProjectCard/style.css";

function Project() {
    const projectList = db.Projects;

    const [project, setProject] = useState([]);
    const [search, setSearch] = useState("");

    function loadProjects() {
        setProject(projectList);
    }

    useEffect(() => {
        if (search) {
            console.log(search);
            filterInput();
        } else {
            loadProjects();
        }
    }, [search]);

    function filterInput() {
        const filterTech = projectList.filter(technology => {
            const lowerCaseInputTech = search.toLocaleLowerCase();
            const lowerCaseSTech = technology.tech.toLocaleLowerCase();
            const tech = technology.tech;

            if (lowerCaseSTech.includes(lowerCaseInputTech)) {
                return true;
            } else if (tech.includes(search)) {
                return true;
            }
        });
        setProject(filterTech);
    };


    const handleInputChange = e => {
        const value = e.target.value;
        console.log(value);
        setSearch(value);
    }


    return (
        <div className="project">
            <div className="row justify-content-center info">
                <p>Looking for a specific technology? Start typing below.</p>
            </div>
            <Search
                handleInputChange={handleInputChange}
                value={search}
            />
                <div className="card-deck  d-flex flex-wrap">
                {project.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        image={project.images}
                        description={project.description}
                        github={project.github}
                        tech={project.tech}
                    />))}
                </div>
        </div>
    );
};

export default Project;