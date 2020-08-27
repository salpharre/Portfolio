import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects.json";
import Search from "../components/Search";
import Header from "../components/Header";

function Project() {





    return (
        <div>
            <Header />
            <div className="container">
                <div className="row justify-content-center info">
                <p>Looking for a specific technology? Start typing below.</p>
                </div>
                <div className="row justify-content-center">
                <Search />
                </div>

                <div className="row justify-content-center">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
};

export default Project;