import React from "react";
import Jumbotron from "../components/Jumbotron";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

function Home() {
    return (
        <div>
            <Jumbotron>
                <Header />
            </Jumbotron>
            <Jumbotron>
                <Welcome />
            </Jumbotron>
            <Jumbotron>
                <Carousel />
            </Jumbotron>
        </div>
    )
};

export default Home;