import React from "react";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";

function Home() {
    return (
        <div className="container mb-5">
            <Welcome />
            <Carousel />
        </div>
    )
};

export default Home;