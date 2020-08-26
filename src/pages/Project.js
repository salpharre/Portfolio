import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects.json";
import Search from "../components/Search";
import Header from "../components/Header";
// import Dropdown from "../components/Dropdown";

function Project() {





    return (
        <div>
            <Header />
            <div className="container">
                <Search />

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