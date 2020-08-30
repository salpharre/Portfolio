import React from 'react';
import './style.css';
import logo from "../../images/SAlogo5.jpg";
import { Link } from "react-router-dom";
//contains navbar and logo and name
function Header() {
    return (
        <div className="jumbotron jumbotron-fluid brand">
            <div className="container headerContainer">
                <div className="row rowImg justify-content-center">
                <Link to="/">
                <img src={logo} width="50" height="50" className="imgLogo img-fluid"
                    alt="SA initials">
                </img>
                </Link>
                </div>
                <div className="row rowName justify-content-center">
                <Link className="pl-4" to="/">
                    <p className="name">
                        Sandra Arredondo
                    </p>
                </Link>
                </div>
                <nav className="navbar navbar-expand justify-content-center">
                    <ul className="navbar-nav text-nowrap">
                        <li className="nav-item">
                            <Link 
                            to="/"
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                            >
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                            to="/project"
                            className={window.location.pathname === "/project" ? "nav-link active" : "nav-link"}
                            >
                            Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                            to="/about"
                            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                            >
                            About</Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                            to="/contact"
                            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                            >                                
                            Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Header;