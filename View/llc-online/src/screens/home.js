import React from "react";
import NavBar from "../components/NavBar"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home(){
    return (
      <div>    
          <NavBar />
          <Header /> 
          <Hero />
          <Services />
          <Gallery />
          <Footer />
      </div>
    );
}