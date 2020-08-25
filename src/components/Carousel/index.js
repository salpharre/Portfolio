import React from "react";
import img1 from "../../images/compressed/beyondvacation.jpg";
import img2 from "../../images/compressed/weather.jpg";
import img3 from "../../images/compressed/directory.jpg";

//if anchor links don't work, either remove links around images or figure out how to make it work with react
function Carousel() {
    return (
        <div className="jumbotron welcome">
            <div id="carouselNext" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators dark">
                    <li data-target="#carouselNext" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselNext" data-slide-to="1"></li>
                    <li data-target="#carouselNext" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="3000">
                        <a id="linkToPosition" href="./html/portfolio.html#linkToProject2">
                            <img src={img1} className="d-block w-100 img-fluid"
                            alt="Vacation Outdoor Rental App Main Page"></img>
                        </a>
                    </div>
                    <div class="carousel-item" data-interval="3000">
                        <a class="linkToPosition" href="./html/portfolio.html#linkToEmployee">
                            <img src={img3} class="d-block w-100 img-fluid"
                            alt="Employee Directory"></img>
                        </a>
                    </div>
                    <div class="carousel-item" data-interval="3000">
                        <a class="linkToPosition" href="./html/portfolio.html#linkToWeather">
                            <img src={img2} class="d-block w-100 img-fluid" alt="Weather Dashboard"></img>
                        </a>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselNext" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselNext" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;