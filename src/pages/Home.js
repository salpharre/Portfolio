import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";

function Home() {
    return (
        <div>
            <Header />
            <Welcome />
            <Carousel />
        </div>
    )
};

export default Home;