import React from "react";
import img1 from "../../images/beyondvacation.jpg";
import img2 from "../../images/weather.jpg";
import img3 from "../../images/directory.jpg";
import "./style.css";

function Carousel() {
    return (
        <div className="welcome caro">
            <div id="carouselNext indicatorParent" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators dark">
                    <li data-target="#carouselNext" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselNext" data-slide-to="1"></li>
                    <li data-target="#carouselNext" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="3000">
                        <img src={img1} className="d-block w-100 img-fluid"
                            alt="Vacation Outdoor Rental App Main Page"></img>
                    </div>
                    <div className="carousel-item" data-interval="3000">
                        <img src={img3} className="d-block w-100 img-fluid"
                            alt="Employee Directory"></img>
                    </div>
                    <div className="carousel-item" data-interval="3000">
                        <img src={img2} className="d-block w-100 img-fluid" alt="Weather Dashboard"></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselNext" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselNext" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;

/*removed indicators as they continued to scroll over footer,*/