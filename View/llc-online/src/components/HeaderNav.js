import React from "react";

export default function Header_Nav() {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">{/* THIS ADDS SPACE BETWEEN ITEMS IN HEADER: "justify-content-between"*/}
            <a href="/" className="logo"><img src={require("../assets/Copy of Loyola_LLC_RGB.png")} style = {{ width: 50, height: 300 }} alt="" className="img-fluid" /></a>
            {/* Uncomment below if you prefer to use text as a logo */}
            {/* <h1 class="logo"><a href="index.html">Butterfly</a></h1> */}
            <nav id="navbar" className="navbar">
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/calendar">Calendar</a></li>
                <li><a className="nav-link scrollto " href="/inventory">Inventory</a></li>
                <li><a href="/notesheet">Notesheet</a></li>
                <li className="dropdown"><a href="#"><span>Language Resources</span> <i className="bi bi-chevron-down" /></a>
                    <ul>
                    <li><a href="/arabic">Arabic</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="/chinese">Chinese</a></li>
                    <li><a href="/french">French</a></li>
                    <li><a href="/german">German</a></li>
                    <li><a href="/italian">Italian</a></li>
                    <li><a href="/spanish">Spanish</a></li>
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