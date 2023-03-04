import React from "react";
import NavBar from "../components/NavBar.js"
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Gallery from "../components/Gallery.js";
import Hero from "../components/Hero.js";

export default function Home(){
    return (
      <div>    
          <NavBar />
          <Header /> 
          <Hero />
          <Gallery />
          <Footer />
      </div>
    );
}