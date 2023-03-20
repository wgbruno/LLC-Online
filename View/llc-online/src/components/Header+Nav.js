import React from "react";

export default function Header_Nav() {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
            {/* Uncomment below if you prefer to use text as a logo */}
            {/* <h1 class="logo"><a href="index.html">Butterfly</a></h1> */}
            <nav id="navbar" className="navbar">
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                <li className="dropdown"><a href="#"><span>Languages</span> <i className="bi bi-chevron-down" /></a>
                    <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    </ul>
                </li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}
            </div>
        </header>
    )
}