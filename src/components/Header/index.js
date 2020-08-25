import React from 'react';
import './style.css';
import logo from "../../images/compressed/SAlogo5.jpg";
// import Jumbotron from "../Jumbotron";

function Header() {
    return (
        <div className="jumbotron brand">
            <img src={logo} width="50" height="50" className="d-inline-block imgLogo img-fluid"
                alt="SA initials"></img>
            <a className="pl-4" href="./index.html">
                <p className="name d-inline-block">
                    Sandra Arredondo
                </p>
            </a>

            <nav className="navbar navbar-expand justify-content-center">
                <ul className="navbar-nav text-nowrap">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./html/portfolio.html">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./html/about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./html/contact.html">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;