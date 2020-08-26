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
            <Search />
            <ProjectCard />
        </div>
    );
};

export default Project;