import React from "react";
import NavBar from "../components/NavBar"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Home(){
    return (
      <div>    
          <NavBar />
          <Header /> 
          <Hero />
          <Login />
          <Register />
          <Gallery />
          <Footer />
      </div>
    );
}