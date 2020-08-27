import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import db from "../projectData/projects";
import Search from "../components/Search";
import Header from "../components/Header";

function Project() {

    const [project, setProject] = useState([]);
    const [search, setSearch] = useState("");

    function loadProjects() {
        setProject(db);
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
        const filterTech = db.filter(technology => {
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
    <div>
        <Header />
        <div className="container">
            <div className="row justify-content-center info">
                <p>Looking for a specific technology? Start typing below.</p>
            </div>
            <Search
                handleInputChange={handleInputChange}
                value={search}
            />
            <div className="row justify-content-center">
                {project.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        github={project.github}
                        tech={project.tech}
                    />))}
            </div>
        </div>
    </div>
);
};

export default Project;